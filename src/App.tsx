import "./App.css";
import { memo, useState } from "react";
import Field from "./components/Field";
import { FieldProps } from "./components/controls/types";

const schema = getSchema("test");

function App() {
  const [data, setData] = useState<any>(getInitialState(schema));

  const onClick = () => {
    console.log(data);
  };

  return (
    <>
      {Object.keys(schema).map((x) => {
        const fprops: FieldProps = {
          ...schema[x],
          model: x,
          onChange: (args) => {
            setData((prev: any) => ({ ...prev, ...args }));
          },
          value: data[x],
        };
        return <Field {...fprops} key={`field_${x}`} />;
      })}

      <button type="button" className="btn btn-primary" onClick={onClick}>
        Submit
      </button>
    </>
  );
}

function getSchema(name: string): { [key: string]: any } {
  const file = require(`./schemas/${name}.schema.json`);

  return file;
}

function getInitialState(schema: any): any {
  const state: { [key: string]: any } = {};
  Object.keys(schema).forEach((x) => (state[x] = ""));
  // state.firstName = "Suresh KUmar";
  return state;
}

export default memo(App);
