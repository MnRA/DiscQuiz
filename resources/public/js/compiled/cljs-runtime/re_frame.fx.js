goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__53758 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__53759 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__53759);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___53837 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___53837)){
var new_db_53838 = temp__5735__auto___53837;
var fexpr__53761_53839 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__53761_53839.cljs$core$IFn$_invoke$arity$1 ? fexpr__53761_53839.cljs$core$IFn$_invoke$arity$1(new_db_53838) : fexpr__53761_53839.call(null,new_db_53838));
} else {
}

var seq__53762 = cljs.core.seq(effects_without_db);
var chunk__53764 = null;
var count__53765 = (0);
var i__53766 = (0);
while(true){
if((i__53766 < count__53765)){
var vec__53774 = chunk__53764.cljs$core$IIndexed$_nth$arity$2(null,i__53766);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53774,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53774,(1),null);
var temp__5733__auto___53840 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___53840)){
var effect_fn_53841 = temp__5733__auto___53840;
(effect_fn_53841.cljs$core$IFn$_invoke$arity$1 ? effect_fn_53841.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_53841.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__53843 = seq__53762;
var G__53844 = chunk__53764;
var G__53845 = count__53765;
var G__53846 = (i__53766 + (1));
seq__53762 = G__53843;
chunk__53764 = G__53844;
count__53765 = G__53845;
i__53766 = G__53846;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53762);
if(temp__5735__auto__){
var seq__53762__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53762__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__53762__$1);
var G__53847 = cljs.core.chunk_rest(seq__53762__$1);
var G__53848 = c__4556__auto__;
var G__53849 = cljs.core.count(c__4556__auto__);
var G__53850 = (0);
seq__53762 = G__53847;
chunk__53764 = G__53848;
count__53765 = G__53849;
i__53766 = G__53850;
continue;
} else {
var vec__53777 = cljs.core.first(seq__53762__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53777,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53777,(1),null);
var temp__5733__auto___53851 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___53851)){
var effect_fn_53852 = temp__5733__auto___53851;
(effect_fn_53852.cljs$core$IFn$_invoke$arity$1 ? effect_fn_53852.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_53852.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__53853 = cljs.core.next(seq__53762__$1);
var G__53854 = null;
var G__53855 = (0);
var G__53856 = (0);
seq__53762 = G__53853;
chunk__53764 = G__53854;
count__53765 = G__53855;
i__53766 = G__53856;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__53490__auto___53857 = re_frame.interop.now();
var duration__53491__auto___53858 = (end__53490__auto___53857 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__53491__auto___53858,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__53490__auto___53857);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__53758);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___53859 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___53859)){
var new_db_53860 = temp__5735__auto___53859;
var fexpr__53781_53861 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__53781_53861.cljs$core$IFn$_invoke$arity$1 ? fexpr__53781_53861.cljs$core$IFn$_invoke$arity$1(new_db_53860) : fexpr__53781_53861.call(null,new_db_53860));
} else {
}

var seq__53782 = cljs.core.seq(effects_without_db);
var chunk__53783 = null;
var count__53784 = (0);
var i__53785 = (0);
while(true){
if((i__53785 < count__53784)){
var vec__53792 = chunk__53783.cljs$core$IIndexed$_nth$arity$2(null,i__53785);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53792,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53792,(1),null);
var temp__5733__auto___53862 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___53862)){
var effect_fn_53863 = temp__5733__auto___53862;
(effect_fn_53863.cljs$core$IFn$_invoke$arity$1 ? effect_fn_53863.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_53863.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__53864 = seq__53782;
var G__53865 = chunk__53783;
var G__53866 = count__53784;
var G__53867 = (i__53785 + (1));
seq__53782 = G__53864;
chunk__53783 = G__53865;
count__53784 = G__53866;
i__53785 = G__53867;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53782);
if(temp__5735__auto__){
var seq__53782__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53782__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__53782__$1);
var G__53868 = cljs.core.chunk_rest(seq__53782__$1);
var G__53869 = c__4556__auto__;
var G__53870 = cljs.core.count(c__4556__auto__);
var G__53871 = (0);
seq__53782 = G__53868;
chunk__53783 = G__53869;
count__53784 = G__53870;
i__53785 = G__53871;
continue;
} else {
var vec__53795 = cljs.core.first(seq__53782__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53795,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53795,(1),null);
var temp__5733__auto___53872 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___53872)){
var effect_fn_53873 = temp__5733__auto___53872;
(effect_fn_53873.cljs$core$IFn$_invoke$arity$1 ? effect_fn_53873.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_53873.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__53874 = cljs.core.next(seq__53782__$1);
var G__53875 = null;
var G__53876 = (0);
var G__53877 = (0);
seq__53782 = G__53874;
chunk__53783 = G__53875;
count__53784 = G__53876;
i__53785 = G__53877;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__53799){
var map__53800 = p__53799;
var map__53800__$1 = (((((!((map__53800 == null))))?(((((map__53800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53800.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53800):map__53800);
var effect = map__53800__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53800__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53800__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__53803 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__53804 = null;
var count__53805 = (0);
var i__53806 = (0);
while(true){
if((i__53806 < count__53805)){
var effect = chunk__53804.cljs$core$IIndexed$_nth$arity$2(null,i__53806);
re_frame.fx.dispatch_later(effect);


var G__53888 = seq__53803;
var G__53889 = chunk__53804;
var G__53890 = count__53805;
var G__53891 = (i__53806 + (1));
seq__53803 = G__53888;
chunk__53804 = G__53889;
count__53805 = G__53890;
i__53806 = G__53891;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53803);
if(temp__5735__auto__){
var seq__53803__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53803__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__53803__$1);
var G__53892 = cljs.core.chunk_rest(seq__53803__$1);
var G__53893 = c__4556__auto__;
var G__53894 = cljs.core.count(c__4556__auto__);
var G__53895 = (0);
seq__53803 = G__53892;
chunk__53804 = G__53893;
count__53805 = G__53894;
i__53806 = G__53895;
continue;
} else {
var effect = cljs.core.first(seq__53803__$1);
re_frame.fx.dispatch_later(effect);


var G__53896 = cljs.core.next(seq__53803__$1);
var G__53897 = null;
var G__53898 = (0);
var G__53899 = (0);
seq__53803 = G__53896;
chunk__53804 = G__53897;
count__53805 = G__53898;
i__53806 = G__53899;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__53808 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__53809 = null;
var count__53810 = (0);
var i__53811 = (0);
while(true){
if((i__53811 < count__53810)){
var vec__53819 = chunk__53809.cljs$core$IIndexed$_nth$arity$2(null,i__53811);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53819,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53819,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___53903 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___53903)){
var effect_fn_53904 = temp__5733__auto___53903;
(effect_fn_53904.cljs$core$IFn$_invoke$arity$1 ? effect_fn_53904.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_53904.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__53905 = seq__53808;
var G__53906 = chunk__53809;
var G__53907 = count__53810;
var G__53908 = (i__53811 + (1));
seq__53808 = G__53905;
chunk__53809 = G__53906;
count__53810 = G__53907;
i__53811 = G__53908;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53808);
if(temp__5735__auto__){
var seq__53808__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53808__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__53808__$1);
var G__53919 = cljs.core.chunk_rest(seq__53808__$1);
var G__53920 = c__4556__auto__;
var G__53921 = cljs.core.count(c__4556__auto__);
var G__53922 = (0);
seq__53808 = G__53919;
chunk__53809 = G__53920;
count__53810 = G__53921;
i__53811 = G__53922;
continue;
} else {
var vec__53823 = cljs.core.first(seq__53808__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53823,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53823,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___53923 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___53923)){
var effect_fn_53924 = temp__5733__auto___53923;
(effect_fn_53924.cljs$core$IFn$_invoke$arity$1 ? effect_fn_53924.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_53924.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__53926 = cljs.core.next(seq__53808__$1);
var G__53927 = null;
var G__53928 = (0);
var G__53929 = (0);
seq__53808 = G__53926;
chunk__53809 = G__53927;
count__53810 = G__53928;
i__53811 = G__53929;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__53827 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__53828 = null;
var count__53829 = (0);
var i__53830 = (0);
while(true){
if((i__53830 < count__53829)){
var event = chunk__53828.cljs$core$IIndexed$_nth$arity$2(null,i__53830);
re_frame.router.dispatch(event);


var G__53930 = seq__53827;
var G__53931 = chunk__53828;
var G__53932 = count__53829;
var G__53933 = (i__53830 + (1));
seq__53827 = G__53930;
chunk__53828 = G__53931;
count__53829 = G__53932;
i__53830 = G__53933;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53827);
if(temp__5735__auto__){
var seq__53827__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53827__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__53827__$1);
var G__53934 = cljs.core.chunk_rest(seq__53827__$1);
var G__53935 = c__4556__auto__;
var G__53936 = cljs.core.count(c__4556__auto__);
var G__53937 = (0);
seq__53827 = G__53934;
chunk__53828 = G__53935;
count__53829 = G__53936;
i__53830 = G__53937;
continue;
} else {
var event = cljs.core.first(seq__53827__$1);
re_frame.router.dispatch(event);


var G__53938 = cljs.core.next(seq__53827__$1);
var G__53939 = null;
var G__53940 = (0);
var G__53941 = (0);
seq__53827 = G__53938;
chunk__53828 = G__53939;
count__53829 = G__53940;
i__53830 = G__53941;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__53831 = cljs.core.seq(value);
var chunk__53832 = null;
var count__53833 = (0);
var i__53834 = (0);
while(true){
if((i__53834 < count__53833)){
var event = chunk__53832.cljs$core$IIndexed$_nth$arity$2(null,i__53834);
clear_event(event);


var G__53942 = seq__53831;
var G__53943 = chunk__53832;
var G__53944 = count__53833;
var G__53945 = (i__53834 + (1));
seq__53831 = G__53942;
chunk__53832 = G__53943;
count__53833 = G__53944;
i__53834 = G__53945;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53831);
if(temp__5735__auto__){
var seq__53831__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53831__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__53831__$1);
var G__53946 = cljs.core.chunk_rest(seq__53831__$1);
var G__53947 = c__4556__auto__;
var G__53948 = cljs.core.count(c__4556__auto__);
var G__53949 = (0);
seq__53831 = G__53946;
chunk__53832 = G__53947;
count__53833 = G__53948;
i__53834 = G__53949;
continue;
} else {
var event = cljs.core.first(seq__53831__$1);
clear_event(event);


var G__53950 = cljs.core.next(seq__53831__$1);
var G__53951 = null;
var G__53952 = (0);
var G__53953 = (0);
seq__53831 = G__53950;
chunk__53832 = G__53951;
count__53833 = G__53952;
i__53834 = G__53953;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
