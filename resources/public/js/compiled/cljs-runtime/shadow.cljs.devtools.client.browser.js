goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___61515 = arguments.length;
var i__4737__auto___61516 = (0);
while(true){
if((i__4737__auto___61516 < len__4736__auto___61515)){
args__4742__auto__.push((arguments[i__4737__auto___61516]));

var G__61517 = (i__4737__auto___61516 + (1));
i__4737__auto___61516 = G__61517;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq61276){
var G__61277 = cljs.core.first(seq61276);
var seq61276__$1 = cljs.core.next(seq61276);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61277,seq61276__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__61279 = cljs.core.seq(sources);
var chunk__61280 = null;
var count__61281 = (0);
var i__61282 = (0);
while(true){
if((i__61282 < count__61281)){
var map__61290 = chunk__61280.cljs$core$IIndexed$_nth$arity$2(null,i__61282);
var map__61290__$1 = (((((!((map__61290 == null))))?(((((map__61290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61290.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61290):map__61290);
var src = map__61290__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61290__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61290__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61290__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61290__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e61292){var e_61518 = e61292;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_61518);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_61518.message)].join('')));
}

var G__61519 = seq__61279;
var G__61520 = chunk__61280;
var G__61521 = count__61281;
var G__61522 = (i__61282 + (1));
seq__61279 = G__61519;
chunk__61280 = G__61520;
count__61281 = G__61521;
i__61282 = G__61522;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61279);
if(temp__5735__auto__){
var seq__61279__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61279__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__61279__$1);
var G__61523 = cljs.core.chunk_rest(seq__61279__$1);
var G__61524 = c__4556__auto__;
var G__61525 = cljs.core.count(c__4556__auto__);
var G__61526 = (0);
seq__61279 = G__61523;
chunk__61280 = G__61524;
count__61281 = G__61525;
i__61282 = G__61526;
continue;
} else {
var map__61293 = cljs.core.first(seq__61279__$1);
var map__61293__$1 = (((((!((map__61293 == null))))?(((((map__61293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61293.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61293):map__61293);
var src = map__61293__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61293__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61293__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61293__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61293__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e61295){var e_61527 = e61295;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_61527);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_61527.message)].join('')));
}

var G__61528 = cljs.core.next(seq__61279__$1);
var G__61529 = null;
var G__61530 = (0);
var G__61531 = (0);
seq__61279 = G__61528;
chunk__61280 = G__61529;
count__61281 = G__61530;
i__61282 = G__61531;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__61296 = cljs.core.seq(js_requires);
var chunk__61297 = null;
var count__61298 = (0);
var i__61299 = (0);
while(true){
if((i__61299 < count__61298)){
var js_ns = chunk__61297.cljs$core$IIndexed$_nth$arity$2(null,i__61299);
var require_str_61536 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_61536);


var G__61537 = seq__61296;
var G__61538 = chunk__61297;
var G__61539 = count__61298;
var G__61540 = (i__61299 + (1));
seq__61296 = G__61537;
chunk__61297 = G__61538;
count__61298 = G__61539;
i__61299 = G__61540;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61296);
if(temp__5735__auto__){
var seq__61296__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61296__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__61296__$1);
var G__61541 = cljs.core.chunk_rest(seq__61296__$1);
var G__61542 = c__4556__auto__;
var G__61543 = cljs.core.count(c__4556__auto__);
var G__61544 = (0);
seq__61296 = G__61541;
chunk__61297 = G__61542;
count__61298 = G__61543;
i__61299 = G__61544;
continue;
} else {
var js_ns = cljs.core.first(seq__61296__$1);
var require_str_61545 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_61545);


var G__61546 = cljs.core.next(seq__61296__$1);
var G__61547 = null;
var G__61548 = (0);
var G__61549 = (0);
seq__61296 = G__61546;
chunk__61297 = G__61547;
count__61298 = G__61548;
i__61299 = G__61549;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__61310){
var map__61311 = p__61310;
var map__61311__$1 = (((((!((map__61311 == null))))?(((((map__61311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61311.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61311):map__61311);
var msg = map__61311__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61311__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61311__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__61313(s__61314){
return (new cljs.core.LazySeq(null,(function (){
var s__61314__$1 = s__61314;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__61314__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__61319 = cljs.core.first(xs__6292__auto__);
var map__61319__$1 = (((((!((map__61319 == null))))?(((((map__61319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61319):map__61319);
var src = map__61319__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61319__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61319__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__61314__$1,map__61319,map__61319__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__61311,map__61311__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__61313_$_iter__61315(s__61316){
return (new cljs.core.LazySeq(null,((function (s__61314__$1,map__61319,map__61319__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__61311,map__61311__$1,msg,info,reload_info){
return (function (){
var s__61316__$1 = s__61316;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__61316__$1);
if(temp__5735__auto____$1){
var s__61316__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__61316__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__61316__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__61318 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__61317 = (0);
while(true){
if((i__61317 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__61317);
cljs.core.chunk_append(b__61318,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__61550 = (i__61317 + (1));
i__61317 = G__61550;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__61318),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__61313_$_iter__61315(cljs.core.chunk_rest(s__61316__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__61318),null);
}
} else {
var warning = cljs.core.first(s__61316__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__61313_$_iter__61315(cljs.core.rest(s__61316__$2)));
}
} else {
return null;
}
break;
}
});})(s__61314__$1,map__61319,map__61319__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__61311,map__61311__$1,msg,info,reload_info))
,null,null));
});})(s__61314__$1,map__61319,map__61319__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__61311,map__61311__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__61313(cljs.core.rest(s__61314__$1)));
} else {
var G__61552 = cljs.core.rest(s__61314__$1);
s__61314__$1 = G__61552;
continue;
}
} else {
var G__61553 = cljs.core.rest(s__61314__$1);
s__61314__$1 = G__61553;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__61324_61555 = cljs.core.seq(warnings);
var chunk__61325_61556 = null;
var count__61326_61557 = (0);
var i__61327_61558 = (0);
while(true){
if((i__61327_61558 < count__61326_61557)){
var map__61335_61559 = chunk__61325_61556.cljs$core$IIndexed$_nth$arity$2(null,i__61327_61558);
var map__61335_61560__$1 = (((((!((map__61335_61559 == null))))?(((((map__61335_61559.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61335_61559.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61335_61559):map__61335_61559);
var w_61561 = map__61335_61560__$1;
var msg_61562__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61335_61560__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_61563 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61335_61560__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_61564 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61335_61560__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_61565 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61335_61560__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_61565)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_61563),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_61564),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_61562__$1)].join(''));


var G__61567 = seq__61324_61555;
var G__61568 = chunk__61325_61556;
var G__61569 = count__61326_61557;
var G__61570 = (i__61327_61558 + (1));
seq__61324_61555 = G__61567;
chunk__61325_61556 = G__61568;
count__61326_61557 = G__61569;
i__61327_61558 = G__61570;
continue;
} else {
var temp__5735__auto___61572 = cljs.core.seq(seq__61324_61555);
if(temp__5735__auto___61572){
var seq__61324_61573__$1 = temp__5735__auto___61572;
if(cljs.core.chunked_seq_QMARK_(seq__61324_61573__$1)){
var c__4556__auto___61574 = cljs.core.chunk_first(seq__61324_61573__$1);
var G__61575 = cljs.core.chunk_rest(seq__61324_61573__$1);
var G__61576 = c__4556__auto___61574;
var G__61577 = cljs.core.count(c__4556__auto___61574);
var G__61578 = (0);
seq__61324_61555 = G__61575;
chunk__61325_61556 = G__61576;
count__61326_61557 = G__61577;
i__61327_61558 = G__61578;
continue;
} else {
var map__61338_61579 = cljs.core.first(seq__61324_61573__$1);
var map__61338_61580__$1 = (((((!((map__61338_61579 == null))))?(((((map__61338_61579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61338_61579.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61338_61579):map__61338_61579);
var w_61581 = map__61338_61580__$1;
var msg_61582__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61338_61580__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_61583 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61338_61580__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_61584 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61338_61580__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_61585 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61338_61580__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_61585)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_61583),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_61584),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_61582__$1)].join(''));


var G__61588 = cljs.core.next(seq__61324_61573__$1);
var G__61589 = null;
var G__61590 = (0);
var G__61591 = (0);
seq__61324_61555 = G__61588;
chunk__61325_61556 = G__61589;
count__61326_61557 = G__61590;
i__61327_61558 = G__61591;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__61309_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__61309_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__61342){
var map__61343 = p__61342;
var map__61343__$1 = (((((!((map__61343 == null))))?(((((map__61343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61343.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61343):map__61343);
var msg = map__61343__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61343__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__61345 = cljs.core.seq(updates);
var chunk__61347 = null;
var count__61348 = (0);
var i__61349 = (0);
while(true){
if((i__61349 < count__61348)){
var path = chunk__61347.cljs$core$IIndexed$_nth$arity$2(null,i__61349);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__61380_61594 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__61384_61595 = null;
var count__61385_61596 = (0);
var i__61386_61597 = (0);
while(true){
if((i__61386_61597 < count__61385_61596)){
var node_61598 = chunk__61384_61595.cljs$core$IIndexed$_nth$arity$2(null,i__61386_61597);
if(cljs.core.not(node_61598.shadow$old)){
var path_match_61599 = shadow.cljs.devtools.client.browser.match_paths(node_61598.getAttribute("href"),path);
if(cljs.core.truth_(path_match_61599)){
var new_link_61600 = (function (){var G__61392 = node_61598.cloneNode(true);
G__61392.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_61599),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__61392;
})();
(node_61598.shadow$old = true);

(new_link_61600.onload = ((function (seq__61380_61594,chunk__61384_61595,count__61385_61596,i__61386_61597,seq__61345,chunk__61347,count__61348,i__61349,new_link_61600,path_match_61599,node_61598,path,map__61343,map__61343__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_61598);
});})(seq__61380_61594,chunk__61384_61595,count__61385_61596,i__61386_61597,seq__61345,chunk__61347,count__61348,i__61349,new_link_61600,path_match_61599,node_61598,path,map__61343,map__61343__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_61599], 0));

goog.dom.insertSiblingAfter(new_link_61600,node_61598);


var G__61605 = seq__61380_61594;
var G__61606 = chunk__61384_61595;
var G__61607 = count__61385_61596;
var G__61608 = (i__61386_61597 + (1));
seq__61380_61594 = G__61605;
chunk__61384_61595 = G__61606;
count__61385_61596 = G__61607;
i__61386_61597 = G__61608;
continue;
} else {
var G__61609 = seq__61380_61594;
var G__61610 = chunk__61384_61595;
var G__61611 = count__61385_61596;
var G__61612 = (i__61386_61597 + (1));
seq__61380_61594 = G__61609;
chunk__61384_61595 = G__61610;
count__61385_61596 = G__61611;
i__61386_61597 = G__61612;
continue;
}
} else {
var G__61613 = seq__61380_61594;
var G__61614 = chunk__61384_61595;
var G__61615 = count__61385_61596;
var G__61616 = (i__61386_61597 + (1));
seq__61380_61594 = G__61613;
chunk__61384_61595 = G__61614;
count__61385_61596 = G__61615;
i__61386_61597 = G__61616;
continue;
}
} else {
var temp__5735__auto___61617 = cljs.core.seq(seq__61380_61594);
if(temp__5735__auto___61617){
var seq__61380_61618__$1 = temp__5735__auto___61617;
if(cljs.core.chunked_seq_QMARK_(seq__61380_61618__$1)){
var c__4556__auto___61619 = cljs.core.chunk_first(seq__61380_61618__$1);
var G__61620 = cljs.core.chunk_rest(seq__61380_61618__$1);
var G__61621 = c__4556__auto___61619;
var G__61622 = cljs.core.count(c__4556__auto___61619);
var G__61623 = (0);
seq__61380_61594 = G__61620;
chunk__61384_61595 = G__61621;
count__61385_61596 = G__61622;
i__61386_61597 = G__61623;
continue;
} else {
var node_61624 = cljs.core.first(seq__61380_61618__$1);
if(cljs.core.not(node_61624.shadow$old)){
var path_match_61625 = shadow.cljs.devtools.client.browser.match_paths(node_61624.getAttribute("href"),path);
if(cljs.core.truth_(path_match_61625)){
var new_link_61626 = (function (){var G__61402 = node_61624.cloneNode(true);
G__61402.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_61625),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__61402;
})();
(node_61624.shadow$old = true);

(new_link_61626.onload = ((function (seq__61380_61594,chunk__61384_61595,count__61385_61596,i__61386_61597,seq__61345,chunk__61347,count__61348,i__61349,new_link_61626,path_match_61625,node_61624,seq__61380_61618__$1,temp__5735__auto___61617,path,map__61343,map__61343__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_61624);
});})(seq__61380_61594,chunk__61384_61595,count__61385_61596,i__61386_61597,seq__61345,chunk__61347,count__61348,i__61349,new_link_61626,path_match_61625,node_61624,seq__61380_61618__$1,temp__5735__auto___61617,path,map__61343,map__61343__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_61625], 0));

goog.dom.insertSiblingAfter(new_link_61626,node_61624);


var G__61627 = cljs.core.next(seq__61380_61618__$1);
var G__61628 = null;
var G__61629 = (0);
var G__61630 = (0);
seq__61380_61594 = G__61627;
chunk__61384_61595 = G__61628;
count__61385_61596 = G__61629;
i__61386_61597 = G__61630;
continue;
} else {
var G__61631 = cljs.core.next(seq__61380_61618__$1);
var G__61632 = null;
var G__61633 = (0);
var G__61634 = (0);
seq__61380_61594 = G__61631;
chunk__61384_61595 = G__61632;
count__61385_61596 = G__61633;
i__61386_61597 = G__61634;
continue;
}
} else {
var G__61635 = cljs.core.next(seq__61380_61618__$1);
var G__61636 = null;
var G__61637 = (0);
var G__61638 = (0);
seq__61380_61594 = G__61635;
chunk__61384_61595 = G__61636;
count__61385_61596 = G__61637;
i__61386_61597 = G__61638;
continue;
}
}
} else {
}
}
break;
}


var G__61639 = seq__61345;
var G__61640 = chunk__61347;
var G__61641 = count__61348;
var G__61642 = (i__61349 + (1));
seq__61345 = G__61639;
chunk__61347 = G__61640;
count__61348 = G__61641;
i__61349 = G__61642;
continue;
} else {
var G__61647 = seq__61345;
var G__61648 = chunk__61347;
var G__61649 = count__61348;
var G__61650 = (i__61349 + (1));
seq__61345 = G__61647;
chunk__61347 = G__61648;
count__61348 = G__61649;
i__61349 = G__61650;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61345);
if(temp__5735__auto__){
var seq__61345__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61345__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__61345__$1);
var G__61654 = cljs.core.chunk_rest(seq__61345__$1);
var G__61655 = c__4556__auto__;
var G__61656 = cljs.core.count(c__4556__auto__);
var G__61657 = (0);
seq__61345 = G__61654;
chunk__61347 = G__61655;
count__61348 = G__61656;
i__61349 = G__61657;
continue;
} else {
var path = cljs.core.first(seq__61345__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__61405_61658 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__61409_61659 = null;
var count__61410_61660 = (0);
var i__61411_61661 = (0);
while(true){
if((i__61411_61661 < count__61410_61660)){
var node_61662 = chunk__61409_61659.cljs$core$IIndexed$_nth$arity$2(null,i__61411_61661);
if(cljs.core.not(node_61662.shadow$old)){
var path_match_61666 = shadow.cljs.devtools.client.browser.match_paths(node_61662.getAttribute("href"),path);
if(cljs.core.truth_(path_match_61666)){
var new_link_61667 = (function (){var G__61432 = node_61662.cloneNode(true);
G__61432.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_61666),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__61432;
})();
(node_61662.shadow$old = true);

(new_link_61667.onload = ((function (seq__61405_61658,chunk__61409_61659,count__61410_61660,i__61411_61661,seq__61345,chunk__61347,count__61348,i__61349,new_link_61667,path_match_61666,node_61662,path,seq__61345__$1,temp__5735__auto__,map__61343,map__61343__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_61662);
});})(seq__61405_61658,chunk__61409_61659,count__61410_61660,i__61411_61661,seq__61345,chunk__61347,count__61348,i__61349,new_link_61667,path_match_61666,node_61662,path,seq__61345__$1,temp__5735__auto__,map__61343,map__61343__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_61666], 0));

goog.dom.insertSiblingAfter(new_link_61667,node_61662);


var G__61674 = seq__61405_61658;
var G__61675 = chunk__61409_61659;
var G__61676 = count__61410_61660;
var G__61677 = (i__61411_61661 + (1));
seq__61405_61658 = G__61674;
chunk__61409_61659 = G__61675;
count__61410_61660 = G__61676;
i__61411_61661 = G__61677;
continue;
} else {
var G__61678 = seq__61405_61658;
var G__61679 = chunk__61409_61659;
var G__61680 = count__61410_61660;
var G__61681 = (i__61411_61661 + (1));
seq__61405_61658 = G__61678;
chunk__61409_61659 = G__61679;
count__61410_61660 = G__61680;
i__61411_61661 = G__61681;
continue;
}
} else {
var G__61682 = seq__61405_61658;
var G__61683 = chunk__61409_61659;
var G__61684 = count__61410_61660;
var G__61685 = (i__61411_61661 + (1));
seq__61405_61658 = G__61682;
chunk__61409_61659 = G__61683;
count__61410_61660 = G__61684;
i__61411_61661 = G__61685;
continue;
}
} else {
var temp__5735__auto___61686__$1 = cljs.core.seq(seq__61405_61658);
if(temp__5735__auto___61686__$1){
var seq__61405_61687__$1 = temp__5735__auto___61686__$1;
if(cljs.core.chunked_seq_QMARK_(seq__61405_61687__$1)){
var c__4556__auto___61688 = cljs.core.chunk_first(seq__61405_61687__$1);
var G__61689 = cljs.core.chunk_rest(seq__61405_61687__$1);
var G__61690 = c__4556__auto___61688;
var G__61691 = cljs.core.count(c__4556__auto___61688);
var G__61692 = (0);
seq__61405_61658 = G__61689;
chunk__61409_61659 = G__61690;
count__61410_61660 = G__61691;
i__61411_61661 = G__61692;
continue;
} else {
var node_61693 = cljs.core.first(seq__61405_61687__$1);
if(cljs.core.not(node_61693.shadow$old)){
var path_match_61694 = shadow.cljs.devtools.client.browser.match_paths(node_61693.getAttribute("href"),path);
if(cljs.core.truth_(path_match_61694)){
var new_link_61695 = (function (){var G__61438 = node_61693.cloneNode(true);
G__61438.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_61694),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__61438;
})();
(node_61693.shadow$old = true);

(new_link_61695.onload = ((function (seq__61405_61658,chunk__61409_61659,count__61410_61660,i__61411_61661,seq__61345,chunk__61347,count__61348,i__61349,new_link_61695,path_match_61694,node_61693,seq__61405_61687__$1,temp__5735__auto___61686__$1,path,seq__61345__$1,temp__5735__auto__,map__61343,map__61343__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_61693);
});})(seq__61405_61658,chunk__61409_61659,count__61410_61660,i__61411_61661,seq__61345,chunk__61347,count__61348,i__61349,new_link_61695,path_match_61694,node_61693,seq__61405_61687__$1,temp__5735__auto___61686__$1,path,seq__61345__$1,temp__5735__auto__,map__61343,map__61343__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_61694], 0));

goog.dom.insertSiblingAfter(new_link_61695,node_61693);


var G__61697 = cljs.core.next(seq__61405_61687__$1);
var G__61698 = null;
var G__61699 = (0);
var G__61700 = (0);
seq__61405_61658 = G__61697;
chunk__61409_61659 = G__61698;
count__61410_61660 = G__61699;
i__61411_61661 = G__61700;
continue;
} else {
var G__61701 = cljs.core.next(seq__61405_61687__$1);
var G__61702 = null;
var G__61703 = (0);
var G__61704 = (0);
seq__61405_61658 = G__61701;
chunk__61409_61659 = G__61702;
count__61410_61660 = G__61703;
i__61411_61661 = G__61704;
continue;
}
} else {
var G__61705 = cljs.core.next(seq__61405_61687__$1);
var G__61706 = null;
var G__61707 = (0);
var G__61708 = (0);
seq__61405_61658 = G__61705;
chunk__61409_61659 = G__61706;
count__61410_61660 = G__61707;
i__61411_61661 = G__61708;
continue;
}
}
} else {
}
}
break;
}


var G__61709 = cljs.core.next(seq__61345__$1);
var G__61710 = null;
var G__61711 = (0);
var G__61712 = (0);
seq__61345 = G__61709;
chunk__61347 = G__61710;
count__61348 = G__61711;
i__61349 = G__61712;
continue;
} else {
var G__61713 = cljs.core.next(seq__61345__$1);
var G__61714 = null;
var G__61715 = (0);
var G__61716 = (0);
seq__61345 = G__61713;
chunk__61347 = G__61714;
count__61348 = G__61715;
i__61349 = G__61716;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__61443){
var map__61444 = p__61443;
var map__61444__$1 = (((((!((map__61444 == null))))?(((((map__61444.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61444.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61444):map__61444);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61444__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.client_info = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null);
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__61456){
var map__61459 = p__61456;
var map__61459__$1 = (((((!((map__61459 == null))))?(((((map__61459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61459.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61459):map__61459);
var _ = map__61459__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61459__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__61463,done,error){
var map__61464 = p__61463;
var map__61464__$1 = (((((!((map__61464 == null))))?(((((map__61464.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61464.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61464):map__61464);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61464__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__61469,done,error){
var map__61470 = p__61469;
var map__61470__$1 = (((((!((map__61470 == null))))?(((((map__61470.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61470.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61470):map__61470);
var msg = map__61470__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61470__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61470__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61470__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__61475){
var map__61476 = p__61475;
var map__61476__$1 = (((((!((map__61476 == null))))?(((((map__61476.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61476.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61476):map__61476);
var src = map__61476__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61476__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__61479 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__61479) : done.call(null,G__61479));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__61481){
var map__61483 = p__61481;
var map__61483__$1 = (((((!((map__61483 == null))))?(((((map__61483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61483.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61483):map__61483);
var msg__$1 = map__61483__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61483__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e61487){var ex = e61487;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__61488){
var map__61489 = p__61488;
var map__61489__$1 = (((((!((map__61489 == null))))?(((((map__61489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61489.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61489):map__61489);
var env = map__61489__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61489__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__61497){
var map__61498 = p__61497;
var map__61498__$1 = (((((!((map__61498 == null))))?(((((map__61498.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61498.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61498):map__61498);
var msg = map__61498__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61498__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__61505){
var map__61506 = p__61505;
var map__61506__$1 = (((((!((map__61506 == null))))?(((((map__61506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61506.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61506):map__61506);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61506__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61506__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__61512){
var map__61513 = p__61512;
var map__61513__$1 = (((((!((map__61513 == null))))?(((((map__61513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61513.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61513):map__61513);
var svc = map__61513__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61513__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
