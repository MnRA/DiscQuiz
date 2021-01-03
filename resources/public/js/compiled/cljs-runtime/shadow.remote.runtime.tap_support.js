goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__61079,p__61080){
var map__61081 = p__61079;
var map__61081__$1 = (((((!((map__61081 == null))))?(((((map__61081.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61081.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61081):map__61081);
var svc = map__61081__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61081__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61081__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61081__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__61082 = p__61080;
var map__61082__$1 = (((((!((map__61082 == null))))?(((((map__61082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61082.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61082):map__61082);
var msg = map__61082__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61082__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61082__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61082__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__61082__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__61091,p__61092){
var map__61095 = p__61091;
var map__61095__$1 = (((((!((map__61095 == null))))?(((((map__61095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61095.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61095):map__61095);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61095__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__61096 = p__61092;
var map__61096__$1 = (((((!((map__61096 == null))))?(((((map__61096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61096.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61096):map__61096);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61096__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__61105,p__61106){
var map__61107 = p__61105;
var map__61107__$1 = (((((!((map__61107 == null))))?(((((map__61107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61107.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61107):map__61107);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61107__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61107__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__61108 = p__61106;
var map__61108__$1 = (((((!((map__61108 == null))))?(((((map__61108.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61108.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61108):map__61108);
var msg = map__61108__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__61108__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__61115,tid){
var map__61116 = p__61115;
var map__61116__$1 = (((((!((map__61116 == null))))?(((((map__61116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61116.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61116):map__61116);
var svc = map__61116__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61116__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__61128 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__61129 = null;
var count__61130 = (0);
var i__61131 = (0);
while(true){
if((i__61131 < count__61130)){
var vec__61141 = chunk__61129.cljs$core$IIndexed$_nth$arity$2(null,i__61131);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61141,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61141,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__61154 = seq__61128;
var G__61155 = chunk__61129;
var G__61156 = count__61130;
var G__61157 = (i__61131 + (1));
seq__61128 = G__61154;
chunk__61129 = G__61155;
count__61130 = G__61156;
i__61131 = G__61157;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61128);
if(temp__5735__auto__){
var seq__61128__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61128__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__61128__$1);
var G__61158 = cljs.core.chunk_rest(seq__61128__$1);
var G__61159 = c__4556__auto__;
var G__61160 = cljs.core.count(c__4556__auto__);
var G__61161 = (0);
seq__61128 = G__61158;
chunk__61129 = G__61159;
count__61130 = G__61160;
i__61131 = G__61161;
continue;
} else {
var vec__61147 = cljs.core.first(seq__61128__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61147,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61147,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__61162 = cljs.core.next(seq__61128__$1);
var G__61163 = null;
var G__61164 = (0);
var G__61165 = (0);
seq__61128 = G__61162;
chunk__61129 = G__61163;
count__61130 = G__61164;
i__61131 = G__61165;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__61118_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__61118_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__61119_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__61119_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__61120_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__61120_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__61121_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__61121_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__61150){
var map__61151 = p__61150;
var map__61151__$1 = (((((!((map__61151 == null))))?(((((map__61151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61151.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61151):map__61151);
var svc = map__61151__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61151__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61151__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
