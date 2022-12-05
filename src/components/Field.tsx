import { memo, useCallback, useEffect, useState } from "react";
import {
  ControlChangeEventArgs,
  DataType,
  FieldControlComponent,
  FieldProps,
  GenericData,
} from "./controls/types";
import controls from "./controls";
import { DataSourceService } from "../service/data-source.service";
import { useNonInitialEffect } from "../utils/hooks";

function Field(props: FieldProps) {
  let F: FieldControlComponent = controls[props.ctrl || props.type] ?? <></>;

  const onChange = useCallback((args: ControlChangeEventArgs) => {
    if (props.onFieldChange)
      props.onFieldChange({
        [props.fieldName]: Convert(
          args.value,
          (DataType as any)[props.type.toUpperCase()]
        ),
      });
  }, []);

  //To Load Data into Child Field(Lookup Data)
  //on Parent Field change
  const [lookUpData, setLookUpData] = useState<GenericData[]>([]);

  // useEffect(() => {
  //   if (props.datasource) {
  //     const result = GetData(props.datasource, props.model);
  //     setLookUpData(result);
  //     // onChange({ value: null });
  //   }
  // }, [props.model[props.parentFieldName]]);

  useEffect(() => {
    if (props.datasource) {
      const result = GetData(props.datasource, props.model);
      setLookUpData(result);
    }
  }, []);

  useNonInitialEffect(() => {
    if (props.datasource && props.parentFieldName) {
      const result = GetData(props.datasource, props.model);
      setLookUpData(result);
      onChange({ value: null });
    }
  }, [props.model[props.parentFieldName]]);

  //Disable child control if there is no lookup data
  const disableCtrl = props.parentFieldName != null && lookUpData.length === 0;

  //Check visibility based on the handler response
  const isVisible =
    props.visibilityHandler == null ||
    props.visibilityHandler.isVisible(props.fieldName, props.model);

  const field = isVisible ? (
    <F
      {...props}
      onChange={onChange}
      lookUpData={lookUpData}
      value={props.model[props.fieldName]}
      disabled={disableCtrl}
    />
  ) : (
    <></>
  );

  return field;
}

function GetData(datasrc: string, model: any): GenericData[] {
  return DataSourceService.getData(datasrc, null, model);
}

function Convert(value: any, type: DataType): any {
  let converted: any;
  switch (type) {
    case DataType.INTEGER:
      converted = +value;
      break;
    default:
      converted = value;
      break;
  }

  return converted;
}

export default memo(Field, (prev, next) => {
  let areEqual = prev.model[prev.fieldName] === next.model[next.fieldName];

  if (prev.parentFieldName) {
    areEqual =
      areEqual &&
      prev.model[prev.parentFieldName] === next.model[next.parentFieldName];
  }

  return areEqual;
});
