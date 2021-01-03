goog.provide('disc_quiz.quizzes');
disc_quiz.quizzes.available_quizzes = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["who-said-it1"], null);
disc_quiz.quizzes.process_quiz_data = (function disc_quiz$quizzes$process_quiz_data(quiz){
var questions = new cljs.core.Keyword(null,"questions","questions",1226225380).cljs$core$IFn$_invoke$arity$1(quiz);
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-current-question","set-current-question",-2143284569),cljs.core.first(questions)], null));

return quiz;
});
disc_quiz.quizzes.handler = (function disc_quiz$quizzes$handler(response){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-quiz","set-quiz",-1044365919),disc_quiz.quizzes.process_quiz_data(cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$1(response))], null));
});
disc_quiz.quizzes.load_edn = (function disc_quiz$quizzes$load_edn(url){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),disc_quiz.quizzes.handler], null)], 0));
});
disc_quiz.quizzes.get_quiz = (function disc_quiz$quizzes$get_quiz(name){
return disc_quiz.quizzes.load_edn(["/quizzes/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),".edn"].join(''));
});
re_frame.core.reg_fx(new cljs.core.Keyword(null,"update-quiz","update-quiz",1507561187),(function (name){
return disc_quiz.quizzes.get_quiz(name);
}));

//# sourceMappingURL=disc_quiz.quizzes.js.map
