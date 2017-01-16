import { AbstractPayload } from './payload';

export class CategoriesUpdatedPayload extends AbstractPayload {

  static get TYPE(): string {
    return CategoriesUpdatedPayload.name;
  }

  get type(): string {
    return this.constructor.name;
  }
}
