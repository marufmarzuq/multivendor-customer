import { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import NavRoutes from "./routes_&_Navigations/routes/NavRoutes";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <NavRoutes />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
