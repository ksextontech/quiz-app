import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizQuestionListComponent } from './quiz-question-list.component';

describe('QuizQuestionListComponent', () => {
  let component: QuizQuestionListComponent;
  let fixture: ComponentFixture<QuizQuestionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizQuestionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizQuestionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
