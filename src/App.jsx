import React, { Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ErrorBoundary from "./components/Errors/ErrorBoundary";
import "../tailwind.css";
import "../node_modules/react-modal-video/css/modal-video.css";
import RoutesCustom from "./utils/routes/RoutesCustom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Fragment>
      <ErrorBoundary>
        <Router>
          <Header />
          <RoutesCustom />
          <Footer />
        </Router>
      </ErrorBoundary>
    </Fragment>
  );
}

export default App;
