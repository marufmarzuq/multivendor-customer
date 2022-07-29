import { Fragment } from "react";
//translation
import {I18nextProvider} from 'react-i18next';
import i18next from './translations/i18next';
// route
import { BrowserRouter } from "react-router-dom";
import NavRoutes from "./routes_&_Navigations/routes/NavRoutes";

function App() {
  return (
    <Fragment>
				<I18nextProvider i18n={i18next}>
					<BrowserRouter>
							<NavRoutes />
						</BrowserRouter>
				</I18nextProvider>
    </Fragment>
  );
}

export default App;
