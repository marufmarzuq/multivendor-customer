import React from "react";
// translation
import { useTranslation } from "react-i18next";

const CustomerHome = () => {
  const { t, i18n } = useTranslation();

  // changing language from dropdown
  // https://www.tabnine.com/code/javascript/functions/react-i18next/i18n/changeLanguage
  // remove the link after implementation it is for testing purpose

  const changeLanguage = (lang) => {
    localStorage.setItem("lang", lang);
    i18n.changeLanguage(lang);
  };

  return (
    <div>
      {t("wholesale")}
      <p> {t("no_search_found")} </p>
      <p> {t("process_checkout")} </p>
      <button
        onClick={() => changeLanguage("fr")}
        className="btn btn-primary mx-5"
      >
        France
      </button>

      <button
        onClick={() => changeLanguage("en")}
        className="btn btn-primary mx-5"
      >
        Eng
      </button>

      <button
        onClick={() => changeLanguage("ro")}
        className="btn btn-primary mx-5"
      >
        Ro
      </button>

      <button
        onClick={() => changeLanguage("es")}
        className="btn btn-primary mx-5"
      >
        Es
      </button>

      <button
        onClick={() => changeLanguage("it")}
        className="btn btn-primary mx-5 my-3"
      >
        It
      </button>
    </div>
  );
};

export default CustomerHome;
