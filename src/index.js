import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: { main: "#26a69a" },
        secondary: { main: "#40c4ff" },
    },
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
);
