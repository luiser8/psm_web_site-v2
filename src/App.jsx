import React, { Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ErrorBoundary from "./components/Errors/ErrorBoundary";
import "../tailwind.css";
import "../node_modules/react-modal-video/css/modal-video.css";
import RoutesCustom from "./utils/routes/RoutesCustom";

function App() {
  return (
    <Fragment>
      <ErrorBoundary>
        <Router>
          <RoutesCustom />
        </Router>
      </ErrorBoundary>
    </Fragment>
  );
}

export default App;
