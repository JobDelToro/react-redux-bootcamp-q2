import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import config from "./config";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <Auth0Provider
      domain={config.authDomain}
      clientId={config.clientId}
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  // </React.StrictMode>
);
