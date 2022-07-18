import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Auth0Provider } from "@auth0/auth0-react";
import persistedStore from './slice';
import config from "./config";

import App from "./App";

const { store, persistor } = persistedStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Auth0Provider
          domain={config.authDomain}
          clientId={config.clientId}
          redirectUri={window.location.origin}
        >
          <App />
        </Auth0Provider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
