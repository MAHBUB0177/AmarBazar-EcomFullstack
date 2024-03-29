import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { PersistGate } from 'reduxjs-toolkit-persist/integration/react'
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<Provider store={store}>
<PersistGate loading={null} persistor={persistor}>
    <Router>
      <App />
    </Router>
</PersistGate>
</Provider>

);
reportWebVitals();
