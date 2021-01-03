goog.provide('disc_quiz.navigation');
re_frame.core.reg_fx(new cljs.core.Keyword(null,"push-state","push-state",-1409397210),(function (route){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reitit.frontend.easy.push_state,route);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("disc-quiz.navigation","navigated","disc-quiz.navigation/navigated",-1349490905),(function (db,p__55575){
var vec__55576 = p__55575;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55576,(0),null);
var new_match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55576,(1),null);
var old_match = new cljs.core.Keyword(null,"current-route","current-route",2067529448).cljs$core$IFn$_invoke$arity$1(db);
var controllers = reitit.frontend.controllers.apply_controllers(new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(old_match),new_match);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-route","current-route",2067529448),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_match,new cljs.core.Keyword(null,"controllers","controllers",-1120410624),controllers));
}));
disc_quiz.navigation.routes = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.Keyword(null,"view","view",1247994814),disc_quiz.views.home_page,new cljs.core.Keyword(null,"link-text","link-text",224432076),"Home",new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),(function() { 
var G__55580__delegate = function (params){
return console.log("Entering home page");
};
var G__55580 = function (var_args){
var params = null;
if (arguments.length > 0) {
var G__55581__i = 0, G__55581__a = new Array(arguments.length -  0);
while (G__55581__i < G__55581__a.length) {G__55581__a[G__55581__i] = arguments[G__55581__i + 0]; ++G__55581__i;}
  params = new cljs.core.IndexedSeq(G__55581__a,0,null);
} 
return G__55580__delegate.call(this,params);};
G__55580.cljs$lang$maxFixedArity = 0;
G__55580.cljs$lang$applyTo = (function (arglist__55582){
var params = cljs.core.seq(arglist__55582);
return G__55580__delegate(params);
});
G__55580.cljs$core$IFn$_invoke$arity$variadic = G__55580__delegate;
return G__55580;
})()
,new cljs.core.Keyword(null,"stop","stop",-2140911342),(function() { 
var G__55583__delegate = function (params){
return console.log("Leaving home page");
};
var G__55583 = function (var_args){
var params = null;
if (arguments.length > 0) {
var G__55584__i = 0, G__55584__a = new Array(arguments.length -  0);
while (G__55584__i < G__55584__a.length) {G__55584__a[G__55584__i] = arguments[G__55584__i + 0]; ++G__55584__i;}
  params = new cljs.core.IndexedSeq(G__55584__a,0,null);
} 
return G__55583__delegate.call(this,params);};
G__55583.cljs$lang$maxFixedArity = 0;
G__55583.cljs$lang$applyTo = (function (arglist__55585){
var params = cljs.core.seq(arglist__55585);
return G__55583__delegate(params);
});
G__55583.cljs$core$IFn$_invoke$arity$variadic = G__55583__delegate;
return G__55583;
})()
], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["quizzes/",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("quizzes","index","quizzes/index",486304794),new cljs.core.Keyword(null,"view","view",1247994814),disc_quiz.views.quiz_index,new cljs.core.Keyword(null,"link-text","link-text",224432076),"Quizzes!",new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),(function() { 
var G__55586__delegate = function (params){
return console.log("Entering sub-page 1");
};
var G__55586 = function (var_args){
var params = null;
if (arguments.length > 0) {
var G__55587__i = 0, G__55587__a = new Array(arguments.length -  0);
while (G__55587__i < G__55587__a.length) {G__55587__a[G__55587__i] = arguments[G__55587__i + 0]; ++G__55587__i;}
  params = new cljs.core.IndexedSeq(G__55587__a,0,null);
} 
return G__55586__delegate.call(this,params);};
G__55586.cljs$lang$maxFixedArity = 0;
G__55586.cljs$lang$applyTo = (function (arglist__55588){
var params = cljs.core.seq(arglist__55588);
return G__55586__delegate(params);
});
G__55586.cljs$core$IFn$_invoke$arity$variadic = G__55586__delegate;
return G__55586;
})()
,new cljs.core.Keyword(null,"stop","stop",-2140911342),(function() { 
var G__55589__delegate = function (params){
return console.log("Leaving sub-page 1");
};
var G__55589 = function (var_args){
var params = null;
if (arguments.length > 0) {
var G__55590__i = 0, G__55590__a = new Array(arguments.length -  0);
while (G__55590__i < G__55590__a.length) {G__55590__a[G__55590__i] = arguments[G__55590__i + 0]; ++G__55590__i;}
  params = new cljs.core.IndexedSeq(G__55590__a,0,null);
} 
return G__55589__delegate.call(this,params);};
G__55589.cljs$lang$maxFixedArity = 0;
G__55589.cljs$lang$applyTo = (function (arglist__55591){
var params = cljs.core.seq(arglist__55591);
return G__55589__delegate(params);
});
G__55589.cljs$core$IFn$_invoke$arity$variadic = G__55589__delegate;
return G__55589;
})()
], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["quizzes/:quiz-name",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("quizzes","show","quizzes/show",1919427300),new cljs.core.Keyword(null,"view","view",1247994814),disc_quiz.views.quiz_show,new cljs.core.Keyword(null,"link-text","link-text",224432076),"Quiz",new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"parameters","parameters",-1229919748),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"quiz-name","quiz-name",-2119343769)], null)], null),new cljs.core.Keyword(null,"start","start",-355208981),(function (params){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-quiz","update-quiz",1507561187),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(params,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"quiz-name","quiz-name",-2119343769)], null))], null));
}),new cljs.core.Keyword(null,"stop","stop",-2140911342),(function() { 
var G__55592__delegate = function (params){
return console.log("Leaving sub-page 2");
};
var G__55592 = function (var_args){
var params = null;
if (arguments.length > 0) {
var G__55593__i = 0, G__55593__a = new Array(arguments.length -  0);
while (G__55593__i < G__55593__a.length) {G__55593__a[G__55593__i] = arguments[G__55593__i + 0]; ++G__55593__i;}
  params = new cljs.core.IndexedSeq(G__55593__a,0,null);
} 
return G__55592__delegate.call(this,params);};
G__55592.cljs$lang$maxFixedArity = 0;
G__55592.cljs$lang$applyTo = (function (arglist__55594){
var params = cljs.core.seq(arglist__55594);
return G__55592__delegate(params);
});
G__55592.cljs$core$IFn$_invoke$arity$variadic = G__55592__delegate;
return G__55592;
})()
], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["results/",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("results","index","results/index",-551905317),new cljs.core.Keyword(null,"view","view",1247994814),disc_quiz.views.results_index,new cljs.core.Keyword(null,"link-text","link-text",224432076),"Results"], null)], null)], null);
disc_quiz.navigation.on_navigate = (function disc_quiz$navigation$on_navigate(new_match){
if(cljs.core.truth_(new_match)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("disc-quiz.navigation","navigated","disc-quiz.navigation/navigated",-1349490905),new_match], null));
} else {
return null;
}
});
disc_quiz.navigation.router = reitit.frontend.router.cljs$core$IFn$_invoke$arity$2(disc_quiz.navigation.routes,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"coercion","coercion",904067157),reitit.coercion.spec.coercion], null)], null));
disc_quiz.navigation.init_routes_BANG_ = (function disc_quiz$navigation$init_routes_BANG_(){
console.log("initializing routes");

return reitit.frontend.easy.start_BANG_(disc_quiz.navigation.router,disc_quiz.navigation.on_navigate,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"use-fragment","use-fragment",-1617737154),true], null));
});

//# sourceMappingURL=disc_quiz.navigation.js.map
