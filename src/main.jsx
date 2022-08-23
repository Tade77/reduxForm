import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import formSlice from "./store/form";
import { configureStore } from "@reduxjs/toolkit";
import App from "./App";
import "./index.css";

const store = configureStore({
  reducer: { formSlice: formSlice },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
