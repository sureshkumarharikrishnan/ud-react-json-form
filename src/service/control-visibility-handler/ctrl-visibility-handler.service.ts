import { IVisibilityHandler } from "./iVisibilityHandler";
import handlers from ".";

export class ControlVisibilityHandler implements IVisibilityHandler {
  private readonly _handler: IVisibilityHandler;

  constructor(schemaName: string) {
    this._handler = handlers[schemaName.toUpperCase()];
  }
  isVisible(fieldName: string, model: any): boolean {
    return this._handler == null
      ? true
      : this._handler.isVisible(fieldName, model);
  }
}
