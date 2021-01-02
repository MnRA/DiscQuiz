(ns disc-quiz.quizzes
  (:require
   [re-frame.core :as re-frame]
   [cljs.tools.reader.edn :as reader]
   [ajax.core :refer [GET]]))



(def available-quizzes ["who-said-it1"])

(defn handler [response]
  (re-frame/dispatch [:set-quiz (reader/read-string response)]))

(defn load-edn [url]
  (GET url {:handler handler}))

(defn get-quiz [name]
  (load-edn (str "/quizzes/" name ".edn")))

(re-frame/reg-fx
 :update-quiz
 (fn [name]
   (get-quiz name)))
