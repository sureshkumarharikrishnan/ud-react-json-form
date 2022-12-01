import { IVisibilityHandler } from "./iVisibilityHandler";
import { TestFormVisibilityHander } from "./test-form.handler";

const handlers: { [key: string]: IVisibilityHandler } = {
  TEST: new TestFormVisibilityHander(),
};

export default handlers;
