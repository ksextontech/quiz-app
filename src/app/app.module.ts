import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { QuizCreateFormComponent } from './quiz-create-form/quiz-create-form.component';
import { QuizQuestionListComponent } from './quiz-question-list/quiz-question-list.component';

const routes: Route[] = [
  { path: '', component: QuizListComponent },
  { path: 'quizzes', component: QuizListComponent },
  { path: 'quiz/create', component: QuizCreateFormComponent },
  { path: 'quiz/:id/questions', component: QuizQuestionListComponent },
  { path: 'quiz/questions/:quizId', component: QuizQuestionListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    QuizListComponent,
    QuizCreateFormComponent,
    QuizQuestionListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
