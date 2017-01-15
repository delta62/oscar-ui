import { AbstractPayload } from './payload';

export class NewAccountPayload extends AbstractPayload {
  email: string;
  name: string;

  static get TYPE(): string {
    return NewAccountPayload.name;
  }

  constructor(initializer: NewAccountData) {
    super();
    this._type = this.constructor.name;
    this.email = initializer.email;
    this.name = initializer.name;
  }
}

export interface NewAccountData {
  email: string;
  name: string;
}
