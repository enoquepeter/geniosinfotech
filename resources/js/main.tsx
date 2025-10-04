import { createRoot } from 'react-dom/client'
import { ThemeProvider } from "@/contexts/ThemeContext";
import App from './App.js'
import '../css/index.css'

createRoot(document.getElementById("root")!).render(
    <ThemeProvider defaultTheme="light">
        <App />
    </ThemeProvider>
);
