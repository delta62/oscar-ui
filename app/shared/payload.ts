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

@Payload('DidLogin')
export class DidLoginPayload implements IPayload { }

@Payload('NewAccount')
export class NewAccountPayload implements IPayload {
  email: string;
  name:  string;

  constructor(initializer: NewAccountPayload) {
    this.email = initializer.email;
    this.name = initializer.name;
  }
}

@Payload('GetUserScore')
export class GetUserScorePayload implements IPayload {
  userId: string;

  constructor(initializer: GetUserScorePayload) {
    this.userId = initializer.userId;
  }
}

@Payload('CategoryClosed')
export class CategoryClosedPayload implements IPayload {
  categoryId: string;

  constructor(initializer: CategoryClosedPayload) {
    this.categoryId = initializer.categoryId;
  }
}

@Payload('CategoryAnswered')
export class CategoryAnsweredPayload implements IPayload {
  categoryId: string;
  answer: string;

  constructor(initializer: CategoryAnsweredPayload) {
    this.categoryId = initializer.categoryId;
    this.answer = initializer.answer;
  }
}
