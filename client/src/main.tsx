import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Point the favicon at the deployed base path (handles subpath hosting like GitHub Pages)
const favicon = document.querySelector<HTMLLinkElement>("link[rel='icon']");
if (favicon) favicon.href = `${import.meta.env.BASE_URL}images/logo-icon.png`;

createRoot(document.getElementById("root")!).render(<App />);
