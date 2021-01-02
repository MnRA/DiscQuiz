(ns disc-quiz.views
  (:require
   [disc-quiz.quizzes :as quizzes]
   [disc-quiz.subs :as subs]
   [disc-quiz.events :as events]
   [re-frame.core :as re-frame]
   ))


(defn router-component [{:keys [router]}]
  (let [current-route @(re-frame/subscribe [::subs/current-route])]
    [:div
     (when current-route
       [(-> current-route :data :view)])]))

(defn update-form [k event]
  (re-frame/dispatch [:update-form k (-> event .-target .-value)]))

(defn update-answered [q a]
  (re-frame/dispatch [:update-answered q a]))

(defn form-input [t k state]
  [:input.input.is-info {:type t
           :value (k state)
           :on-change #(update-form k %)}])

(defn main-layout [body]
  [:span.main
   [:section.hero.is-info
    [:div.hero-body
     [:div.container
      [:h1.title "Welcome to Disc Quiz"]]]]
   [:section.body
    [:div.card>div.card-content
     body]]
   ]
  )

(defn home-page []
  (let [form-data @(re-frame/subscribe [::subs/form-data])]
    [main-layout
     [:div.card>div.card-content
      [:div.field.has-addons
       [:label.label "What's your name?"]
       (form-input "text" :name form-data)
       [:button.button.is-info.is-light {:on-click #(re-frame/dispatch [::events/push-state :quizzes/index])} "Select Quiz"]]]]
    ))


(defn quiz-index []
  [main-layout
   [:div
    (for [quiz quizzes/available-quizzes]
      ^{:key quiz}
      [:a {:on-click
           #(re-frame/dispatch [::events/push-state
                                :quizzes/show
                                {:quiz-name quiz}])}
       [:div.card>div.card-content quiz]])]])

(defn handle-answer-click [q a event]
  (update-answered (keyword (:phrase q)) a))

(defn current-answer? [a q answered-questions]
  (let [k (keyword (:phrase q))]
    (= (k answered-questions) a)))

(defn make-answer-button [answer question answered-questions]
  ^{:key answer} [:div.column.is-half.has-text-centered
                  [:div.button.is-fullwidth.is-light
                   {:class (if (current-answer? answer question answered-questions) "is-success" "is-info")
                    :on-click #(handle-answer-click question answer %)}
                   answer]])

(defn quiz-show []
  (let [quiz @(re-frame/subscribe [::subs/current-quiz])
        quiz-results @(re-frame/subscribe [::subs/quiz-data])
        questions (:questions quiz)
        answered-questions (:answered quiz-results)
        next-question (first (remove #(contains? (set answered-questions) (:phrase %)) questions))
        current-question (or (:current-question quiz-results) next-question)
        ]
    [main-layout
     [:div.card
      [:div.card-header
       [:div.card-header-title.columns.is-centered.has-text-centered.title
        [:div.column.is-half (:title quiz)]]]
      [:div.card-content
       [:div.columns>div.column.is-full.has-text-centered
        (str "\"" (:phrase current-question) "\"")]
       [:div.columns.is-multiline.is-mobile
        (for [answer (:answers current-question)]
          (make-answer-button answer current-question answered-questions))]]
      ]]))
