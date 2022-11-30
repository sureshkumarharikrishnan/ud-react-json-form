import { ControlChangeEventArgs, FieldControl, ControlProps } from "./types";

function TextBox(props: ControlProps): FieldControl {
  const onFieldChange = (event: any) => {
    const args: ControlChangeEventArgs = {
      value: event.target.value,
      name: props.model,
    };
    props.onChange(args);
  };

  return (
    <div className="form-group">
      <label>{props.label}</label>
      <input
        className="form-control"
        onChange={onFieldChange}
        value={props.value}
      />
    </div>
  );
}

export default TextBox;
