import { FunctionComponentElement } from "react";
import { IVisibilityHandler } from "../../service/control-visibility-handler/iVisibilityHandler";

export type FieldControl = FunctionComponentElement<ControlProps>;

export type FieldControlComponent = (props: ControlProps) => FieldControl;

export type ControlProps = {
  value: string;
  label: string;
  disabled: boolean;
  lookUpData: GenericData[];
  onChange: ControlChangeEvent;
};

export type ControlChangeEventArgs = {
  value: any;
};
export type ControlChangeEvent = (args: ControlChangeEventArgs) => void;

export type FieldChangeEvent = (args: { [key: string]: any }) => void;
export type FieldProps = Omit<
  ControlProps,
  "onChange" & "data" & "value" & "disabled"
> & {
  onChange: FieldChangeEvent;
  type: string;
  ctrl: string;
  datasource: string;
  model: any;
  fieldName: string;
  parentFieldName: string;
  visibilityHandler: IVisibilityHandler;
};

export type GenericData = {
  id: number;
  name: string;
};

export enum DataType {
  INTEGER = "INTEGER",
  STRING = "STRING",
}
