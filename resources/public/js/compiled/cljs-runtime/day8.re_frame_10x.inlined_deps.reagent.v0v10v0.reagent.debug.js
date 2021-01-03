goog.provide('day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug');
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug.has_console = (typeof console !== 'undefined');
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug.tracking = false;
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v10v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug.warnings !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v10v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug.track_console !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__45343__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__45343 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45344__i = 0, G__45344__a = new Array(arguments.length -  0);
while (G__45344__i < G__45344__a.length) {G__45344__a[G__45344__i] = arguments[G__45344__i + 0]; ++G__45344__i;}
  args = new cljs.core.IndexedSeq(G__45344__a,0,null);
} 
return G__45343__delegate.call(this,args);};
G__45343.cljs$lang$maxFixedArity = 0;
G__45343.cljs$lang$applyTo = (function (arglist__45345){
var args = cljs.core.seq(arglist__45345);
return G__45343__delegate(args);
});
G__45343.cljs$core$IFn$_invoke$arity$variadic = G__45343__delegate;
return G__45343;
})()
);

(o.error = (function() { 
var G__45346__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__45346 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45347__i = 0, G__45347__a = new Array(arguments.length -  0);
while (G__45347__i < G__45347__a.length) {G__45347__a[G__45347__i] = arguments[G__45347__i + 0]; ++G__45347__i;}
  args = new cljs.core.IndexedSeq(G__45347__a,0,null);
} 
return G__45346__delegate.call(this,args);};
G__45346.cljs$lang$maxFixedArity = 0;
G__45346.cljs$lang$applyTo = (function (arglist__45348){
var args = cljs.core.seq(arglist__45348);
return G__45346__delegate(args);
});
G__45346.cljs$core$IFn$_invoke$arity$variadic = G__45346__delegate;
return G__45346;
})()
);

return o;
})();
}
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug.track_warnings = (function day8$re_frame_10x$inlined_deps$reagent$v0v10v0$reagent$debug$track_warnings(f){
(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug.tracking = true);

cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug.warnings);
cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug.warnings,null);

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug.js.map
