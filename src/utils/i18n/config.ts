import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ChainedBackend from "i18next-chained-backend";
import resourcesToBackend from "i18next-resources-to-backend";
import path from "path";
// import path from "path";

const configure = (lang: string = "en") => {
  const instance = i18n;

  instance
    .use(
      resourcesToBackend((language, namespace, callback) => {
        import(`./locale/${language}/${namespace}.json`)
          .then((resources) => {
            callback(null, resources);
          })
          .catch((error) => {
            callback(error, null);
          });
      })
    )
    .init({
      fallbackLng: "en",
    });

  return instance;
};

export default configure;
