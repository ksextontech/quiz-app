import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { QuizCreateFormComponent } from './quiz-create-form/quiz-create-form.component';
import { QuizQuestionListComponent } from './quiz-question-list/quiz-question-list.component';
import { QuizQuestionCreateComponent } from './quiz-question-create/quiz-question-create.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'quizzes', pathMatch: 'full' },
  { path: 'quizzes', component: QuizListComponent },
  { path: 'quiz/create', component: QuizCreateFormComponent },
  { path: 'quiz/:id/questions', component: QuizQuestionListComponent },
  { path: 'quiz/:id/questions/new', component: QuizQuestionCreateComponent },
  { path: 'not-found', component: ErrorPageComponent, data: { message: 'Page not found!'} },
  // { path: 'not-found', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
