goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx');
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v0v12v0$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.register_handler(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind,id,handler);
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
 *   You cannot rely on the ordering in which effects are executed.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v0v12v0$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__48983 = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__48984 = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__48984);

try{try{var seq__48985 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__48986 = null;
var count__48987 = (0);
var i__48988 = (0);
while(true){
if((i__48988 < count__48987)){
var vec__48995 = chunk__48986.cljs$core$IIndexed$_nth$arity$2(null,i__48988);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48995,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48995,(1),null);
var temp__5733__auto___49050 = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___49050)){
var effect_fn_49051 = temp__5733__auto___49050;
(effect_fn_49051.cljs$core$IFn$_invoke$arity$1 ? effect_fn_49051.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_49051.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__49052 = seq__48985;
var G__49053 = chunk__48986;
var G__49054 = count__48987;
var G__49055 = (i__48988 + (1));
seq__48985 = G__49052;
chunk__48986 = G__49053;
count__48987 = G__49054;
i__48988 = G__49055;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48985);
if(temp__5735__auto__){
var seq__48985__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48985__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__48985__$1);
var G__49056 = cljs.core.chunk_rest(seq__48985__$1);
var G__49057 = c__4556__auto__;
var G__49058 = cljs.core.count(c__4556__auto__);
var G__49059 = (0);
seq__48985 = G__49056;
chunk__48986 = G__49057;
count__48987 = G__49058;
i__48988 = G__49059;
continue;
} else {
var vec__48998 = cljs.core.first(seq__48985__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48998,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48998,(1),null);
var temp__5733__auto___49060 = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___49060)){
var effect_fn_49061 = temp__5733__auto___49060;
(effect_fn_49061.cljs$core$IFn$_invoke$arity$1 ? effect_fn_49061.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_49061.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__49062 = cljs.core.next(seq__48985__$1);
var G__49063 = null;
var G__49064 = (0);
var G__49065 = (0);
seq__48985 = G__49062;
chunk__48986 = G__49063;
count__48987 = G__49064;
i__48988 = G__49065;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.is_trace_enabled_QMARK_()){
var end__48712__auto___49066 = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.interop.now();
var duration__48713__auto___49067 = (end__48712__auto___49066 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__48713__auto___49067,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.run_tracing_callbacks_BANG_(end__48712__auto___49066);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__48983);
}} else {
var seq__49001 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__49002 = null;
var count__49003 = (0);
var i__49004 = (0);
while(true){
if((i__49004 < count__49003)){
var vec__49011 = chunk__49002.cljs$core$IIndexed$_nth$arity$2(null,i__49004);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49011,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49011,(1),null);
var temp__5733__auto___49072 = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___49072)){
var effect_fn_49075 = temp__5733__auto___49072;
(effect_fn_49075.cljs$core$IFn$_invoke$arity$1 ? effect_fn_49075.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_49075.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__49076 = seq__49001;
var G__49077 = chunk__49002;
var G__49078 = count__49003;
var G__49079 = (i__49004 + (1));
seq__49001 = G__49076;
chunk__49002 = G__49077;
count__49003 = G__49078;
i__49004 = G__49079;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49001);
if(temp__5735__auto__){
var seq__49001__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49001__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__49001__$1);
var G__49080 = cljs.core.chunk_rest(seq__49001__$1);
var G__49081 = c__4556__auto__;
var G__49082 = cljs.core.count(c__4556__auto__);
var G__49083 = (0);
seq__49001 = G__49080;
chunk__49002 = G__49081;
count__49003 = G__49082;
i__49004 = G__49083;
continue;
} else {
var vec__49014 = cljs.core.first(seq__49001__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49014,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49014,(1),null);
var temp__5733__auto___49084 = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___49084)){
var effect_fn_49089 = temp__5733__auto___49084;
(effect_fn_49089.cljs$core$IFn$_invoke$arity$1 ? effect_fn_49089.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_49089.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__49090 = cljs.core.next(seq__49001__$1);
var G__49091 = null;
var G__49092 = (0);
var G__49093 = (0);
seq__49001 = G__49090;
chunk__49002 = G__49091;
count__49003 = G__49092;
i__49004 = G__49093;
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
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__49017 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__49018 = null;
var count__49019 = (0);
var i__49020 = (0);
while(true){
if((i__49020 < count__49019)){
var map__49027 = chunk__49018.cljs$core$IIndexed$_nth$arity$2(null,i__49020);
var map__49027__$1 = (((((!((map__49027 == null))))?(((((map__49027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49027.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49027):map__49027);
var effect = map__49027__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49027__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49027__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.interop.set_timeout_BANG_(((function (seq__49017,chunk__49018,count__49019,i__49020,map__49027,map__49027__$1,effect,ms,dispatch){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.router.dispatch(dispatch);
});})(seq__49017,chunk__49018,count__49019,i__49020,map__49027,map__49027__$1,effect,ms,dispatch))
,ms);
}


var G__49094 = seq__49017;
var G__49095 = chunk__49018;
var G__49096 = count__49019;
var G__49097 = (i__49020 + (1));
seq__49017 = G__49094;
chunk__49018 = G__49095;
count__49019 = G__49096;
i__49020 = G__49097;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49017);
if(temp__5735__auto__){
var seq__49017__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49017__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__49017__$1);
var G__49098 = cljs.core.chunk_rest(seq__49017__$1);
var G__49099 = c__4556__auto__;
var G__49100 = cljs.core.count(c__4556__auto__);
var G__49101 = (0);
seq__49017 = G__49098;
chunk__49018 = G__49099;
count__49019 = G__49100;
i__49020 = G__49101;
continue;
} else {
var map__49031 = cljs.core.first(seq__49017__$1);
var map__49031__$1 = (((((!((map__49031 == null))))?(((((map__49031.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49031.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49031):map__49031);
var effect = map__49031__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49031__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49031__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.interop.set_timeout_BANG_(((function (seq__49017,chunk__49018,count__49019,i__49020,map__49031,map__49031__$1,effect,ms,dispatch,seq__49017__$1,temp__5735__auto__){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.router.dispatch(dispatch);
});})(seq__49017,chunk__49018,count__49019,i__49020,map__49031,map__49031__$1,effect,ms,dispatch,seq__49017__$1,temp__5735__auto__))
,ms);
}


var G__49102 = cljs.core.next(seq__49017__$1);
var G__49103 = null;
var G__49104 = (0);
var G__49105 = (0);
seq__49017 = G__49102;
chunk__49018 = G__49103;
count__49019 = G__49104;
i__49020 = G__49105;
continue;
}
} else {
return null;
}
}
break;
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.router.dispatch(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__49033 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__49034 = null;
var count__49035 = (0);
var i__49036 = (0);
while(true){
if((i__49036 < count__49035)){
var event = chunk__49034.cljs$core$IIndexed$_nth$arity$2(null,i__49036);
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.router.dispatch(event);


var G__49108 = seq__49033;
var G__49109 = chunk__49034;
var G__49110 = count__49035;
var G__49111 = (i__49036 + (1));
seq__49033 = G__49108;
chunk__49034 = G__49109;
count__49035 = G__49110;
i__49036 = G__49111;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49033);
if(temp__5735__auto__){
var seq__49033__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49033__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__49033__$1);
var G__49113 = cljs.core.chunk_rest(seq__49033__$1);
var G__49114 = c__4556__auto__;
var G__49115 = cljs.core.count(c__4556__auto__);
var G__49116 = (0);
seq__49033 = G__49113;
chunk__49034 = G__49114;
count__49035 = G__49115;
i__49036 = G__49116;
continue;
} else {
var event = cljs.core.first(seq__49033__$1);
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.router.dispatch(event);


var G__49118 = cljs.core.next(seq__49033__$1);
var G__49119 = null;
var G__49120 = (0);
var G__49121 = (0);
seq__49033 = G__49118;
chunk__49034 = G__49119;
count__49035 = G__49120;
i__49036 = G__49121;
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
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__49040 = cljs.core.seq(value);
var chunk__49041 = null;
var count__49042 = (0);
var i__49043 = (0);
while(true){
if((i__49043 < count__49042)){
var event = chunk__49041.cljs$core$IIndexed$_nth$arity$2(null,i__49043);
clear_event(event);


var G__49124 = seq__49040;
var G__49125 = chunk__49041;
var G__49126 = count__49042;
var G__49127 = (i__49043 + (1));
seq__49040 = G__49124;
chunk__49041 = G__49125;
count__49042 = G__49126;
i__49043 = G__49127;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49040);
if(temp__5735__auto__){
var seq__49040__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49040__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__49040__$1);
var G__49128 = cljs.core.chunk_rest(seq__49040__$1);
var G__49129 = c__4556__auto__;
var G__49130 = cljs.core.count(c__4556__auto__);
var G__49131 = (0);
seq__49040 = G__49128;
chunk__49041 = G__49129;
count__49042 = G__49130;
i__49043 = G__49131;
continue;
} else {
var event = cljs.core.first(seq__49040__$1);
clear_event(event);


var G__49132 = cljs.core.next(seq__49040__$1);
var G__49133 = null;
var G__49134 = (0);
var G__49135 = (0);
seq__49040 = G__49132;
chunk__49041 = G__49133;
count__49042 = G__49134;
i__49043 = G__49135;
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
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.js.map
