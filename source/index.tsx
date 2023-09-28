import React from "react";

import ReactDOM from "react-dom/client";

import App from "~/app";

import "./index.scss";

const app = document.getElementById("app")!;

ReactDOM.createRoot(app).render((
  <React.StrictMode>
    <App/>
  </React.StrictMode>
));
