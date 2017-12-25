import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { QuizCreateModel } from '../model/quiz-create';
import { QuizService } from '../services/quiz.service';
import { Quiz } from '../model/quiz';

@Component({
  selector: 'app-quiz-create-form',
  templateUrl: './quiz-create-form.component.html',
  styleUrls: ['./quiz-create-form.component.css']
})
export class QuizCreateFormComponent implements OnInit {
  @Output() QuizCreated: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild('quizForm') form: any;

  constructor(private quizService: QuizService, private router: Router) {

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
      this.form.reset();
      this.router.navigate([`quiz/${quiz.id}/questions/new`]);
    });
  }
}
