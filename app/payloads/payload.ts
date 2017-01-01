export abstract class AbstractPayload {
  protected _type: string;

  get type(): string {
    return this._type;
  }
}
