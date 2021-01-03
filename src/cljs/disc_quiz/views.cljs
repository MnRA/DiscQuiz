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

(defn handle-answer-click [q a]
  (update-answered (keyword (:phrase q)) a)
  )

(defn make-answer-button [answer question]
  ^{:key answer} [:div.column.is-half.has-text-centered
                  [:div.button.is-fullwidth.is-light.is-info
                   { :on-click #(handle-answer-click question answer)}
                   answer]])

(defn result-modal [solution answer next-q]
  (let [correct? (= solution answer)
        title (if correct? "Correct!" "Woops!")
        message (if correct?
                  (str answer " did say that!")
                  (str "Actually... " solution " said that!"))
        next-question? (some? next-q)
        main-color (if correct? "lightgreen" "#3273DC")
        secondary-color (if correct? "#EFFAF3" "#EEF6FC")
        text-color (if correct? "#257942" "#1D72AA")]

    [:div.modal.is-active
     [:div.modal-card
      [:header.modal-card-head.is-size-4.has-text-weight-bold
       {:style {:background-color main-color
                :color "#FFF"}}
       title]
      [:div.modal-card-body.has-text-weight-bold.is-size-3
       {:style {:background-color secondary-color
                :color text-color}}
       message]
      [:footer.modal-card-foot {:style {:background-color main-color}}
       (if next-question?
         [:button.button.is-right.is-info.is-light
          {:on-click #(re-frame/dispatch [:set-current-question next-q])}
          "Next One ->"]
         [:button.button.is-right.is-info.is-light
          {:on-click
           #(re-frame/dispatch [::events/push-state :results/index])}
          "To Results!"])]
      ]
     ])
  )

(defn quiz-show []
  (let [quiz @(re-frame/subscribe [::subs/current-quiz])
        quiz-results @(re-frame/subscribe [::subs/quiz-data])
        current-question @(re-frame/subscribe [::subs/current-question])
        questions (:questions quiz)
        answered-questions (:answered quiz-results)
        next-question (first (remove #(contains? (set (keys answered-questions)) (keyword (:phrase %))) questions))
        question-key (keyword (:phrase current-question))
        given-answer  (get answered-questions question-key)
        solution (:solution current-question)
        notes (:notes current-question)]
    [main-layout
     [:div.card.is-clipped
      [:div.card-header
       [:div.card-header-title.columns.is-centered.has-text-centered.title
        [:div.column.is-half (:title quiz)]]]
      [:div.card-content
       [:div.columns
        [:div.column.is-full.has-text-centered.is-size-3
         (str "\"" (:phrase current-question) "\"")]]
       (when (not-empty notes)
         [:div {:style {:color "grey"}}
          [:div.columns
               [:div.column.is-full.has-text-centered>div
                "Notes:"]]
          [:div.columns>ul.column.has-text-centered
           (for [note notes]
             ^{:key note} [:li (str "* " note)])]])


       [:div.columns.is-multiline.is-mobile
        (for [answer (:answers current-question)]
          (make-answer-button answer current-question))]]
      (if given-answer [result-modal solution given-answer next-question]) ]
     ]))

(defn calc-correct [qs ans]
  (reduce
   (fn [acc q]
     (if (= (:solution q) ((keyword (:phrase q)) ans)) (inc acc) acc )) 0 qs)
  )

(defn results-index []
  (let [quiz @(re-frame/subscribe [::subs/current-quiz])
        quiz-data @(re-frame/subscribe [::subs/quiz-data])
        questions-total (count (:questions quiz))
        answers (:answered quiz-data)
        questions-correct (calc-correct (:questions quiz) answers)]
    [main-layout
     [:div.columns.is-centered
      [:div.column.is-half
       [:div.card
        [:div.card-header
         [:div.card-header-title.is-centered
          [:div (str "You got: " questions-correct " out of " questions-total " correct!")]] ]
        [:div.card-content.columns
         [:div.column
          [:progress.progress.is-success {:value questions-correct
                                          :max questions-total} ""]]]]]]]))
