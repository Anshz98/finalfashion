import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { store } from "./store";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import { AuthContextProvider } from "./website/utils/auth-context"; // Import AuthContextProvider

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}> {/* Wrap with Redux Provider */}
      <AuthContextProvider> {/* Wrap the App with AuthContextProvider */}
        <Toaster position="top-right" reverseOrder={false} /> {/* Toast notifications */}
        <App /> {/* Main App */}
      </AuthContextProvider>
    </Provider>
  </React.StrictMode>
);
