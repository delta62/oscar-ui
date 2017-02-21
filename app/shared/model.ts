export type AuthToken = string;
export type Identifier = string;
export type TypeOrPromise<T> = T | Promise<T>;

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

  _id: Identifier;
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
  userId: Identifier;
  score: number;
}

export interface ResponseScore {
  score: number;
  first?: number;
  correct?: number;
  incorrect?: number;
}

export class User {
  static makeDefault(): User {
    return {
      _id: null,
      email: '',
      name: '',
      admin: false
    };
  }

  _id: Identifier;
  email: string;
  name: string;
  admin: boolean;
}
