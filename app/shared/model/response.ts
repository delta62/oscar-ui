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
