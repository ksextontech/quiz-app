import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes, Route } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { QuizCreateFormComponent } from './quiz-create-form/quiz-create-form.component';
import { QuizQuestionListComponent } from './quiz-question-list/quiz-question-list.component';
import { QuizQuestionCreateComponent } from './quiz-question-create/quiz-question-create.component';
import { QuizService } from './services/quiz.service';

import { PanelComponent } from './shared/panel/panel.component';
import { HighlightDirective } from './highlight.directive';
import { UnlessDirective } from './unless.directive';
import { NotFoundComponent } from './not-found/not-found.component';
import { CanDeactivateGuard } from './shared/can-deactivate-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    QuizListComponent,
    QuizCreateFormComponent,
    QuizQuestionListComponent,
    QuizQuestionCreateComponent,
    PanelComponent,
    HighlightDirective,
    UnlessDirective,
    NotFoundComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [QuizService, CanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
