import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./components/Themes/Themes";

// Styles
import "./index.css";
import "./App.scss";

// أهم حاجة ↑↑↑
import "./i18n/i18n";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
