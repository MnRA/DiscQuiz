goog.provide('reitit.frontend.controllers');
reitit.frontend.controllers.pad_same_length = (function reitit$frontend$controllers$pad_same_length(a,b){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(a,cljs.core.take.cljs$core$IFn$_invoke$arity$2((cljs.core.count(b) - cljs.core.count(a)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)));
});
reitit.frontend.controllers.params_warning = (new cljs.core.Delay((function (){
return console.warn("Reitit-frontend controller :params is deprecated. Replace with :identity or :parameters option.");
}),null));
/**
 * Get controller identity given controller and match.
 * 
 *   To select interesting properties from Match :parameters option can be set.
 *   Value should be param-type => [param-key]
 *   Resulting value is map of param-type => param-key => value.
 * 
 *   For other uses, :identity option can be used to provide function from
 *   Match to identity.
 * 
 *   Default value is nil, i.e. controller identity doesn't depend on Match.
 */
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__53556,match){
var map__53557 = p__53556;
var map__53557__$1 = (((((!((map__53557 == null))))?(((((map__53557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53557.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53557):map__53557);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53557__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53557__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53557__$1,new cljs.core.Keyword(null,"params","params",710516235));
if(cljs.core.not((function (){var and__4115__auto__ = identity;
if(cljs.core.truth_(and__4115__auto__)){
return parameters;
} else {
return and__4115__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Use either :identity or :parameters for controller, not both.","\n","(not (and identity parameters))"].join('')));
}

if(cljs.core.truth_(params)){
cljs.core.deref(reitit.frontend.controllers.params_warning);
} else {
}

if(cljs.core.truth_(parameters)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__53559(s__53560){
return (new cljs.core.LazySeq(null,(function (){
var s__53560__$1 = s__53560;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__53560__$1);
if(temp__5735__auto__){
var s__53560__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__53560__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__53560__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__53562 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__53561 = (0);
while(true){
if((i__53561 < size__4528__auto__)){
var vec__53563 = cljs.core._nth(c__4527__auto__,i__53561);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53563,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53563,(1),null);
cljs.core.chunk_append(b__53562,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__53609 = (i__53561 + (1));
i__53561 = G__53609;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53562),reitit$frontend$controllers$get_identity_$_iter__53559(cljs.core.chunk_rest(s__53560__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53562),null);
}
} else {
var vec__53569 = cljs.core.first(s__53560__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53569,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53569,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__53559(cljs.core.rest(s__53560__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(parameters);
})());
} else {
if(cljs.core.truth_(identity)){
return (identity.cljs$core$IFn$_invoke$arity$1 ? identity.cljs$core$IFn$_invoke$arity$1(match) : identity.call(null,match));
} else {
if(cljs.core.truth_(params)){
return (params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(match) : params.call(null,match));
} else {
return null;

}
}
}
});
/**
 * Run side-effects (:start or :stop) for controller.
 *   The side-effect function is called with controller identity value.
 */
reitit.frontend.controllers.apply_controller = (function reitit$frontend$controllers$apply_controller(controller,method){
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(controller,method);
if(cljs.core.truth_(temp__5735__auto__)){
var f = temp__5735__auto__;
var G__53572 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__53572) : f.call(null,G__53572));
} else {
return null;
}
});
/**
 * Applies changes between current controllers and
 *   those previously enabled. Reinitializes controllers whose
 *   identity has changed.
 */
reitit.frontend.controllers.apply_controllers = (function reitit$frontend$controllers$apply_controllers(old_controllers,new_match){
var new_controllers = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (controller){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(controller,new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693),reitit.frontend.controllers.get_identity(controller,new_match));
}),new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new_match)));
var changed_controllers = cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (old,new$){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old,new$)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old","old",-1825222690),old,new cljs.core.Keyword(null,"new","new",-2085437848),new$], null);
} else {
return null;
}
}),reitit.frontend.controllers.pad_same_length(old_controllers,new_controllers),reitit.frontend.controllers.pad_same_length(new_controllers,old_controllers))));
var seq__53574_53615 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__53576_53616 = null;
var count__53577_53617 = (0);
var i__53578_53618 = (0);
while(true){
if((i__53578_53618 < count__53577_53617)){
var controller_53619 = chunk__53576_53616.cljs$core$IIndexed$_nth$arity$2(null,i__53578_53618);
reitit.frontend.controllers.apply_controller(controller_53619,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__53621 = seq__53574_53615;
var G__53622 = chunk__53576_53616;
var G__53623 = count__53577_53617;
var G__53624 = (i__53578_53618 + (1));
seq__53574_53615 = G__53621;
chunk__53576_53616 = G__53622;
count__53577_53617 = G__53623;
i__53578_53618 = G__53624;
continue;
} else {
var temp__5735__auto___53629 = cljs.core.seq(seq__53574_53615);
if(temp__5735__auto___53629){
var seq__53574_53630__$1 = temp__5735__auto___53629;
if(cljs.core.chunked_seq_QMARK_(seq__53574_53630__$1)){
var c__4556__auto___53631 = cljs.core.chunk_first(seq__53574_53630__$1);
var G__53632 = cljs.core.chunk_rest(seq__53574_53630__$1);
var G__53633 = c__4556__auto___53631;
var G__53634 = cljs.core.count(c__4556__auto___53631);
var G__53635 = (0);
seq__53574_53615 = G__53632;
chunk__53576_53616 = G__53633;
count__53577_53617 = G__53634;
i__53578_53618 = G__53635;
continue;
} else {
var controller_53637 = cljs.core.first(seq__53574_53630__$1);
reitit.frontend.controllers.apply_controller(controller_53637,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__53638 = cljs.core.next(seq__53574_53630__$1);
var G__53639 = null;
var G__53640 = (0);
var G__53641 = (0);
seq__53574_53615 = G__53638;
chunk__53576_53616 = G__53639;
count__53577_53617 = G__53640;
i__53578_53618 = G__53641;
continue;
}
} else {
}
}
break;
}

var seq__53587_53642 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__53588_53643 = null;
var count__53589_53644 = (0);
var i__53590_53645 = (0);
while(true){
if((i__53590_53645 < count__53589_53644)){
var controller_53646 = chunk__53588_53643.cljs$core$IIndexed$_nth$arity$2(null,i__53590_53645);
reitit.frontend.controllers.apply_controller(controller_53646,new cljs.core.Keyword(null,"start","start",-355208981));


var G__53647 = seq__53587_53642;
var G__53648 = chunk__53588_53643;
var G__53649 = count__53589_53644;
var G__53650 = (i__53590_53645 + (1));
seq__53587_53642 = G__53647;
chunk__53588_53643 = G__53648;
count__53589_53644 = G__53649;
i__53590_53645 = G__53650;
continue;
} else {
var temp__5735__auto___53651 = cljs.core.seq(seq__53587_53642);
if(temp__5735__auto___53651){
var seq__53587_53652__$1 = temp__5735__auto___53651;
if(cljs.core.chunked_seq_QMARK_(seq__53587_53652__$1)){
var c__4556__auto___53653 = cljs.core.chunk_first(seq__53587_53652__$1);
var G__53654 = cljs.core.chunk_rest(seq__53587_53652__$1);
var G__53655 = c__4556__auto___53653;
var G__53656 = cljs.core.count(c__4556__auto___53653);
var G__53657 = (0);
seq__53587_53642 = G__53654;
chunk__53588_53643 = G__53655;
count__53589_53644 = G__53656;
i__53590_53645 = G__53657;
continue;
} else {
var controller_53658 = cljs.core.first(seq__53587_53652__$1);
reitit.frontend.controllers.apply_controller(controller_53658,new cljs.core.Keyword(null,"start","start",-355208981));


var G__53659 = cljs.core.next(seq__53587_53652__$1);
var G__53660 = null;
var G__53661 = (0);
var G__53662 = (0);
seq__53587_53642 = G__53659;
chunk__53588_53643 = G__53660;
count__53589_53644 = G__53661;
i__53590_53645 = G__53662;
continue;
}
} else {
}
}
break;
}

return new_controllers;
});

//# sourceMappingURL=reitit.frontend.controllers.js.map
