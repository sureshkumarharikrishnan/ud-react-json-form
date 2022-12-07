import { ControlChangeEventArgs, FieldControl, ControlProps } from "./types";
import { useTranslation } from "react-i18next";

function TextBox(props: ControlProps): FieldControl {
  const [t] = useTranslation(props.section);

  const onFieldChange = (event: any) => {
    const args: ControlChangeEventArgs = {
      value: event.target.value,
    };
    props.onChange(args);
  };

  return (
    <div className="form-group">
      <label>{t(props.label)}</label>
      <input
        className="form-control form-control-sm"
        onChange={onFieldChange}
        value={props.value || ""}
      />
    </div>
  );
}

export default TextBox;
