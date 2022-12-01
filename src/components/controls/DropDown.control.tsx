import { ControlProps, FieldControl } from "./types";

function DropDown(props: ControlProps): FieldControl {
  const onChange = (event: any) => {
    props.onChange({ value: event.target.value });
  };

  return (
    <div className="form-group">
      <label>{props.label}</label>
      <select
        className="form-control form-control-sm"
        value={props.value || -1}
        onChange={onChange}
        disabled={props.disabled}
      >
        <option key="-1" value="-1">
          !--SELECT--!
        </option>
        {props.lookUpData.map((d) => (
          <option key={d.id} value={d.id}>
            {d.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DropDown;
