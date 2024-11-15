import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { store } from "./store";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import { AuthContextProvider } from "./website/utils/auth-context"; // Add this line to import AuthContextProvider

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthContextProvider> {/* Wrap the App with AuthContextProvider */}
        <Toaster />
        <App />
      </AuthContextProvider>
    </Provider>
  </React.StrictMode>
);
