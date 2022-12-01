import { IVisibilityHandler } from "./iVisibilityHandler";

export class TestFormVisibilityHander implements IVisibilityHandler {
  isVisible(fieldName: string, model: any): boolean {
    let isVisible = true;
    switch (fieldName) {
      case "day":
        isVisible = !(model.month === 2);
        break;

      default:
        break;
    }

    return isVisible;
  }
}
