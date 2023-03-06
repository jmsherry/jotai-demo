import React from "react";
import ReactDOM from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import { Provider } from "jotai";

import App from "./App";
import JotaiDebug from "./components/debug/JotaiDebug";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CssBaseline />
    <Provider>
      <JotaiDebug />
      <App />
    </Provider>
  </React.StrictMode>
);
