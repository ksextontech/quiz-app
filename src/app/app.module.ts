import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CreateQuizComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
