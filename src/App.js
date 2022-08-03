import { Fragment } from "react";
//translation
import { I18nextProvider } from "react-i18next";
import i18next from "./translations/i18next";

import Router from "./setup/router";
import AppProviders from "./setup/providers";

function App() {
  return (
    <AppProviders>
      <Router />
    </AppProviders>
  );
}

export default App;
