import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import GlobalStyles from "./styles/Globalstyles";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
