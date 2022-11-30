import TextBox from "./TextBox.control";
import { FieldControlComponent } from "./types";

function controls(): { [name: string]: FieldControlComponent } {
  return { TextBox, string: TextBox };
}

export default controls();
