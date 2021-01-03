goog.provide('disc_quiz.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("disc-quiz.events","initialize-db","disc-quiz.events/initialize-db",378621490),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,___$1){
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.Symbol("db","default-db","db/default-db",-1149096552,null)));

var result__48789__auto__ = disc_quiz.db.default_db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__48789__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("db","default-db","db/default-db",-1149096552,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__48789__auto__;
}catch (e53681){var e = e53681;
throw e;
}}):(function (_,___$1){
return disc_quiz.db.default_db;
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-form","update-form",475718790),(function (db,p__53682){
var vec__53683 = p__53682;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53683,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53683,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53683,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form-data","form-data",1829298254),k], null),v);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-answered","update-answered",-977591444),(function (db,p__53686){
var vec__53687 = p__53686;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53687,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53687,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53687,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"quiz-data","quiz-data",424642729),new cljs.core.Keyword(null,"answered","answered",-1524147020),k], null),v);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-quiz","update-quiz",1507561187),(function (db,p__53690){
var vec__53691 = p__53690;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53691,(0),null);
var quiz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53691,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"update-quiz","update-quiz",1507561187),quiz], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("disc-quiz.events","push-state","disc-quiz.events/push-state",-641680048),(function (db,p__53694){
var vec__53695 = p__53694;
var seq__53696 = cljs.core.seq(vec__53695);
var first__53697 = cljs.core.first(seq__53696);
var seq__53696__$1 = cljs.core.next(seq__53696);
var _ = first__53697;
var route = seq__53696__$1;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"push-state","push-state",-1409397210),route], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-quiz","set-quiz",-1044365919),(function (db,p__53698){
var vec__53699 = p__53698;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53699,(0),null);
var quiz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53699,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-quiz","current-quiz",-1542592384),quiz);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-current-question","set-current-question",-2143284569),(function (db,p__53702){
var vec__53703 = p__53702;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53703,(0),null);
var current_q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53703,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"quiz-data","quiz-data",424642729),new cljs.core.Keyword(null,"current-question","current-question",-749753188)], null),current_q);
}));

//# sourceMappingURL=disc_quiz.events.js.map
