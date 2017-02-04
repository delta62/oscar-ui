import { Identifier } from './model';

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
  categoryId: Identifier;
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

@Payload('Logout')
export class LogoutPayload implements IPayload { }

@Payload('DidLogin')
export class DidLoginPayload implements IPayload { }

@Payload('NewAccount')
export class NewAccountPayload implements IPayload {
  email: string;
  firstName:  string;
  lastName: string;

  constructor(initializer: NewAccountPayload) {
    this.email = initializer.email;
    this.firstName = initializer.firstName;
    this.lastName = initializer.lastName;
  }
}

@Payload('GetUserScore')
export class GetUserScorePayload implements IPayload {
  userId: Identifier;

  constructor(initializer: GetUserScorePayload) {
    this.userId = initializer.userId;
  }
}

@Payload('CategoryClosed')
export class CategoryClosedPayload implements IPayload {
  categoryId: Identifier;

  constructor(initializer: CategoryClosedPayload) {
    this.categoryId = initializer.categoryId;
  }
}

@Payload('CategoryOpened')
export class CategoryOpenedPayload implements IPayload {
  categoryId: Identifier;

  constructor(initializer: CategoryOpenedPayload) {
    this.categoryId = initializer.categoryId;
  }
}

@Payload('AdminCategoryClosed')
export class AdminCategoryClosedPayload implements IPayload {
  categoryId: Identifier;

  constructor(initializer: AdminCategoryClosedPayload) {
    this.categoryId = initializer.categoryId;
  }
}

@Payload('AdminCategoryOpened')
export class AdminCategoryOpenedPayload implements IPayload {
  categoryId: Identifier;

  constructor(initializer: AdminCategoryOpenedPayload) {
    this.categoryId = initializer.categoryId;
  }
}

@Payload('AdminCategoryAnswered')
export class AdminCategoryAnsweredPayload implements IPayload {
  categoryId: Identifier;
  answer: string;

  constructor(initializer: AdminCategoryAnsweredPayload) {
    this.categoryId = initializer.categoryId;
    this.answer = initializer.answer;
  }
}

@Payload('CategoryAnswered')
export class CategoryAnsweredPayload implements IPayload {
  categoryId: Identifier;
  answer: string;

  constructor(initializer: CategoryAnsweredPayload) {
    this.categoryId = initializer.categoryId;
    this.answer = initializer.answer;
  }
}
