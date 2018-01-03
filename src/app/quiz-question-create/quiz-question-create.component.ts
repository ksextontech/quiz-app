import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-quiz-question-create',
  templateUrl: './quiz-question-create.component.html',
  styleUrls: ['./quiz-question-create.component.css']
})
export class QuizQuestionCreateComponent implements OnInit, OnDestroy {

  paramsSubscription: Subscription;
  quizId: string;

  constructor(private route: ActivatedRoute, private router: Router) {

  }


  ngOnInit() {
    // only use this if 100% of the time, this component is reloaded,
    // if there is a possibility of the component being reloaded with different params
    // observe the params observable instead
    // this.quizId = this.route.snapshot.params['id'];

    this.paramsSubscription = this.route.params.subscribe((params: Params) => {
      this.quizId = params['id'];
      console.log(params);
    });
  }

  ngOnDestroy(): void {
    // not necessary, but we are able to do this manually
    this.paramsSubscription.unsubscribe();
  }

}
