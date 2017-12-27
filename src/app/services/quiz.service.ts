import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuizCreateModel } from '../model/quiz-create';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Quiz } from '../model/quiz';

const API_BASE_URL = 'http://localhost:5000';

@Injectable()
export class QuizService {

  constructor(private http: HttpClient) {

  }

  getQuizzes(page: number = 1, pageSize: number = 10): Observable<Quiz[]> {
    const url = API_BASE_URL + `/quizzes?page=${page}&pageSize=${pageSize}`;

    return this.http.get(url).map((response: Response) => {
      const results: any = response.json();
      const quizzes = [];

      for (let i = 0; i < results.length; i++) {
        const result = results[i];
        const quiz = new Quiz(result.id, result.name);
        quizzes.push(quiz);
      }

      return quizzes;
    });
  }

  getQuiz(id: string) {
    const url = API_BASE_URL + `/quizzes/${id}`;

    return this.http.get(url).map((response: Response) => {
      const result: any = response.json();
      const quiz = new Quiz(result.id, result.name);
      return quiz;
    });
  }

  createQuiz(model: QuizCreateModel): Observable<Quiz> {
    const url = API_BASE_URL + '/quizzes';
    const body = { name: model.name };

    return this.http.post(url, body).map((response: Response) => {
      const result: any = response.json();
      const quiz: Quiz = new Quiz(result.id, result.name);
      return quiz;
    });
  }
}