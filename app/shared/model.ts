export type AuthToken = string;

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

export class Response {
  static makeDefault(): Response {
    return {
      category: '',
      value: ''
    }
  }

  category: string;
  value: string;
}

export interface Score {
  totalScore: number;
  responses: Array<ResponseScore>;
}

export interface ResponseScore {
  score: number;
  first?: number;
  correct?: number;
  incorrect?: number;
}

export interface User {
  email: string;
  name: string;
}
