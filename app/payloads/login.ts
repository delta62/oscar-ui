import { AbstractPayload } from './payload';

export class LoginPayload extends AbstractPayload {
  email: string;

  static get TYPE(): string {
    return LoginPayload.name;
  }

  constructor(initializer: LoginPayloadInitializer) {
    super();
    this._type = this.constructor.name;
    this.email = initializer.email;
  }
}

export interface LoginPayloadInitializer {
  email: string;
}
