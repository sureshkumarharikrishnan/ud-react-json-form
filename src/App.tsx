import "./App.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import Field from "./components/Field";
import { FieldProps } from "./components/controls/types";
import { ControlVisibilityHandler } from "./service/control-visibility-handler/ctrl-visibility-handler.service";

const schemaName = "test";
const schema = getSchema(schemaName);

function App() {
  const [data, setData] = useState<any>(getInitialState(schema));
  const [lang, setLang] = useState("de");
  const [t, i18n] = useTranslation("app");
  const [reload, setReload] = useState(true);

  const onClick = () => {
    console.log(data);
  };

  const onChangeLang = (event: any) => {
    setLang(event.target.value);
  };

  const onChangeLangClick = () => {
    console.log(lang);
    i18n.changeLanguage(lang, () => {
      setReload((prev) => !prev);
    });
  };

  return (
    <>
      <div className="row ">
        <div className="col-6">
          <select
            className="form-control form-control-sm"
            value={lang}
            onChange={onChangeLang}
          >
            <option value="en">English</option>
            <option value="de">German</option>
          </select>
        </div>
        <div className="col-6">
          <button
            type="button"
            className="btn btn-info mr-2"
            onClick={onChangeLangClick}
          >
            {t("Change Language")}
          </button>
        </div>
      </div>

      {Object.keys(schema).map((x) => {
        const fprops: FieldProps = {
          ...(schema[x] as FieldProps),
          model: data,
          onFieldChange: (args) => {
            setData((prev: any) => ({ ...prev, ...args }));
          },
          fieldName: x,
          visibilityHandler: new ControlVisibilityHandler(schemaName),
          section: schemaName,
        };
        return <Field {...fprops} key={`field_${x}`} />;
      })}

      <div className="btn-toolbar">
        <button
          type="button"
          className="btn btn-success mr-2"
          onClick={onClick}
        >
          {t("Submit")}
        </button>
      </div>
    </>
  );
}

function getSchema(name: string): { [key: string]: any } {
  const file = require(`./schemas/${name}.schema.json`);
  return file;
}

function getInitialState(schema: any): any {
  const state: { [key: string]: any } = {};
  Object.keys(schema).forEach((x) => (state[x] = null));
  return state;
}

export default App;
