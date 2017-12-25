import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quiz } from '../model/quiz';

@Component({
  selector: 'app-quiz-create-form',
  templateUrl: './quiz-create-form.component.html',
  styleUrls: ['./quiz-create-form.component.css']
})
export class QuizCreateFormComponent implements OnInit {
  @Output() QuizCreated: EventEmitter<Quiz> = new EventEmitter<Quiz>();

  quiz: Quiz;

  constructor() { }

  ngOnInit() {
  }

  createQuiz() {

  }

}
