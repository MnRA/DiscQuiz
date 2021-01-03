(ns disc-quiz.subs
  (:require
   [re-frame.core :as re-frame]))

(re-frame/reg-sub
 ::name
 (fn [db]
   (:name db)))

(re-frame/reg-sub
 ::form-data
 #(:form-data %))

(re-frame/reg-sub
 ::current-quiz
 #(:current-quiz %))

(re-frame/reg-sub
 ::current-route
 (fn [db]
   (:current-route db)))

(re-frame/reg-sub
 ::quiz-data
 #(:quiz-data %))

(re-frame/reg-sub
 ::current-question
 #(get-in % [:quiz-data :current-question]))
