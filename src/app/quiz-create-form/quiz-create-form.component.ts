import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Quiz } from '../model/quiz';

@Component({
  selector: 'app-quiz-create-form',
  templateUrl: './quiz-create-form.component.html',
  styleUrls: ['./quiz-create-form.component.css']
})
export class QuizCreateFormComponent implements OnInit {
  @Output() QuizCreated: EventEmitter<Quiz> = new EventEmitter<Quiz>();
  @ViewChild('quizForm') form: any;

  quiz: Quiz;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  createQuiz() {
    if (!this.form.valid) {
      return;
    }

    console.log('form submitted');
    this.form.reset();
    const quizId = '1';
    this.router.navigate([`quiz/${quizId}/questions`]);
  }

}
