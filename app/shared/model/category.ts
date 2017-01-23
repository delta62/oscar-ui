export class Category {

  static makeDefault(): Category {
    return {
      _id: '',
      name: '',
      options: [ ],
      closed: null,
      answer: null
    }
  }

  _id: string;
  name: string;
  options: Array<string>;
  closed: Date;
  answer: string;
}
