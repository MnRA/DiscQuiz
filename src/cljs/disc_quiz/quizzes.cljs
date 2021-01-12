(ns disc-quiz.quizzes
  (:require
   [disc-quiz.config :as config]
   [re-frame.core :as re-frame]
   [cljs.tools.reader.edn :as reader]
   [ajax.core :refer [GET]]))

(def location (if config/debug? "" "/DiscQuiz/resources/public"))

(def available-quizzes ["who-said-it1"])

(defn process-quiz-data [quiz]
  (let [questions (:questions quiz )]
    (do (re-frame/dispatch [:set-current-question (rand-nth questions)]))
    (-> quiz
        (assoc :questions (map #(update % :answers shuffle) questions))
        (update :questions shuffle)
        )))

(defn handler [response]
  (re-frame/dispatch [:set-quiz (process-quiz-data (reader/read-string response))]))

(defn load-edn [url]
  (GET url {:handler handler}))

(defn get-quiz [name]
  (load-edn (str location "/quizzes/" name ".edn")))

(re-frame/reg-fx
 :update-quiz
 (fn [name]
   (get-quiz name)))
