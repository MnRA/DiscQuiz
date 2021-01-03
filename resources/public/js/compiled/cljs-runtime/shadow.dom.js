goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_59364 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_59364(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_59365 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_59365(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__58755 = coll;
var G__58756 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__58755,G__58756) : shadow.dom.lazy_native_coll_seq.call(null,G__58755,G__58756));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__58773 = arguments.length;
switch (G__58773) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__58780 = arguments.length;
switch (G__58780) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__58785 = arguments.length;
switch (G__58785) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__58791 = arguments.length;
switch (G__58791) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__58802 = arguments.length;
switch (G__58802) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__58812 = arguments.length;
switch (G__58812) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e58818){if((e58818 instanceof Object)){
var e = e58818;
return console.log("didnt support attachEvent",el,e);
} else {
throw e58818;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__58824 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__58825 = null;
var count__58826 = (0);
var i__58827 = (0);
while(true){
if((i__58827 < count__58826)){
var el = chunk__58825.cljs$core$IIndexed$_nth$arity$2(null,i__58827);
var handler_59413__$1 = ((function (seq__58824,chunk__58825,count__58826,i__58827,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__58824,chunk__58825,count__58826,i__58827,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_59413__$1);


var G__59415 = seq__58824;
var G__59416 = chunk__58825;
var G__59417 = count__58826;
var G__59418 = (i__58827 + (1));
seq__58824 = G__59415;
chunk__58825 = G__59416;
count__58826 = G__59417;
i__58827 = G__59418;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__58824);
if(temp__5735__auto__){
var seq__58824__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58824__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__58824__$1);
var G__59420 = cljs.core.chunk_rest(seq__58824__$1);
var G__59421 = c__4556__auto__;
var G__59422 = cljs.core.count(c__4556__auto__);
var G__59423 = (0);
seq__58824 = G__59420;
chunk__58825 = G__59421;
count__58826 = G__59422;
i__58827 = G__59423;
continue;
} else {
var el = cljs.core.first(seq__58824__$1);
var handler_59426__$1 = ((function (seq__58824,chunk__58825,count__58826,i__58827,el,seq__58824__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__58824,chunk__58825,count__58826,i__58827,el,seq__58824__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_59426__$1);


var G__59428 = cljs.core.next(seq__58824__$1);
var G__59429 = null;
var G__59430 = (0);
var G__59431 = (0);
seq__58824 = G__59428;
chunk__58825 = G__59429;
count__58826 = G__59430;
i__58827 = G__59431;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__58838 = arguments.length;
switch (G__58838) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__58845 = cljs.core.seq(events);
var chunk__58846 = null;
var count__58847 = (0);
var i__58848 = (0);
while(true){
if((i__58848 < count__58847)){
var vec__58859 = chunk__58846.cljs$core$IIndexed$_nth$arity$2(null,i__58848);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58859,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58859,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__59459 = seq__58845;
var G__59460 = chunk__58846;
var G__59461 = count__58847;
var G__59462 = (i__58848 + (1));
seq__58845 = G__59459;
chunk__58846 = G__59460;
count__58847 = G__59461;
i__58848 = G__59462;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__58845);
if(temp__5735__auto__){
var seq__58845__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58845__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__58845__$1);
var G__59466 = cljs.core.chunk_rest(seq__58845__$1);
var G__59467 = c__4556__auto__;
var G__59468 = cljs.core.count(c__4556__auto__);
var G__59469 = (0);
seq__58845 = G__59466;
chunk__58846 = G__59467;
count__58847 = G__59468;
i__58848 = G__59469;
continue;
} else {
var vec__58863 = cljs.core.first(seq__58845__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58863,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58863,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__59470 = cljs.core.next(seq__58845__$1);
var G__59471 = null;
var G__59472 = (0);
var G__59473 = (0);
seq__58845 = G__59470;
chunk__58846 = G__59471;
count__58847 = G__59472;
i__58848 = G__59473;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__58871 = cljs.core.seq(styles);
var chunk__58872 = null;
var count__58873 = (0);
var i__58874 = (0);
while(true){
if((i__58874 < count__58873)){
var vec__58888 = chunk__58872.cljs$core$IIndexed$_nth$arity$2(null,i__58874);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58888,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58888,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__59474 = seq__58871;
var G__59475 = chunk__58872;
var G__59476 = count__58873;
var G__59477 = (i__58874 + (1));
seq__58871 = G__59474;
chunk__58872 = G__59475;
count__58873 = G__59476;
i__58874 = G__59477;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__58871);
if(temp__5735__auto__){
var seq__58871__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58871__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__58871__$1);
var G__59478 = cljs.core.chunk_rest(seq__58871__$1);
var G__59479 = c__4556__auto__;
var G__59480 = cljs.core.count(c__4556__auto__);
var G__59481 = (0);
seq__58871 = G__59478;
chunk__58872 = G__59479;
count__58873 = G__59480;
i__58874 = G__59481;
continue;
} else {
var vec__58892 = cljs.core.first(seq__58871__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58892,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58892,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__59485 = cljs.core.next(seq__58871__$1);
var G__59486 = null;
var G__59487 = (0);
var G__59488 = (0);
seq__58871 = G__59485;
chunk__58872 = G__59486;
count__58873 = G__59487;
i__58874 = G__59488;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__58896_59489 = key;
var G__58896_59490__$1 = (((G__58896_59489 instanceof cljs.core.Keyword))?G__58896_59489.fqn:null);
switch (G__58896_59490__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_59492 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_59492,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_59492,"aria-");
}
})())){
el.setAttribute(ks_59492,value);
} else {
(el[ks_59492] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__58916){
var map__58917 = p__58916;
var map__58917__$1 = (((((!((map__58917 == null))))?(((((map__58917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58917.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58917):map__58917);
var props = map__58917__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58917__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__58920 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58920,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58920,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58920,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__58924 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__58924,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__58924;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__58928 = arguments.length;
switch (G__58928) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__58937){
var vec__58938 = p__58937;
var seq__58939 = cljs.core.seq(vec__58938);
var first__58940 = cljs.core.first(seq__58939);
var seq__58939__$1 = cljs.core.next(seq__58939);
var nn = first__58940;
var first__58940__$1 = cljs.core.first(seq__58939__$1);
var seq__58939__$2 = cljs.core.next(seq__58939__$1);
var np = first__58940__$1;
var nc = seq__58939__$2;
var node = vec__58938;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__58942 = nn;
var G__58943 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__58942,G__58943) : create_fn.call(null,G__58942,G__58943));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__58944 = nn;
var G__58945 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__58944,G__58945) : create_fn.call(null,G__58944,G__58945));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__58946 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58946,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58946,(1),null);
var seq__58949_59512 = cljs.core.seq(node_children);
var chunk__58950_59513 = null;
var count__58951_59514 = (0);
var i__58952_59515 = (0);
while(true){
if((i__58952_59515 < count__58951_59514)){
var child_struct_59516 = chunk__58950_59513.cljs$core$IIndexed$_nth$arity$2(null,i__58952_59515);
var children_59518 = shadow.dom.dom_node(child_struct_59516);
if(cljs.core.seq_QMARK_(children_59518)){
var seq__58986_59519 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_59518));
var chunk__58988_59520 = null;
var count__58989_59521 = (0);
var i__58990_59522 = (0);
while(true){
if((i__58990_59522 < count__58989_59521)){
var child_59523 = chunk__58988_59520.cljs$core$IIndexed$_nth$arity$2(null,i__58990_59522);
if(cljs.core.truth_(child_59523)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_59523);


var G__59525 = seq__58986_59519;
var G__59526 = chunk__58988_59520;
var G__59527 = count__58989_59521;
var G__59528 = (i__58990_59522 + (1));
seq__58986_59519 = G__59525;
chunk__58988_59520 = G__59526;
count__58989_59521 = G__59527;
i__58990_59522 = G__59528;
continue;
} else {
var G__59530 = seq__58986_59519;
var G__59531 = chunk__58988_59520;
var G__59532 = count__58989_59521;
var G__59533 = (i__58990_59522 + (1));
seq__58986_59519 = G__59530;
chunk__58988_59520 = G__59531;
count__58989_59521 = G__59532;
i__58990_59522 = G__59533;
continue;
}
} else {
var temp__5735__auto___59536 = cljs.core.seq(seq__58986_59519);
if(temp__5735__auto___59536){
var seq__58986_59537__$1 = temp__5735__auto___59536;
if(cljs.core.chunked_seq_QMARK_(seq__58986_59537__$1)){
var c__4556__auto___59538 = cljs.core.chunk_first(seq__58986_59537__$1);
var G__59539 = cljs.core.chunk_rest(seq__58986_59537__$1);
var G__59540 = c__4556__auto___59538;
var G__59541 = cljs.core.count(c__4556__auto___59538);
var G__59542 = (0);
seq__58986_59519 = G__59539;
chunk__58988_59520 = G__59540;
count__58989_59521 = G__59541;
i__58990_59522 = G__59542;
continue;
} else {
var child_59544 = cljs.core.first(seq__58986_59537__$1);
if(cljs.core.truth_(child_59544)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_59544);


var G__59545 = cljs.core.next(seq__58986_59537__$1);
var G__59546 = null;
var G__59547 = (0);
var G__59548 = (0);
seq__58986_59519 = G__59545;
chunk__58988_59520 = G__59546;
count__58989_59521 = G__59547;
i__58990_59522 = G__59548;
continue;
} else {
var G__59550 = cljs.core.next(seq__58986_59537__$1);
var G__59551 = null;
var G__59552 = (0);
var G__59553 = (0);
seq__58986_59519 = G__59550;
chunk__58988_59520 = G__59551;
count__58989_59521 = G__59552;
i__58990_59522 = G__59553;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_59518);
}


var G__59554 = seq__58949_59512;
var G__59555 = chunk__58950_59513;
var G__59556 = count__58951_59514;
var G__59557 = (i__58952_59515 + (1));
seq__58949_59512 = G__59554;
chunk__58950_59513 = G__59555;
count__58951_59514 = G__59556;
i__58952_59515 = G__59557;
continue;
} else {
var temp__5735__auto___59558 = cljs.core.seq(seq__58949_59512);
if(temp__5735__auto___59558){
var seq__58949_59559__$1 = temp__5735__auto___59558;
if(cljs.core.chunked_seq_QMARK_(seq__58949_59559__$1)){
var c__4556__auto___59561 = cljs.core.chunk_first(seq__58949_59559__$1);
var G__59566 = cljs.core.chunk_rest(seq__58949_59559__$1);
var G__59567 = c__4556__auto___59561;
var G__59568 = cljs.core.count(c__4556__auto___59561);
var G__59569 = (0);
seq__58949_59512 = G__59566;
chunk__58950_59513 = G__59567;
count__58951_59514 = G__59568;
i__58952_59515 = G__59569;
continue;
} else {
var child_struct_59570 = cljs.core.first(seq__58949_59559__$1);
var children_59571 = shadow.dom.dom_node(child_struct_59570);
if(cljs.core.seq_QMARK_(children_59571)){
var seq__58996_59577 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_59571));
var chunk__58998_59578 = null;
var count__58999_59579 = (0);
var i__59000_59580 = (0);
while(true){
if((i__59000_59580 < count__58999_59579)){
var child_59581 = chunk__58998_59578.cljs$core$IIndexed$_nth$arity$2(null,i__59000_59580);
if(cljs.core.truth_(child_59581)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_59581);


var G__59582 = seq__58996_59577;
var G__59583 = chunk__58998_59578;
var G__59584 = count__58999_59579;
var G__59585 = (i__59000_59580 + (1));
seq__58996_59577 = G__59582;
chunk__58998_59578 = G__59583;
count__58999_59579 = G__59584;
i__59000_59580 = G__59585;
continue;
} else {
var G__59586 = seq__58996_59577;
var G__59587 = chunk__58998_59578;
var G__59588 = count__58999_59579;
var G__59589 = (i__59000_59580 + (1));
seq__58996_59577 = G__59586;
chunk__58998_59578 = G__59587;
count__58999_59579 = G__59588;
i__59000_59580 = G__59589;
continue;
}
} else {
var temp__5735__auto___59591__$1 = cljs.core.seq(seq__58996_59577);
if(temp__5735__auto___59591__$1){
var seq__58996_59592__$1 = temp__5735__auto___59591__$1;
if(cljs.core.chunked_seq_QMARK_(seq__58996_59592__$1)){
var c__4556__auto___59593 = cljs.core.chunk_first(seq__58996_59592__$1);
var G__59594 = cljs.core.chunk_rest(seq__58996_59592__$1);
var G__59595 = c__4556__auto___59593;
var G__59596 = cljs.core.count(c__4556__auto___59593);
var G__59597 = (0);
seq__58996_59577 = G__59594;
chunk__58998_59578 = G__59595;
count__58999_59579 = G__59596;
i__59000_59580 = G__59597;
continue;
} else {
var child_59599 = cljs.core.first(seq__58996_59592__$1);
if(cljs.core.truth_(child_59599)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_59599);


var G__59600 = cljs.core.next(seq__58996_59592__$1);
var G__59601 = null;
var G__59602 = (0);
var G__59603 = (0);
seq__58996_59577 = G__59600;
chunk__58998_59578 = G__59601;
count__58999_59579 = G__59602;
i__59000_59580 = G__59603;
continue;
} else {
var G__59606 = cljs.core.next(seq__58996_59592__$1);
var G__59607 = null;
var G__59608 = (0);
var G__59609 = (0);
seq__58996_59577 = G__59606;
chunk__58998_59578 = G__59607;
count__58999_59579 = G__59608;
i__59000_59580 = G__59609;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_59571);
}


var G__59610 = cljs.core.next(seq__58949_59559__$1);
var G__59611 = null;
var G__59612 = (0);
var G__59613 = (0);
seq__58949_59512 = G__59610;
chunk__58950_59513 = G__59611;
count__58951_59514 = G__59612;
i__58952_59515 = G__59613;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__59011 = cljs.core.seq(node);
var chunk__59012 = null;
var count__59013 = (0);
var i__59014 = (0);
while(true){
if((i__59014 < count__59013)){
var n = chunk__59012.cljs$core$IIndexed$_nth$arity$2(null,i__59014);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__59624 = seq__59011;
var G__59625 = chunk__59012;
var G__59626 = count__59013;
var G__59627 = (i__59014 + (1));
seq__59011 = G__59624;
chunk__59012 = G__59625;
count__59013 = G__59626;
i__59014 = G__59627;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59011);
if(temp__5735__auto__){
var seq__59011__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59011__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__59011__$1);
var G__59629 = cljs.core.chunk_rest(seq__59011__$1);
var G__59630 = c__4556__auto__;
var G__59631 = cljs.core.count(c__4556__auto__);
var G__59632 = (0);
seq__59011 = G__59629;
chunk__59012 = G__59630;
count__59013 = G__59631;
i__59014 = G__59632;
continue;
} else {
var n = cljs.core.first(seq__59011__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__59634 = cljs.core.next(seq__59011__$1);
var G__59635 = null;
var G__59636 = (0);
var G__59637 = (0);
seq__59011 = G__59634;
chunk__59012 = G__59635;
count__59013 = G__59636;
i__59014 = G__59637;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__59023 = arguments.length;
switch (G__59023) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__59030 = arguments.length;
switch (G__59030) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__59038 = arguments.length;
switch (G__59038) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59655 = arguments.length;
var i__4737__auto___59656 = (0);
while(true){
if((i__4737__auto___59656 < len__4736__auto___59655)){
args__4742__auto__.push((arguments[i__4737__auto___59656]));

var G__59657 = (i__4737__auto___59656 + (1));
i__4737__auto___59656 = G__59657;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__59054_59659 = cljs.core.seq(nodes);
var chunk__59055_59660 = null;
var count__59056_59661 = (0);
var i__59057_59662 = (0);
while(true){
if((i__59057_59662 < count__59056_59661)){
var node_59664 = chunk__59055_59660.cljs$core$IIndexed$_nth$arity$2(null,i__59057_59662);
fragment.appendChild(shadow.dom._to_dom(node_59664));


var G__59665 = seq__59054_59659;
var G__59666 = chunk__59055_59660;
var G__59667 = count__59056_59661;
var G__59668 = (i__59057_59662 + (1));
seq__59054_59659 = G__59665;
chunk__59055_59660 = G__59666;
count__59056_59661 = G__59667;
i__59057_59662 = G__59668;
continue;
} else {
var temp__5735__auto___59669 = cljs.core.seq(seq__59054_59659);
if(temp__5735__auto___59669){
var seq__59054_59671__$1 = temp__5735__auto___59669;
if(cljs.core.chunked_seq_QMARK_(seq__59054_59671__$1)){
var c__4556__auto___59672 = cljs.core.chunk_first(seq__59054_59671__$1);
var G__59673 = cljs.core.chunk_rest(seq__59054_59671__$1);
var G__59674 = c__4556__auto___59672;
var G__59675 = cljs.core.count(c__4556__auto___59672);
var G__59676 = (0);
seq__59054_59659 = G__59673;
chunk__59055_59660 = G__59674;
count__59056_59661 = G__59675;
i__59057_59662 = G__59676;
continue;
} else {
var node_59678 = cljs.core.first(seq__59054_59671__$1);
fragment.appendChild(shadow.dom._to_dom(node_59678));


var G__59679 = cljs.core.next(seq__59054_59671__$1);
var G__59680 = null;
var G__59681 = (0);
var G__59682 = (0);
seq__59054_59659 = G__59679;
chunk__59055_59660 = G__59680;
count__59056_59661 = G__59681;
i__59057_59662 = G__59682;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq59050){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59050));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__59066_59685 = cljs.core.seq(scripts);
var chunk__59067_59686 = null;
var count__59068_59687 = (0);
var i__59069_59688 = (0);
while(true){
if((i__59069_59688 < count__59068_59687)){
var vec__59080_59689 = chunk__59067_59686.cljs$core$IIndexed$_nth$arity$2(null,i__59069_59688);
var script_tag_59690 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59080_59689,(0),null);
var script_body_59691 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59080_59689,(1),null);
eval(script_body_59691);


var G__59692 = seq__59066_59685;
var G__59693 = chunk__59067_59686;
var G__59694 = count__59068_59687;
var G__59695 = (i__59069_59688 + (1));
seq__59066_59685 = G__59692;
chunk__59067_59686 = G__59693;
count__59068_59687 = G__59694;
i__59069_59688 = G__59695;
continue;
} else {
var temp__5735__auto___59697 = cljs.core.seq(seq__59066_59685);
if(temp__5735__auto___59697){
var seq__59066_59698__$1 = temp__5735__auto___59697;
if(cljs.core.chunked_seq_QMARK_(seq__59066_59698__$1)){
var c__4556__auto___59701 = cljs.core.chunk_first(seq__59066_59698__$1);
var G__59702 = cljs.core.chunk_rest(seq__59066_59698__$1);
var G__59703 = c__4556__auto___59701;
var G__59704 = cljs.core.count(c__4556__auto___59701);
var G__59705 = (0);
seq__59066_59685 = G__59702;
chunk__59067_59686 = G__59703;
count__59068_59687 = G__59704;
i__59069_59688 = G__59705;
continue;
} else {
var vec__59085_59706 = cljs.core.first(seq__59066_59698__$1);
var script_tag_59707 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59085_59706,(0),null);
var script_body_59708 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59085_59706,(1),null);
eval(script_body_59708);


var G__59711 = cljs.core.next(seq__59066_59698__$1);
var G__59712 = null;
var G__59713 = (0);
var G__59714 = (0);
seq__59066_59685 = G__59711;
chunk__59067_59686 = G__59712;
count__59068_59687 = G__59713;
i__59069_59688 = G__59714;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__59089){
var vec__59091 = p__59089;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59091,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59091,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__59099 = arguments.length;
switch (G__59099) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__59104 = cljs.core.seq(style_keys);
var chunk__59105 = null;
var count__59106 = (0);
var i__59107 = (0);
while(true){
if((i__59107 < count__59106)){
var it = chunk__59105.cljs$core$IIndexed$_nth$arity$2(null,i__59107);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__59723 = seq__59104;
var G__59724 = chunk__59105;
var G__59725 = count__59106;
var G__59726 = (i__59107 + (1));
seq__59104 = G__59723;
chunk__59105 = G__59724;
count__59106 = G__59725;
i__59107 = G__59726;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59104);
if(temp__5735__auto__){
var seq__59104__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59104__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__59104__$1);
var G__59727 = cljs.core.chunk_rest(seq__59104__$1);
var G__59728 = c__4556__auto__;
var G__59729 = cljs.core.count(c__4556__auto__);
var G__59730 = (0);
seq__59104 = G__59727;
chunk__59105 = G__59728;
count__59106 = G__59729;
i__59107 = G__59730;
continue;
} else {
var it = cljs.core.first(seq__59104__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__59733 = cljs.core.next(seq__59104__$1);
var G__59734 = null;
var G__59735 = (0);
var G__59736 = (0);
seq__59104 = G__59733;
chunk__59105 = G__59734;
count__59106 = G__59735;
i__59107 = G__59736;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k59112,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__59120 = k59112;
var G__59120__$1 = (((G__59120 instanceof cljs.core.Keyword))?G__59120.fqn:null);
switch (G__59120__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k59112,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__59121){
var vec__59122 = p__59121;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59122,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59122,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__59111){
var self__ = this;
var G__59111__$1 = this;
return (new cljs.core.RecordIter((0),G__59111__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this59113,other59114){
var self__ = this;
var this59113__$1 = this;
return (((!((other59114 == null)))) && ((this59113__$1.constructor === other59114.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this59113__$1.x,other59114.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this59113__$1.y,other59114.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this59113__$1.__extmap,other59114.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__59111){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__59126 = cljs.core.keyword_identical_QMARK_;
var expr__59127 = k__4388__auto__;
if(cljs.core.truth_((pred__59126.cljs$core$IFn$_invoke$arity$2 ? pred__59126.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__59127) : pred__59126.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__59127)))){
return (new shadow.dom.Coordinate(G__59111,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__59126.cljs$core$IFn$_invoke$arity$2 ? pred__59126.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__59127) : pred__59126.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__59127)))){
return (new shadow.dom.Coordinate(self__.x,G__59111,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__59111),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__59111){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__59111,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__59116){
var extmap__4419__auto__ = (function (){var G__59139 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__59116,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__59116)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__59139);
} else {
return G__59139;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__59116),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__59116),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k59147,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__59157 = k59147;
var G__59157__$1 = (((G__59157 instanceof cljs.core.Keyword))?G__59157.fqn:null);
switch (G__59157__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k59147,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__59161){
var vec__59162 = p__59161;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59162,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59162,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__59146){
var self__ = this;
var G__59146__$1 = this;
return (new cljs.core.RecordIter((0),G__59146__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this59148,other59149){
var self__ = this;
var this59148__$1 = this;
return (((!((other59149 == null)))) && ((this59148__$1.constructor === other59149.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this59148__$1.w,other59149.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this59148__$1.h,other59149.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this59148__$1.__extmap,other59149.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__59146){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__59182 = cljs.core.keyword_identical_QMARK_;
var expr__59183 = k__4388__auto__;
if(cljs.core.truth_((pred__59182.cljs$core$IFn$_invoke$arity$2 ? pred__59182.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__59183) : pred__59182.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__59183)))){
return (new shadow.dom.Size(G__59146,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__59182.cljs$core$IFn$_invoke$arity$2 ? pred__59182.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__59183) : pred__59182.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__59183)))){
return (new shadow.dom.Size(self__.w,G__59146,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__59146),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__59146){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__59146,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__59151){
var extmap__4419__auto__ = (function (){var G__59192 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__59151,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__59151)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__59192);
} else {
return G__59192;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__59151),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__59151),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__59755 = (i + (1));
var G__59756 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__59755;
ret = G__59756;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__59203){
var vec__59204 = p__59203;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59204,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59204,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__59208 = arguments.length;
switch (G__59208) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__59758 = ps;
var G__59759 = (i + (1));
el__$1 = G__59758;
i = G__59759;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__59225 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59225,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59225,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59225,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__59230_59760 = cljs.core.seq(props);
var chunk__59231_59761 = null;
var count__59232_59762 = (0);
var i__59233_59763 = (0);
while(true){
if((i__59233_59763 < count__59232_59762)){
var vec__59246_59764 = chunk__59231_59761.cljs$core$IIndexed$_nth$arity$2(null,i__59233_59763);
var k_59765 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59246_59764,(0),null);
var v_59766 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59246_59764,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_59765);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_59765),v_59766);


var G__59772 = seq__59230_59760;
var G__59773 = chunk__59231_59761;
var G__59774 = count__59232_59762;
var G__59775 = (i__59233_59763 + (1));
seq__59230_59760 = G__59772;
chunk__59231_59761 = G__59773;
count__59232_59762 = G__59774;
i__59233_59763 = G__59775;
continue;
} else {
var temp__5735__auto___59777 = cljs.core.seq(seq__59230_59760);
if(temp__5735__auto___59777){
var seq__59230_59778__$1 = temp__5735__auto___59777;
if(cljs.core.chunked_seq_QMARK_(seq__59230_59778__$1)){
var c__4556__auto___59779 = cljs.core.chunk_first(seq__59230_59778__$1);
var G__59780 = cljs.core.chunk_rest(seq__59230_59778__$1);
var G__59781 = c__4556__auto___59779;
var G__59782 = cljs.core.count(c__4556__auto___59779);
var G__59783 = (0);
seq__59230_59760 = G__59780;
chunk__59231_59761 = G__59781;
count__59232_59762 = G__59782;
i__59233_59763 = G__59783;
continue;
} else {
var vec__59251_59784 = cljs.core.first(seq__59230_59778__$1);
var k_59785 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59251_59784,(0),null);
var v_59786 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59251_59784,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_59785);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_59785),v_59786);


var G__59787 = cljs.core.next(seq__59230_59778__$1);
var G__59788 = null;
var G__59789 = (0);
var G__59790 = (0);
seq__59230_59760 = G__59787;
chunk__59231_59761 = G__59788;
count__59232_59762 = G__59789;
i__59233_59763 = G__59790;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__59260 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59260,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59260,(1),null);
var seq__59264_59792 = cljs.core.seq(node_children);
var chunk__59266_59793 = null;
var count__59267_59794 = (0);
var i__59268_59795 = (0);
while(true){
if((i__59268_59795 < count__59267_59794)){
var child_struct_59797 = chunk__59266_59793.cljs$core$IIndexed$_nth$arity$2(null,i__59268_59795);
if((!((child_struct_59797 == null)))){
if(typeof child_struct_59797 === 'string'){
var text_59798 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_59798),child_struct_59797].join(''));
} else {
var children_59799 = shadow.dom.svg_node(child_struct_59797);
if(cljs.core.seq_QMARK_(children_59799)){
var seq__59298_59800 = cljs.core.seq(children_59799);
var chunk__59300_59801 = null;
var count__59301_59802 = (0);
var i__59302_59803 = (0);
while(true){
if((i__59302_59803 < count__59301_59802)){
var child_59804 = chunk__59300_59801.cljs$core$IIndexed$_nth$arity$2(null,i__59302_59803);
if(cljs.core.truth_(child_59804)){
node.appendChild(child_59804);


var G__59807 = seq__59298_59800;
var G__59808 = chunk__59300_59801;
var G__59809 = count__59301_59802;
var G__59810 = (i__59302_59803 + (1));
seq__59298_59800 = G__59807;
chunk__59300_59801 = G__59808;
count__59301_59802 = G__59809;
i__59302_59803 = G__59810;
continue;
} else {
var G__59811 = seq__59298_59800;
var G__59812 = chunk__59300_59801;
var G__59813 = count__59301_59802;
var G__59814 = (i__59302_59803 + (1));
seq__59298_59800 = G__59811;
chunk__59300_59801 = G__59812;
count__59301_59802 = G__59813;
i__59302_59803 = G__59814;
continue;
}
} else {
var temp__5735__auto___59815 = cljs.core.seq(seq__59298_59800);
if(temp__5735__auto___59815){
var seq__59298_59816__$1 = temp__5735__auto___59815;
if(cljs.core.chunked_seq_QMARK_(seq__59298_59816__$1)){
var c__4556__auto___59817 = cljs.core.chunk_first(seq__59298_59816__$1);
var G__59818 = cljs.core.chunk_rest(seq__59298_59816__$1);
var G__59819 = c__4556__auto___59817;
var G__59820 = cljs.core.count(c__4556__auto___59817);
var G__59821 = (0);
seq__59298_59800 = G__59818;
chunk__59300_59801 = G__59819;
count__59301_59802 = G__59820;
i__59302_59803 = G__59821;
continue;
} else {
var child_59823 = cljs.core.first(seq__59298_59816__$1);
if(cljs.core.truth_(child_59823)){
node.appendChild(child_59823);


var G__59825 = cljs.core.next(seq__59298_59816__$1);
var G__59826 = null;
var G__59827 = (0);
var G__59828 = (0);
seq__59298_59800 = G__59825;
chunk__59300_59801 = G__59826;
count__59301_59802 = G__59827;
i__59302_59803 = G__59828;
continue;
} else {
var G__59829 = cljs.core.next(seq__59298_59816__$1);
var G__59830 = null;
var G__59831 = (0);
var G__59832 = (0);
seq__59298_59800 = G__59829;
chunk__59300_59801 = G__59830;
count__59301_59802 = G__59831;
i__59302_59803 = G__59832;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_59799);
}
}


var G__59833 = seq__59264_59792;
var G__59834 = chunk__59266_59793;
var G__59835 = count__59267_59794;
var G__59836 = (i__59268_59795 + (1));
seq__59264_59792 = G__59833;
chunk__59266_59793 = G__59834;
count__59267_59794 = G__59835;
i__59268_59795 = G__59836;
continue;
} else {
var G__59837 = seq__59264_59792;
var G__59838 = chunk__59266_59793;
var G__59839 = count__59267_59794;
var G__59840 = (i__59268_59795 + (1));
seq__59264_59792 = G__59837;
chunk__59266_59793 = G__59838;
count__59267_59794 = G__59839;
i__59268_59795 = G__59840;
continue;
}
} else {
var temp__5735__auto___59841 = cljs.core.seq(seq__59264_59792);
if(temp__5735__auto___59841){
var seq__59264_59842__$1 = temp__5735__auto___59841;
if(cljs.core.chunked_seq_QMARK_(seq__59264_59842__$1)){
var c__4556__auto___59843 = cljs.core.chunk_first(seq__59264_59842__$1);
var G__59844 = cljs.core.chunk_rest(seq__59264_59842__$1);
var G__59845 = c__4556__auto___59843;
var G__59846 = cljs.core.count(c__4556__auto___59843);
var G__59847 = (0);
seq__59264_59792 = G__59844;
chunk__59266_59793 = G__59845;
count__59267_59794 = G__59846;
i__59268_59795 = G__59847;
continue;
} else {
var child_struct_59848 = cljs.core.first(seq__59264_59842__$1);
if((!((child_struct_59848 == null)))){
if(typeof child_struct_59848 === 'string'){
var text_59853 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_59853),child_struct_59848].join(''));
} else {
var children_59854 = shadow.dom.svg_node(child_struct_59848);
if(cljs.core.seq_QMARK_(children_59854)){
var seq__59310_59855 = cljs.core.seq(children_59854);
var chunk__59313_59856 = null;
var count__59314_59857 = (0);
var i__59315_59858 = (0);
while(true){
if((i__59315_59858 < count__59314_59857)){
var child_59859 = chunk__59313_59856.cljs$core$IIndexed$_nth$arity$2(null,i__59315_59858);
if(cljs.core.truth_(child_59859)){
node.appendChild(child_59859);


var G__59860 = seq__59310_59855;
var G__59861 = chunk__59313_59856;
var G__59862 = count__59314_59857;
var G__59863 = (i__59315_59858 + (1));
seq__59310_59855 = G__59860;
chunk__59313_59856 = G__59861;
count__59314_59857 = G__59862;
i__59315_59858 = G__59863;
continue;
} else {
var G__59864 = seq__59310_59855;
var G__59865 = chunk__59313_59856;
var G__59866 = count__59314_59857;
var G__59867 = (i__59315_59858 + (1));
seq__59310_59855 = G__59864;
chunk__59313_59856 = G__59865;
count__59314_59857 = G__59866;
i__59315_59858 = G__59867;
continue;
}
} else {
var temp__5735__auto___59868__$1 = cljs.core.seq(seq__59310_59855);
if(temp__5735__auto___59868__$1){
var seq__59310_59869__$1 = temp__5735__auto___59868__$1;
if(cljs.core.chunked_seq_QMARK_(seq__59310_59869__$1)){
var c__4556__auto___59870 = cljs.core.chunk_first(seq__59310_59869__$1);
var G__59871 = cljs.core.chunk_rest(seq__59310_59869__$1);
var G__59872 = c__4556__auto___59870;
var G__59873 = cljs.core.count(c__4556__auto___59870);
var G__59874 = (0);
seq__59310_59855 = G__59871;
chunk__59313_59856 = G__59872;
count__59314_59857 = G__59873;
i__59315_59858 = G__59874;
continue;
} else {
var child_59875 = cljs.core.first(seq__59310_59869__$1);
if(cljs.core.truth_(child_59875)){
node.appendChild(child_59875);


var G__59876 = cljs.core.next(seq__59310_59869__$1);
var G__59877 = null;
var G__59878 = (0);
var G__59879 = (0);
seq__59310_59855 = G__59876;
chunk__59313_59856 = G__59877;
count__59314_59857 = G__59878;
i__59315_59858 = G__59879;
continue;
} else {
var G__59880 = cljs.core.next(seq__59310_59869__$1);
var G__59881 = null;
var G__59882 = (0);
var G__59883 = (0);
seq__59310_59855 = G__59880;
chunk__59313_59856 = G__59881;
count__59314_59857 = G__59882;
i__59315_59858 = G__59883;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_59854);
}
}


var G__59885 = cljs.core.next(seq__59264_59842__$1);
var G__59886 = null;
var G__59887 = (0);
var G__59888 = (0);
seq__59264_59792 = G__59885;
chunk__59266_59793 = G__59886;
count__59267_59794 = G__59887;
i__59268_59795 = G__59888;
continue;
} else {
var G__59889 = cljs.core.next(seq__59264_59842__$1);
var G__59890 = null;
var G__59891 = (0);
var G__59892 = (0);
seq__59264_59792 = G__59889;
chunk__59266_59793 = G__59890;
count__59267_59794 = G__59891;
i__59268_59795 = G__59892;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59894 = arguments.length;
var i__4737__auto___59895 = (0);
while(true){
if((i__4737__auto___59895 < len__4736__auto___59894)){
args__4742__auto__.push((arguments[i__4737__auto___59895]));

var G__59896 = (i__4737__auto___59895 + (1));
i__4737__auto___59895 = G__59896;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq59327){
var G__59328 = cljs.core.first(seq59327);
var seq59327__$1 = cljs.core.next(seq59327);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59328,seq59327__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__59332 = arguments.length;
switch (G__59332) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__57120__auto___59901 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57121__auto__ = (function (){var switch__57063__auto__ = (function (state_59342){
var state_val_59343 = (state_59342[(1)]);
if((state_val_59343 === (1))){
var state_59342__$1 = state_59342;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59342__$1,(2),once_or_cleanup);
} else {
if((state_val_59343 === (2))){
var inst_59339 = (state_59342[(2)]);
var inst_59340 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_59342__$1 = (function (){var statearr_59345 = state_59342;
(statearr_59345[(7)] = inst_59339);

return statearr_59345;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_59342__$1,inst_59340);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__57064__auto__ = null;
var shadow$dom$state_machine__57064__auto____0 = (function (){
var statearr_59348 = [null,null,null,null,null,null,null,null];
(statearr_59348[(0)] = shadow$dom$state_machine__57064__auto__);

(statearr_59348[(1)] = (1));

return statearr_59348;
});
var shadow$dom$state_machine__57064__auto____1 = (function (state_59342){
while(true){
var ret_value__57065__auto__ = (function (){try{while(true){
var result__57066__auto__ = switch__57063__auto__(state_59342);
if(cljs.core.keyword_identical_QMARK_(result__57066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57066__auto__;
}
break;
}
}catch (e59350){var ex__57067__auto__ = e59350;
var statearr_59351_59902 = state_59342;
(statearr_59351_59902[(2)] = ex__57067__auto__);


if(cljs.core.seq((state_59342[(4)]))){
var statearr_59353_59903 = state_59342;
(statearr_59353_59903[(1)] = cljs.core.first((state_59342[(4)])));

} else {
throw ex__57067__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59907 = state_59342;
state_59342 = G__59907;
continue;
} else {
return ret_value__57065__auto__;
}
break;
}
});
shadow$dom$state_machine__57064__auto__ = function(state_59342){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__57064__auto____0.call(this);
case 1:
return shadow$dom$state_machine__57064__auto____1.call(this,state_59342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__57064__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__57064__auto____0;
shadow$dom$state_machine__57064__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__57064__auto____1;
return shadow$dom$state_machine__57064__auto__;
})()
})();
var state__57122__auto__ = (function (){var statearr_59354 = f__57121__auto__();
(statearr_59354[(6)] = c__57120__auto___59901);

return statearr_59354;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57122__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
