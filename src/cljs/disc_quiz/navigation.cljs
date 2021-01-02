(ns disc-quiz.navigation
  (:require [disc-quiz.views :as views]
            [re-frame.core :as re-frame]
            [reitit.core :as r]
            [reitit.coercion.spec :as rss]
            [reitit.frontend :as rf]
            [reitit.frontend.controllers :as rfc]
            [reitit.frontend.easy :as rfe]))


(re-frame/reg-fx
 :push-state
 (fn [route]
   (apply rfe/push-state route)))

(re-frame/reg-event-db
 ::navigated
 (fn [db [_ new-match]]
   (let [old-match   (:current-route db)
         controllers (rfc/apply-controllers (:controllers old-match) new-match)]
     (assoc db :current-route (assoc new-match :controllers controllers)))))

(def routes
  ["/"
   [""
    {:name      :home
     :view      views/home-page
     :link-text "Home"
     :controllers
     [{ :start (fn [& params](js/console.log "Entering home page"))

       :stop  (fn [& params] (js/console.log "Leaving home page"))}]}]
   ["quizzes/"
    {:name      :quizzes/index
     :view      views/quiz-index
     :link-text "Quizzes!"
     :controllers
     [{:start (fn [& params] (js/console.log "Entering sub-page 1"))
       :stop  (fn [& params] (js/console.log "Leaving sub-page 1"))}]}]
   ["quizzes/:quiz-name"
    {:name      :quizzes/show
     :view      views/quiz-show
     :link-text "Quiz"

     :controllers
     [{:parameters {:path [:quiz-name]}
       :start (fn [params]
                (re-frame/dispatch [:update-quiz (get-in params [:path :quiz-name])]))
       :stop  (fn [& params] (js/console.log "Leaving sub-page 2"))}]}]])

(defn on-navigate [new-match]
  (when new-match
    (re-frame/dispatch [::navigated new-match])))

(def router
  (rf/router
   routes
   {:data {:coercion rss/coercion}}))

(defn init-routes! []
  (js/console.log "initializing routes")
  (rfe/start!
   router
   on-navigate
   {:use-fragment true}))
