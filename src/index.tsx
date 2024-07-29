import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux"; // Import Provider
import { store } from "./redux/store"; // Import store
import ErrorBoundary from "./ErrorBoundary"; // Import ErrorBoundary

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </Provider>
  // </React.StrictMode>
);