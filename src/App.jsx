import React, { Fragment } from 'react';
import ErrorBoundary from './components/Errors/ErrorBoundary';
import "../tailwind.css";
import "../node_modules/react-modal-video/css/modal-video.css";
import Layout from './components/layout/Layout';

function App() {
  return (
    <Fragment>
      <ErrorBoundary>
        <Layout />
      </ErrorBoundary>
    </Fragment>
  );
}

export default App;