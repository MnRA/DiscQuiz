goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__61727){
var map__61728 = p__61727;
var map__61728__$1 = (((((!((map__61728 == null))))?(((((map__61728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61728.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61728):map__61728);
var m = map__61728__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61728__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61728__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__61734_61885 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__61735_61886 = null;
var count__61736_61887 = (0);
var i__61737_61888 = (0);
while(true){
if((i__61737_61888 < count__61736_61887)){
var f_61889 = chunk__61735_61886.cljs$core$IIndexed$_nth$arity$2(null,i__61737_61888);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_61889], 0));


var G__61890 = seq__61734_61885;
var G__61891 = chunk__61735_61886;
var G__61892 = count__61736_61887;
var G__61893 = (i__61737_61888 + (1));
seq__61734_61885 = G__61890;
chunk__61735_61886 = G__61891;
count__61736_61887 = G__61892;
i__61737_61888 = G__61893;
continue;
} else {
var temp__5735__auto___61894 = cljs.core.seq(seq__61734_61885);
if(temp__5735__auto___61894){
var seq__61734_61895__$1 = temp__5735__auto___61894;
if(cljs.core.chunked_seq_QMARK_(seq__61734_61895__$1)){
var c__4556__auto___61896 = cljs.core.chunk_first(seq__61734_61895__$1);
var G__61897 = cljs.core.chunk_rest(seq__61734_61895__$1);
var G__61898 = c__4556__auto___61896;
var G__61899 = cljs.core.count(c__4556__auto___61896);
var G__61900 = (0);
seq__61734_61885 = G__61897;
chunk__61735_61886 = G__61898;
count__61736_61887 = G__61899;
i__61737_61888 = G__61900;
continue;
} else {
var f_61903 = cljs.core.first(seq__61734_61895__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_61903], 0));


var G__61905 = cljs.core.next(seq__61734_61895__$1);
var G__61906 = null;
var G__61907 = (0);
var G__61908 = (0);
seq__61734_61885 = G__61905;
chunk__61735_61886 = G__61906;
count__61736_61887 = G__61907;
i__61737_61888 = G__61908;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_61909 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_61909], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_61909)))?cljs.core.second(arglists_61909):arglists_61909)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__61747_61912 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__61748_61913 = null;
var count__61749_61914 = (0);
var i__61750_61915 = (0);
while(true){
if((i__61750_61915 < count__61749_61914)){
var vec__61770_61916 = chunk__61748_61913.cljs$core$IIndexed$_nth$arity$2(null,i__61750_61915);
var name_61917 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61770_61916,(0),null);
var map__61773_61918 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61770_61916,(1),null);
var map__61773_61919__$1 = (((((!((map__61773_61918 == null))))?(((((map__61773_61918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61773_61918.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61773_61918):map__61773_61918);
var doc_61920 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61773_61919__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_61921 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61773_61919__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_61917], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_61921], 0));

if(cljs.core.truth_(doc_61920)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_61920], 0));
} else {
}


var G__61923 = seq__61747_61912;
var G__61924 = chunk__61748_61913;
var G__61925 = count__61749_61914;
var G__61926 = (i__61750_61915 + (1));
seq__61747_61912 = G__61923;
chunk__61748_61913 = G__61924;
count__61749_61914 = G__61925;
i__61750_61915 = G__61926;
continue;
} else {
var temp__5735__auto___61927 = cljs.core.seq(seq__61747_61912);
if(temp__5735__auto___61927){
var seq__61747_61928__$1 = temp__5735__auto___61927;
if(cljs.core.chunked_seq_QMARK_(seq__61747_61928__$1)){
var c__4556__auto___61929 = cljs.core.chunk_first(seq__61747_61928__$1);
var G__61930 = cljs.core.chunk_rest(seq__61747_61928__$1);
var G__61931 = c__4556__auto___61929;
var G__61932 = cljs.core.count(c__4556__auto___61929);
var G__61933 = (0);
seq__61747_61912 = G__61930;
chunk__61748_61913 = G__61931;
count__61749_61914 = G__61932;
i__61750_61915 = G__61933;
continue;
} else {
var vec__61779_61934 = cljs.core.first(seq__61747_61928__$1);
var name_61935 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61779_61934,(0),null);
var map__61782_61936 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61779_61934,(1),null);
var map__61782_61937__$1 = (((((!((map__61782_61936 == null))))?(((((map__61782_61936.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61782_61936.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61782_61936):map__61782_61936);
var doc_61938 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61782_61937__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_61939 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61782_61937__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_61935], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_61939], 0));

if(cljs.core.truth_(doc_61938)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_61938], 0));
} else {
}


var G__61940 = cljs.core.next(seq__61747_61928__$1);
var G__61941 = null;
var G__61942 = (0);
var G__61943 = (0);
seq__61747_61912 = G__61940;
chunk__61748_61913 = G__61941;
count__61749_61914 = G__61942;
i__61750_61915 = G__61943;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__61784 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__61785 = null;
var count__61786 = (0);
var i__61787 = (0);
while(true){
if((i__61787 < count__61786)){
var role = chunk__61785.cljs$core$IIndexed$_nth$arity$2(null,i__61787);
var temp__5735__auto___61948__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___61948__$1)){
var spec_61949 = temp__5735__auto___61948__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_61949)], 0));
} else {
}


var G__61950 = seq__61784;
var G__61951 = chunk__61785;
var G__61952 = count__61786;
var G__61953 = (i__61787 + (1));
seq__61784 = G__61950;
chunk__61785 = G__61951;
count__61786 = G__61952;
i__61787 = G__61953;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__61784);
if(temp__5735__auto____$1){
var seq__61784__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__61784__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__61784__$1);
var G__61954 = cljs.core.chunk_rest(seq__61784__$1);
var G__61955 = c__4556__auto__;
var G__61956 = cljs.core.count(c__4556__auto__);
var G__61957 = (0);
seq__61784 = G__61954;
chunk__61785 = G__61955;
count__61786 = G__61956;
i__61787 = G__61957;
continue;
} else {
var role = cljs.core.first(seq__61784__$1);
var temp__5735__auto___61958__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___61958__$2)){
var spec_61959 = temp__5735__auto___61958__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_61959)], 0));
} else {
}


var G__61960 = cljs.core.next(seq__61784__$1);
var G__61961 = null;
var G__61962 = (0);
var G__61963 = (0);
seq__61784 = G__61960;
chunk__61785 = G__61961;
count__61786 = G__61962;
i__61787 = G__61963;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__61965 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__61966 = cljs.core.ex_cause(t);
via = G__61965;
t = G__61966;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__61797 = datafied_throwable;
var map__61797__$1 = (((((!((map__61797 == null))))?(((((map__61797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61797.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61797):map__61797);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61797__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61797__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__61797__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__61798 = cljs.core.last(via);
var map__61798__$1 = (((((!((map__61798 == null))))?(((((map__61798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61798.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61798):map__61798);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61798__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61798__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61798__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__61799 = data;
var map__61799__$1 = (((((!((map__61799 == null))))?(((((map__61799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61799.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61799):map__61799);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61799__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61799__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61799__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__61800 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__61800__$1 = (((((!((map__61800 == null))))?(((((map__61800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61800.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61800):map__61800);
var top_data = map__61800__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61800__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__61809 = phase;
var G__61809__$1 = (((G__61809 instanceof cljs.core.Keyword))?G__61809.fqn:null);
switch (G__61809__$1) {
case "read-source":
var map__61811 = data;
var map__61811__$1 = (((((!((map__61811 == null))))?(((((map__61811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61811.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61811):map__61811);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61811__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61811__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__61813 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__61813__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61813,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__61813);
var G__61813__$2 = (cljs.core.truth_((function (){var fexpr__61814 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__61814.cljs$core$IFn$_invoke$arity$1 ? fexpr__61814.cljs$core$IFn$_invoke$arity$1(source) : fexpr__61814.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__61813__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__61813__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61813__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__61813__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__61815 = top_data;
var G__61815__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61815,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__61815);
var G__61815__$2 = (cljs.core.truth_((function (){var fexpr__61819 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__61819.cljs$core$IFn$_invoke$arity$1 ? fexpr__61819.cljs$core$IFn$_invoke$arity$1(source) : fexpr__61819.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__61815__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__61815__$1);
var G__61815__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61815__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__61815__$2);
var G__61815__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61815__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__61815__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61815__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__61815__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__61820 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61820,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61820,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61820,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61820,(3),null);
var G__61823 = top_data;
var G__61823__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61823,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__61823);
var G__61823__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61823__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__61823__$1);
var G__61823__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61823__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__61823__$2);
var G__61823__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61823__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__61823__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61823__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__61823__$4;
}

break;
case "execution":
var vec__61824 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61824,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61824,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61824,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61824,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__61796_SHARP_){
var or__4126__auto__ = (p1__61796_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__61829 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__61829.cljs$core$IFn$_invoke$arity$1 ? fexpr__61829.cljs$core$IFn$_invoke$arity$1(p1__61796_SHARP_) : fexpr__61829.call(null,p1__61796_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__61831 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__61831__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61831,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__61831);
var G__61831__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61831__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__61831__$1);
var G__61831__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61831__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__61831__$2);
var G__61831__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61831__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__61831__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61831__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__61831__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61809__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__61834){
var map__61835 = p__61834;
var map__61835__$1 = (((((!((map__61835 == null))))?(((((map__61835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61835.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61835):map__61835);
var triage_data = map__61835__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61835__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61835__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61835__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61835__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61835__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61835__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61835__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61835__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__61837 = phase;
var G__61837__$1 = (((G__61837 instanceof cljs.core.Keyword))?G__61837.fqn:null);
switch (G__61837__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__61838 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__61839 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__61840 = loc;
var G__61841 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__61842_61980 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__61843_61981 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__61844_61982 = true;
var _STAR_print_fn_STAR__temp_val__61845_61983 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__61844_61982);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__61845_61983);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__61832_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__61832_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__61843_61981);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__61842_61980);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__61838,G__61839,G__61840,G__61841) : format.call(null,G__61838,G__61839,G__61840,G__61841));

break;
case "macroexpansion":
var G__61848 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__61849 = cause_type;
var G__61850 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__61851 = loc;
var G__61852 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__61848,G__61849,G__61850,G__61851,G__61852) : format.call(null,G__61848,G__61849,G__61850,G__61851,G__61852));

break;
case "compile-syntax-check":
var G__61853 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__61854 = cause_type;
var G__61855 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__61856 = loc;
var G__61857 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__61853,G__61854,G__61855,G__61856,G__61857) : format.call(null,G__61853,G__61854,G__61855,G__61856,G__61857));

break;
case "compilation":
var G__61858 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__61859 = cause_type;
var G__61860 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__61861 = loc;
var G__61862 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__61858,G__61859,G__61860,G__61861,G__61862) : format.call(null,G__61858,G__61859,G__61860,G__61861,G__61862));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__61863 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__61864 = symbol;
var G__61865 = loc;
var G__61866 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__61867_61986 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__61868_61987 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__61870_61988 = true;
var _STAR_print_fn_STAR__temp_val__61871_61989 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__61870_61988);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__61871_61989);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__61833_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__61833_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__61868_61987);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__61867_61986);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__61863,G__61864,G__61865,G__61866) : format.call(null,G__61863,G__61864,G__61865,G__61866));
} else {
var G__61875 = "Execution error%s at %s(%s).\n%s\n";
var G__61876 = cause_type;
var G__61877 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__61878 = loc;
var G__61879 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__61875,G__61876,G__61877,G__61878,G__61879) : format.call(null,G__61875,G__61876,G__61877,G__61878,G__61879));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61837__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
