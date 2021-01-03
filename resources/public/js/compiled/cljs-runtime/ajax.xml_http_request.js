goog.provide('ajax.xml_http_request');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__49400 = e.target.readyState;
var fexpr__49399 = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null);
return (fexpr__49399.cljs$core$IFn$_invoke$arity$1 ? fexpr__49399.cljs$core$IFn$_invoke$arity$1(G__49400) : fexpr__49399.call(null,G__49400));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = (((typeof goog !== 'undefined') && (typeof goog.global !== 'undefined') && (typeof goog.global.XMLHttpRequest !== 'undefined'))?goog.global.XMLHttpRequest:(((typeof require !== 'undefined'))?(function (){var req = require;
return (req.cljs$core$IFn$_invoke$arity$1 ? req.cljs$core$IFn$_invoke$arity$1("xmlhttprequest") : req.call(null,"xmlhttprequest")).XMLHttpRequest;
})():null));
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__49402,handler){
var map__49403 = p__49402;
var map__49403__$1 = (((((!((map__49403 == null))))?(((((map__49403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49403.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49403):map__49403);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49403__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49403__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49403__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49403__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49403__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49403__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49403__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__49401_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__49401_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5735__auto___49422 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5735__auto___49422)){
var response_type_49423 = temp__5735__auto___49422;
(this$__$1.responseType = cljs.core.name(response_type_49423));
} else {
}

var seq__49406_49424 = cljs.core.seq(headers);
var chunk__49407_49425 = null;
var count__49408_49426 = (0);
var i__49409_49427 = (0);
while(true){
if((i__49409_49427 < count__49408_49426)){
var vec__49416_49430 = chunk__49407_49425.cljs$core$IIndexed$_nth$arity$2(null,i__49409_49427);
var k_49431 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49416_49430,(0),null);
var v_49432 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49416_49430,(1),null);
this$__$1.setRequestHeader(k_49431,v_49432);


var G__49433 = seq__49406_49424;
var G__49434 = chunk__49407_49425;
var G__49435 = count__49408_49426;
var G__49436 = (i__49409_49427 + (1));
seq__49406_49424 = G__49433;
chunk__49407_49425 = G__49434;
count__49408_49426 = G__49435;
i__49409_49427 = G__49436;
continue;
} else {
var temp__5735__auto___49437 = cljs.core.seq(seq__49406_49424);
if(temp__5735__auto___49437){
var seq__49406_49438__$1 = temp__5735__auto___49437;
if(cljs.core.chunked_seq_QMARK_(seq__49406_49438__$1)){
var c__4556__auto___49439 = cljs.core.chunk_first(seq__49406_49438__$1);
var G__49440 = cljs.core.chunk_rest(seq__49406_49438__$1);
var G__49441 = c__4556__auto___49439;
var G__49442 = cljs.core.count(c__4556__auto___49439);
var G__49443 = (0);
seq__49406_49424 = G__49440;
chunk__49407_49425 = G__49441;
count__49408_49426 = G__49442;
i__49409_49427 = G__49443;
continue;
} else {
var vec__49419_49444 = cljs.core.first(seq__49406_49438__$1);
var k_49445 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49419_49444,(0),null);
var v_49446 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49419_49444,(1),null);
this$__$1.setRequestHeader(k_49445,v_49446);


var G__49447 = cljs.core.next(seq__49406_49438__$1);
var G__49448 = null;
var G__49449 = (0);
var G__49450 = (0);
seq__49406_49424 = G__49447;
chunk__49407_49425 = G__49448;
count__49408_49426 = G__49449;
i__49409_49427 = G__49450;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4126__auto__ = body;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
}));

//# sourceMappingURL=ajax.xml_http_request.js.map
