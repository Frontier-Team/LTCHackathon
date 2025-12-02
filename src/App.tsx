import { HashRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { AccessibilityPage } from "./pages/AccessibilityPage";
import { ConductPage } from "./pages/ConductPage";
import { HomePage } from "./pages/HomePage";
import { HackersPage } from "./pages/HackersPage";
import { AppThemeProvider } from "./providers/ThemeProvider";
import { TalkAgendaPage } from "./pages/TalkAgendaPage";

export const App = () => {
  return (
    <AppThemeProvider>
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/conduct" element={<ConductPage />} />
          <Route path="/agenda" element={<TalkAgendaPage />} />
          <Route path="/hack" element={<HackersPage />} />
          <Route path="/conduct" element={<ConductPage />} />
          <Route path="/accessibility" element={<AccessibilityPage />} />
        </Routes>
      </HashRouter>
    </AppThemeProvider>
  );
};
