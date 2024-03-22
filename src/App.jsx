import React, { Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { UseContextProvider } from "./utils/context/UseContextProvider";
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
        <UseContextProvider>
          <Router>
              <Header />
              <RoutesCustom />
              <Footer />
          </Router>
        </UseContextProvider>
      </ErrorBoundary>
    </Fragment>
  );
}

export default App;
