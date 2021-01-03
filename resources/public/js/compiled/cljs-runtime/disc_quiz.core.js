goog.provide('disc_quiz.core');
disc_quiz.core.start = (function disc_quiz$core$start(){
return disc_quiz.navigation.init_routes_BANG_();
});
disc_quiz.core.dev_setup = (function disc_quiz$core$dev_setup(){
if(disc_quiz.config.debug_QMARK_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
disc_quiz.core.mount_root = (function disc_quiz$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_();

var root_el = document.getElementById("app");
reagent.dom.unmount_component_at_node(root_el);

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [disc_quiz.views.router_component], null),root_el);
});
disc_quiz.core.init = (function disc_quiz$core$init(){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("disc-quiz.events","initialize-db","disc-quiz.events/initialize-db",378621490)], null));

disc_quiz.core.dev_setup();

disc_quiz.navigation.init_routes_BANG_();

return disc_quiz.core.mount_root();
});

//# sourceMappingURL=disc_quiz.core.js.map
