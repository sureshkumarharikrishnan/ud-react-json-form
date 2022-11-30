import { FunctionComponentElement } from "react";

export type FieldControl = FunctionComponentElement<ControlProps>;

export type FieldControlComponent = (props: ControlProps) => FieldControl;

export type ControlProps = {
  value: string;
  label: string;
  model: string;
  onChange: ControlChangeEvent;
};

export type ControlChangeEventArgs = {
  name: string;
  value: any;
};
export type ControlChangeEvent = (args: ControlChangeEventArgs) => void;

export type FieldChangeEvent = (args: { [key: string]: any }) => void;
export type FieldProps = Omit<ControlProps, "onChange"> & {
  onChange: FieldChangeEvent;
  type: string;
};
