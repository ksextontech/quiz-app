export class Question {
  id: string;
  text: string;
  questionTypeId: string;

  constructor(id: string, text: string, questionTypeId: string) {
    this.id = id;
    this.text = text;
    this.questionTypeId = questionTypeId;
  }
}
