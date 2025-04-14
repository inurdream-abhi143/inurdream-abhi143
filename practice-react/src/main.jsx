import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppProvider } from "./components/usercontext/userContext.jsx";
import "./index.css";
import App from "./App.jsx";
import Counter from "./components/Counter.jsx";

createRoot(document.getElementById("root")).render(
  <AppProvider>
    <App />
    {/* counter file  */}
    {/* <Counter /> */}
  </AppProvider>
);
