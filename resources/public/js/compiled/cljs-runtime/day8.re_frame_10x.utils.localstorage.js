goog.provide('day8.re_frame_10x.utils.localstorage');
day8.re_frame_10x.utils.localstorage.storage = (new goog.storage.Storage((new goog.storage.mechanism.HTML5LocalStorage())));
day8.re_frame_10x.utils.localstorage.safe_prefix = "day8.re-frame-10x.";
day8.re_frame_10x.utils.localstorage.safe_key = (function day8$re_frame_10x$utils$localstorage$safe_key(key){

return [day8.re_frame_10x.utils.localstorage.safe_prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
});
/**
 * Gets a re-frame-10x value from local storage.
 */
day8.re_frame_10x.utils.localstorage.get = (function day8$re_frame_10x$utils$localstorage$get(var_args){
var G__54272 = arguments.length;
switch (G__54272) {
case 1:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1 = (function (key){
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2(key,null);
}));

(day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2 = (function (key,not_found){
var value = day8.re_frame_10x.utils.localstorage.storage.get(day8.re_frame_10x.utils.localstorage.safe_key(key));
if((void 0 === value)){
return not_found;
} else {
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(value);
}
}));

(day8.re_frame_10x.utils.localstorage.get.cljs$lang$maxFixedArity = 2);

/**
 * Saves a re-frame-10x value to local storage.
 */
day8.re_frame_10x.utils.localstorage.save_BANG_ = (function day8$re_frame_10x$utils$localstorage$save_BANG_(key,value){
return day8.re_frame_10x.utils.localstorage.storage.set(day8.re_frame_10x.utils.localstorage.safe_key(key),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)));
});
/**
 * Deletes all re-frame-10x config keys
 */
day8.re_frame_10x.utils.localstorage.delete_all_keys_BANG_ = (function day8$re_frame_10x$utils$localstorage$delete_all_keys_BANG_(){
var seq__54294 = cljs.core.seq(Object.keys(localStorage));
var chunk__54295 = null;
var count__54296 = (0);
var i__54297 = (0);
while(true){
if((i__54297 < count__54296)){
var k = chunk__54295.cljs$core$IIndexed$_nth$arity$2(null,i__54297);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__54323 = seq__54294;
var G__54324 = chunk__54295;
var G__54325 = count__54296;
var G__54326 = (i__54297 + (1));
seq__54294 = G__54323;
chunk__54295 = G__54324;
count__54296 = G__54325;
i__54297 = G__54326;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__54294);
if(temp__5735__auto__){
var seq__54294__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54294__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__54294__$1);
var G__54331 = cljs.core.chunk_rest(seq__54294__$1);
var G__54332 = c__4556__auto__;
var G__54333 = cljs.core.count(c__4556__auto__);
var G__54334 = (0);
seq__54294 = G__54331;
chunk__54295 = G__54332;
count__54296 = G__54333;
i__54297 = G__54334;
continue;
} else {
var k = cljs.core.first(seq__54294__$1);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__54335 = cljs.core.next(seq__54294__$1);
var G__54336 = null;
var G__54337 = (0);
var G__54338 = (0);
seq__54294 = G__54335;
chunk__54295 = G__54336;
count__54296 = G__54337;
i__54297 = G__54338;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=day8.re_frame_10x.utils.localstorage.js.map
