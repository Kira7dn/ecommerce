import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { theme } from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { store } from "@/state/store.tsx";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
);
