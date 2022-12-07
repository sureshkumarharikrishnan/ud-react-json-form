import { FunctionComponentElement } from "react";
import { IVisibilityHandler } from "../../service/control-visibility-handler/iVisibilityHandler";

export type FieldControl = FunctionComponentElement<ControlProps>;

export type FieldControlComponent = (props: ControlProps) => FieldControl;

export type ControlProps = {
  value: string;
  label: string;
  section: string;
  disabled: boolean;
  lookUpData: GenericData[];
  onChange: ControlChangeEvent;
};

export type ControlChangeEventArgs = {
  value: any;
};
export type ControlChangeEvent = (args: ControlChangeEventArgs) => void;

export type FieldChangeEvent = (args: { [key: string]: any }) => void;
export type FieldProps = {
  onFieldChange: FieldChangeEvent;
  type: string;
  ctrl: string;
  datasource: string;
  model: any;
  fieldName: string;
  parentFieldName: string;
  visibilityHandler: IVisibilityHandler;
  label: string;
  section: string;
};

export type GenericData = {
  id: number;
  name: string;
};

export enum DataType {
  INTEGER = "INTEGER",
  STRING = "STRING",
}
