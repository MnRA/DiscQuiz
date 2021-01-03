goog.provide('disc_quiz.views');
disc_quiz.views.router_component = (function disc_quiz$views$router_component(p__55557){
var map__55558 = p__55557;
var map__55558__$1 = (((((!((map__55558 == null))))?(((((map__55558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55558.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55558):map__55558);
var router = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55558__$1,new cljs.core.Keyword(null,"router","router",1091916230));
var current_route = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("disc-quiz.subs","current-route","disc-quiz.subs/current-route",-113633572)], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(current_route)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(current_route))], null):null)], null);
});
disc_quiz.views.update_form = (function disc_quiz$views$update_form(k,event){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-form","update-form",475718790),k,event.target.value], null));
});
disc_quiz.views.update_answered = (function disc_quiz$views$update_answered(q,a){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-answered","update-answered",-977591444),q,a], null));
});
disc_quiz.views.form_input = (function disc_quiz$views$form_input(t,k,state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.input.is-info","input.input.is-info",-1860820465),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),t,new cljs.core.Keyword(null,"value","value",305978217),(k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(state) : k.call(null,state)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__55560_SHARP_){
return disc_quiz.views.update_form(k,p1__55560_SHARP_);
})], null)], null);
});
disc_quiz.views.main_layout = (function disc_quiz$views$main_layout(body){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.main","span.main",-358707614),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.hero.is-info","section.hero.is-info",-288754591),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hero-body","div.hero-body",1231318527),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.title","h1.title",-2139952071),"Welcome to Disc Quiz"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.body","section.body",-1068790878),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card>div.card-content","div.card>div.card-content",-792293997),body], null)], null)], null);
});
disc_quiz.views.home_page = (function disc_quiz$views$home_page(){
var form_data = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("disc-quiz.subs","form-data","disc-quiz.subs/form-data",-485562286)], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [disc_quiz.views.main_layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card>div.card-content","div.card>div.card-content",-792293997),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.field.has-addons","div.field.has-addons",1626128127),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.label","label.label",725637336),"What's your name?"], null),disc_quiz.views.form_input("text",new cljs.core.Keyword(null,"name","name",1843675177),form_data),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button.is-info.is-light","button.button.is-info.is-light",-703847383),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("disc-quiz.events","push-state","disc-quiz.events/push-state",-641680048),new cljs.core.Keyword("quizzes","index","quizzes/index",486304794)], null));
})], null),"Select Quiz"], null)], null)], null)], null);
});
disc_quiz.views.quiz_index = (function disc_quiz$views$quiz_index(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [disc_quiz.views.main_layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4529__auto__ = (function disc_quiz$views$quiz_index_$_iter__55561(s__55562){
return (new cljs.core.LazySeq(null,(function (){
var s__55562__$1 = s__55562;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__55562__$1);
if(temp__5735__auto__){
var s__55562__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__55562__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__55562__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__55564 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__55563 = (0);
while(true){
if((i__55563 < size__4528__auto__)){
var quiz = cljs.core._nth(c__4527__auto__,i__55563);
cljs.core.chunk_append(b__55564,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__55563,quiz,c__4527__auto__,size__4528__auto__,b__55564,s__55562__$2,temp__5735__auto__){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("disc-quiz.events","push-state","disc-quiz.events/push-state",-641680048),new cljs.core.Keyword("quizzes","show","quizzes/show",1919427300),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"quiz-name","quiz-name",-2119343769),quiz], null)], null));
});})(i__55563,quiz,c__4527__auto__,size__4528__auto__,b__55564,s__55562__$2,temp__5735__auto__))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card>div.card-content","div.card>div.card-content",-792293997),quiz], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),quiz], null)));

var G__55579 = (i__55563 + (1));
i__55563 = G__55579;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55564),disc_quiz$views$quiz_index_$_iter__55561(cljs.core.chunk_rest(s__55562__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55564),null);
}
} else {
var quiz = cljs.core.first(s__55562__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (quiz,s__55562__$2,temp__5735__auto__){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("disc-quiz.events","push-state","disc-quiz.events/push-state",-641680048),new cljs.core.Keyword("quizzes","show","quizzes/show",1919427300),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"quiz-name","quiz-name",-2119343769),quiz], null)], null));
});})(quiz,s__55562__$2,temp__5735__auto__))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card>div.card-content","div.card>div.card-content",-792293997),quiz], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),quiz], null)),disc_quiz$views$quiz_index_$_iter__55561(cljs.core.rest(s__55562__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(disc_quiz.quizzes.available_quizzes);
})()], null)], null);
});
disc_quiz.views.handle_answer_click = (function disc_quiz$views$handle_answer_click(q,a){
return disc_quiz.views.update_answered(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"phrase","phrase",1563468627).cljs$core$IFn$_invoke$arity$1(q)),a);
});
disc_quiz.views.make_answer_button = (function disc_quiz$views$make_answer_button(answer,question){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.is-half.has-text-centered","div.column.is-half.has-text-centered",-1833388331),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.button.is-fullwidth.is-light.is-info","div.button.is-fullwidth.is-light.is-info",2124305189),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return disc_quiz.views.handle_answer_click(question,answer);
})], null),answer], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),answer], null));
});
disc_quiz.views.result_modal = (function disc_quiz$views$result_modal(solution,answer,next_q){
var correct_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(solution,answer);
var title = ((correct_QMARK_)?"Correct!":"Woops!");
var message = ((correct_QMARK_)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(answer)," did say that!"].join(''):["Actually... ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(solution)," said that!"].join(''));
var next_question_QMARK_ = (!((next_q == null)));
var main_color = ((correct_QMARK_)?"lightgreen":"#3273DC");
var secondary_color = ((correct_QMARK_)?"#EFFAF3":"#EEF6FC");
var text_color = ((correct_QMARK_)?"#257942":"#1D72AA");
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal.is-active","div.modal.is-active",275463472),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-card","div.modal-card",1294207224),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.modal-card-head.is-size-4.has-text-weight-bold","header.modal-card-head.is-size-4.has-text-weight-bold",1747705151),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),main_color,new cljs.core.Keyword(null,"color","color",1011675173),"#FFF"], null)], null),title], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-card-body.has-text-weight-bold.is-size-3","div.modal-card-body.has-text-weight-bold.is-size-3",-890154829),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),secondary_color,new cljs.core.Keyword(null,"color","color",1011675173),text_color], null)], null),message], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer.modal-card-foot","footer.modal-card-foot",591123981),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),main_color], null)], null),((next_question_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button.is-right.is-info.is-light","button.button.is-right.is-info.is-light",2077917738),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-current-question","set-current-question",-2143284569),next_q], null));
})], null),"Next One ->"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button.is-right.is-info.is-light","button.button.is-right.is-info.is-light",2077917738),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("disc-quiz.events","push-state","disc-quiz.events/push-state",-641680048),new cljs.core.Keyword("results","index","results/index",-551905317)], null));
})], null),"To Results!"], null))], null)], null)], null);
});
disc_quiz.views.quiz_show = (function disc_quiz$views$quiz_show(){
var quiz = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("disc-quiz.subs","current-quiz","disc-quiz.subs/current-quiz",504090796)], null)));
var quiz_results = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("disc-quiz.subs","quiz-data","disc-quiz.subs/quiz-data",2135785653)], null)));
var current_question = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("disc-quiz.subs","current-question","disc-quiz.subs/current-question",760587344)], null)));
var questions = new cljs.core.Keyword(null,"questions","questions",1226225380).cljs$core$IFn$_invoke$arity$1(quiz);
var answered_questions = new cljs.core.Keyword(null,"answered","answered",-1524147020).cljs$core$IFn$_invoke$arity$1(quiz_results);
var next_question = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__55565_SHARP_){
return cljs.core.contains_QMARK_(cljs.core.set(cljs.core.keys(answered_questions)),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"phrase","phrase",1563468627).cljs$core$IFn$_invoke$arity$1(p1__55565_SHARP_)));
}),questions));
var question_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"phrase","phrase",1563468627).cljs$core$IFn$_invoke$arity$1(current_question));
var given_answer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(answered_questions,question_key);
var solution = new cljs.core.Keyword(null,"solution","solution",-1727231491).cljs$core$IFn$_invoke$arity$1(current_question);
var notes = new cljs.core.Keyword(null,"notes","notes",-1039600523).cljs$core$IFn$_invoke$arity$1(current_question);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [disc_quiz.views.main_layout,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card.is-clipped","div.card.is-clipped",276434555),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-header","div.card-header",1547492121),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-header-title.columns.is-centered.has-text-centered.title","div.card-header-title.columns.is-centered.has-text-centered.title",1720828667),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.is-half","div.column.is-half",1599821405),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(quiz)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-content","div.card-content",1464214949),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.columns","div.columns",-437221213),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.is-full.has-text-centered.is-size-3","div.column.is-full.has-text-centered.is-size-3",1883579171),["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"phrase","phrase",1563468627).cljs$core$IFn$_invoke$arity$1(current_question)),"\""].join('')], null)], null),(cljs.core.truth_(cljs.core.not_empty(notes))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"grey"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.columns","div.columns",-437221213),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.is-full.has-text-centered>div","div.column.is-full.has-text-centered>div",-1928948906),"Notes:"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.columns>ul.column.has-text-centered","div.columns>ul.column.has-text-centered",-1844532222),(function (){var iter__4529__auto__ = (function disc_quiz$views$quiz_show_$_iter__55566(s__55567){
return (new cljs.core.LazySeq(null,(function (){
var s__55567__$1 = s__55567;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__55567__$1);
if(temp__5735__auto__){
var s__55567__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__55567__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__55567__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__55569 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__55568 = (0);
while(true){
if((i__55568 < size__4528__auto__)){
var note = cljs.core._nth(c__4527__auto__,i__55568);
cljs.core.chunk_append(b__55569,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),["* ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(note)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),note], null)));

var G__55595 = (i__55568 + (1));
i__55568 = G__55595;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55569),disc_quiz$views$quiz_show_$_iter__55566(cljs.core.chunk_rest(s__55567__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55569),null);
}
} else {
var note = cljs.core.first(s__55567__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),["* ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(note)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),note], null)),disc_quiz$views$quiz_show_$_iter__55566(cljs.core.rest(s__55567__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(notes);
})()], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.columns.is-multiline.is-mobile","div.columns.is-multiline.is-mobile",-1279019852),(function (){var iter__4529__auto__ = (function disc_quiz$views$quiz_show_$_iter__55570(s__55571){
return (new cljs.core.LazySeq(null,(function (){
var s__55571__$1 = s__55571;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__55571__$1);
if(temp__5735__auto__){
var s__55571__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__55571__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__55571__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__55573 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__55572 = (0);
while(true){
if((i__55572 < size__4528__auto__)){
var answer = cljs.core._nth(c__4527__auto__,i__55572);
cljs.core.chunk_append(b__55573,disc_quiz.views.make_answer_button(answer,current_question));

var G__55596 = (i__55572 + (1));
i__55572 = G__55596;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55573),disc_quiz$views$quiz_show_$_iter__55570(cljs.core.chunk_rest(s__55571__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55573),null);
}
} else {
var answer = cljs.core.first(s__55571__$2);
return cljs.core.cons(disc_quiz.views.make_answer_button(answer,current_question),disc_quiz$views$quiz_show_$_iter__55570(cljs.core.rest(s__55571__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"answers","answers",-2066449770).cljs$core$IFn$_invoke$arity$1(current_question));
})()], null)], null),(cljs.core.truth_(given_answer)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [disc_quiz.views.result_modal,solution,given_answer,next_question], null):null)], null)], null);
});
disc_quiz.views.calc_correct = (function disc_quiz$views$calc_correct(qs,ans){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,q){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"solution","solution",-1727231491).cljs$core$IFn$_invoke$arity$1(q),(function (){var fexpr__55574 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"phrase","phrase",1563468627).cljs$core$IFn$_invoke$arity$1(q));
return (fexpr__55574.cljs$core$IFn$_invoke$arity$1 ? fexpr__55574.cljs$core$IFn$_invoke$arity$1(ans) : fexpr__55574.call(null,ans));
})())){
return (acc + (1));
} else {
return acc;
}
}),(0),qs);
});
disc_quiz.views.results_index = (function disc_quiz$views$results_index(){
var quiz = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("disc-quiz.subs","current-quiz","disc-quiz.subs/current-quiz",504090796)], null)));
var quiz_data = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("disc-quiz.subs","quiz-data","disc-quiz.subs/quiz-data",2135785653)], null)));
var questions_total = cljs.core.count(new cljs.core.Keyword(null,"questions","questions",1226225380).cljs$core$IFn$_invoke$arity$1(quiz));
var answers = new cljs.core.Keyword(null,"answered","answered",-1524147020).cljs$core$IFn$_invoke$arity$1(quiz_data);
var questions_correct = disc_quiz.views.calc_correct(new cljs.core.Keyword(null,"questions","questions",1226225380).cljs$core$IFn$_invoke$arity$1(quiz),answers);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [disc_quiz.views.main_layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.columns.is-centered","div.columns.is-centered",-583364726),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.is-half","div.column.is-half",1599821405),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card","div.card",-459317104),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-header","div.card-header",1547492121),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-header-title.is-centered","div.card-header-title.is-centered",-1448457367),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),["You got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(questions_correct)," out of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(questions_total)," correct!"].join('')], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-content.columns","div.card-content.columns",1673079770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column","div.column",-1380853326),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"progress.progress.is-success","progress.progress.is-success",-1267776089),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),questions_correct,new cljs.core.Keyword(null,"max","max",61366548),questions_total], null),""], null)], null)], null)], null)], null)], null)], null);
});

//# sourceMappingURL=disc_quiz.views.js.map
