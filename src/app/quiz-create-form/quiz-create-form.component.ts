import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { QuizCreateModel } from '../model/quiz-create.model';
import { QuizService } from '../services/quiz.service';
import { Quiz } from '../model/quiz.model';
import { EventManager } from '@angular/platform-browser/src/dom/events/event_manager';

@Component({
  selector: 'app-quiz-create-form',
  templateUrl: './quiz-create-form.component.html',
  styleUrls: ['./quiz-create-form.component.css']
})
export class QuizCreateFormComponent implements OnInit {
  @Output() QuizCreated: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild('quizForm') form: any;

  quizCreated = false;
  random: number;
  sampleQuizNames = ['Angular Forms', 'TypeScript', 'JavaScript Promises', 'C# Generics'];

  constructor(private quizService: QuizService, private router: Router) {
    this.random = Math.random();
  }

  ngOnInit() {

  }

  createQuiz() {
    console.log('form submitted');

    if (!this.form.valid) {
      console.log('form invalid');
      return;
    }

    const model: QuizCreateModel = new QuizCreateModel(this.form.value.name);

    // call service to create quiz
    this.quizService.createQuiz(model).subscribe((quiz) => {
      this.quizCreated = true;
      this.form.reset();

      setTimeout(() => {
        this.router.navigate([`quiz/${quiz.id}/questions/new`]);
      }, 3000);

    });
  }

  onNameInput(event: Event) {
    console.log(event);
    const htmlInput = <HTMLInputElement>event.target;
    console.log(htmlInput);
  }

  getStyle() {
    const backgroundColor = this.random > .5 ? 'green' : 'red';
    return backgroundColor;
  }
}
