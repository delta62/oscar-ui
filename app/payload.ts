export function Payload(type: string) {
  return function PayloadDecorator(target: Function) {
    target['type'] = type;
    target.prototype.type = type;
  };
}

export function isType(klass: Function, payload: IPayload): boolean {
  return payload['type'] && klass['type'] && payload['type'] === klass['type'];
}

export interface IPayload { }

@Payload('AppInit')
export class AppInitPayload implements IPayload { }

@Payload('SaveResponse')
export class SaveResponsePayload implements IPayload {
  categoryId: string;
  value:      string;

  constructor(initializer: SaveResponsePayload) {
    this.categoryId = initializer.categoryId;
    this.value = initializer.value;
  }
}

@Payload('Login')
export class LoginPayload implements IPayload {
  email: string;

  constructor(initializer: LoginPayload) {
    this.email = initializer.email;
  }
}

@Payload('NewAccount')
export class NewAccountPayload implements IPayload {
  email: string;
  name:  string;

  constructor(initializer: NewAccountPayload) {
    this.email = initializer.email;
    this.name = initializer.name;
  }
}
