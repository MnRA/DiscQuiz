(ns disc-quiz.core
  (:require
   [reagent.dom :as rdom]
   [re-frame.core :as re-frame]
   [disc-quiz.events :as events]
   [disc-quiz.views :as views]
   [disc-quiz.config :as config]
   [disc-quiz.navigation :as nav]
   ))

(defn ^:dev/after-load start []
  (nav/init-routes!))

(defn dev-setup []
  (when config/debug?
    (println "dev mode")))

(defn ^:dev/after-load mount-root []
  (re-frame/clear-subscription-cache!)
  (let [root-el (.getElementById js/document "app")]
    (rdom/unmount-component-at-node root-el)
    (rdom/render [views/router-component] root-el)))

(defn init []
  (re-frame/dispatch-sync [::events/initialize-db])
  (dev-setup)
  (nav/init-routes!)
  (mount-root))
