(ns disc-quiz.events
  (:require
   [re-frame.core :as re-frame]
   [disc-quiz.db :as db]
   [day8.re-frame.tracing :refer-macros [fn-traced]]
   [reitit.frontend.controllers :as rfc]
   ))

(re-frame/reg-event-db
 ::initialize-db
 (fn-traced [_ _]
   db/default-db))

(re-frame/reg-event-db
 :update-form
 (fn [db [_ k v]]
   (assoc-in db [:form-data k] v)))

(re-frame/reg-event-db
 :update-answered
 (fn [db [_ k v]]
   (assoc-in db [:quiz-data :answered k] v)))

(re-frame/reg-event-fx
 :update-quiz
 (fn [db [_ quiz]]
   {:update-quiz quiz}))

(re-frame/reg-event-fx
 ::push-state
 (fn [db [_ & route]]
   {:push-state route}))

(re-frame/reg-event-db
 :set-quiz
 (fn [db [_ quiz]]
   (assoc db :current-quiz quiz)))
