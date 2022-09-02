import React, { useEffect } from "react";
// translation
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getApi } from "../../../api/apiCall";
import { setProducts } from "../../../redux/slices/seller/products";

const CustomerHome = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    localStorage.setItem("lang", lang);
    i18n.changeLanguage(lang);
  };

  const { products, loading, error } = useSelector((state) => state.productSlice);

  useEffect(() => {
    getApi("products.json", setProducts );
  }, []);

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

      <section>
        <h5 className="mt-5 ms-1">Data Coming from redux state</h5>

        {/* {error ? <h1>{error}</h1> : ""}

        {loading ? (
          <h3>Loading</h3>
        ) : (
          <div>
            {users?.length > 0 &&
              users.map((item) => {
                return <h2 key={item.id}>{item.name}</h2>;
              })}
          </div>
        )} */}
      </section>
    </div>
  );
};

export default CustomerHome;
