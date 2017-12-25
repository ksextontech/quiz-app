import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { QuizCreateComponent } from './quiz-create/quiz-create.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';

const routes: Route[] = [
  { path: '', component: QuizListComponent },
  { path: 'quizzes', component: QuizListComponent },
  { path: 'quiz/create', component: QuizCreateComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    QuizCreateComponent,
    QuizListComponent
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
