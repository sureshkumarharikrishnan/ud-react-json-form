import TextBox from "./TextBox.control";
import DropDown from "./DropDown.control";
import { FieldControlComponent } from "./types";

function controls(): { [name: string]: FieldControlComponent } {
  return { TextBox, string: TextBox, DropDown };
}

export default controls();
