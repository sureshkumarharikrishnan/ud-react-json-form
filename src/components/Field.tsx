import { memo, useEffect } from "react";
import {
  ControlChangeEventArgs,
  FieldControlComponent,
  FieldProps,
} from "./controls/types";
import controls from "./controls";

function Field(props: FieldProps) {
  let F: FieldControlComponent = controls[props.type] ?? <></>;
  const onChange = (args: ControlChangeEventArgs) => {
    if (props.onChange) props.onChange({ [args.name]: args.value });
  };

  return <F {...props} onChange={onChange} />;
}

export default memo(Field, (prev, next) => {
  return prev.value == next.value;
});
