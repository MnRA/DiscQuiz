goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__57192 = arguments.length;
switch (G__57192) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57193 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57193 = (function (f,blockable,meta57194){
this.f = f;
this.blockable = blockable;
this.meta57194 = meta57194;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async57193.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57195,meta57194__$1){
var self__ = this;
var _57195__$1 = this;
return (new cljs.core.async.t_cljs$core$async57193(self__.f,self__.blockable,meta57194__$1));
}));

(cljs.core.async.t_cljs$core$async57193.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57195){
var self__ = this;
var _57195__$1 = this;
return self__.meta57194;
}));

(cljs.core.async.t_cljs$core$async57193.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57193.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async57193.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async57193.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async57193.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta57194","meta57194",1981937531,null)], null);
}));

(cljs.core.async.t_cljs$core$async57193.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async57193.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57193");

(cljs.core.async.t_cljs$core$async57193.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async57193");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57193.
 */
cljs.core.async.__GT_t_cljs$core$async57193 = (function cljs$core$async$__GT_t_cljs$core$async57193(f__$1,blockable__$1,meta57194){
return (new cljs.core.async.t_cljs$core$async57193(f__$1,blockable__$1,meta57194));
});

}

return (new cljs.core.async.t_cljs$core$async57193(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__57198 = arguments.length;
switch (G__57198) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__57200 = arguments.length;
switch (G__57200) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__57202 = arguments.length;
switch (G__57202) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_58743 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_58743) : fn1.call(null,val_58743));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_58743) : fn1.call(null,val_58743));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__57204 = arguments.length;
switch (G__57204) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___58751 = n;
var x_58752 = (0);
while(true){
if((x_58752 < n__4613__auto___58751)){
(a[x_58752] = x_58752);

var G__58753 = (x_58752 + (1));
x_58752 = G__58753;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57205 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57205 = (function (flag,meta57206){
this.flag = flag;
this.meta57206 = meta57206;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async57205.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57207,meta57206__$1){
var self__ = this;
var _57207__$1 = this;
return (new cljs.core.async.t_cljs$core$async57205(self__.flag,meta57206__$1));
}));

(cljs.core.async.t_cljs$core$async57205.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57207){
var self__ = this;
var _57207__$1 = this;
return self__.meta57206;
}));

(cljs.core.async.t_cljs$core$async57205.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57205.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async57205.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async57205.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async57205.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta57206","meta57206",-2107525260,null)], null);
}));

(cljs.core.async.t_cljs$core$async57205.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async57205.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57205");

(cljs.core.async.t_cljs$core$async57205.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async57205");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57205.
 */
cljs.core.async.__GT_t_cljs$core$async57205 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async57205(flag__$1,meta57206){
return (new cljs.core.async.t_cljs$core$async57205(flag__$1,meta57206));
});

}

return (new cljs.core.async.t_cljs$core$async57205(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57214 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57214 = (function (flag,cb,meta57215){
this.flag = flag;
this.cb = cb;
this.meta57215 = meta57215;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async57214.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57216,meta57215__$1){
var self__ = this;
var _57216__$1 = this;
return (new cljs.core.async.t_cljs$core$async57214(self__.flag,self__.cb,meta57215__$1));
}));

(cljs.core.async.t_cljs$core$async57214.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57216){
var self__ = this;
var _57216__$1 = this;
return self__.meta57215;
}));

(cljs.core.async.t_cljs$core$async57214.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57214.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async57214.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async57214.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async57214.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta57215","meta57215",1246322351,null)], null);
}));

(cljs.core.async.t_cljs$core$async57214.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async57214.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57214");

(cljs.core.async.t_cljs$core$async57214.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async57214");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57214.
 */
cljs.core.async.__GT_t_cljs$core$async57214 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async57214(flag__$1,cb__$1,meta57215){
return (new cljs.core.async.t_cljs$core$async57214(flag__$1,cb__$1,meta57215));
});

}

return (new cljs.core.async.t_cljs$core$async57214(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__57222_SHARP_){
var G__57230 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__57222_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__57230) : fret.call(null,G__57230));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__57223_SHARP_){
var G__57232 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__57223_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__57232) : fret.call(null,G__57232));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__58754 = (i + (1));
i = G__58754;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58757 = arguments.length;
var i__4737__auto___58758 = (0);
while(true){
if((i__4737__auto___58758 < len__4736__auto___58757)){
args__4742__auto__.push((arguments[i__4737__auto___58758]));

var G__58759 = (i__4737__auto___58758 + (1));
i__4737__auto___58758 = G__58759;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__57245){
var map__57246 = p__57245;
var map__57246__$1 = (((((!((map__57246 == null))))?(((((map__57246.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57246.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57246):map__57246);
var opts = map__57246__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq57241){
var G__57242 = cljs.core.first(seq57241);
var seq57241__$1 = cljs.core.next(seq57241);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__57242,seq57241__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__57251 = arguments.length;
switch (G__57251) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__57120__auto___58761 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57121__auto__ = (function (){var switch__57063__auto__ = (function (state_57306){
var state_val_57307 = (state_57306[(1)]);
if((state_val_57307 === (7))){
var inst_57298 = (state_57306[(2)]);
var state_57306__$1 = state_57306;
var statearr_57311_58762 = state_57306__$1;
(statearr_57311_58762[(2)] = inst_57298);

(statearr_57311_58762[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57307 === (1))){
var state_57306__$1 = state_57306;
var statearr_57312_58763 = state_57306__$1;
(statearr_57312_58763[(2)] = null);

(statearr_57312_58763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57307 === (4))){
var inst_57272 = (state_57306[(7)]);
var inst_57272__$1 = (state_57306[(2)]);
var inst_57282 = (inst_57272__$1 == null);
var state_57306__$1 = (function (){var statearr_57314 = state_57306;
(statearr_57314[(7)] = inst_57272__$1);

return statearr_57314;
})();
if(cljs.core.truth_(inst_57282)){
var statearr_57315_58764 = state_57306__$1;
(statearr_57315_58764[(1)] = (5));

} else {
var statearr_57316_58765 = state_57306__$1;
(statearr_57316_58765[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57307 === (13))){
var state_57306__$1 = state_57306;
var statearr_57319_58766 = state_57306__$1;
(statearr_57319_58766[(2)] = null);

(statearr_57319_58766[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57307 === (6))){
var inst_57272 = (state_57306[(7)]);
var state_57306__$1 = state_57306;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57306__$1,(11),to,inst_57272);
} else {
if((state_val_57307 === (3))){
var inst_57300 = (state_57306[(2)]);
var state_57306__$1 = state_57306;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57306__$1,inst_57300);
} else {
if((state_val_57307 === (12))){
var state_57306__$1 = state_57306;
var statearr_57321_58768 = state_57306__$1;
(statearr_57321_58768[(2)] = null);

(statearr_57321_58768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57307 === (2))){
var state_57306__$1 = state_57306;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57306__$1,(4),from);
} else {
if((state_val_57307 === (11))){
var inst_57291 = (state_57306[(2)]);
var state_57306__$1 = state_57306;
if(cljs.core.truth_(inst_57291)){
var statearr_57322_58769 = state_57306__$1;
(statearr_57322_58769[(1)] = (12));

} else {
var statearr_57323_58770 = state_57306__$1;
(statearr_57323_58770[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57307 === (9))){
var state_57306__$1 = state_57306;
var statearr_57324_58772 = state_57306__$1;
(statearr_57324_58772[(2)] = null);

(statearr_57324_58772[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57307 === (5))){
var state_57306__$1 = state_57306;
if(cljs.core.truth_(close_QMARK_)){
var statearr_57325_58774 = state_57306__$1;
(statearr_57325_58774[(1)] = (8));

} else {
var statearr_57326_58775 = state_57306__$1;
(statearr_57326_58775[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57307 === (14))){
var inst_57296 = (state_57306[(2)]);
var state_57306__$1 = state_57306;
var statearr_57327_58776 = state_57306__$1;
(statearr_57327_58776[(2)] = inst_57296);

(statearr_57327_58776[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57307 === (10))){
var inst_57288 = (state_57306[(2)]);
var state_57306__$1 = state_57306;
var statearr_57328_58777 = state_57306__$1;
(statearr_57328_58777[(2)] = inst_57288);

(statearr_57328_58777[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57307 === (8))){
var inst_57285 = cljs.core.async.close_BANG_(to);
var state_57306__$1 = state_57306;
var statearr_57329_58778 = state_57306__$1;
(statearr_57329_58778[(2)] = inst_57285);

(statearr_57329_58778[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__57064__auto__ = null;
var cljs$core$async$state_machine__57064__auto____0 = (function (){
var statearr_57330 = [null,null,null,null,null,null,null,null];
(statearr_57330[(0)] = cljs$core$async$state_machine__57064__auto__);

(statearr_57330[(1)] = (1));

return statearr_57330;
});
var cljs$core$async$state_machine__57064__auto____1 = (function (state_57306){
while(true){
var ret_value__57065__auto__ = (function (){try{while(true){
var result__57066__auto__ = switch__57063__auto__(state_57306);
if(cljs.core.keyword_identical_QMARK_(result__57066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57066__auto__;
}
break;
}
}catch (e57331){var ex__57067__auto__ = e57331;
var statearr_57332_58781 = state_57306;
(statearr_57332_58781[(2)] = ex__57067__auto__);


if(cljs.core.seq((state_57306[(4)]))){
var statearr_57333_58782 = state_57306;
(statearr_57333_58782[(1)] = cljs.core.first((state_57306[(4)])));

} else {
throw ex__57067__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58783 = state_57306;
state_57306 = G__58783;
continue;
} else {
return ret_value__57065__auto__;
}
break;
}
});
cljs$core$async$state_machine__57064__auto__ = function(state_57306){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__57064__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__57064__auto____1.call(this,state_57306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__57064__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__57064__auto____0;
cljs$core$async$state_machine__57064__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__57064__auto____1;
return cljs$core$async$state_machine__57064__auto__;
})()
})();
var state__57122__auto__ = (function (){var statearr_57334 = f__57121__auto__();
(statearr_57334[(6)] = c__57120__auto___58761);

return statearr_57334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57122__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__57335){
var vec__57336 = p__57335;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57336,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57336,(1),null);
var job = vec__57336;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__57120__auto___58786 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57121__auto__ = (function (){var switch__57063__auto__ = (function (state_57343){
var state_val_57344 = (state_57343[(1)]);
if((state_val_57344 === (1))){
var state_57343__$1 = state_57343;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57343__$1,(2),res,v);
} else {
if((state_val_57344 === (2))){
var inst_57340 = (state_57343[(2)]);
var inst_57341 = cljs.core.async.close_BANG_(res);
var state_57343__$1 = (function (){var statearr_57345 = state_57343;
(statearr_57345[(7)] = inst_57340);

return statearr_57345;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_57343__$1,inst_57341);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__57064__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__57064__auto____0 = (function (){
var statearr_57346 = [null,null,null,null,null,null,null,null];
(statearr_57346[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__57064__auto__);

(statearr_57346[(1)] = (1));

return statearr_57346;
});
var cljs$core$async$pipeline_STAR__$_state_machine__57064__auto____1 = (function (state_57343){
while(true){
var ret_value__57065__auto__ = (function (){try{while(true){
var result__57066__auto__ = switch__57063__auto__(state_57343);
if(cljs.core.keyword_identical_QMARK_(result__57066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57066__auto__;
}
break;
}
}catch (e57347){var ex__57067__auto__ = e57347;
var statearr_57348_58787 = state_57343;
(statearr_57348_58787[(2)] = ex__57067__auto__);


if(cljs.core.seq((state_57343[(4)]))){
var statearr_57349_58788 = state_57343;
(statearr_57349_58788[(1)] = cljs.core.first((state_57343[(4)])));

} else {
throw ex__57067__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58790 = state_57343;
state_57343 = G__58790;
continue;
} else {
return ret_value__57065__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__57064__auto__ = function(state_57343){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__57064__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__57064__auto____1.call(this,state_57343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__57064__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__57064__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__57064__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__57064__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__57064__auto__;
})()
})();
var state__57122__auto__ = (function (){var statearr_57350 = f__57121__auto__();
(statearr_57350[(6)] = c__57120__auto___58786);

return statearr_57350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57122__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__57351){
var vec__57352 = p__57351;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57352,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57352,(1),null);
var job = vec__57352;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___58792 = n;
var __58793 = (0);
while(true){
if((__58793 < n__4613__auto___58792)){
var G__57355_58794 = type;
var G__57355_58795__$1 = (((G__57355_58794 instanceof cljs.core.Keyword))?G__57355_58794.fqn:null);
switch (G__57355_58795__$1) {
case "compute":
var c__57120__auto___58797 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__58793,c__57120__auto___58797,G__57355_58794,G__57355_58795__$1,n__4613__auto___58792,jobs,results,process,async){
return (function (){
var f__57121__auto__ = (function (){var switch__57063__auto__ = ((function (__58793,c__57120__auto___58797,G__57355_58794,G__57355_58795__$1,n__4613__auto___58792,jobs,results,process,async){
return (function (state_57368){
var state_val_57369 = (state_57368[(1)]);
if((state_val_57369 === (1))){
var state_57368__$1 = state_57368;
var statearr_57370_58798 = state_57368__$1;
(statearr_57370_58798[(2)] = null);

(statearr_57370_58798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57369 === (2))){
var state_57368__$1 = state_57368;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57368__$1,(4),jobs);
} else {
if((state_val_57369 === (3))){
var inst_57366 = (state_57368[(2)]);
var state_57368__$1 = state_57368;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57368__$1,inst_57366);
} else {
if((state_val_57369 === (4))){
var inst_57358 = (state_57368[(2)]);
var inst_57359 = process(inst_57358);
var state_57368__$1 = state_57368;
if(cljs.core.truth_(inst_57359)){
var statearr_57371_58800 = state_57368__$1;
(statearr_57371_58800[(1)] = (5));

} else {
var statearr_57372_58801 = state_57368__$1;
(statearr_57372_58801[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57369 === (5))){
var state_57368__$1 = state_57368;
var statearr_57373_58803 = state_57368__$1;
(statearr_57373_58803[(2)] = null);

(statearr_57373_58803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57369 === (6))){
var state_57368__$1 = state_57368;
var statearr_57374_58804 = state_57368__$1;
(statearr_57374_58804[(2)] = null);

(statearr_57374_58804[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57369 === (7))){
var inst_57364 = (state_57368[(2)]);
var state_57368__$1 = state_57368;
var statearr_57375_58805 = state_57368__$1;
(statearr_57375_58805[(2)] = inst_57364);

(statearr_57375_58805[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__58793,c__57120__auto___58797,G__57355_58794,G__57355_58795__$1,n__4613__auto___58792,jobs,results,process,async))
;
return ((function (__58793,switch__57063__auto__,c__57120__auto___58797,G__57355_58794,G__57355_58795__$1,n__4613__auto___58792,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__57064__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__57064__auto____0 = (function (){
var statearr_57376 = [null,null,null,null,null,null,null];
(statearr_57376[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__57064__auto__);

(statearr_57376[(1)] = (1));

return statearr_57376;
});
var cljs$core$async$pipeline_STAR__$_state_machine__57064__auto____1 = (function (state_57368){
while(true){
var ret_value__57065__auto__ = (function (){try{while(true){
var result__57066__auto__ = switch__57063__auto__(state_57368);
if(cljs.core.keyword_identical_QMARK_(result__57066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57066__auto__;
}
break;
}
}catch (e57377){var ex__57067__auto__ = e57377;
var statearr_57378_58806 = state_57368;
(statearr_57378_58806[(2)] = ex__57067__auto__);


if(cljs.core.seq((state_57368[(4)]))){
var statearr_57379_58807 = state_57368;
(statearr_57379_58807[(1)] = cljs.core.first((state_57368[(4)])));

} else {
throw ex__57067__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58808 = state_57368;
state_57368 = G__58808;
continue;
} else {
return ret_value__57065__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__57064__auto__ = function(state_57368){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__57064__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__57064__auto____1.call(this,state_57368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__57064__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__57064__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__57064__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__57064__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__57064__auto__;
})()
;})(__58793,switch__57063__auto__,c__57120__auto___58797,G__57355_58794,G__57355_58795__$1,n__4613__auto___58792,jobs,results,process,async))
})();
var state__57122__auto__ = (function (){var statearr_57380 = f__57121__auto__();
(statearr_57380[(6)] = c__57120__auto___58797);

return statearr_57380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57122__auto__);
});})(__58793,c__57120__auto___58797,G__57355_58794,G__57355_58795__$1,n__4613__auto___58792,jobs,results,process,async))
);


break;
case "async":
var c__57120__auto___58809 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__58793,c__57120__auto___58809,G__57355_58794,G__57355_58795__$1,n__4613__auto___58792,jobs,results,process,async){
return (function (){
var f__57121__auto__ = (function (){var switch__57063__auto__ = ((function (__58793,c__57120__auto___58809,G__57355_58794,G__57355_58795__$1,n__4613__auto___58792,jobs,results,process,async){
return (function (state_57393){
var state_val_57394 = (state_57393[(1)]);
if((state_val_57394 === (1))){
var state_57393__$1 = state_57393;
var statearr_57395_58810 = state_57393__$1;
(statearr_57395_58810[(2)] = null);

(statearr_57395_58810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57394 === (2))){
var state_57393__$1 = state_57393;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57393__$1,(4),jobs);
} else {
if((state_val_57394 === (3))){
var inst_57391 = (state_57393[(2)]);
var state_57393__$1 = state_57393;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57393__$1,inst_57391);
} else {
if((state_val_57394 === (4))){
var inst_57383 = (state_57393[(2)]);
var inst_57384 = async(inst_57383);
var state_57393__$1 = state_57393;
if(cljs.core.truth_(inst_57384)){
var statearr_57396_58813 = state_57393__$1;
(statearr_57396_58813[(1)] = (5));

} else {
var statearr_57397_58814 = state_57393__$1;
(statearr_57397_58814[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57394 === (5))){
var state_57393__$1 = state_57393;
var statearr_57398_58815 = state_57393__$1;
(statearr_57398_58815[(2)] = null);

(statearr_57398_58815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57394 === (6))){
var state_57393__$1 = state_57393;
var statearr_57399_58816 = state_57393__$1;
(statearr_57399_58816[(2)] = null);

(statearr_57399_58816[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57394 === (7))){
var inst_57389 = (state_57393[(2)]);
var state_57393__$1 = state_57393;
var statearr_57400_58817 = state_57393__$1;
(statearr_57400_58817[(2)] = inst_57389);

(statearr_57400_58817[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__58793,c__57120__auto___58809,G__57355_58794,G__57355_58795__$1,n__4613__auto___58792,jobs,results,process,async))
;
return ((function (__58793,switch__57063__auto__,c__57120__auto___58809,G__57355_58794,G__57355_58795__$1,n__4613__auto___58792,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__57064__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__57064__auto____0 = (function (){
var statearr_57401 = [null,null,null,null,null,null,null];
(statearr_57401[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__57064__auto__);

(statearr_57401[(1)] = (1));

return statearr_57401;
});
var cljs$core$async$pipeline_STAR__$_state_machine__57064__auto____1 = (function (state_57393){
while(true){
var ret_value__57065__auto__ = (function (){try{while(true){
var result__57066__auto__ = switch__57063__auto__(state_57393);
if(cljs.core.keyword_identical_QMARK_(result__57066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57066__auto__;
}
break;
}
}catch (e57402){var ex__57067__auto__ = e57402;
var statearr_57403_58819 = state_57393;
(statearr_57403_58819[(2)] = ex__57067__auto__);


if(cljs.core.seq((state_57393[(4)]))){
var statearr_57404_58820 = state_57393;
(statearr_57404_58820[(1)] = cljs.core.first((state_57393[(4)])));

} else {
throw ex__57067__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58821 = state_57393;
state_57393 = G__58821;
continue;
} else {
return ret_value__57065__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__57064__auto__ = function(state_57393){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__57064__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__57064__auto____1.call(this,state_57393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__57064__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__57064__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__57064__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__57064__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__57064__auto__;
})()
;})(__58793,switch__57063__auto__,c__57120__auto___58809,G__57355_58794,G__57355_58795__$1,n__4613__auto___58792,jobs,results,process,async))
})();
var state__57122__auto__ = (function (){var statearr_57405 = f__57121__auto__();
(statearr_57405[(6)] = c__57120__auto___58809);

return statearr_57405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57122__auto__);
});})(__58793,c__57120__auto___58809,G__57355_58794,G__57355_58795__$1,n__4613__auto___58792,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__57355_58795__$1)].join('')));

}

var G__58822 = (__58793 + (1));
__58793 = G__58822;
continue;
} else {
}
break;
}

var c__57120__auto___58823 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57121__auto__ = (function (){var switch__57063__auto__ = (function (state_57427){
var state_val_57428 = (state_57427[(1)]);
if((state_val_57428 === (7))){
var inst_57423 = (state_57427[(2)]);
var state_57427__$1 = state_57427;
var statearr_57429_58828 = state_57427__$1;
(statearr_57429_58828[(2)] = inst_57423);

(statearr_57429_58828[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57428 === (1))){
var state_57427__$1 = state_57427;
var statearr_57430_58829 = state_57427__$1;
(statearr_57430_58829[(2)] = null);

(statearr_57430_58829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57428 === (4))){
var inst_57408 = (state_57427[(7)]);
var inst_57408__$1 = (state_57427[(2)]);
var inst_57409 = (inst_57408__$1 == null);
var state_57427__$1 = (function (){var statearr_57431 = state_57427;
(statearr_57431[(7)] = inst_57408__$1);

return statearr_57431;
})();
if(cljs.core.truth_(inst_57409)){
var statearr_57432_58830 = state_57427__$1;
(statearr_57432_58830[(1)] = (5));

} else {
var statearr_57433_58831 = state_57427__$1;
(statearr_57433_58831[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57428 === (6))){
var inst_57408 = (state_57427[(7)]);
var inst_57413 = (state_57427[(8)]);
var inst_57413__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_57414 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_57415 = [inst_57408,inst_57413__$1];
var inst_57416 = (new cljs.core.PersistentVector(null,2,(5),inst_57414,inst_57415,null));
var state_57427__$1 = (function (){var statearr_57434 = state_57427;
(statearr_57434[(8)] = inst_57413__$1);

return statearr_57434;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57427__$1,(8),jobs,inst_57416);
} else {
if((state_val_57428 === (3))){
var inst_57425 = (state_57427[(2)]);
var state_57427__$1 = state_57427;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57427__$1,inst_57425);
} else {
if((state_val_57428 === (2))){
var state_57427__$1 = state_57427;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57427__$1,(4),from);
} else {
if((state_val_57428 === (9))){
var inst_57420 = (state_57427[(2)]);
var state_57427__$1 = (function (){var statearr_57435 = state_57427;
(statearr_57435[(9)] = inst_57420);

return statearr_57435;
})();
var statearr_57436_58832 = state_57427__$1;
(statearr_57436_58832[(2)] = null);

(statearr_57436_58832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57428 === (5))){
var inst_57411 = cljs.core.async.close_BANG_(jobs);
var state_57427__$1 = state_57427;
var statearr_57437_58833 = state_57427__$1;
(statearr_57437_58833[(2)] = inst_57411);

(statearr_57437_58833[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57428 === (8))){
var inst_57413 = (state_57427[(8)]);
var inst_57418 = (state_57427[(2)]);
var state_57427__$1 = (function (){var statearr_57438 = state_57427;
(statearr_57438[(10)] = inst_57418);

return statearr_57438;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57427__$1,(9),results,inst_57413);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__57064__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__57064__auto____0 = (function (){
var statearr_57439 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_57439[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__57064__auto__);

(statearr_57439[(1)] = (1));

return statearr_57439;
});
var cljs$core$async$pipeline_STAR__$_state_machine__57064__auto____1 = (function (state_57427){
while(true){
var ret_value__57065__auto__ = (function (){try{while(true){
var result__57066__auto__ = switch__57063__auto__(state_57427);
if(cljs.core.keyword_identical_QMARK_(result__57066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57066__auto__;
}
break;
}
}catch (e57440){var ex__57067__auto__ = e57440;
var statearr_57441_58834 = state_57427;
(statearr_57441_58834[(2)] = ex__57067__auto__);


if(cljs.core.seq((state_57427[(4)]))){
var statearr_57442_58835 = state_57427;
(statearr_57442_58835[(1)] = cljs.core.first((state_57427[(4)])));

} else {
throw ex__57067__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58837 = state_57427;
state_57427 = G__58837;
continue;
} else {
return ret_value__57065__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__57064__auto__ = function(state_57427){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__57064__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__57064__auto____1.call(this,state_57427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__57064__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__57064__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__57064__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__57064__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__57064__auto__;
})()
})();
var state__57122__auto__ = (function (){var statearr_57443 = f__57121__auto__();
(statearr_57443[(6)] = c__57120__auto___58823);

return statearr_57443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57122__auto__);
}));


var c__57120__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57121__auto__ = (function (){var switch__57063__auto__ = (function (state_57481){
var state_val_57482 = (state_57481[(1)]);
if((state_val_57482 === (7))){
var inst_57477 = (state_57481[(2)]);
var state_57481__$1 = state_57481;
var statearr_57483_58839 = state_57481__$1;
(statearr_57483_58839[(2)] = inst_57477);

(statearr_57483_58839[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57482 === (20))){
var state_57481__$1 = state_57481;
var statearr_57484_58840 = state_57481__$1;
(statearr_57484_58840[(2)] = null);

(statearr_57484_58840[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57482 === (1))){
var state_57481__$1 = state_57481;
var statearr_57485_58841 = state_57481__$1;
(statearr_57485_58841[(2)] = null);

(statearr_57485_58841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57482 === (4))){
var inst_57446 = (state_57481[(7)]);
var inst_57446__$1 = (state_57481[(2)]);
var inst_57447 = (inst_57446__$1 == null);
var state_57481__$1 = (function (){var statearr_57486 = state_57481;
(statearr_57486[(7)] = inst_57446__$1);

return statearr_57486;
})();
if(cljs.core.truth_(inst_57447)){
var statearr_57487_58842 = state_57481__$1;
(statearr_57487_58842[(1)] = (5));

} else {
var statearr_57488_58843 = state_57481__$1;
(statearr_57488_58843[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57482 === (15))){
var inst_57459 = (state_57481[(8)]);
var state_57481__$1 = state_57481;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57481__$1,(18),to,inst_57459);
} else {
if((state_val_57482 === (21))){
var inst_57472 = (state_57481[(2)]);
var state_57481__$1 = state_57481;
var statearr_57489_58844 = state_57481__$1;
(statearr_57489_58844[(2)] = inst_57472);

(statearr_57489_58844[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57482 === (13))){
var inst_57474 = (state_57481[(2)]);
var state_57481__$1 = (function (){var statearr_57490 = state_57481;
(statearr_57490[(9)] = inst_57474);

return statearr_57490;
})();
var statearr_57491_58849 = state_57481__$1;
(statearr_57491_58849[(2)] = null);

(statearr_57491_58849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57482 === (6))){
var inst_57446 = (state_57481[(7)]);
var state_57481__$1 = state_57481;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57481__$1,(11),inst_57446);
} else {
if((state_val_57482 === (17))){
var inst_57467 = (state_57481[(2)]);
var state_57481__$1 = state_57481;
if(cljs.core.truth_(inst_57467)){
var statearr_57492_58853 = state_57481__$1;
(statearr_57492_58853[(1)] = (19));

} else {
var statearr_57493_58854 = state_57481__$1;
(statearr_57493_58854[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57482 === (3))){
var inst_57479 = (state_57481[(2)]);
var state_57481__$1 = state_57481;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57481__$1,inst_57479);
} else {
if((state_val_57482 === (12))){
var inst_57456 = (state_57481[(10)]);
var state_57481__$1 = state_57481;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57481__$1,(14),inst_57456);
} else {
if((state_val_57482 === (2))){
var state_57481__$1 = state_57481;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57481__$1,(4),results);
} else {
if((state_val_57482 === (19))){
var state_57481__$1 = state_57481;
var statearr_57494_58858 = state_57481__$1;
(statearr_57494_58858[(2)] = null);

(statearr_57494_58858[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57482 === (11))){
var inst_57456 = (state_57481[(2)]);
var state_57481__$1 = (function (){var statearr_57495 = state_57481;
(statearr_57495[(10)] = inst_57456);

return statearr_57495;
})();
var statearr_57496_58862 = state_57481__$1;
(statearr_57496_58862[(2)] = null);

(statearr_57496_58862[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57482 === (9))){
var state_57481__$1 = state_57481;
var statearr_57497_58866 = state_57481__$1;
(statearr_57497_58866[(2)] = null);

(statearr_57497_58866[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57482 === (5))){
var state_57481__$1 = state_57481;
if(cljs.core.truth_(close_QMARK_)){
var statearr_57498_58867 = state_57481__$1;
(statearr_57498_58867[(1)] = (8));

} else {
var statearr_57499_58868 = state_57481__$1;
(statearr_57499_58868[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57482 === (14))){
var inst_57459 = (state_57481[(8)]);
var inst_57459__$1 = (state_57481[(2)]);
var inst_57460 = (inst_57459__$1 == null);
var inst_57461 = cljs.core.not(inst_57460);
var state_57481__$1 = (function (){var statearr_57500 = state_57481;
(statearr_57500[(8)] = inst_57459__$1);

return statearr_57500;
})();
if(inst_57461){
var statearr_57501_58869 = state_57481__$1;
(statearr_57501_58869[(1)] = (15));

} else {
var statearr_57502_58870 = state_57481__$1;
(statearr_57502_58870[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57482 === (16))){
var state_57481__$1 = state_57481;
var statearr_57503_58875 = state_57481__$1;
(statearr_57503_58875[(2)] = false);

(statearr_57503_58875[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57482 === (10))){
var inst_57453 = (state_57481[(2)]);
var state_57481__$1 = state_57481;
var statearr_57504_58879 = state_57481__$1;
(statearr_57504_58879[(2)] = inst_57453);

(statearr_57504_58879[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57482 === (18))){
var inst_57464 = (state_57481[(2)]);
var state_57481__$1 = state_57481;
var statearr_57505_58880 = state_57481__$1;
(statearr_57505_58880[(2)] = inst_57464);

(statearr_57505_58880[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57482 === (8))){
var inst_57450 = cljs.core.async.close_BANG_(to);
var state_57481__$1 = state_57481;
var statearr_57506_58881 = state_57481__$1;
(statearr_57506_58881[(2)] = inst_57450);

(statearr_57506_58881[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__57064__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__57064__auto____0 = (function (){
var statearr_57507 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_57507[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__57064__auto__);

(statearr_57507[(1)] = (1));

return statearr_57507;
});
var cljs$core$async$pipeline_STAR__$_state_machine__57064__auto____1 = (function (state_57481){
while(true){
var ret_value__57065__auto__ = (function (){try{while(true){
var result__57066__auto__ = switch__57063__auto__(state_57481);
if(cljs.core.keyword_identical_QMARK_(result__57066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57066__auto__;
}
break;
}
}catch (e57508){var ex__57067__auto__ = e57508;
var statearr_57509_58885 = state_57481;
(statearr_57509_58885[(2)] = ex__57067__auto__);


if(cljs.core.seq((state_57481[(4)]))){
var statearr_57510_58886 = state_57481;
(statearr_57510_58886[(1)] = cljs.core.first((state_57481[(4)])));

} else {
throw ex__57067__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58887 = state_57481;
state_57481 = G__58887;
continue;
} else {
return ret_value__57065__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__57064__auto__ = function(state_57481){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__57064__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__57064__auto____1.call(this,state_57481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__57064__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__57064__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__57064__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__57064__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__57064__auto__;
})()
})();
var state__57122__auto__ = (function (){var statearr_57511 = f__57121__auto__();
(statearr_57511[(6)] = c__57120__auto__);

return statearr_57511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57122__auto__);
}));

return c__57120__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__57513 = arguments.length;
switch (G__57513) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__57515 = arguments.length;
switch (G__57515) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__57517 = arguments.length;
switch (G__57517) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__57120__auto___58898 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57121__auto__ = (function (){var switch__57063__auto__ = (function (state_57543){
var state_val_57544 = (state_57543[(1)]);
if((state_val_57544 === (7))){
var inst_57539 = (state_57543[(2)]);
var state_57543__$1 = state_57543;
var statearr_57545_58899 = state_57543__$1;
(statearr_57545_58899[(2)] = inst_57539);

(statearr_57545_58899[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57544 === (1))){
var state_57543__$1 = state_57543;
var statearr_57546_58900 = state_57543__$1;
(statearr_57546_58900[(2)] = null);

(statearr_57546_58900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57544 === (4))){
var inst_57520 = (state_57543[(7)]);
var inst_57520__$1 = (state_57543[(2)]);
var inst_57521 = (inst_57520__$1 == null);
var state_57543__$1 = (function (){var statearr_57547 = state_57543;
(statearr_57547[(7)] = inst_57520__$1);

return statearr_57547;
})();
if(cljs.core.truth_(inst_57521)){
var statearr_57548_58901 = state_57543__$1;
(statearr_57548_58901[(1)] = (5));

} else {
var statearr_57549_58902 = state_57543__$1;
(statearr_57549_58902[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57544 === (13))){
var state_57543__$1 = state_57543;
var statearr_57550_58903 = state_57543__$1;
(statearr_57550_58903[(2)] = null);

(statearr_57550_58903[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57544 === (6))){
var inst_57520 = (state_57543[(7)]);
var inst_57526 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_57520) : p.call(null,inst_57520));
var state_57543__$1 = state_57543;
if(cljs.core.truth_(inst_57526)){
var statearr_57551_58904 = state_57543__$1;
(statearr_57551_58904[(1)] = (9));

} else {
var statearr_57552_58905 = state_57543__$1;
(statearr_57552_58905[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57544 === (3))){
var inst_57541 = (state_57543[(2)]);
var state_57543__$1 = state_57543;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57543__$1,inst_57541);
} else {
if((state_val_57544 === (12))){
var state_57543__$1 = state_57543;
var statearr_57553_58906 = state_57543__$1;
(statearr_57553_58906[(2)] = null);

(statearr_57553_58906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57544 === (2))){
var state_57543__$1 = state_57543;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57543__$1,(4),ch);
} else {
if((state_val_57544 === (11))){
var inst_57520 = (state_57543[(7)]);
var inst_57530 = (state_57543[(2)]);
var state_57543__$1 = state_57543;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57543__$1,(8),inst_57530,inst_57520);
} else {
if((state_val_57544 === (9))){
var state_57543__$1 = state_57543;
var statearr_57554_58907 = state_57543__$1;
(statearr_57554_58907[(2)] = tc);

(statearr_57554_58907[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57544 === (5))){
var inst_57523 = cljs.core.async.close_BANG_(tc);
var inst_57524 = cljs.core.async.close_BANG_(fc);
var state_57543__$1 = (function (){var statearr_57555 = state_57543;
(statearr_57555[(8)] = inst_57523);

return statearr_57555;
})();
var statearr_57556_58908 = state_57543__$1;
(statearr_57556_58908[(2)] = inst_57524);

(statearr_57556_58908[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57544 === (14))){
var inst_57537 = (state_57543[(2)]);
var state_57543__$1 = state_57543;
var statearr_57557_58909 = state_57543__$1;
(statearr_57557_58909[(2)] = inst_57537);

(statearr_57557_58909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57544 === (10))){
var state_57543__$1 = state_57543;
var statearr_57558_58910 = state_57543__$1;
(statearr_57558_58910[(2)] = fc);

(statearr_57558_58910[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57544 === (8))){
var inst_57532 = (state_57543[(2)]);
var state_57543__$1 = state_57543;
if(cljs.core.truth_(inst_57532)){
var statearr_57559_58911 = state_57543__$1;
(statearr_57559_58911[(1)] = (12));

} else {
var statearr_57560_58912 = state_57543__$1;
(statearr_57560_58912[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__57064__auto__ = null;
var cljs$core$async$state_machine__57064__auto____0 = (function (){
var statearr_57561 = [null,null,null,null,null,null,null,null,null];
(statearr_57561[(0)] = cljs$core$async$state_machine__57064__auto__);

(statearr_57561[(1)] = (1));

return statearr_57561;
});
var cljs$core$async$state_machine__57064__auto____1 = (function (state_57543){
while(true){
var ret_value__57065__auto__ = (function (){try{while(true){
var result__57066__auto__ = switch__57063__auto__(state_57543);
if(cljs.core.keyword_identical_QMARK_(result__57066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57066__auto__;
}
break;
}
}catch (e57562){var ex__57067__auto__ = e57562;
var statearr_57563_58913 = state_57543;
(statearr_57563_58913[(2)] = ex__57067__auto__);


if(cljs.core.seq((state_57543[(4)]))){
var statearr_57564_58914 = state_57543;
(statearr_57564_58914[(1)] = cljs.core.first((state_57543[(4)])));

} else {
throw ex__57067__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58915 = state_57543;
state_57543 = G__58915;
continue;
} else {
return ret_value__57065__auto__;
}
break;
}
});
cljs$core$async$state_machine__57064__auto__ = function(state_57543){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__57064__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__57064__auto____1.call(this,state_57543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__57064__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__57064__auto____0;
cljs$core$async$state_machine__57064__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__57064__auto____1;
return cljs$core$async$state_machine__57064__auto__;
})()
})();
var state__57122__auto__ = (function (){var statearr_57565 = f__57121__auto__();
(statearr_57565[(6)] = c__57120__auto___58898);

return statearr_57565;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57122__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__57120__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57121__auto__ = (function (){var switch__57063__auto__ = (function (state_57587){
var state_val_57588 = (state_57587[(1)]);
if((state_val_57588 === (7))){
var inst_57583 = (state_57587[(2)]);
var state_57587__$1 = state_57587;
var statearr_57589_58919 = state_57587__$1;
(statearr_57589_58919[(2)] = inst_57583);

(statearr_57589_58919[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57588 === (1))){
var inst_57566 = init;
var inst_57567 = inst_57566;
var state_57587__$1 = (function (){var statearr_57590 = state_57587;
(statearr_57590[(7)] = inst_57567);

return statearr_57590;
})();
var statearr_57591_58923 = state_57587__$1;
(statearr_57591_58923[(2)] = null);

(statearr_57591_58923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57588 === (4))){
var inst_57570 = (state_57587[(8)]);
var inst_57570__$1 = (state_57587[(2)]);
var inst_57571 = (inst_57570__$1 == null);
var state_57587__$1 = (function (){var statearr_57592 = state_57587;
(statearr_57592[(8)] = inst_57570__$1);

return statearr_57592;
})();
if(cljs.core.truth_(inst_57571)){
var statearr_57593_58925 = state_57587__$1;
(statearr_57593_58925[(1)] = (5));

} else {
var statearr_57594_58926 = state_57587__$1;
(statearr_57594_58926[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57588 === (6))){
var inst_57574 = (state_57587[(9)]);
var inst_57567 = (state_57587[(7)]);
var inst_57570 = (state_57587[(8)]);
var inst_57574__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_57567,inst_57570) : f.call(null,inst_57567,inst_57570));
var inst_57575 = cljs.core.reduced_QMARK_(inst_57574__$1);
var state_57587__$1 = (function (){var statearr_57595 = state_57587;
(statearr_57595[(9)] = inst_57574__$1);

return statearr_57595;
})();
if(inst_57575){
var statearr_57596_58929 = state_57587__$1;
(statearr_57596_58929[(1)] = (8));

} else {
var statearr_57597_58930 = state_57587__$1;
(statearr_57597_58930[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57588 === (3))){
var inst_57585 = (state_57587[(2)]);
var state_57587__$1 = state_57587;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57587__$1,inst_57585);
} else {
if((state_val_57588 === (2))){
var state_57587__$1 = state_57587;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57587__$1,(4),ch);
} else {
if((state_val_57588 === (9))){
var inst_57574 = (state_57587[(9)]);
var inst_57567 = inst_57574;
var state_57587__$1 = (function (){var statearr_57598 = state_57587;
(statearr_57598[(7)] = inst_57567);

return statearr_57598;
})();
var statearr_57599_58931 = state_57587__$1;
(statearr_57599_58931[(2)] = null);

(statearr_57599_58931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57588 === (5))){
var inst_57567 = (state_57587[(7)]);
var state_57587__$1 = state_57587;
var statearr_57600_58932 = state_57587__$1;
(statearr_57600_58932[(2)] = inst_57567);

(statearr_57600_58932[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57588 === (10))){
var inst_57581 = (state_57587[(2)]);
var state_57587__$1 = state_57587;
var statearr_57601_58933 = state_57587__$1;
(statearr_57601_58933[(2)] = inst_57581);

(statearr_57601_58933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57588 === (8))){
var inst_57574 = (state_57587[(9)]);
var inst_57577 = cljs.core.deref(inst_57574);
var state_57587__$1 = state_57587;
var statearr_57602_58934 = state_57587__$1;
(statearr_57602_58934[(2)] = inst_57577);

(statearr_57602_58934[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__57064__auto__ = null;
var cljs$core$async$reduce_$_state_machine__57064__auto____0 = (function (){
var statearr_57603 = [null,null,null,null,null,null,null,null,null,null];
(statearr_57603[(0)] = cljs$core$async$reduce_$_state_machine__57064__auto__);

(statearr_57603[(1)] = (1));

return statearr_57603;
});
var cljs$core$async$reduce_$_state_machine__57064__auto____1 = (function (state_57587){
while(true){
var ret_value__57065__auto__ = (function (){try{while(true){
var result__57066__auto__ = switch__57063__auto__(state_57587);
if(cljs.core.keyword_identical_QMARK_(result__57066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57066__auto__;
}
break;
}
}catch (e57604){var ex__57067__auto__ = e57604;
var statearr_57605_58935 = state_57587;
(statearr_57605_58935[(2)] = ex__57067__auto__);


if(cljs.core.seq((state_57587[(4)]))){
var statearr_57606_58936 = state_57587;
(statearr_57606_58936[(1)] = cljs.core.first((state_57587[(4)])));

} else {
throw ex__57067__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58941 = state_57587;
state_57587 = G__58941;
continue;
} else {
return ret_value__57065__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__57064__auto__ = function(state_57587){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__57064__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__57064__auto____1.call(this,state_57587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__57064__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__57064__auto____0;
cljs$core$async$reduce_$_state_machine__57064__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__57064__auto____1;
return cljs$core$async$reduce_$_state_machine__57064__auto__;
})()
})();
var state__57122__auto__ = (function (){var statearr_57607 = f__57121__auto__();
(statearr_57607[(6)] = c__57120__auto__);

return statearr_57607;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57122__auto__);
}));

return c__57120__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__57120__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57121__auto__ = (function (){var switch__57063__auto__ = (function (state_57613){
var state_val_57614 = (state_57613[(1)]);
if((state_val_57614 === (1))){
var inst_57608 = cljs.core.async.reduce(f__$1,init,ch);
var state_57613__$1 = state_57613;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57613__$1,(2),inst_57608);
} else {
if((state_val_57614 === (2))){
var inst_57610 = (state_57613[(2)]);
var inst_57611 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_57610) : f__$1.call(null,inst_57610));
var state_57613__$1 = state_57613;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57613__$1,inst_57611);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__57064__auto__ = null;
var cljs$core$async$transduce_$_state_machine__57064__auto____0 = (function (){
var statearr_57615 = [null,null,null,null,null,null,null];
(statearr_57615[(0)] = cljs$core$async$transduce_$_state_machine__57064__auto__);

(statearr_57615[(1)] = (1));

return statearr_57615;
});
var cljs$core$async$transduce_$_state_machine__57064__auto____1 = (function (state_57613){
while(true){
var ret_value__57065__auto__ = (function (){try{while(true){
var result__57066__auto__ = switch__57063__auto__(state_57613);
if(cljs.core.keyword_identical_QMARK_(result__57066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57066__auto__;
}
break;
}
}catch (e57616){var ex__57067__auto__ = e57616;
var statearr_57617_58953 = state_57613;
(statearr_57617_58953[(2)] = ex__57067__auto__);


if(cljs.core.seq((state_57613[(4)]))){
var statearr_57618_58954 = state_57613;
(statearr_57618_58954[(1)] = cljs.core.first((state_57613[(4)])));

} else {
throw ex__57067__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58955 = state_57613;
state_57613 = G__58955;
continue;
} else {
return ret_value__57065__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__57064__auto__ = function(state_57613){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__57064__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__57064__auto____1.call(this,state_57613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__57064__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__57064__auto____0;
cljs$core$async$transduce_$_state_machine__57064__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__57064__auto____1;
return cljs$core$async$transduce_$_state_machine__57064__auto__;
})()
})();
var state__57122__auto__ = (function (){var statearr_57619 = f__57121__auto__();
(statearr_57619[(6)] = c__57120__auto__);

return statearr_57619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57122__auto__);
}));

return c__57120__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__57621 = arguments.length;
switch (G__57621) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__57120__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57121__auto__ = (function (){var switch__57063__auto__ = (function (state_57646){
var state_val_57647 = (state_57646[(1)]);
if((state_val_57647 === (7))){
var inst_57628 = (state_57646[(2)]);
var state_57646__$1 = state_57646;
var statearr_57648_58963 = state_57646__$1;
(statearr_57648_58963[(2)] = inst_57628);

(statearr_57648_58963[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57647 === (1))){
var inst_57622 = cljs.core.seq(coll);
var inst_57623 = inst_57622;
var state_57646__$1 = (function (){var statearr_57649 = state_57646;
(statearr_57649[(7)] = inst_57623);

return statearr_57649;
})();
var statearr_57650_58964 = state_57646__$1;
(statearr_57650_58964[(2)] = null);

(statearr_57650_58964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57647 === (4))){
var inst_57623 = (state_57646[(7)]);
var inst_57626 = cljs.core.first(inst_57623);
var state_57646__$1 = state_57646;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57646__$1,(7),ch,inst_57626);
} else {
if((state_val_57647 === (13))){
var inst_57640 = (state_57646[(2)]);
var state_57646__$1 = state_57646;
var statearr_57651_58965 = state_57646__$1;
(statearr_57651_58965[(2)] = inst_57640);

(statearr_57651_58965[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57647 === (6))){
var inst_57631 = (state_57646[(2)]);
var state_57646__$1 = state_57646;
if(cljs.core.truth_(inst_57631)){
var statearr_57652_58966 = state_57646__$1;
(statearr_57652_58966[(1)] = (8));

} else {
var statearr_57653_58967 = state_57646__$1;
(statearr_57653_58967[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57647 === (3))){
var inst_57644 = (state_57646[(2)]);
var state_57646__$1 = state_57646;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57646__$1,inst_57644);
} else {
if((state_val_57647 === (12))){
var state_57646__$1 = state_57646;
var statearr_57654_58968 = state_57646__$1;
(statearr_57654_58968[(2)] = null);

(statearr_57654_58968[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57647 === (2))){
var inst_57623 = (state_57646[(7)]);
var state_57646__$1 = state_57646;
if(cljs.core.truth_(inst_57623)){
var statearr_57655_58969 = state_57646__$1;
(statearr_57655_58969[(1)] = (4));

} else {
var statearr_57656_58970 = state_57646__$1;
(statearr_57656_58970[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57647 === (11))){
var inst_57637 = cljs.core.async.close_BANG_(ch);
var state_57646__$1 = state_57646;
var statearr_57657_58971 = state_57646__$1;
(statearr_57657_58971[(2)] = inst_57637);

(statearr_57657_58971[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57647 === (9))){
var state_57646__$1 = state_57646;
if(cljs.core.truth_(close_QMARK_)){
var statearr_57658_58972 = state_57646__$1;
(statearr_57658_58972[(1)] = (11));

} else {
var statearr_57659_58973 = state_57646__$1;
(statearr_57659_58973[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57647 === (5))){
var inst_57623 = (state_57646[(7)]);
var state_57646__$1 = state_57646;
var statearr_57660_58980 = state_57646__$1;
(statearr_57660_58980[(2)] = inst_57623);

(statearr_57660_58980[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57647 === (10))){
var inst_57642 = (state_57646[(2)]);
var state_57646__$1 = state_57646;
var statearr_57661_58981 = state_57646__$1;
(statearr_57661_58981[(2)] = inst_57642);

(statearr_57661_58981[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57647 === (8))){
var inst_57623 = (state_57646[(7)]);
var inst_57633 = cljs.core.next(inst_57623);
var inst_57623__$1 = inst_57633;
var state_57646__$1 = (function (){var statearr_57662 = state_57646;
(statearr_57662[(7)] = inst_57623__$1);

return statearr_57662;
})();
var statearr_57663_58982 = state_57646__$1;
(statearr_57663_58982[(2)] = null);

(statearr_57663_58982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__57064__auto__ = null;
var cljs$core$async$state_machine__57064__auto____0 = (function (){
var statearr_57664 = [null,null,null,null,null,null,null,null];
(statearr_57664[(0)] = cljs$core$async$state_machine__57064__auto__);

(statearr_57664[(1)] = (1));

return statearr_57664;
});
var cljs$core$async$state_machine__57064__auto____1 = (function (state_57646){
while(true){
var ret_value__57065__auto__ = (function (){try{while(true){
var result__57066__auto__ = switch__57063__auto__(state_57646);
if(cljs.core.keyword_identical_QMARK_(result__57066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57066__auto__;
}
break;
}
}catch (e57665){var ex__57067__auto__ = e57665;
var statearr_57666_58983 = state_57646;
(statearr_57666_58983[(2)] = ex__57067__auto__);


if(cljs.core.seq((state_57646[(4)]))){
var statearr_57667_58984 = state_57646;
(statearr_57667_58984[(1)] = cljs.core.first((state_57646[(4)])));

} else {
throw ex__57067__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58985 = state_57646;
state_57646 = G__58985;
continue;
} else {
return ret_value__57065__auto__;
}
break;
}
});
cljs$core$async$state_machine__57064__auto__ = function(state_57646){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__57064__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__57064__auto____1.call(this,state_57646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__57064__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__57064__auto____0;
cljs$core$async$state_machine__57064__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__57064__auto____1;
return cljs$core$async$state_machine__57064__auto__;
})()
})();
var state__57122__auto__ = (function (){var statearr_57668 = f__57121__auto__();
(statearr_57668[(6)] = c__57120__auto__);

return statearr_57668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57122__auto__);
}));

return c__57120__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__57670 = arguments.length;
switch (G__57670) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_58993 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_58993(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_58994 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_58994(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_58995 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_58995(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_59002 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_59002(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57671 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57671 = (function (ch,cs,meta57672){
this.ch = ch;
this.cs = cs;
this.meta57672 = meta57672;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async57671.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57673,meta57672__$1){
var self__ = this;
var _57673__$1 = this;
return (new cljs.core.async.t_cljs$core$async57671(self__.ch,self__.cs,meta57672__$1));
}));

(cljs.core.async.t_cljs$core$async57671.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57673){
var self__ = this;
var _57673__$1 = this;
return self__.meta57672;
}));

(cljs.core.async.t_cljs$core$async57671.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57671.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async57671.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57671.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async57671.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async57671.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async57671.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta57672","meta57672",-184192901,null)], null);
}));

(cljs.core.async.t_cljs$core$async57671.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async57671.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57671");

(cljs.core.async.t_cljs$core$async57671.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async57671");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57671.
 */
cljs.core.async.__GT_t_cljs$core$async57671 = (function cljs$core$async$mult_$___GT_t_cljs$core$async57671(ch__$1,cs__$1,meta57672){
return (new cljs.core.async.t_cljs$core$async57671(ch__$1,cs__$1,meta57672));
});

}

return (new cljs.core.async.t_cljs$core$async57671(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__57120__auto___59003 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57121__auto__ = (function (){var switch__57063__auto__ = (function (state_57806){
var state_val_57807 = (state_57806[(1)]);
if((state_val_57807 === (7))){
var inst_57802 = (state_57806[(2)]);
var state_57806__$1 = state_57806;
var statearr_57808_59004 = state_57806__$1;
(statearr_57808_59004[(2)] = inst_57802);

(statearr_57808_59004[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57807 === (20))){
var inst_57707 = (state_57806[(7)]);
var inst_57719 = cljs.core.first(inst_57707);
var inst_57720 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57719,(0),null);
var inst_57721 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57719,(1),null);
var state_57806__$1 = (function (){var statearr_57809 = state_57806;
(statearr_57809[(8)] = inst_57720);

return statearr_57809;
})();
if(cljs.core.truth_(inst_57721)){
var statearr_57810_59005 = state_57806__$1;
(statearr_57810_59005[(1)] = (22));

} else {
var statearr_57811_59006 = state_57806__$1;
(statearr_57811_59006[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57807 === (27))){
var inst_57676 = (state_57806[(9)]);
var inst_57751 = (state_57806[(10)]);
var inst_57749 = (state_57806[(11)]);
var inst_57756 = (state_57806[(12)]);
var inst_57756__$1 = cljs.core._nth(inst_57749,inst_57751);
var inst_57757 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_57756__$1,inst_57676,done);
var state_57806__$1 = (function (){var statearr_57812 = state_57806;
(statearr_57812[(12)] = inst_57756__$1);

return statearr_57812;
})();
if(cljs.core.truth_(inst_57757)){
var statearr_57813_59007 = state_57806__$1;
(statearr_57813_59007[(1)] = (30));

} else {
var statearr_57814_59008 = state_57806__$1;
(statearr_57814_59008[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57807 === (1))){
var state_57806__$1 = state_57806;
var statearr_57815_59009 = state_57806__$1;
(statearr_57815_59009[(2)] = null);

(statearr_57815_59009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57807 === (24))){
var inst_57707 = (state_57806[(7)]);
var inst_57726 = (state_57806[(2)]);
var inst_57727 = cljs.core.next(inst_57707);
var inst_57685 = inst_57727;
var inst_57686 = null;
var inst_57687 = (0);
var inst_57688 = (0);
var state_57806__$1 = (function (){var statearr_57816 = state_57806;
(statearr_57816[(13)] = inst_57726);

(statearr_57816[(14)] = inst_57687);

(statearr_57816[(15)] = inst_57688);

(statearr_57816[(16)] = inst_57686);

(statearr_57816[(17)] = inst_57685);

return statearr_57816;
})();
var statearr_57817_59015 = state_57806__$1;
(statearr_57817_59015[(2)] = null);

(statearr_57817_59015[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57807 === (39))){
var state_57806__$1 = state_57806;
var statearr_57821_59016 = state_57806__$1;
(statearr_57821_59016[(2)] = null);

(statearr_57821_59016[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57807 === (4))){
var inst_57676 = (state_57806[(9)]);
var inst_57676__$1 = (state_57806[(2)]);
var inst_57677 = (inst_57676__$1 == null);
var state_57806__$1 = (function (){var statearr_57822 = state_57806;
(statearr_57822[(9)] = inst_57676__$1);

return statearr_57822;
})();
if(cljs.core.truth_(inst_57677)){
var statearr_57823_59017 = state_57806__$1;
(statearr_57823_59017[(1)] = (5));

} else {
var statearr_57824_59018 = state_57806__$1;
(statearr_57824_59018[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57807 === (15))){
var inst_57687 = (state_57806[(14)]);
var inst_57688 = (state_57806[(15)]);
var inst_57686 = (state_57806[(16)]);
var inst_57685 = (state_57806[(17)]);
var inst_57703 = (state_57806[(2)]);
var inst_57704 = (inst_57688 + (1));
var tmp57818 = inst_57687;
var tmp57819 = inst_57686;
var tmp57820 = inst_57685;
var inst_57685__$1 = tmp57820;
var inst_57686__$1 = tmp57819;
var inst_57687__$1 = tmp57818;
var inst_57688__$1 = inst_57704;
var state_57806__$1 = (function (){var statearr_57825 = state_57806;
(statearr_57825[(14)] = inst_57687__$1);

(statearr_57825[(15)] = inst_57688__$1);

(statearr_57825[(18)] = inst_57703);

(statearr_57825[(16)] = inst_57686__$1);

(statearr_57825[(17)] = inst_57685__$1);

return statearr_57825;
})();
var statearr_57826_59019 = state_57806__$1;
(statearr_57826_59019[(2)] = null);

(statearr_57826_59019[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57807 === (21))){
var inst_57730 = (state_57806[(2)]);
var state_57806__$1 = state_57806;
var statearr_57830_59020 = state_57806__$1;
(statearr_57830_59020[(2)] = inst_57730);

(statearr_57830_59020[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57807 === (31))){
var inst_57756 = (state_57806[(12)]);
var inst_57760 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_57756);
var state_57806__$1 = state_57806;
var statearr_57831_59021 = state_57806__$1;
(statearr_57831_59021[(2)] = inst_57760);

(statearr_57831_59021[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57807 === (32))){
var inst_57751 = (state_57806[(10)]);
var inst_57749 = (state_57806[(11)]);
var inst_57750 = (state_57806[(19)]);
var inst_57748 = (state_57806[(20)]);
var inst_57762 = (state_57806[(2)]);
var inst_57763 = (inst_57751 + (1));
var tmp57827 = inst_57749;
var tmp57828 = inst_57750;
var tmp57829 = inst_57748;
var inst_57748__$1 = tmp57829;
var inst_57749__$1 = tmp57827;
var inst_57750__$1 = tmp57828;
var inst_57751__$1 = inst_57763;
var state_57806__$1 = (function (){var statearr_57832 = state_57806;
(statearr_57832[(10)] = inst_57751__$1);

(statearr_57832[(11)] = inst_57749__$1);

(statearr_57832[(19)] = inst_57750__$1);

(statearr_57832[(20)] = inst_57748__$1);

(statearr_57832[(21)] = inst_57762);

return statearr_57832;
})();
var statearr_57833_59024 = state_57806__$1;
(statearr_57833_59024[(2)] = null);

(statearr_57833_59024[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57807 === (40))){
var inst_57775 = (state_57806[(22)]);
var inst_57779 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_57775);
var state_57806__$1 = state_57806;
var statearr_57834_59025 = state_57806__$1;
(statearr_57834_59025[(2)] = inst_57779);

(statearr_57834_59025[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57807 === (33))){
var inst_57766 = (state_57806[(23)]);
var inst_57768 = cljs.core.chunked_seq_QMARK_(inst_57766);
var state_57806__$1 = state_57806;
if(inst_57768){
var statearr_57835_59026 = state_57806__$1;
(statearr_57835_59026[(1)] = (36));

} else {
var statearr_57836_59027 = state_57806__$1;
(statearr_57836_59027[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57807 === (13))){
var inst_57697 = (state_57806[(24)]);
var inst_57700 = cljs.core.async.close_BANG_(inst_57697);
var state_57806__$1 = state_57806;
var statearr_57837_59029 = state_57806__$1;
(statearr_57837_59029[(2)] = inst_57700);

(statearr_57837_59029[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57807 === (22))){
var inst_57720 = (state_57806[(8)]);
var inst_57723 = cljs.core.async.close_BANG_(inst_57720);
var state_57806__$1 = state_57806;
var statearr_57838_59031 = state_57806__$1;
(statearr_57838_59031[(2)] = inst_57723);

(statearr_57838_59031[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57807 === (36))){
var inst_57766 = (state_57806[(23)]);
var inst_57770 = cljs.core.chunk_first(inst_57766);
var inst_57771 = cljs.core.chunk_rest(inst_57766);
var inst_57772 = cljs.core.count(inst_57770);
var inst_57748 = inst_57771;
var inst_57749 = inst_57770;
var inst_57750 = inst_57772;
var inst_57751 = (0);
var state_57806__$1 = (function (){var statearr_57839 = state_57806;
(statearr_57839[(10)] = inst_57751);

(statearr_57839[(11)] = inst_57749);

(statearr_57839[(19)] = inst_57750);

(statearr_57839[(20)] = inst_57748);

return statearr_57839;
})();
var statearr_57840_59032 = state_57806__$1;
(statearr_57840_59032[(2)] = null);

(statearr_57840_59032[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57807 === (41))){
var inst_57766 = (state_57806[(23)]);
var inst_57781 = (state_57806[(2)]);
var inst_57782 = cljs.core.next(inst_57766);
var inst_57748 = inst_57782;
var inst_57749 = null;
var inst_57750 = (0);
var inst_57751 = (0);
var state_57806__$1 = (function (){var statearr_57841 = state_57806;
(statearr_57841[(10)] = inst_57751);

(statearr_57841[(11)] = inst_57749);

(statearr_57841[(19)] = inst_57750);

(statearr_57841[(20)] = inst_57748);

(statearr_57841[(25)] = inst_57781);

return statearr_57841;
})();
var statearr_57842_59033 = state_57806__$1;
(statearr_57842_59033[(2)] = null);

(statearr_57842_59033[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57807 === (43))){
var state_57806__$1 = state_57806;
var statearr_57843_59034 = state_57806__$1;
(statearr_57843_59034[(2)] = null);

(statearr_57843_59034[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57807 === (29))){
var inst_57790 = (state_57806[(2)]);
var state_57806__$1 = state_57806;
var statearr_57844_59035 = state_57806__$1;
(statearr_57844_59035[(2)] = inst_57790);

(statearr_57844_59035[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57807 === (44))){
var inst_57799 = (state_57806[(2)]);
var state_57806__$1 = (function (){var statearr_57845 = state_57806;
(statearr_57845[(26)] = inst_57799);

return statearr_57845;
})();
var statearr_57846_59036 = state_57806__$1;
(statearr_57846_59036[(2)] = null);

(statearr_57846_59036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57807 === (6))){
var inst_57740 = (state_57806[(27)]);
var inst_57739 = cljs.core.deref(cs);
var inst_57740__$1 = cljs.core.keys(inst_57739);
var inst_57741 = cljs.core.count(inst_57740__$1);
var inst_57742 = cljs.core.reset_BANG_(dctr,inst_57741);
var inst_57747 = cljs.core.seq(inst_57740__$1);
var inst_57748 = inst_57747;
var inst_57749 = null;
var inst_57750 = (0);
var inst_57751 = (0);
var state_57806__$1 = (function (){var statearr_57847 = state_57806;
(statearr_57847[(10)] = inst_57751);

(statearr_57847[(11)] = inst_57749);

(statearr_57847[(19)] = inst_57750);

(statearr_57847[(27)] = inst_57740__$1);

(statearr_57847[(20)] = inst_57748);

(statearr_57847[(28)] = inst_57742);

return statearr_57847;
})();
var statearr_57848_59039 = state_57806__$1;
(statearr_57848_59039[(2)] = null);

(statearr_57848_59039[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57807 === (28))){
var inst_57748 = (state_57806[(20)]);
var inst_57766 = (state_57806[(23)]);
var inst_57766__$1 = cljs.core.seq(inst_57748);
var state_57806__$1 = (function (){var statearr_57849 = state_57806;
(statearr_57849[(23)] = inst_57766__$1);

return statearr_57849;
})();
if(inst_57766__$1){
var statearr_57850_59040 = state_57806__$1;
(statearr_57850_59040[(1)] = (33));

} else {
var statearr_57851_59041 = state_57806__$1;
(statearr_57851_59041[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57807 === (25))){
var inst_57751 = (state_57806[(10)]);
var inst_57750 = (state_57806[(19)]);
var inst_57753 = (inst_57751 < inst_57750);
var inst_57754 = inst_57753;
var state_57806__$1 = state_57806;
if(cljs.core.truth_(inst_57754)){
var statearr_57852_59042 = state_57806__$1;
(statearr_57852_59042[(1)] = (27));

} else {
var statearr_57853_59043 = state_57806__$1;
(statearr_57853_59043[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57807 === (34))){
var state_57806__$1 = state_57806;
var statearr_57854_59044 = state_57806__$1;
(statearr_57854_59044[(2)] = null);

(statearr_57854_59044[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57807 === (17))){
var state_57806__$1 = state_57806;
var statearr_57855_59045 = state_57806__$1;
(statearr_57855_59045[(2)] = null);

(statearr_57855_59045[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57807 === (3))){
var inst_57804 = (state_57806[(2)]);
var state_57806__$1 = state_57806;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57806__$1,inst_57804);
} else {
if((state_val_57807 === (12))){
var inst_57735 = (state_57806[(2)]);
var state_57806__$1 = state_57806;
var statearr_57856_59046 = state_57806__$1;
(statearr_57856_59046[(2)] = inst_57735);

(statearr_57856_59046[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57807 === (2))){
var state_57806__$1 = state_57806;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57806__$1,(4),ch);
} else {
if((state_val_57807 === (23))){
var state_57806__$1 = state_57806;
var statearr_57857_59047 = state_57806__$1;
(statearr_57857_59047[(2)] = null);

(statearr_57857_59047[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57807 === (35))){
var inst_57788 = (state_57806[(2)]);
var state_57806__$1 = state_57806;
var statearr_57858_59048 = state_57806__$1;
(statearr_57858_59048[(2)] = inst_57788);

(statearr_57858_59048[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57807 === (19))){
var inst_57707 = (state_57806[(7)]);
var inst_57711 = cljs.core.chunk_first(inst_57707);
var inst_57712 = cljs.core.chunk_rest(inst_57707);
var inst_57713 = cljs.core.count(inst_57711);
var inst_57685 = inst_57712;
var inst_57686 = inst_57711;
var inst_57687 = inst_57713;
var inst_57688 = (0);
var state_57806__$1 = (function (){var statearr_57859 = state_57806;
(statearr_57859[(14)] = inst_57687);

(statearr_57859[(15)] = inst_57688);

(statearr_57859[(16)] = inst_57686);

(statearr_57859[(17)] = inst_57685);

return statearr_57859;
})();
var statearr_57860_59049 = state_57806__$1;
(statearr_57860_59049[(2)] = null);

(statearr_57860_59049[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57807 === (11))){
var inst_57707 = (state_57806[(7)]);
var inst_57685 = (state_57806[(17)]);
var inst_57707__$1 = cljs.core.seq(inst_57685);
var state_57806__$1 = (function (){var statearr_57861 = state_57806;
(statearr_57861[(7)] = inst_57707__$1);

return statearr_57861;
})();
if(inst_57707__$1){
var statearr_57862_59051 = state_57806__$1;
(statearr_57862_59051[(1)] = (16));

} else {
var statearr_57863_59052 = state_57806__$1;
(statearr_57863_59052[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57807 === (9))){
var inst_57737 = (state_57806[(2)]);
var state_57806__$1 = state_57806;
var statearr_57864_59053 = state_57806__$1;
(statearr_57864_59053[(2)] = inst_57737);

(statearr_57864_59053[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57807 === (5))){
var inst_57683 = cljs.core.deref(cs);
var inst_57684 = cljs.core.seq(inst_57683);
var inst_57685 = inst_57684;
var inst_57686 = null;
var inst_57687 = (0);
var inst_57688 = (0);
var state_57806__$1 = (function (){var statearr_57865 = state_57806;
(statearr_57865[(14)] = inst_57687);

(statearr_57865[(15)] = inst_57688);

(statearr_57865[(16)] = inst_57686);

(statearr_57865[(17)] = inst_57685);

return statearr_57865;
})();
var statearr_57866_59058 = state_57806__$1;
(statearr_57866_59058[(2)] = null);

(statearr_57866_59058[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57807 === (14))){
var state_57806__$1 = state_57806;
var statearr_57867_59059 = state_57806__$1;
(statearr_57867_59059[(2)] = null);

(statearr_57867_59059[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57807 === (45))){
var inst_57796 = (state_57806[(2)]);
var state_57806__$1 = state_57806;
var statearr_57868_59060 = state_57806__$1;
(statearr_57868_59060[(2)] = inst_57796);

(statearr_57868_59060[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57807 === (26))){
var inst_57740 = (state_57806[(27)]);
var inst_57792 = (state_57806[(2)]);
var inst_57793 = cljs.core.seq(inst_57740);
var state_57806__$1 = (function (){var statearr_57869 = state_57806;
(statearr_57869[(29)] = inst_57792);

return statearr_57869;
})();
if(inst_57793){
var statearr_57870_59061 = state_57806__$1;
(statearr_57870_59061[(1)] = (42));

} else {
var statearr_57871_59062 = state_57806__$1;
(statearr_57871_59062[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57807 === (16))){
var inst_57707 = (state_57806[(7)]);
var inst_57709 = cljs.core.chunked_seq_QMARK_(inst_57707);
var state_57806__$1 = state_57806;
if(inst_57709){
var statearr_57872_59063 = state_57806__$1;
(statearr_57872_59063[(1)] = (19));

} else {
var statearr_57873_59064 = state_57806__$1;
(statearr_57873_59064[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57807 === (38))){
var inst_57785 = (state_57806[(2)]);
var state_57806__$1 = state_57806;
var statearr_57874_59065 = state_57806__$1;
(statearr_57874_59065[(2)] = inst_57785);

(statearr_57874_59065[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57807 === (30))){
var state_57806__$1 = state_57806;
var statearr_57875_59070 = state_57806__$1;
(statearr_57875_59070[(2)] = null);

(statearr_57875_59070[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57807 === (10))){
var inst_57688 = (state_57806[(15)]);
var inst_57686 = (state_57806[(16)]);
var inst_57696 = cljs.core._nth(inst_57686,inst_57688);
var inst_57697 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57696,(0),null);
var inst_57698 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57696,(1),null);
var state_57806__$1 = (function (){var statearr_57876 = state_57806;
(statearr_57876[(24)] = inst_57697);

return statearr_57876;
})();
if(cljs.core.truth_(inst_57698)){
var statearr_57877_59074 = state_57806__$1;
(statearr_57877_59074[(1)] = (13));

} else {
var statearr_57878_59075 = state_57806__$1;
(statearr_57878_59075[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57807 === (18))){
var inst_57733 = (state_57806[(2)]);
var state_57806__$1 = state_57806;
var statearr_57879_59079 = state_57806__$1;
(statearr_57879_59079[(2)] = inst_57733);

(statearr_57879_59079[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57807 === (42))){
var state_57806__$1 = state_57806;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57806__$1,(45),dchan);
} else {
if((state_val_57807 === (37))){
var inst_57775 = (state_57806[(22)]);
var inst_57676 = (state_57806[(9)]);
var inst_57766 = (state_57806[(23)]);
var inst_57775__$1 = cljs.core.first(inst_57766);
var inst_57776 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_57775__$1,inst_57676,done);
var state_57806__$1 = (function (){var statearr_57880 = state_57806;
(statearr_57880[(22)] = inst_57775__$1);

return statearr_57880;
})();
if(cljs.core.truth_(inst_57776)){
var statearr_57881_59083 = state_57806__$1;
(statearr_57881_59083[(1)] = (39));

} else {
var statearr_57882_59084 = state_57806__$1;
(statearr_57882_59084[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57807 === (8))){
var inst_57687 = (state_57806[(14)]);
var inst_57688 = (state_57806[(15)]);
var inst_57690 = (inst_57688 < inst_57687);
var inst_57691 = inst_57690;
var state_57806__$1 = state_57806;
if(cljs.core.truth_(inst_57691)){
var statearr_57883_59088 = state_57806__$1;
(statearr_57883_59088[(1)] = (10));

} else {
var statearr_57884_59090 = state_57806__$1;
(statearr_57884_59090[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__57064__auto__ = null;
var cljs$core$async$mult_$_state_machine__57064__auto____0 = (function (){
var statearr_57885 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57885[(0)] = cljs$core$async$mult_$_state_machine__57064__auto__);

(statearr_57885[(1)] = (1));

return statearr_57885;
});
var cljs$core$async$mult_$_state_machine__57064__auto____1 = (function (state_57806){
while(true){
var ret_value__57065__auto__ = (function (){try{while(true){
var result__57066__auto__ = switch__57063__auto__(state_57806);
if(cljs.core.keyword_identical_QMARK_(result__57066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57066__auto__;
}
break;
}
}catch (e57886){var ex__57067__auto__ = e57886;
var statearr_57887_59094 = state_57806;
(statearr_57887_59094[(2)] = ex__57067__auto__);


if(cljs.core.seq((state_57806[(4)]))){
var statearr_57888_59095 = state_57806;
(statearr_57888_59095[(1)] = cljs.core.first((state_57806[(4)])));

} else {
throw ex__57067__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59096 = state_57806;
state_57806 = G__59096;
continue;
} else {
return ret_value__57065__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__57064__auto__ = function(state_57806){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__57064__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__57064__auto____1.call(this,state_57806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__57064__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__57064__auto____0;
cljs$core$async$mult_$_state_machine__57064__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__57064__auto____1;
return cljs$core$async$mult_$_state_machine__57064__auto__;
})()
})();
var state__57122__auto__ = (function (){var statearr_57889 = f__57121__auto__();
(statearr_57889[(6)] = c__57120__auto___59003);

return statearr_57889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57122__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__57891 = arguments.length;
switch (G__57891) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_59100 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_59100(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_59101 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_59101(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_59102 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_59102(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_59103 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_59103(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_59108 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_59108(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59109 = arguments.length;
var i__4737__auto___59110 = (0);
while(true){
if((i__4737__auto___59110 < len__4736__auto___59109)){
args__4742__auto__.push((arguments[i__4737__auto___59110]));

var G__59115 = (i__4737__auto___59110 + (1));
i__4737__auto___59110 = G__59115;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__57896){
var map__57897 = p__57896;
var map__57897__$1 = (((((!((map__57897 == null))))?(((((map__57897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57897.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57897):map__57897);
var opts = map__57897__$1;
var statearr_57899_59117 = state;
(statearr_57899_59117[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_57900_59118 = state;
(statearr_57900_59118[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_57901_59119 = state;
(statearr_57901_59119[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq57892){
var G__57893 = cljs.core.first(seq57892);
var seq57892__$1 = cljs.core.next(seq57892);
var G__57894 = cljs.core.first(seq57892__$1);
var seq57892__$2 = cljs.core.next(seq57892__$1);
var G__57895 = cljs.core.first(seq57892__$2);
var seq57892__$3 = cljs.core.next(seq57892__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__57893,G__57894,G__57895,seq57892__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57902 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57902 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta57903){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta57903 = meta57903;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async57902.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57904,meta57903__$1){
var self__ = this;
var _57904__$1 = this;
return (new cljs.core.async.t_cljs$core$async57902(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta57903__$1));
}));

(cljs.core.async.t_cljs$core$async57902.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57904){
var self__ = this;
var _57904__$1 = this;
return self__.meta57903;
}));

(cljs.core.async.t_cljs$core$async57902.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57902.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async57902.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57902.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async57902.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async57902.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async57902.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async57902.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async57902.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta57903","meta57903",2017851970,null)], null);
}));

(cljs.core.async.t_cljs$core$async57902.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async57902.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57902");

(cljs.core.async.t_cljs$core$async57902.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async57902");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57902.
 */
cljs.core.async.__GT_t_cljs$core$async57902 = (function cljs$core$async$mix_$___GT_t_cljs$core$async57902(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta57903){
return (new cljs.core.async.t_cljs$core$async57902(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta57903));
});

}

return (new cljs.core.async.t_cljs$core$async57902(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__57120__auto___59125 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57121__auto__ = (function (){var switch__57063__auto__ = (function (state_58006){
var state_val_58007 = (state_58006[(1)]);
if((state_val_58007 === (7))){
var inst_57921 = (state_58006[(2)]);
var state_58006__$1 = state_58006;
var statearr_58008_59129 = state_58006__$1;
(statearr_58008_59129[(2)] = inst_57921);

(statearr_58008_59129[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58007 === (20))){
var inst_57933 = (state_58006[(7)]);
var state_58006__$1 = state_58006;
var statearr_58009_59130 = state_58006__$1;
(statearr_58009_59130[(2)] = inst_57933);

(statearr_58009_59130[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58007 === (27))){
var state_58006__$1 = state_58006;
var statearr_58010_59131 = state_58006__$1;
(statearr_58010_59131[(2)] = null);

(statearr_58010_59131[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58007 === (1))){
var inst_57908 = (state_58006[(8)]);
var inst_57908__$1 = calc_state();
var inst_57910 = (inst_57908__$1 == null);
var inst_57911 = cljs.core.not(inst_57910);
var state_58006__$1 = (function (){var statearr_58011 = state_58006;
(statearr_58011[(8)] = inst_57908__$1);

return statearr_58011;
})();
if(inst_57911){
var statearr_58012_59132 = state_58006__$1;
(statearr_58012_59132[(1)] = (2));

} else {
var statearr_58013_59133 = state_58006__$1;
(statearr_58013_59133[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58007 === (24))){
var inst_57980 = (state_58006[(9)]);
var inst_57966 = (state_58006[(10)]);
var inst_57957 = (state_58006[(11)]);
var inst_57980__$1 = (inst_57957.cljs$core$IFn$_invoke$arity$1 ? inst_57957.cljs$core$IFn$_invoke$arity$1(inst_57966) : inst_57957.call(null,inst_57966));
var state_58006__$1 = (function (){var statearr_58014 = state_58006;
(statearr_58014[(9)] = inst_57980__$1);

return statearr_58014;
})();
if(cljs.core.truth_(inst_57980__$1)){
var statearr_58015_59134 = state_58006__$1;
(statearr_58015_59134[(1)] = (29));

} else {
var statearr_58016_59135 = state_58006__$1;
(statearr_58016_59135[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58007 === (4))){
var inst_57924 = (state_58006[(2)]);
var state_58006__$1 = state_58006;
if(cljs.core.truth_(inst_57924)){
var statearr_58017_59136 = state_58006__$1;
(statearr_58017_59136[(1)] = (8));

} else {
var statearr_58018_59137 = state_58006__$1;
(statearr_58018_59137[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58007 === (15))){
var inst_57951 = (state_58006[(2)]);
var state_58006__$1 = state_58006;
if(cljs.core.truth_(inst_57951)){
var statearr_58019_59138 = state_58006__$1;
(statearr_58019_59138[(1)] = (19));

} else {
var statearr_58020_59140 = state_58006__$1;
(statearr_58020_59140[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58007 === (21))){
var inst_57956 = (state_58006[(12)]);
var inst_57956__$1 = (state_58006[(2)]);
var inst_57957 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57956__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_57958 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57956__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_57959 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57956__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_58006__$1 = (function (){var statearr_58021 = state_58006;
(statearr_58021[(12)] = inst_57956__$1);

(statearr_58021[(13)] = inst_57958);

(statearr_58021[(11)] = inst_57957);

return statearr_58021;
})();
return cljs.core.async.ioc_alts_BANG_(state_58006__$1,(22),inst_57959);
} else {
if((state_val_58007 === (31))){
var inst_57988 = (state_58006[(2)]);
var state_58006__$1 = state_58006;
if(cljs.core.truth_(inst_57988)){
var statearr_58022_59141 = state_58006__$1;
(statearr_58022_59141[(1)] = (32));

} else {
var statearr_58023_59142 = state_58006__$1;
(statearr_58023_59142[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58007 === (32))){
var inst_57965 = (state_58006[(14)]);
var state_58006__$1 = state_58006;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58006__$1,(35),out,inst_57965);
} else {
if((state_val_58007 === (33))){
var inst_57956 = (state_58006[(12)]);
var inst_57933 = inst_57956;
var state_58006__$1 = (function (){var statearr_58024 = state_58006;
(statearr_58024[(7)] = inst_57933);

return statearr_58024;
})();
var statearr_58025_59143 = state_58006__$1;
(statearr_58025_59143[(2)] = null);

(statearr_58025_59143[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58007 === (13))){
var inst_57933 = (state_58006[(7)]);
var inst_57940 = inst_57933.cljs$lang$protocol_mask$partition0$;
var inst_57941 = (inst_57940 & (64));
var inst_57942 = inst_57933.cljs$core$ISeq$;
var inst_57943 = (cljs.core.PROTOCOL_SENTINEL === inst_57942);
var inst_57944 = ((inst_57941) || (inst_57943));
var state_58006__$1 = state_58006;
if(cljs.core.truth_(inst_57944)){
var statearr_58026_59144 = state_58006__$1;
(statearr_58026_59144[(1)] = (16));

} else {
var statearr_58027_59145 = state_58006__$1;
(statearr_58027_59145[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58007 === (22))){
var inst_57965 = (state_58006[(14)]);
var inst_57966 = (state_58006[(10)]);
var inst_57964 = (state_58006[(2)]);
var inst_57965__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57964,(0),null);
var inst_57966__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57964,(1),null);
var inst_57967 = (inst_57965__$1 == null);
var inst_57968 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_57966__$1,change);
var inst_57969 = ((inst_57967) || (inst_57968));
var state_58006__$1 = (function (){var statearr_58028 = state_58006;
(statearr_58028[(14)] = inst_57965__$1);

(statearr_58028[(10)] = inst_57966__$1);

return statearr_58028;
})();
if(cljs.core.truth_(inst_57969)){
var statearr_58029_59150 = state_58006__$1;
(statearr_58029_59150[(1)] = (23));

} else {
var statearr_58030_59152 = state_58006__$1;
(statearr_58030_59152[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58007 === (36))){
var inst_57956 = (state_58006[(12)]);
var inst_57933 = inst_57956;
var state_58006__$1 = (function (){var statearr_58031 = state_58006;
(statearr_58031[(7)] = inst_57933);

return statearr_58031;
})();
var statearr_58032_59153 = state_58006__$1;
(statearr_58032_59153[(2)] = null);

(statearr_58032_59153[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58007 === (29))){
var inst_57980 = (state_58006[(9)]);
var state_58006__$1 = state_58006;
var statearr_58033_59154 = state_58006__$1;
(statearr_58033_59154[(2)] = inst_57980);

(statearr_58033_59154[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58007 === (6))){
var state_58006__$1 = state_58006;
var statearr_58034_59155 = state_58006__$1;
(statearr_58034_59155[(2)] = false);

(statearr_58034_59155[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58007 === (28))){
var inst_57976 = (state_58006[(2)]);
var inst_57977 = calc_state();
var inst_57933 = inst_57977;
var state_58006__$1 = (function (){var statearr_58035 = state_58006;
(statearr_58035[(15)] = inst_57976);

(statearr_58035[(7)] = inst_57933);

return statearr_58035;
})();
var statearr_58036_59156 = state_58006__$1;
(statearr_58036_59156[(2)] = null);

(statearr_58036_59156[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58007 === (25))){
var inst_58002 = (state_58006[(2)]);
var state_58006__$1 = state_58006;
var statearr_58037_59158 = state_58006__$1;
(statearr_58037_59158[(2)] = inst_58002);

(statearr_58037_59158[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58007 === (34))){
var inst_58000 = (state_58006[(2)]);
var state_58006__$1 = state_58006;
var statearr_58038_59159 = state_58006__$1;
(statearr_58038_59159[(2)] = inst_58000);

(statearr_58038_59159[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58007 === (17))){
var state_58006__$1 = state_58006;
var statearr_58039_59160 = state_58006__$1;
(statearr_58039_59160[(2)] = false);

(statearr_58039_59160[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58007 === (3))){
var state_58006__$1 = state_58006;
var statearr_58040_59165 = state_58006__$1;
(statearr_58040_59165[(2)] = false);

(statearr_58040_59165[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58007 === (12))){
var inst_58004 = (state_58006[(2)]);
var state_58006__$1 = state_58006;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58006__$1,inst_58004);
} else {
if((state_val_58007 === (2))){
var inst_57908 = (state_58006[(8)]);
var inst_57913 = inst_57908.cljs$lang$protocol_mask$partition0$;
var inst_57914 = (inst_57913 & (64));
var inst_57915 = inst_57908.cljs$core$ISeq$;
var inst_57916 = (cljs.core.PROTOCOL_SENTINEL === inst_57915);
var inst_57917 = ((inst_57914) || (inst_57916));
var state_58006__$1 = state_58006;
if(cljs.core.truth_(inst_57917)){
var statearr_58041_59166 = state_58006__$1;
(statearr_58041_59166[(1)] = (5));

} else {
var statearr_58042_59167 = state_58006__$1;
(statearr_58042_59167[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58007 === (23))){
var inst_57965 = (state_58006[(14)]);
var inst_57971 = (inst_57965 == null);
var state_58006__$1 = state_58006;
if(cljs.core.truth_(inst_57971)){
var statearr_58043_59168 = state_58006__$1;
(statearr_58043_59168[(1)] = (26));

} else {
var statearr_58044_59169 = state_58006__$1;
(statearr_58044_59169[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58007 === (35))){
var inst_57991 = (state_58006[(2)]);
var state_58006__$1 = state_58006;
if(cljs.core.truth_(inst_57991)){
var statearr_58045_59170 = state_58006__$1;
(statearr_58045_59170[(1)] = (36));

} else {
var statearr_58046_59171 = state_58006__$1;
(statearr_58046_59171[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58007 === (19))){
var inst_57933 = (state_58006[(7)]);
var inst_57953 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_57933);
var state_58006__$1 = state_58006;
var statearr_58047_59172 = state_58006__$1;
(statearr_58047_59172[(2)] = inst_57953);

(statearr_58047_59172[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58007 === (11))){
var inst_57933 = (state_58006[(7)]);
var inst_57937 = (inst_57933 == null);
var inst_57938 = cljs.core.not(inst_57937);
var state_58006__$1 = state_58006;
if(inst_57938){
var statearr_58048_59173 = state_58006__$1;
(statearr_58048_59173[(1)] = (13));

} else {
var statearr_58049_59174 = state_58006__$1;
(statearr_58049_59174[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58007 === (9))){
var inst_57908 = (state_58006[(8)]);
var state_58006__$1 = state_58006;
var statearr_58050_59175 = state_58006__$1;
(statearr_58050_59175[(2)] = inst_57908);

(statearr_58050_59175[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58007 === (5))){
var state_58006__$1 = state_58006;
var statearr_58051_59176 = state_58006__$1;
(statearr_58051_59176[(2)] = true);

(statearr_58051_59176[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58007 === (14))){
var state_58006__$1 = state_58006;
var statearr_58052_59177 = state_58006__$1;
(statearr_58052_59177[(2)] = false);

(statearr_58052_59177[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58007 === (26))){
var inst_57966 = (state_58006[(10)]);
var inst_57973 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_57966);
var state_58006__$1 = state_58006;
var statearr_58053_59178 = state_58006__$1;
(statearr_58053_59178[(2)] = inst_57973);

(statearr_58053_59178[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58007 === (16))){
var state_58006__$1 = state_58006;
var statearr_58054_59179 = state_58006__$1;
(statearr_58054_59179[(2)] = true);

(statearr_58054_59179[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58007 === (38))){
var inst_57996 = (state_58006[(2)]);
var state_58006__$1 = state_58006;
var statearr_58055_59180 = state_58006__$1;
(statearr_58055_59180[(2)] = inst_57996);

(statearr_58055_59180[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58007 === (30))){
var inst_57958 = (state_58006[(13)]);
var inst_57966 = (state_58006[(10)]);
var inst_57957 = (state_58006[(11)]);
var inst_57983 = cljs.core.empty_QMARK_(inst_57957);
var inst_57984 = (inst_57958.cljs$core$IFn$_invoke$arity$1 ? inst_57958.cljs$core$IFn$_invoke$arity$1(inst_57966) : inst_57958.call(null,inst_57966));
var inst_57985 = cljs.core.not(inst_57984);
var inst_57986 = ((inst_57983) && (inst_57985));
var state_58006__$1 = state_58006;
var statearr_58056_59181 = state_58006__$1;
(statearr_58056_59181[(2)] = inst_57986);

(statearr_58056_59181[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58007 === (10))){
var inst_57908 = (state_58006[(8)]);
var inst_57929 = (state_58006[(2)]);
var inst_57930 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57929,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_57931 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57929,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_57932 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57929,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_57933 = inst_57908;
var state_58006__$1 = (function (){var statearr_58057 = state_58006;
(statearr_58057[(16)] = inst_57932);

(statearr_58057[(17)] = inst_57930);

(statearr_58057[(7)] = inst_57933);

(statearr_58057[(18)] = inst_57931);

return statearr_58057;
})();
var statearr_58058_59185 = state_58006__$1;
(statearr_58058_59185[(2)] = null);

(statearr_58058_59185[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58007 === (18))){
var inst_57948 = (state_58006[(2)]);
var state_58006__$1 = state_58006;
var statearr_58059_59186 = state_58006__$1;
(statearr_58059_59186[(2)] = inst_57948);

(statearr_58059_59186[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58007 === (37))){
var state_58006__$1 = state_58006;
var statearr_58060_59187 = state_58006__$1;
(statearr_58060_59187[(2)] = null);

(statearr_58060_59187[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58007 === (8))){
var inst_57908 = (state_58006[(8)]);
var inst_57926 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_57908);
var state_58006__$1 = state_58006;
var statearr_58061_59188 = state_58006__$1;
(statearr_58061_59188[(2)] = inst_57926);

(statearr_58061_59188[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__57064__auto__ = null;
var cljs$core$async$mix_$_state_machine__57064__auto____0 = (function (){
var statearr_58062 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58062[(0)] = cljs$core$async$mix_$_state_machine__57064__auto__);

(statearr_58062[(1)] = (1));

return statearr_58062;
});
var cljs$core$async$mix_$_state_machine__57064__auto____1 = (function (state_58006){
while(true){
var ret_value__57065__auto__ = (function (){try{while(true){
var result__57066__auto__ = switch__57063__auto__(state_58006);
if(cljs.core.keyword_identical_QMARK_(result__57066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57066__auto__;
}
break;
}
}catch (e58063){var ex__57067__auto__ = e58063;
var statearr_58064_59189 = state_58006;
(statearr_58064_59189[(2)] = ex__57067__auto__);


if(cljs.core.seq((state_58006[(4)]))){
var statearr_58065_59190 = state_58006;
(statearr_58065_59190[(1)] = cljs.core.first((state_58006[(4)])));

} else {
throw ex__57067__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59191 = state_58006;
state_58006 = G__59191;
continue;
} else {
return ret_value__57065__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__57064__auto__ = function(state_58006){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__57064__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__57064__auto____1.call(this,state_58006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__57064__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__57064__auto____0;
cljs$core$async$mix_$_state_machine__57064__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__57064__auto____1;
return cljs$core$async$mix_$_state_machine__57064__auto__;
})()
})();
var state__57122__auto__ = (function (){var statearr_58066 = f__57121__auto__();
(statearr_58066[(6)] = c__57120__auto___59125);

return statearr_58066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57122__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_59193 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_59193(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_59194 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_59194(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_59195 = (function() {
var G__59196 = null;
var G__59196__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__59196__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__59196 = function(p,v){
switch(arguments.length){
case 1:
return G__59196__1.call(this,p);
case 2:
return G__59196__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__59196.cljs$core$IFn$_invoke$arity$1 = G__59196__1;
G__59196.cljs$core$IFn$_invoke$arity$2 = G__59196__2;
return G__59196;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__58068 = arguments.length;
switch (G__58068) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_59195(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_59195(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__58071 = arguments.length;
switch (G__58071) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__58069_SHARP_){
if(cljs.core.truth_((p1__58069_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__58069_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__58069_SHARP_.call(null,topic)))){
return p1__58069_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__58069_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async58072 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58072 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta58073){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta58073 = meta58073;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async58072.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58074,meta58073__$1){
var self__ = this;
var _58074__$1 = this;
return (new cljs.core.async.t_cljs$core$async58072(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta58073__$1));
}));

(cljs.core.async.t_cljs$core$async58072.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58074){
var self__ = this;
var _58074__$1 = this;
return self__.meta58073;
}));

(cljs.core.async.t_cljs$core$async58072.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58072.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async58072.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58072.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async58072.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async58072.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async58072.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async58072.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta58073","meta58073",-1628057461,null)], null);
}));

(cljs.core.async.t_cljs$core$async58072.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async58072.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58072");

(cljs.core.async.t_cljs$core$async58072.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async58072");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58072.
 */
cljs.core.async.__GT_t_cljs$core$async58072 = (function cljs$core$async$__GT_t_cljs$core$async58072(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta58073){
return (new cljs.core.async.t_cljs$core$async58072(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta58073));
});

}

return (new cljs.core.async.t_cljs$core$async58072(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__57120__auto___59209 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57121__auto__ = (function (){var switch__57063__auto__ = (function (state_58146){
var state_val_58147 = (state_58146[(1)]);
if((state_val_58147 === (7))){
var inst_58142 = (state_58146[(2)]);
var state_58146__$1 = state_58146;
var statearr_58148_59210 = state_58146__$1;
(statearr_58148_59210[(2)] = inst_58142);

(statearr_58148_59210[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58147 === (20))){
var state_58146__$1 = state_58146;
var statearr_58149_59211 = state_58146__$1;
(statearr_58149_59211[(2)] = null);

(statearr_58149_59211[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58147 === (1))){
var state_58146__$1 = state_58146;
var statearr_58150_59212 = state_58146__$1;
(statearr_58150_59212[(2)] = null);

(statearr_58150_59212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58147 === (24))){
var inst_58125 = (state_58146[(7)]);
var inst_58134 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_58125);
var state_58146__$1 = state_58146;
var statearr_58151_59213 = state_58146__$1;
(statearr_58151_59213[(2)] = inst_58134);

(statearr_58151_59213[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58147 === (4))){
var inst_58077 = (state_58146[(8)]);
var inst_58077__$1 = (state_58146[(2)]);
var inst_58078 = (inst_58077__$1 == null);
var state_58146__$1 = (function (){var statearr_58152 = state_58146;
(statearr_58152[(8)] = inst_58077__$1);

return statearr_58152;
})();
if(cljs.core.truth_(inst_58078)){
var statearr_58153_59214 = state_58146__$1;
(statearr_58153_59214[(1)] = (5));

} else {
var statearr_58154_59215 = state_58146__$1;
(statearr_58154_59215[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58147 === (15))){
var inst_58119 = (state_58146[(2)]);
var state_58146__$1 = state_58146;
var statearr_58155_59216 = state_58146__$1;
(statearr_58155_59216[(2)] = inst_58119);

(statearr_58155_59216[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58147 === (21))){
var inst_58139 = (state_58146[(2)]);
var state_58146__$1 = (function (){var statearr_58156 = state_58146;
(statearr_58156[(9)] = inst_58139);

return statearr_58156;
})();
var statearr_58157_59217 = state_58146__$1;
(statearr_58157_59217[(2)] = null);

(statearr_58157_59217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58147 === (13))){
var inst_58101 = (state_58146[(10)]);
var inst_58103 = cljs.core.chunked_seq_QMARK_(inst_58101);
var state_58146__$1 = state_58146;
if(inst_58103){
var statearr_58158_59218 = state_58146__$1;
(statearr_58158_59218[(1)] = (16));

} else {
var statearr_58159_59219 = state_58146__$1;
(statearr_58159_59219[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58147 === (22))){
var inst_58131 = (state_58146[(2)]);
var state_58146__$1 = state_58146;
if(cljs.core.truth_(inst_58131)){
var statearr_58160_59220 = state_58146__$1;
(statearr_58160_59220[(1)] = (23));

} else {
var statearr_58161_59221 = state_58146__$1;
(statearr_58161_59221[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58147 === (6))){
var inst_58127 = (state_58146[(11)]);
var inst_58077 = (state_58146[(8)]);
var inst_58125 = (state_58146[(7)]);
var inst_58125__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_58077) : topic_fn.call(null,inst_58077));
var inst_58126 = cljs.core.deref(mults);
var inst_58127__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58126,inst_58125__$1);
var state_58146__$1 = (function (){var statearr_58162 = state_58146;
(statearr_58162[(11)] = inst_58127__$1);

(statearr_58162[(7)] = inst_58125__$1);

return statearr_58162;
})();
if(cljs.core.truth_(inst_58127__$1)){
var statearr_58163_59222 = state_58146__$1;
(statearr_58163_59222[(1)] = (19));

} else {
var statearr_58164_59223 = state_58146__$1;
(statearr_58164_59223[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58147 === (25))){
var inst_58136 = (state_58146[(2)]);
var state_58146__$1 = state_58146;
var statearr_58165_59224 = state_58146__$1;
(statearr_58165_59224[(2)] = inst_58136);

(statearr_58165_59224[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58147 === (17))){
var inst_58101 = (state_58146[(10)]);
var inst_58110 = cljs.core.first(inst_58101);
var inst_58111 = cljs.core.async.muxch_STAR_(inst_58110);
var inst_58112 = cljs.core.async.close_BANG_(inst_58111);
var inst_58113 = cljs.core.next(inst_58101);
var inst_58087 = inst_58113;
var inst_58088 = null;
var inst_58089 = (0);
var inst_58090 = (0);
var state_58146__$1 = (function (){var statearr_58166 = state_58146;
(statearr_58166[(12)] = inst_58089);

(statearr_58166[(13)] = inst_58112);

(statearr_58166[(14)] = inst_58088);

(statearr_58166[(15)] = inst_58090);

(statearr_58166[(16)] = inst_58087);

return statearr_58166;
})();
var statearr_58167_59228 = state_58146__$1;
(statearr_58167_59228[(2)] = null);

(statearr_58167_59228[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58147 === (3))){
var inst_58144 = (state_58146[(2)]);
var state_58146__$1 = state_58146;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58146__$1,inst_58144);
} else {
if((state_val_58147 === (12))){
var inst_58121 = (state_58146[(2)]);
var state_58146__$1 = state_58146;
var statearr_58168_59229 = state_58146__$1;
(statearr_58168_59229[(2)] = inst_58121);

(statearr_58168_59229[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58147 === (2))){
var state_58146__$1 = state_58146;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58146__$1,(4),ch);
} else {
if((state_val_58147 === (23))){
var state_58146__$1 = state_58146;
var statearr_58169_59234 = state_58146__$1;
(statearr_58169_59234[(2)] = null);

(statearr_58169_59234[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58147 === (19))){
var inst_58127 = (state_58146[(11)]);
var inst_58077 = (state_58146[(8)]);
var inst_58129 = cljs.core.async.muxch_STAR_(inst_58127);
var state_58146__$1 = state_58146;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58146__$1,(22),inst_58129,inst_58077);
} else {
if((state_val_58147 === (11))){
var inst_58101 = (state_58146[(10)]);
var inst_58087 = (state_58146[(16)]);
var inst_58101__$1 = cljs.core.seq(inst_58087);
var state_58146__$1 = (function (){var statearr_58170 = state_58146;
(statearr_58170[(10)] = inst_58101__$1);

return statearr_58170;
})();
if(inst_58101__$1){
var statearr_58171_59238 = state_58146__$1;
(statearr_58171_59238[(1)] = (13));

} else {
var statearr_58172_59239 = state_58146__$1;
(statearr_58172_59239[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58147 === (9))){
var inst_58123 = (state_58146[(2)]);
var state_58146__$1 = state_58146;
var statearr_58173_59240 = state_58146__$1;
(statearr_58173_59240[(2)] = inst_58123);

(statearr_58173_59240[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58147 === (5))){
var inst_58084 = cljs.core.deref(mults);
var inst_58085 = cljs.core.vals(inst_58084);
var inst_58086 = cljs.core.seq(inst_58085);
var inst_58087 = inst_58086;
var inst_58088 = null;
var inst_58089 = (0);
var inst_58090 = (0);
var state_58146__$1 = (function (){var statearr_58174 = state_58146;
(statearr_58174[(12)] = inst_58089);

(statearr_58174[(14)] = inst_58088);

(statearr_58174[(15)] = inst_58090);

(statearr_58174[(16)] = inst_58087);

return statearr_58174;
})();
var statearr_58175_59244 = state_58146__$1;
(statearr_58175_59244[(2)] = null);

(statearr_58175_59244[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58147 === (14))){
var state_58146__$1 = state_58146;
var statearr_58179_59245 = state_58146__$1;
(statearr_58179_59245[(2)] = null);

(statearr_58179_59245[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58147 === (16))){
var inst_58101 = (state_58146[(10)]);
var inst_58105 = cljs.core.chunk_first(inst_58101);
var inst_58106 = cljs.core.chunk_rest(inst_58101);
var inst_58107 = cljs.core.count(inst_58105);
var inst_58087 = inst_58106;
var inst_58088 = inst_58105;
var inst_58089 = inst_58107;
var inst_58090 = (0);
var state_58146__$1 = (function (){var statearr_58180 = state_58146;
(statearr_58180[(12)] = inst_58089);

(statearr_58180[(14)] = inst_58088);

(statearr_58180[(15)] = inst_58090);

(statearr_58180[(16)] = inst_58087);

return statearr_58180;
})();
var statearr_58181_59249 = state_58146__$1;
(statearr_58181_59249[(2)] = null);

(statearr_58181_59249[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58147 === (10))){
var inst_58089 = (state_58146[(12)]);
var inst_58088 = (state_58146[(14)]);
var inst_58090 = (state_58146[(15)]);
var inst_58087 = (state_58146[(16)]);
var inst_58095 = cljs.core._nth(inst_58088,inst_58090);
var inst_58096 = cljs.core.async.muxch_STAR_(inst_58095);
var inst_58097 = cljs.core.async.close_BANG_(inst_58096);
var inst_58098 = (inst_58090 + (1));
var tmp58176 = inst_58089;
var tmp58177 = inst_58088;
var tmp58178 = inst_58087;
var inst_58087__$1 = tmp58178;
var inst_58088__$1 = tmp58177;
var inst_58089__$1 = tmp58176;
var inst_58090__$1 = inst_58098;
var state_58146__$1 = (function (){var statearr_58182 = state_58146;
(statearr_58182[(12)] = inst_58089__$1);

(statearr_58182[(17)] = inst_58097);

(statearr_58182[(14)] = inst_58088__$1);

(statearr_58182[(15)] = inst_58090__$1);

(statearr_58182[(16)] = inst_58087__$1);

return statearr_58182;
})();
var statearr_58183_59250 = state_58146__$1;
(statearr_58183_59250[(2)] = null);

(statearr_58183_59250[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58147 === (18))){
var inst_58116 = (state_58146[(2)]);
var state_58146__$1 = state_58146;
var statearr_58184_59254 = state_58146__$1;
(statearr_58184_59254[(2)] = inst_58116);

(statearr_58184_59254[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58147 === (8))){
var inst_58089 = (state_58146[(12)]);
var inst_58090 = (state_58146[(15)]);
var inst_58092 = (inst_58090 < inst_58089);
var inst_58093 = inst_58092;
var state_58146__$1 = state_58146;
if(cljs.core.truth_(inst_58093)){
var statearr_58185_59255 = state_58146__$1;
(statearr_58185_59255[(1)] = (10));

} else {
var statearr_58186_59256 = state_58146__$1;
(statearr_58186_59256[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__57064__auto__ = null;
var cljs$core$async$state_machine__57064__auto____0 = (function (){
var statearr_58187 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58187[(0)] = cljs$core$async$state_machine__57064__auto__);

(statearr_58187[(1)] = (1));

return statearr_58187;
});
var cljs$core$async$state_machine__57064__auto____1 = (function (state_58146){
while(true){
var ret_value__57065__auto__ = (function (){try{while(true){
var result__57066__auto__ = switch__57063__auto__(state_58146);
if(cljs.core.keyword_identical_QMARK_(result__57066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57066__auto__;
}
break;
}
}catch (e58188){var ex__57067__auto__ = e58188;
var statearr_58189_59258 = state_58146;
(statearr_58189_59258[(2)] = ex__57067__auto__);


if(cljs.core.seq((state_58146[(4)]))){
var statearr_58190_59259 = state_58146;
(statearr_58190_59259[(1)] = cljs.core.first((state_58146[(4)])));

} else {
throw ex__57067__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59263 = state_58146;
state_58146 = G__59263;
continue;
} else {
return ret_value__57065__auto__;
}
break;
}
});
cljs$core$async$state_machine__57064__auto__ = function(state_58146){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__57064__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__57064__auto____1.call(this,state_58146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__57064__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__57064__auto____0;
cljs$core$async$state_machine__57064__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__57064__auto____1;
return cljs$core$async$state_machine__57064__auto__;
})()
})();
var state__57122__auto__ = (function (){var statearr_58191 = f__57121__auto__();
(statearr_58191[(6)] = c__57120__auto___59209);

return statearr_58191;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57122__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__58193 = arguments.length;
switch (G__58193) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__58195 = arguments.length;
switch (G__58195) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__58197 = arguments.length;
switch (G__58197) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__57120__auto___59279 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57121__auto__ = (function (){var switch__57063__auto__ = (function (state_58240){
var state_val_58241 = (state_58240[(1)]);
if((state_val_58241 === (7))){
var state_58240__$1 = state_58240;
var statearr_58242_59280 = state_58240__$1;
(statearr_58242_59280[(2)] = null);

(statearr_58242_59280[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58241 === (1))){
var state_58240__$1 = state_58240;
var statearr_58243_59281 = state_58240__$1;
(statearr_58243_59281[(2)] = null);

(statearr_58243_59281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58241 === (4))){
var inst_58201 = (state_58240[(7)]);
var inst_58200 = (state_58240[(8)]);
var inst_58203 = (inst_58201 < inst_58200);
var state_58240__$1 = state_58240;
if(cljs.core.truth_(inst_58203)){
var statearr_58244_59288 = state_58240__$1;
(statearr_58244_59288[(1)] = (6));

} else {
var statearr_58245_59289 = state_58240__$1;
(statearr_58245_59289[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58241 === (15))){
var inst_58226 = (state_58240[(9)]);
var inst_58231 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_58226);
var state_58240__$1 = state_58240;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58240__$1,(17),out,inst_58231);
} else {
if((state_val_58241 === (13))){
var inst_58226 = (state_58240[(9)]);
var inst_58226__$1 = (state_58240[(2)]);
var inst_58227 = cljs.core.some(cljs.core.nil_QMARK_,inst_58226__$1);
var state_58240__$1 = (function (){var statearr_58246 = state_58240;
(statearr_58246[(9)] = inst_58226__$1);

return statearr_58246;
})();
if(cljs.core.truth_(inst_58227)){
var statearr_58247_59290 = state_58240__$1;
(statearr_58247_59290[(1)] = (14));

} else {
var statearr_58248_59291 = state_58240__$1;
(statearr_58248_59291[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58241 === (6))){
var state_58240__$1 = state_58240;
var statearr_58249_59292 = state_58240__$1;
(statearr_58249_59292[(2)] = null);

(statearr_58249_59292[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58241 === (17))){
var inst_58233 = (state_58240[(2)]);
var state_58240__$1 = (function (){var statearr_58251 = state_58240;
(statearr_58251[(10)] = inst_58233);

return statearr_58251;
})();
var statearr_58252_59293 = state_58240__$1;
(statearr_58252_59293[(2)] = null);

(statearr_58252_59293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58241 === (3))){
var inst_58238 = (state_58240[(2)]);
var state_58240__$1 = state_58240;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58240__$1,inst_58238);
} else {
if((state_val_58241 === (12))){
var _ = (function (){var statearr_58253 = state_58240;
(statearr_58253[(4)] = cljs.core.rest((state_58240[(4)])));

return statearr_58253;
})();
var state_58240__$1 = state_58240;
var ex58250 = (state_58240__$1[(2)]);
var statearr_58254_59294 = state_58240__$1;
(statearr_58254_59294[(5)] = ex58250);


if((ex58250 instanceof Object)){
var statearr_58255_59295 = state_58240__$1;
(statearr_58255_59295[(1)] = (11));

(statearr_58255_59295[(5)] = null);

} else {
throw ex58250;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58241 === (2))){
var inst_58199 = cljs.core.reset_BANG_(dctr,cnt);
var inst_58200 = cnt;
var inst_58201 = (0);
var state_58240__$1 = (function (){var statearr_58256 = state_58240;
(statearr_58256[(7)] = inst_58201);

(statearr_58256[(11)] = inst_58199);

(statearr_58256[(8)] = inst_58200);

return statearr_58256;
})();
var statearr_58257_59296 = state_58240__$1;
(statearr_58257_59296[(2)] = null);

(statearr_58257_59296[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58241 === (11))){
var inst_58205 = (state_58240[(2)]);
var inst_58206 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_58240__$1 = (function (){var statearr_58258 = state_58240;
(statearr_58258[(12)] = inst_58205);

return statearr_58258;
})();
var statearr_58259_59297 = state_58240__$1;
(statearr_58259_59297[(2)] = inst_58206);

(statearr_58259_59297[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58241 === (9))){
var inst_58201 = (state_58240[(7)]);
var _ = (function (){var statearr_58260 = state_58240;
(statearr_58260[(4)] = cljs.core.cons((12),(state_58240[(4)])));

return statearr_58260;
})();
var inst_58212 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_58201) : chs__$1.call(null,inst_58201));
var inst_58213 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_58201) : done.call(null,inst_58201));
var inst_58214 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_58212,inst_58213);
var ___$1 = (function (){var statearr_58261 = state_58240;
(statearr_58261[(4)] = cljs.core.rest((state_58240[(4)])));

return statearr_58261;
})();
var state_58240__$1 = state_58240;
var statearr_58262_59304 = state_58240__$1;
(statearr_58262_59304[(2)] = inst_58214);

(statearr_58262_59304[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58241 === (5))){
var inst_58224 = (state_58240[(2)]);
var state_58240__$1 = (function (){var statearr_58263 = state_58240;
(statearr_58263[(13)] = inst_58224);

return statearr_58263;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58240__$1,(13),dchan);
} else {
if((state_val_58241 === (14))){
var inst_58229 = cljs.core.async.close_BANG_(out);
var state_58240__$1 = state_58240;
var statearr_58264_59305 = state_58240__$1;
(statearr_58264_59305[(2)] = inst_58229);

(statearr_58264_59305[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58241 === (16))){
var inst_58236 = (state_58240[(2)]);
var state_58240__$1 = state_58240;
var statearr_58265_59306 = state_58240__$1;
(statearr_58265_59306[(2)] = inst_58236);

(statearr_58265_59306[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58241 === (10))){
var inst_58201 = (state_58240[(7)]);
var inst_58217 = (state_58240[(2)]);
var inst_58218 = (inst_58201 + (1));
var inst_58201__$1 = inst_58218;
var state_58240__$1 = (function (){var statearr_58266 = state_58240;
(statearr_58266[(7)] = inst_58201__$1);

(statearr_58266[(14)] = inst_58217);

return statearr_58266;
})();
var statearr_58267_59307 = state_58240__$1;
(statearr_58267_59307[(2)] = null);

(statearr_58267_59307[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58241 === (8))){
var inst_58222 = (state_58240[(2)]);
var state_58240__$1 = state_58240;
var statearr_58268_59308 = state_58240__$1;
(statearr_58268_59308[(2)] = inst_58222);

(statearr_58268_59308[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__57064__auto__ = null;
var cljs$core$async$state_machine__57064__auto____0 = (function (){
var statearr_58269 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58269[(0)] = cljs$core$async$state_machine__57064__auto__);

(statearr_58269[(1)] = (1));

return statearr_58269;
});
var cljs$core$async$state_machine__57064__auto____1 = (function (state_58240){
while(true){
var ret_value__57065__auto__ = (function (){try{while(true){
var result__57066__auto__ = switch__57063__auto__(state_58240);
if(cljs.core.keyword_identical_QMARK_(result__57066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57066__auto__;
}
break;
}
}catch (e58270){var ex__57067__auto__ = e58270;
var statearr_58271_59309 = state_58240;
(statearr_58271_59309[(2)] = ex__57067__auto__);


if(cljs.core.seq((state_58240[(4)]))){
var statearr_58272_59312 = state_58240;
(statearr_58272_59312[(1)] = cljs.core.first((state_58240[(4)])));

} else {
throw ex__57067__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59317 = state_58240;
state_58240 = G__59317;
continue;
} else {
return ret_value__57065__auto__;
}
break;
}
});
cljs$core$async$state_machine__57064__auto__ = function(state_58240){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__57064__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__57064__auto____1.call(this,state_58240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__57064__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__57064__auto____0;
cljs$core$async$state_machine__57064__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__57064__auto____1;
return cljs$core$async$state_machine__57064__auto__;
})()
})();
var state__57122__auto__ = (function (){var statearr_58273 = f__57121__auto__();
(statearr_58273[(6)] = c__57120__auto___59279);

return statearr_58273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57122__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__58276 = arguments.length;
switch (G__58276) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__57120__auto___59319 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57121__auto__ = (function (){var switch__57063__auto__ = (function (state_58308){
var state_val_58309 = (state_58308[(1)]);
if((state_val_58309 === (7))){
var inst_58288 = (state_58308[(7)]);
var inst_58287 = (state_58308[(8)]);
var inst_58287__$1 = (state_58308[(2)]);
var inst_58288__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_58287__$1,(0),null);
var inst_58289 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_58287__$1,(1),null);
var inst_58290 = (inst_58288__$1 == null);
var state_58308__$1 = (function (){var statearr_58310 = state_58308;
(statearr_58310[(7)] = inst_58288__$1);

(statearr_58310[(9)] = inst_58289);

(statearr_58310[(8)] = inst_58287__$1);

return statearr_58310;
})();
if(cljs.core.truth_(inst_58290)){
var statearr_58311_59320 = state_58308__$1;
(statearr_58311_59320[(1)] = (8));

} else {
var statearr_58312_59321 = state_58308__$1;
(statearr_58312_59321[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58309 === (1))){
var inst_58277 = cljs.core.vec(chs);
var inst_58278 = inst_58277;
var state_58308__$1 = (function (){var statearr_58313 = state_58308;
(statearr_58313[(10)] = inst_58278);

return statearr_58313;
})();
var statearr_58314_59322 = state_58308__$1;
(statearr_58314_59322[(2)] = null);

(statearr_58314_59322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58309 === (4))){
var inst_58278 = (state_58308[(10)]);
var state_58308__$1 = state_58308;
return cljs.core.async.ioc_alts_BANG_(state_58308__$1,(7),inst_58278);
} else {
if((state_val_58309 === (6))){
var inst_58304 = (state_58308[(2)]);
var state_58308__$1 = state_58308;
var statearr_58315_59323 = state_58308__$1;
(statearr_58315_59323[(2)] = inst_58304);

(statearr_58315_59323[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58309 === (3))){
var inst_58306 = (state_58308[(2)]);
var state_58308__$1 = state_58308;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58308__$1,inst_58306);
} else {
if((state_val_58309 === (2))){
var inst_58278 = (state_58308[(10)]);
var inst_58280 = cljs.core.count(inst_58278);
var inst_58281 = (inst_58280 > (0));
var state_58308__$1 = state_58308;
if(cljs.core.truth_(inst_58281)){
var statearr_58317_59324 = state_58308__$1;
(statearr_58317_59324[(1)] = (4));

} else {
var statearr_58318_59325 = state_58308__$1;
(statearr_58318_59325[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58309 === (11))){
var inst_58278 = (state_58308[(10)]);
var inst_58297 = (state_58308[(2)]);
var tmp58316 = inst_58278;
var inst_58278__$1 = tmp58316;
var state_58308__$1 = (function (){var statearr_58319 = state_58308;
(statearr_58319[(10)] = inst_58278__$1);

(statearr_58319[(11)] = inst_58297);

return statearr_58319;
})();
var statearr_58320_59326 = state_58308__$1;
(statearr_58320_59326[(2)] = null);

(statearr_58320_59326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58309 === (9))){
var inst_58288 = (state_58308[(7)]);
var state_58308__$1 = state_58308;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58308__$1,(11),out,inst_58288);
} else {
if((state_val_58309 === (5))){
var inst_58302 = cljs.core.async.close_BANG_(out);
var state_58308__$1 = state_58308;
var statearr_58321_59329 = state_58308__$1;
(statearr_58321_59329[(2)] = inst_58302);

(statearr_58321_59329[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58309 === (10))){
var inst_58300 = (state_58308[(2)]);
var state_58308__$1 = state_58308;
var statearr_58322_59330 = state_58308__$1;
(statearr_58322_59330[(2)] = inst_58300);

(statearr_58322_59330[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58309 === (8))){
var inst_58278 = (state_58308[(10)]);
var inst_58288 = (state_58308[(7)]);
var inst_58289 = (state_58308[(9)]);
var inst_58287 = (state_58308[(8)]);
var inst_58292 = (function (){var cs = inst_58278;
var vec__58283 = inst_58287;
var v = inst_58288;
var c = inst_58289;
return (function (p1__58274_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__58274_SHARP_);
});
})();
var inst_58293 = cljs.core.filterv(inst_58292,inst_58278);
var inst_58278__$1 = inst_58293;
var state_58308__$1 = (function (){var statearr_58323 = state_58308;
(statearr_58323[(10)] = inst_58278__$1);

return statearr_58323;
})();
var statearr_58324_59333 = state_58308__$1;
(statearr_58324_59333[(2)] = null);

(statearr_58324_59333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__57064__auto__ = null;
var cljs$core$async$state_machine__57064__auto____0 = (function (){
var statearr_58325 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58325[(0)] = cljs$core$async$state_machine__57064__auto__);

(statearr_58325[(1)] = (1));

return statearr_58325;
});
var cljs$core$async$state_machine__57064__auto____1 = (function (state_58308){
while(true){
var ret_value__57065__auto__ = (function (){try{while(true){
var result__57066__auto__ = switch__57063__auto__(state_58308);
if(cljs.core.keyword_identical_QMARK_(result__57066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57066__auto__;
}
break;
}
}catch (e58326){var ex__57067__auto__ = e58326;
var statearr_58327_59334 = state_58308;
(statearr_58327_59334[(2)] = ex__57067__auto__);


if(cljs.core.seq((state_58308[(4)]))){
var statearr_58328_59335 = state_58308;
(statearr_58328_59335[(1)] = cljs.core.first((state_58308[(4)])));

} else {
throw ex__57067__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59336 = state_58308;
state_58308 = G__59336;
continue;
} else {
return ret_value__57065__auto__;
}
break;
}
});
cljs$core$async$state_machine__57064__auto__ = function(state_58308){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__57064__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__57064__auto____1.call(this,state_58308);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__57064__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__57064__auto____0;
cljs$core$async$state_machine__57064__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__57064__auto____1;
return cljs$core$async$state_machine__57064__auto__;
})()
})();
var state__57122__auto__ = (function (){var statearr_58329 = f__57121__auto__();
(statearr_58329[(6)] = c__57120__auto___59319);

return statearr_58329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57122__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__58331 = arguments.length;
switch (G__58331) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__57120__auto___59344 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57121__auto__ = (function (){var switch__57063__auto__ = (function (state_58355){
var state_val_58356 = (state_58355[(1)]);
if((state_val_58356 === (7))){
var inst_58337 = (state_58355[(7)]);
var inst_58337__$1 = (state_58355[(2)]);
var inst_58338 = (inst_58337__$1 == null);
var inst_58339 = cljs.core.not(inst_58338);
var state_58355__$1 = (function (){var statearr_58357 = state_58355;
(statearr_58357[(7)] = inst_58337__$1);

return statearr_58357;
})();
if(inst_58339){
var statearr_58358_59346 = state_58355__$1;
(statearr_58358_59346[(1)] = (8));

} else {
var statearr_58359_59347 = state_58355__$1;
(statearr_58359_59347[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58356 === (1))){
var inst_58332 = (0);
var state_58355__$1 = (function (){var statearr_58360 = state_58355;
(statearr_58360[(8)] = inst_58332);

return statearr_58360;
})();
var statearr_58361_59349 = state_58355__$1;
(statearr_58361_59349[(2)] = null);

(statearr_58361_59349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58356 === (4))){
var state_58355__$1 = state_58355;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58355__$1,(7),ch);
} else {
if((state_val_58356 === (6))){
var inst_58350 = (state_58355[(2)]);
var state_58355__$1 = state_58355;
var statearr_58362_59352 = state_58355__$1;
(statearr_58362_59352[(2)] = inst_58350);

(statearr_58362_59352[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58356 === (3))){
var inst_58352 = (state_58355[(2)]);
var inst_58353 = cljs.core.async.close_BANG_(out);
var state_58355__$1 = (function (){var statearr_58363 = state_58355;
(statearr_58363[(9)] = inst_58352);

return statearr_58363;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_58355__$1,inst_58353);
} else {
if((state_val_58356 === (2))){
var inst_58332 = (state_58355[(8)]);
var inst_58334 = (inst_58332 < n);
var state_58355__$1 = state_58355;
if(cljs.core.truth_(inst_58334)){
var statearr_58364_59355 = state_58355__$1;
(statearr_58364_59355[(1)] = (4));

} else {
var statearr_58365_59356 = state_58355__$1;
(statearr_58365_59356[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58356 === (11))){
var inst_58332 = (state_58355[(8)]);
var inst_58342 = (state_58355[(2)]);
var inst_58343 = (inst_58332 + (1));
var inst_58332__$1 = inst_58343;
var state_58355__$1 = (function (){var statearr_58366 = state_58355;
(statearr_58366[(10)] = inst_58342);

(statearr_58366[(8)] = inst_58332__$1);

return statearr_58366;
})();
var statearr_58367_59357 = state_58355__$1;
(statearr_58367_59357[(2)] = null);

(statearr_58367_59357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58356 === (9))){
var state_58355__$1 = state_58355;
var statearr_58368_59358 = state_58355__$1;
(statearr_58368_59358[(2)] = null);

(statearr_58368_59358[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58356 === (5))){
var state_58355__$1 = state_58355;
var statearr_58369_59359 = state_58355__$1;
(statearr_58369_59359[(2)] = null);

(statearr_58369_59359[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58356 === (10))){
var inst_58347 = (state_58355[(2)]);
var state_58355__$1 = state_58355;
var statearr_58370_59360 = state_58355__$1;
(statearr_58370_59360[(2)] = inst_58347);

(statearr_58370_59360[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58356 === (8))){
var inst_58337 = (state_58355[(7)]);
var state_58355__$1 = state_58355;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58355__$1,(11),out,inst_58337);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__57064__auto__ = null;
var cljs$core$async$state_machine__57064__auto____0 = (function (){
var statearr_58371 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_58371[(0)] = cljs$core$async$state_machine__57064__auto__);

(statearr_58371[(1)] = (1));

return statearr_58371;
});
var cljs$core$async$state_machine__57064__auto____1 = (function (state_58355){
while(true){
var ret_value__57065__auto__ = (function (){try{while(true){
var result__57066__auto__ = switch__57063__auto__(state_58355);
if(cljs.core.keyword_identical_QMARK_(result__57066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57066__auto__;
}
break;
}
}catch (e58372){var ex__57067__auto__ = e58372;
var statearr_58373_59361 = state_58355;
(statearr_58373_59361[(2)] = ex__57067__auto__);


if(cljs.core.seq((state_58355[(4)]))){
var statearr_58374_59362 = state_58355;
(statearr_58374_59362[(1)] = cljs.core.first((state_58355[(4)])));

} else {
throw ex__57067__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59363 = state_58355;
state_58355 = G__59363;
continue;
} else {
return ret_value__57065__auto__;
}
break;
}
});
cljs$core$async$state_machine__57064__auto__ = function(state_58355){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__57064__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__57064__auto____1.call(this,state_58355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__57064__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__57064__auto____0;
cljs$core$async$state_machine__57064__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__57064__auto____1;
return cljs$core$async$state_machine__57064__auto__;
})()
})();
var state__57122__auto__ = (function (){var statearr_58375 = f__57121__auto__();
(statearr_58375[(6)] = c__57120__auto___59344);

return statearr_58375;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57122__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async58377 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58377 = (function (f,ch,meta58378){
this.f = f;
this.ch = ch;
this.meta58378 = meta58378;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async58377.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58379,meta58378__$1){
var self__ = this;
var _58379__$1 = this;
return (new cljs.core.async.t_cljs$core$async58377(self__.f,self__.ch,meta58378__$1));
}));

(cljs.core.async.t_cljs$core$async58377.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58379){
var self__ = this;
var _58379__$1 = this;
return self__.meta58378;
}));

(cljs.core.async.t_cljs$core$async58377.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58377.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async58377.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async58377.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58377.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async58380 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58380 = (function (f,ch,meta58378,_,fn1,meta58381){
this.f = f;
this.ch = ch;
this.meta58378 = meta58378;
this._ = _;
this.fn1 = fn1;
this.meta58381 = meta58381;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async58380.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58382,meta58381__$1){
var self__ = this;
var _58382__$1 = this;
return (new cljs.core.async.t_cljs$core$async58380(self__.f,self__.ch,self__.meta58378,self__._,self__.fn1,meta58381__$1));
}));

(cljs.core.async.t_cljs$core$async58380.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58382){
var self__ = this;
var _58382__$1 = this;
return self__.meta58381;
}));

(cljs.core.async.t_cljs$core$async58380.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58380.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async58380.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async58380.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__58376_SHARP_){
var G__58383 = (((p1__58376_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__58376_SHARP_) : self__.f.call(null,p1__58376_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__58383) : f1.call(null,G__58383));
});
}));

(cljs.core.async.t_cljs$core$async58380.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta58378","meta58378",-1209687615,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async58377","cljs.core.async/t_cljs$core$async58377",-1844685736,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta58381","meta58381",1926374464,null)], null);
}));

(cljs.core.async.t_cljs$core$async58380.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async58380.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58380");

(cljs.core.async.t_cljs$core$async58380.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async58380");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58380.
 */
cljs.core.async.__GT_t_cljs$core$async58380 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async58380(f__$1,ch__$1,meta58378__$1,___$2,fn1__$1,meta58381){
return (new cljs.core.async.t_cljs$core$async58380(f__$1,ch__$1,meta58378__$1,___$2,fn1__$1,meta58381));
});

}

return (new cljs.core.async.t_cljs$core$async58380(self__.f,self__.ch,self__.meta58378,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__58384 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__58384) : self__.f.call(null,G__58384));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async58377.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58377.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async58377.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta58378","meta58378",-1209687615,null)], null);
}));

(cljs.core.async.t_cljs$core$async58377.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async58377.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58377");

(cljs.core.async.t_cljs$core$async58377.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async58377");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58377.
 */
cljs.core.async.__GT_t_cljs$core$async58377 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async58377(f__$1,ch__$1,meta58378){
return (new cljs.core.async.t_cljs$core$async58377(f__$1,ch__$1,meta58378));
});

}

return (new cljs.core.async.t_cljs$core$async58377(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async58385 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58385 = (function (f,ch,meta58386){
this.f = f;
this.ch = ch;
this.meta58386 = meta58386;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async58385.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58387,meta58386__$1){
var self__ = this;
var _58387__$1 = this;
return (new cljs.core.async.t_cljs$core$async58385(self__.f,self__.ch,meta58386__$1));
}));

(cljs.core.async.t_cljs$core$async58385.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58387){
var self__ = this;
var _58387__$1 = this;
return self__.meta58386;
}));

(cljs.core.async.t_cljs$core$async58385.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58385.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async58385.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58385.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async58385.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58385.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async58385.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta58386","meta58386",1588809631,null)], null);
}));

(cljs.core.async.t_cljs$core$async58385.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async58385.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58385");

(cljs.core.async.t_cljs$core$async58385.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async58385");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58385.
 */
cljs.core.async.__GT_t_cljs$core$async58385 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async58385(f__$1,ch__$1,meta58386){
return (new cljs.core.async.t_cljs$core$async58385(f__$1,ch__$1,meta58386));
});

}

return (new cljs.core.async.t_cljs$core$async58385(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async58388 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58388 = (function (p,ch,meta58389){
this.p = p;
this.ch = ch;
this.meta58389 = meta58389;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async58388.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58390,meta58389__$1){
var self__ = this;
var _58390__$1 = this;
return (new cljs.core.async.t_cljs$core$async58388(self__.p,self__.ch,meta58389__$1));
}));

(cljs.core.async.t_cljs$core$async58388.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58390){
var self__ = this;
var _58390__$1 = this;
return self__.meta58389;
}));

(cljs.core.async.t_cljs$core$async58388.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58388.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async58388.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async58388.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58388.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async58388.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58388.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async58388.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta58389","meta58389",-1559666934,null)], null);
}));

(cljs.core.async.t_cljs$core$async58388.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async58388.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58388");

(cljs.core.async.t_cljs$core$async58388.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async58388");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58388.
 */
cljs.core.async.__GT_t_cljs$core$async58388 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async58388(p__$1,ch__$1,meta58389){
return (new cljs.core.async.t_cljs$core$async58388(p__$1,ch__$1,meta58389));
});

}

return (new cljs.core.async.t_cljs$core$async58388(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__58392 = arguments.length;
switch (G__58392) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__57120__auto___59373 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57121__auto__ = (function (){var switch__57063__auto__ = (function (state_58413){
var state_val_58414 = (state_58413[(1)]);
if((state_val_58414 === (7))){
var inst_58409 = (state_58413[(2)]);
var state_58413__$1 = state_58413;
var statearr_58415_59374 = state_58413__$1;
(statearr_58415_59374[(2)] = inst_58409);

(statearr_58415_59374[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58414 === (1))){
var state_58413__$1 = state_58413;
var statearr_58416_59375 = state_58413__$1;
(statearr_58416_59375[(2)] = null);

(statearr_58416_59375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58414 === (4))){
var inst_58395 = (state_58413[(7)]);
var inst_58395__$1 = (state_58413[(2)]);
var inst_58396 = (inst_58395__$1 == null);
var state_58413__$1 = (function (){var statearr_58417 = state_58413;
(statearr_58417[(7)] = inst_58395__$1);

return statearr_58417;
})();
if(cljs.core.truth_(inst_58396)){
var statearr_58418_59376 = state_58413__$1;
(statearr_58418_59376[(1)] = (5));

} else {
var statearr_58419_59377 = state_58413__$1;
(statearr_58419_59377[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58414 === (6))){
var inst_58395 = (state_58413[(7)]);
var inst_58400 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_58395) : p.call(null,inst_58395));
var state_58413__$1 = state_58413;
if(cljs.core.truth_(inst_58400)){
var statearr_58420_59378 = state_58413__$1;
(statearr_58420_59378[(1)] = (8));

} else {
var statearr_58421_59379 = state_58413__$1;
(statearr_58421_59379[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58414 === (3))){
var inst_58411 = (state_58413[(2)]);
var state_58413__$1 = state_58413;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58413__$1,inst_58411);
} else {
if((state_val_58414 === (2))){
var state_58413__$1 = state_58413;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58413__$1,(4),ch);
} else {
if((state_val_58414 === (11))){
var inst_58403 = (state_58413[(2)]);
var state_58413__$1 = state_58413;
var statearr_58422_59381 = state_58413__$1;
(statearr_58422_59381[(2)] = inst_58403);

(statearr_58422_59381[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58414 === (9))){
var state_58413__$1 = state_58413;
var statearr_58423_59383 = state_58413__$1;
(statearr_58423_59383[(2)] = null);

(statearr_58423_59383[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58414 === (5))){
var inst_58398 = cljs.core.async.close_BANG_(out);
var state_58413__$1 = state_58413;
var statearr_58424_59384 = state_58413__$1;
(statearr_58424_59384[(2)] = inst_58398);

(statearr_58424_59384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58414 === (10))){
var inst_58406 = (state_58413[(2)]);
var state_58413__$1 = (function (){var statearr_58425 = state_58413;
(statearr_58425[(8)] = inst_58406);

return statearr_58425;
})();
var statearr_58426_59385 = state_58413__$1;
(statearr_58426_59385[(2)] = null);

(statearr_58426_59385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58414 === (8))){
var inst_58395 = (state_58413[(7)]);
var state_58413__$1 = state_58413;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58413__$1,(11),out,inst_58395);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__57064__auto__ = null;
var cljs$core$async$state_machine__57064__auto____0 = (function (){
var statearr_58427 = [null,null,null,null,null,null,null,null,null];
(statearr_58427[(0)] = cljs$core$async$state_machine__57064__auto__);

(statearr_58427[(1)] = (1));

return statearr_58427;
});
var cljs$core$async$state_machine__57064__auto____1 = (function (state_58413){
while(true){
var ret_value__57065__auto__ = (function (){try{while(true){
var result__57066__auto__ = switch__57063__auto__(state_58413);
if(cljs.core.keyword_identical_QMARK_(result__57066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57066__auto__;
}
break;
}
}catch (e58428){var ex__57067__auto__ = e58428;
var statearr_58429_59387 = state_58413;
(statearr_58429_59387[(2)] = ex__57067__auto__);


if(cljs.core.seq((state_58413[(4)]))){
var statearr_58430_59388 = state_58413;
(statearr_58430_59388[(1)] = cljs.core.first((state_58413[(4)])));

} else {
throw ex__57067__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59389 = state_58413;
state_58413 = G__59389;
continue;
} else {
return ret_value__57065__auto__;
}
break;
}
});
cljs$core$async$state_machine__57064__auto__ = function(state_58413){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__57064__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__57064__auto____1.call(this,state_58413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__57064__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__57064__auto____0;
cljs$core$async$state_machine__57064__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__57064__auto____1;
return cljs$core$async$state_machine__57064__auto__;
})()
})();
var state__57122__auto__ = (function (){var statearr_58431 = f__57121__auto__();
(statearr_58431[(6)] = c__57120__auto___59373);

return statearr_58431;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57122__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__58433 = arguments.length;
switch (G__58433) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__57120__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57121__auto__ = (function (){var switch__57063__auto__ = (function (state_58495){
var state_val_58496 = (state_58495[(1)]);
if((state_val_58496 === (7))){
var inst_58491 = (state_58495[(2)]);
var state_58495__$1 = state_58495;
var statearr_58497_59394 = state_58495__$1;
(statearr_58497_59394[(2)] = inst_58491);

(statearr_58497_59394[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58496 === (20))){
var inst_58461 = (state_58495[(7)]);
var inst_58472 = (state_58495[(2)]);
var inst_58473 = cljs.core.next(inst_58461);
var inst_58447 = inst_58473;
var inst_58448 = null;
var inst_58449 = (0);
var inst_58450 = (0);
var state_58495__$1 = (function (){var statearr_58498 = state_58495;
(statearr_58498[(8)] = inst_58449);

(statearr_58498[(9)] = inst_58448);

(statearr_58498[(10)] = inst_58472);

(statearr_58498[(11)] = inst_58450);

(statearr_58498[(12)] = inst_58447);

return statearr_58498;
})();
var statearr_58499_59396 = state_58495__$1;
(statearr_58499_59396[(2)] = null);

(statearr_58499_59396[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58496 === (1))){
var state_58495__$1 = state_58495;
var statearr_58500_59397 = state_58495__$1;
(statearr_58500_59397[(2)] = null);

(statearr_58500_59397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58496 === (4))){
var inst_58436 = (state_58495[(13)]);
var inst_58436__$1 = (state_58495[(2)]);
var inst_58437 = (inst_58436__$1 == null);
var state_58495__$1 = (function (){var statearr_58501 = state_58495;
(statearr_58501[(13)] = inst_58436__$1);

return statearr_58501;
})();
if(cljs.core.truth_(inst_58437)){
var statearr_58502_59398 = state_58495__$1;
(statearr_58502_59398[(1)] = (5));

} else {
var statearr_58503_59399 = state_58495__$1;
(statearr_58503_59399[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58496 === (15))){
var state_58495__$1 = state_58495;
var statearr_58507_59400 = state_58495__$1;
(statearr_58507_59400[(2)] = null);

(statearr_58507_59400[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58496 === (21))){
var state_58495__$1 = state_58495;
var statearr_58508_59401 = state_58495__$1;
(statearr_58508_59401[(2)] = null);

(statearr_58508_59401[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58496 === (13))){
var inst_58449 = (state_58495[(8)]);
var inst_58448 = (state_58495[(9)]);
var inst_58450 = (state_58495[(11)]);
var inst_58447 = (state_58495[(12)]);
var inst_58457 = (state_58495[(2)]);
var inst_58458 = (inst_58450 + (1));
var tmp58504 = inst_58449;
var tmp58505 = inst_58448;
var tmp58506 = inst_58447;
var inst_58447__$1 = tmp58506;
var inst_58448__$1 = tmp58505;
var inst_58449__$1 = tmp58504;
var inst_58450__$1 = inst_58458;
var state_58495__$1 = (function (){var statearr_58509 = state_58495;
(statearr_58509[(8)] = inst_58449__$1);

(statearr_58509[(9)] = inst_58448__$1);

(statearr_58509[(11)] = inst_58450__$1);

(statearr_58509[(12)] = inst_58447__$1);

(statearr_58509[(14)] = inst_58457);

return statearr_58509;
})();
var statearr_58510_59404 = state_58495__$1;
(statearr_58510_59404[(2)] = null);

(statearr_58510_59404[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58496 === (22))){
var state_58495__$1 = state_58495;
var statearr_58511_59405 = state_58495__$1;
(statearr_58511_59405[(2)] = null);

(statearr_58511_59405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58496 === (6))){
var inst_58436 = (state_58495[(13)]);
var inst_58445 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_58436) : f.call(null,inst_58436));
var inst_58446 = cljs.core.seq(inst_58445);
var inst_58447 = inst_58446;
var inst_58448 = null;
var inst_58449 = (0);
var inst_58450 = (0);
var state_58495__$1 = (function (){var statearr_58512 = state_58495;
(statearr_58512[(8)] = inst_58449);

(statearr_58512[(9)] = inst_58448);

(statearr_58512[(11)] = inst_58450);

(statearr_58512[(12)] = inst_58447);

return statearr_58512;
})();
var statearr_58513_59407 = state_58495__$1;
(statearr_58513_59407[(2)] = null);

(statearr_58513_59407[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58496 === (17))){
var inst_58461 = (state_58495[(7)]);
var inst_58465 = cljs.core.chunk_first(inst_58461);
var inst_58466 = cljs.core.chunk_rest(inst_58461);
var inst_58467 = cljs.core.count(inst_58465);
var inst_58447 = inst_58466;
var inst_58448 = inst_58465;
var inst_58449 = inst_58467;
var inst_58450 = (0);
var state_58495__$1 = (function (){var statearr_58514 = state_58495;
(statearr_58514[(8)] = inst_58449);

(statearr_58514[(9)] = inst_58448);

(statearr_58514[(11)] = inst_58450);

(statearr_58514[(12)] = inst_58447);

return statearr_58514;
})();
var statearr_58515_59408 = state_58495__$1;
(statearr_58515_59408[(2)] = null);

(statearr_58515_59408[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58496 === (3))){
var inst_58493 = (state_58495[(2)]);
var state_58495__$1 = state_58495;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58495__$1,inst_58493);
} else {
if((state_val_58496 === (12))){
var inst_58481 = (state_58495[(2)]);
var state_58495__$1 = state_58495;
var statearr_58516_59412 = state_58495__$1;
(statearr_58516_59412[(2)] = inst_58481);

(statearr_58516_59412[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58496 === (2))){
var state_58495__$1 = state_58495;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58495__$1,(4),in$);
} else {
if((state_val_58496 === (23))){
var inst_58489 = (state_58495[(2)]);
var state_58495__$1 = state_58495;
var statearr_58517_59425 = state_58495__$1;
(statearr_58517_59425[(2)] = inst_58489);

(statearr_58517_59425[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58496 === (19))){
var inst_58476 = (state_58495[(2)]);
var state_58495__$1 = state_58495;
var statearr_58518_59427 = state_58495__$1;
(statearr_58518_59427[(2)] = inst_58476);

(statearr_58518_59427[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58496 === (11))){
var inst_58461 = (state_58495[(7)]);
var inst_58447 = (state_58495[(12)]);
var inst_58461__$1 = cljs.core.seq(inst_58447);
var state_58495__$1 = (function (){var statearr_58519 = state_58495;
(statearr_58519[(7)] = inst_58461__$1);

return statearr_58519;
})();
if(inst_58461__$1){
var statearr_58520_59433 = state_58495__$1;
(statearr_58520_59433[(1)] = (14));

} else {
var statearr_58521_59434 = state_58495__$1;
(statearr_58521_59434[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58496 === (9))){
var inst_58483 = (state_58495[(2)]);
var inst_58484 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_58495__$1 = (function (){var statearr_58522 = state_58495;
(statearr_58522[(15)] = inst_58483);

return statearr_58522;
})();
if(cljs.core.truth_(inst_58484)){
var statearr_58523_59435 = state_58495__$1;
(statearr_58523_59435[(1)] = (21));

} else {
var statearr_58524_59436 = state_58495__$1;
(statearr_58524_59436[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58496 === (5))){
var inst_58439 = cljs.core.async.close_BANG_(out);
var state_58495__$1 = state_58495;
var statearr_58525_59437 = state_58495__$1;
(statearr_58525_59437[(2)] = inst_58439);

(statearr_58525_59437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58496 === (14))){
var inst_58461 = (state_58495[(7)]);
var inst_58463 = cljs.core.chunked_seq_QMARK_(inst_58461);
var state_58495__$1 = state_58495;
if(inst_58463){
var statearr_58526_59438 = state_58495__$1;
(statearr_58526_59438[(1)] = (17));

} else {
var statearr_58527_59439 = state_58495__$1;
(statearr_58527_59439[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58496 === (16))){
var inst_58479 = (state_58495[(2)]);
var state_58495__$1 = state_58495;
var statearr_58528_59440 = state_58495__$1;
(statearr_58528_59440[(2)] = inst_58479);

(statearr_58528_59440[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58496 === (10))){
var inst_58448 = (state_58495[(9)]);
var inst_58450 = (state_58495[(11)]);
var inst_58455 = cljs.core._nth(inst_58448,inst_58450);
var state_58495__$1 = state_58495;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58495__$1,(13),out,inst_58455);
} else {
if((state_val_58496 === (18))){
var inst_58461 = (state_58495[(7)]);
var inst_58470 = cljs.core.first(inst_58461);
var state_58495__$1 = state_58495;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58495__$1,(20),out,inst_58470);
} else {
if((state_val_58496 === (8))){
var inst_58449 = (state_58495[(8)]);
var inst_58450 = (state_58495[(11)]);
var inst_58452 = (inst_58450 < inst_58449);
var inst_58453 = inst_58452;
var state_58495__$1 = state_58495;
if(cljs.core.truth_(inst_58453)){
var statearr_58529_59448 = state_58495__$1;
(statearr_58529_59448[(1)] = (10));

} else {
var statearr_58530_59449 = state_58495__$1;
(statearr_58530_59449[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__57064__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__57064__auto____0 = (function (){
var statearr_58531 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58531[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__57064__auto__);

(statearr_58531[(1)] = (1));

return statearr_58531;
});
var cljs$core$async$mapcat_STAR__$_state_machine__57064__auto____1 = (function (state_58495){
while(true){
var ret_value__57065__auto__ = (function (){try{while(true){
var result__57066__auto__ = switch__57063__auto__(state_58495);
if(cljs.core.keyword_identical_QMARK_(result__57066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57066__auto__;
}
break;
}
}catch (e58532){var ex__57067__auto__ = e58532;
var statearr_58533_59450 = state_58495;
(statearr_58533_59450[(2)] = ex__57067__auto__);


if(cljs.core.seq((state_58495[(4)]))){
var statearr_58534_59451 = state_58495;
(statearr_58534_59451[(1)] = cljs.core.first((state_58495[(4)])));

} else {
throw ex__57067__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59452 = state_58495;
state_58495 = G__59452;
continue;
} else {
return ret_value__57065__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__57064__auto__ = function(state_58495){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__57064__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__57064__auto____1.call(this,state_58495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__57064__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__57064__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__57064__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__57064__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__57064__auto__;
})()
})();
var state__57122__auto__ = (function (){var statearr_58535 = f__57121__auto__();
(statearr_58535[(6)] = c__57120__auto__);

return statearr_58535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57122__auto__);
}));

return c__57120__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__58537 = arguments.length;
switch (G__58537) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__58539 = arguments.length;
switch (G__58539) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__58541 = arguments.length;
switch (G__58541) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__57120__auto___59497 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57121__auto__ = (function (){var switch__57063__auto__ = (function (state_58565){
var state_val_58566 = (state_58565[(1)]);
if((state_val_58566 === (7))){
var inst_58560 = (state_58565[(2)]);
var state_58565__$1 = state_58565;
var statearr_58567_59498 = state_58565__$1;
(statearr_58567_59498[(2)] = inst_58560);

(statearr_58567_59498[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58566 === (1))){
var inst_58542 = null;
var state_58565__$1 = (function (){var statearr_58568 = state_58565;
(statearr_58568[(7)] = inst_58542);

return statearr_58568;
})();
var statearr_58569_59499 = state_58565__$1;
(statearr_58569_59499[(2)] = null);

(statearr_58569_59499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58566 === (4))){
var inst_58545 = (state_58565[(8)]);
var inst_58545__$1 = (state_58565[(2)]);
var inst_58546 = (inst_58545__$1 == null);
var inst_58547 = cljs.core.not(inst_58546);
var state_58565__$1 = (function (){var statearr_58570 = state_58565;
(statearr_58570[(8)] = inst_58545__$1);

return statearr_58570;
})();
if(inst_58547){
var statearr_58571_59500 = state_58565__$1;
(statearr_58571_59500[(1)] = (5));

} else {
var statearr_58572_59501 = state_58565__$1;
(statearr_58572_59501[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58566 === (6))){
var state_58565__$1 = state_58565;
var statearr_58573_59502 = state_58565__$1;
(statearr_58573_59502[(2)] = null);

(statearr_58573_59502[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58566 === (3))){
var inst_58562 = (state_58565[(2)]);
var inst_58563 = cljs.core.async.close_BANG_(out);
var state_58565__$1 = (function (){var statearr_58574 = state_58565;
(statearr_58574[(9)] = inst_58562);

return statearr_58574;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_58565__$1,inst_58563);
} else {
if((state_val_58566 === (2))){
var state_58565__$1 = state_58565;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58565__$1,(4),ch);
} else {
if((state_val_58566 === (11))){
var inst_58545 = (state_58565[(8)]);
var inst_58554 = (state_58565[(2)]);
var inst_58542 = inst_58545;
var state_58565__$1 = (function (){var statearr_58575 = state_58565;
(statearr_58575[(7)] = inst_58542);

(statearr_58575[(10)] = inst_58554);

return statearr_58575;
})();
var statearr_58576_59504 = state_58565__$1;
(statearr_58576_59504[(2)] = null);

(statearr_58576_59504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58566 === (9))){
var inst_58545 = (state_58565[(8)]);
var state_58565__$1 = state_58565;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58565__$1,(11),out,inst_58545);
} else {
if((state_val_58566 === (5))){
var inst_58542 = (state_58565[(7)]);
var inst_58545 = (state_58565[(8)]);
var inst_58549 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_58545,inst_58542);
var state_58565__$1 = state_58565;
if(inst_58549){
var statearr_58578_59505 = state_58565__$1;
(statearr_58578_59505[(1)] = (8));

} else {
var statearr_58579_59506 = state_58565__$1;
(statearr_58579_59506[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58566 === (10))){
var inst_58557 = (state_58565[(2)]);
var state_58565__$1 = state_58565;
var statearr_58580_59507 = state_58565__$1;
(statearr_58580_59507[(2)] = inst_58557);

(statearr_58580_59507[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58566 === (8))){
var inst_58542 = (state_58565[(7)]);
var tmp58577 = inst_58542;
var inst_58542__$1 = tmp58577;
var state_58565__$1 = (function (){var statearr_58581 = state_58565;
(statearr_58581[(7)] = inst_58542__$1);

return statearr_58581;
})();
var statearr_58582_59508 = state_58565__$1;
(statearr_58582_59508[(2)] = null);

(statearr_58582_59508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__57064__auto__ = null;
var cljs$core$async$state_machine__57064__auto____0 = (function (){
var statearr_58583 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_58583[(0)] = cljs$core$async$state_machine__57064__auto__);

(statearr_58583[(1)] = (1));

return statearr_58583;
});
var cljs$core$async$state_machine__57064__auto____1 = (function (state_58565){
while(true){
var ret_value__57065__auto__ = (function (){try{while(true){
var result__57066__auto__ = switch__57063__auto__(state_58565);
if(cljs.core.keyword_identical_QMARK_(result__57066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57066__auto__;
}
break;
}
}catch (e58584){var ex__57067__auto__ = e58584;
var statearr_58585_59509 = state_58565;
(statearr_58585_59509[(2)] = ex__57067__auto__);


if(cljs.core.seq((state_58565[(4)]))){
var statearr_58586_59517 = state_58565;
(statearr_58586_59517[(1)] = cljs.core.first((state_58565[(4)])));

} else {
throw ex__57067__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59524 = state_58565;
state_58565 = G__59524;
continue;
} else {
return ret_value__57065__auto__;
}
break;
}
});
cljs$core$async$state_machine__57064__auto__ = function(state_58565){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__57064__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__57064__auto____1.call(this,state_58565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__57064__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__57064__auto____0;
cljs$core$async$state_machine__57064__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__57064__auto____1;
return cljs$core$async$state_machine__57064__auto__;
})()
})();
var state__57122__auto__ = (function (){var statearr_58587 = f__57121__auto__();
(statearr_58587[(6)] = c__57120__auto___59497);

return statearr_58587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57122__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__58589 = arguments.length;
switch (G__58589) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__57120__auto___59543 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57121__auto__ = (function (){var switch__57063__auto__ = (function (state_58627){
var state_val_58628 = (state_58627[(1)]);
if((state_val_58628 === (7))){
var inst_58623 = (state_58627[(2)]);
var state_58627__$1 = state_58627;
var statearr_58629_59549 = state_58627__$1;
(statearr_58629_59549[(2)] = inst_58623);

(statearr_58629_59549[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58628 === (1))){
var inst_58590 = (new Array(n));
var inst_58591 = inst_58590;
var inst_58592 = (0);
var state_58627__$1 = (function (){var statearr_58630 = state_58627;
(statearr_58630[(7)] = inst_58592);

(statearr_58630[(8)] = inst_58591);

return statearr_58630;
})();
var statearr_58631_59560 = state_58627__$1;
(statearr_58631_59560[(2)] = null);

(statearr_58631_59560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58628 === (4))){
var inst_58595 = (state_58627[(9)]);
var inst_58595__$1 = (state_58627[(2)]);
var inst_58596 = (inst_58595__$1 == null);
var inst_58597 = cljs.core.not(inst_58596);
var state_58627__$1 = (function (){var statearr_58632 = state_58627;
(statearr_58632[(9)] = inst_58595__$1);

return statearr_58632;
})();
if(inst_58597){
var statearr_58633_59572 = state_58627__$1;
(statearr_58633_59572[(1)] = (5));

} else {
var statearr_58634_59576 = state_58627__$1;
(statearr_58634_59576[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58628 === (15))){
var inst_58617 = (state_58627[(2)]);
var state_58627__$1 = state_58627;
var statearr_58635_59590 = state_58627__$1;
(statearr_58635_59590[(2)] = inst_58617);

(statearr_58635_59590[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58628 === (13))){
var state_58627__$1 = state_58627;
var statearr_58636_59598 = state_58627__$1;
(statearr_58636_59598[(2)] = null);

(statearr_58636_59598[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58628 === (6))){
var inst_58592 = (state_58627[(7)]);
var inst_58613 = (inst_58592 > (0));
var state_58627__$1 = state_58627;
if(cljs.core.truth_(inst_58613)){
var statearr_58637_59604 = state_58627__$1;
(statearr_58637_59604[(1)] = (12));

} else {
var statearr_58638_59605 = state_58627__$1;
(statearr_58638_59605[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58628 === (3))){
var inst_58625 = (state_58627[(2)]);
var state_58627__$1 = state_58627;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58627__$1,inst_58625);
} else {
if((state_val_58628 === (12))){
var inst_58591 = (state_58627[(8)]);
var inst_58615 = cljs.core.vec(inst_58591);
var state_58627__$1 = state_58627;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58627__$1,(15),out,inst_58615);
} else {
if((state_val_58628 === (2))){
var state_58627__$1 = state_58627;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58627__$1,(4),ch);
} else {
if((state_val_58628 === (11))){
var inst_58607 = (state_58627[(2)]);
var inst_58608 = (new Array(n));
var inst_58591 = inst_58608;
var inst_58592 = (0);
var state_58627__$1 = (function (){var statearr_58639 = state_58627;
(statearr_58639[(10)] = inst_58607);

(statearr_58639[(7)] = inst_58592);

(statearr_58639[(8)] = inst_58591);

return statearr_58639;
})();
var statearr_58640_59614 = state_58627__$1;
(statearr_58640_59614[(2)] = null);

(statearr_58640_59614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58628 === (9))){
var inst_58591 = (state_58627[(8)]);
var inst_58605 = cljs.core.vec(inst_58591);
var state_58627__$1 = state_58627;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58627__$1,(11),out,inst_58605);
} else {
if((state_val_58628 === (5))){
var inst_58595 = (state_58627[(9)]);
var inst_58600 = (state_58627[(11)]);
var inst_58592 = (state_58627[(7)]);
var inst_58591 = (state_58627[(8)]);
var inst_58599 = (inst_58591[inst_58592] = inst_58595);
var inst_58600__$1 = (inst_58592 + (1));
var inst_58601 = (inst_58600__$1 < n);
var state_58627__$1 = (function (){var statearr_58641 = state_58627;
(statearr_58641[(12)] = inst_58599);

(statearr_58641[(11)] = inst_58600__$1);

return statearr_58641;
})();
if(cljs.core.truth_(inst_58601)){
var statearr_58642_59618 = state_58627__$1;
(statearr_58642_59618[(1)] = (8));

} else {
var statearr_58643_59619 = state_58627__$1;
(statearr_58643_59619[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58628 === (14))){
var inst_58620 = (state_58627[(2)]);
var inst_58621 = cljs.core.async.close_BANG_(out);
var state_58627__$1 = (function (){var statearr_58645 = state_58627;
(statearr_58645[(13)] = inst_58620);

return statearr_58645;
})();
var statearr_58646_59623 = state_58627__$1;
(statearr_58646_59623[(2)] = inst_58621);

(statearr_58646_59623[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58628 === (10))){
var inst_58611 = (state_58627[(2)]);
var state_58627__$1 = state_58627;
var statearr_58647_59628 = state_58627__$1;
(statearr_58647_59628[(2)] = inst_58611);

(statearr_58647_59628[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58628 === (8))){
var inst_58600 = (state_58627[(11)]);
var inst_58591 = (state_58627[(8)]);
var tmp58644 = inst_58591;
var inst_58591__$1 = tmp58644;
var inst_58592 = inst_58600;
var state_58627__$1 = (function (){var statearr_58648 = state_58627;
(statearr_58648[(7)] = inst_58592);

(statearr_58648[(8)] = inst_58591__$1);

return statearr_58648;
})();
var statearr_58649_59633 = state_58627__$1;
(statearr_58649_59633[(2)] = null);

(statearr_58649_59633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__57064__auto__ = null;
var cljs$core$async$state_machine__57064__auto____0 = (function (){
var statearr_58650 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58650[(0)] = cljs$core$async$state_machine__57064__auto__);

(statearr_58650[(1)] = (1));

return statearr_58650;
});
var cljs$core$async$state_machine__57064__auto____1 = (function (state_58627){
while(true){
var ret_value__57065__auto__ = (function (){try{while(true){
var result__57066__auto__ = switch__57063__auto__(state_58627);
if(cljs.core.keyword_identical_QMARK_(result__57066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57066__auto__;
}
break;
}
}catch (e58651){var ex__57067__auto__ = e58651;
var statearr_58652_59642 = state_58627;
(statearr_58652_59642[(2)] = ex__57067__auto__);


if(cljs.core.seq((state_58627[(4)]))){
var statearr_58653_59643 = state_58627;
(statearr_58653_59643[(1)] = cljs.core.first((state_58627[(4)])));

} else {
throw ex__57067__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59645 = state_58627;
state_58627 = G__59645;
continue;
} else {
return ret_value__57065__auto__;
}
break;
}
});
cljs$core$async$state_machine__57064__auto__ = function(state_58627){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__57064__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__57064__auto____1.call(this,state_58627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__57064__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__57064__auto____0;
cljs$core$async$state_machine__57064__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__57064__auto____1;
return cljs$core$async$state_machine__57064__auto__;
})()
})();
var state__57122__auto__ = (function (){var statearr_58654 = f__57121__auto__();
(statearr_58654[(6)] = c__57120__auto___59543);

return statearr_58654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57122__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__58656 = arguments.length;
switch (G__58656) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__57120__auto___59652 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57121__auto__ = (function (){var switch__57063__auto__ = (function (state_58698){
var state_val_58699 = (state_58698[(1)]);
if((state_val_58699 === (7))){
var inst_58694 = (state_58698[(2)]);
var state_58698__$1 = state_58698;
var statearr_58700_59653 = state_58698__$1;
(statearr_58700_59653[(2)] = inst_58694);

(statearr_58700_59653[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58699 === (1))){
var inst_58657 = [];
var inst_58658 = inst_58657;
var inst_58659 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_58698__$1 = (function (){var statearr_58701 = state_58698;
(statearr_58701[(7)] = inst_58659);

(statearr_58701[(8)] = inst_58658);

return statearr_58701;
})();
var statearr_58702_59654 = state_58698__$1;
(statearr_58702_59654[(2)] = null);

(statearr_58702_59654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58699 === (4))){
var inst_58662 = (state_58698[(9)]);
var inst_58662__$1 = (state_58698[(2)]);
var inst_58663 = (inst_58662__$1 == null);
var inst_58664 = cljs.core.not(inst_58663);
var state_58698__$1 = (function (){var statearr_58703 = state_58698;
(statearr_58703[(9)] = inst_58662__$1);

return statearr_58703;
})();
if(inst_58664){
var statearr_58704_59658 = state_58698__$1;
(statearr_58704_59658[(1)] = (5));

} else {
var statearr_58705_59663 = state_58698__$1;
(statearr_58705_59663[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58699 === (15))){
var inst_58688 = (state_58698[(2)]);
var state_58698__$1 = state_58698;
var statearr_58706_59670 = state_58698__$1;
(statearr_58706_59670[(2)] = inst_58688);

(statearr_58706_59670[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58699 === (13))){
var state_58698__$1 = state_58698;
var statearr_58707_59677 = state_58698__$1;
(statearr_58707_59677[(2)] = null);

(statearr_58707_59677[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58699 === (6))){
var inst_58658 = (state_58698[(8)]);
var inst_58683 = inst_58658.length;
var inst_58684 = (inst_58683 > (0));
var state_58698__$1 = state_58698;
if(cljs.core.truth_(inst_58684)){
var statearr_58708_59683 = state_58698__$1;
(statearr_58708_59683[(1)] = (12));

} else {
var statearr_58709_59684 = state_58698__$1;
(statearr_58709_59684[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58699 === (3))){
var inst_58696 = (state_58698[(2)]);
var state_58698__$1 = state_58698;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58698__$1,inst_58696);
} else {
if((state_val_58699 === (12))){
var inst_58658 = (state_58698[(8)]);
var inst_58686 = cljs.core.vec(inst_58658);
var state_58698__$1 = state_58698;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58698__$1,(15),out,inst_58686);
} else {
if((state_val_58699 === (2))){
var state_58698__$1 = state_58698;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58698__$1,(4),ch);
} else {
if((state_val_58699 === (11))){
var inst_58666 = (state_58698[(10)]);
var inst_58662 = (state_58698[(9)]);
var inst_58676 = (state_58698[(2)]);
var inst_58677 = [];
var inst_58678 = inst_58677.push(inst_58662);
var inst_58658 = inst_58677;
var inst_58659 = inst_58666;
var state_58698__$1 = (function (){var statearr_58710 = state_58698;
(statearr_58710[(11)] = inst_58676);

(statearr_58710[(12)] = inst_58678);

(statearr_58710[(7)] = inst_58659);

(statearr_58710[(8)] = inst_58658);

return statearr_58710;
})();
var statearr_58711_59696 = state_58698__$1;
(statearr_58711_59696[(2)] = null);

(statearr_58711_59696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58699 === (9))){
var inst_58658 = (state_58698[(8)]);
var inst_58674 = cljs.core.vec(inst_58658);
var state_58698__$1 = state_58698;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58698__$1,(11),out,inst_58674);
} else {
if((state_val_58699 === (5))){
var inst_58666 = (state_58698[(10)]);
var inst_58659 = (state_58698[(7)]);
var inst_58662 = (state_58698[(9)]);
var inst_58666__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_58662) : f.call(null,inst_58662));
var inst_58667 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_58666__$1,inst_58659);
var inst_58668 = cljs.core.keyword_identical_QMARK_(inst_58659,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_58669 = ((inst_58667) || (inst_58668));
var state_58698__$1 = (function (){var statearr_58712 = state_58698;
(statearr_58712[(10)] = inst_58666__$1);

return statearr_58712;
})();
if(cljs.core.truth_(inst_58669)){
var statearr_58713_59709 = state_58698__$1;
(statearr_58713_59709[(1)] = (8));

} else {
var statearr_58714_59710 = state_58698__$1;
(statearr_58714_59710[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58699 === (14))){
var inst_58691 = (state_58698[(2)]);
var inst_58692 = cljs.core.async.close_BANG_(out);
var state_58698__$1 = (function (){var statearr_58716 = state_58698;
(statearr_58716[(13)] = inst_58691);

return statearr_58716;
})();
var statearr_58717_59715 = state_58698__$1;
(statearr_58717_59715[(2)] = inst_58692);

(statearr_58717_59715[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58699 === (10))){
var inst_58681 = (state_58698[(2)]);
var state_58698__$1 = state_58698;
var statearr_58718_59716 = state_58698__$1;
(statearr_58718_59716[(2)] = inst_58681);

(statearr_58718_59716[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58699 === (8))){
var inst_58666 = (state_58698[(10)]);
var inst_58662 = (state_58698[(9)]);
var inst_58658 = (state_58698[(8)]);
var inst_58671 = inst_58658.push(inst_58662);
var tmp58715 = inst_58658;
var inst_58658__$1 = tmp58715;
var inst_58659 = inst_58666;
var state_58698__$1 = (function (){var statearr_58719 = state_58698;
(statearr_58719[(14)] = inst_58671);

(statearr_58719[(7)] = inst_58659);

(statearr_58719[(8)] = inst_58658__$1);

return statearr_58719;
})();
var statearr_58720_59718 = state_58698__$1;
(statearr_58720_59718[(2)] = null);

(statearr_58720_59718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__57064__auto__ = null;
var cljs$core$async$state_machine__57064__auto____0 = (function (){
var statearr_58721 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58721[(0)] = cljs$core$async$state_machine__57064__auto__);

(statearr_58721[(1)] = (1));

return statearr_58721;
});
var cljs$core$async$state_machine__57064__auto____1 = (function (state_58698){
while(true){
var ret_value__57065__auto__ = (function (){try{while(true){
var result__57066__auto__ = switch__57063__auto__(state_58698);
if(cljs.core.keyword_identical_QMARK_(result__57066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57066__auto__;
}
break;
}
}catch (e58722){var ex__57067__auto__ = e58722;
var statearr_58723_59720 = state_58698;
(statearr_58723_59720[(2)] = ex__57067__auto__);


if(cljs.core.seq((state_58698[(4)]))){
var statearr_58724_59721 = state_58698;
(statearr_58724_59721[(1)] = cljs.core.first((state_58698[(4)])));

} else {
throw ex__57067__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59722 = state_58698;
state_58698 = G__59722;
continue;
} else {
return ret_value__57065__auto__;
}
break;
}
});
cljs$core$async$state_machine__57064__auto__ = function(state_58698){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__57064__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__57064__auto____1.call(this,state_58698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__57064__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__57064__auto____0;
cljs$core$async$state_machine__57064__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__57064__auto____1;
return cljs$core$async$state_machine__57064__auto__;
})()
})();
var state__57122__auto__ = (function (){var statearr_58725 = f__57121__auto__();
(statearr_58725[(6)] = c__57120__auto___59652);

return statearr_58725;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57122__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
