import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import DashboardPage from "./pages/dashboard/DashbaordPage.tsx";
import PeoplePage from "./pages/people/PeoplePage.tsx";
import SettingsPage from "./pages/settings/SettingsPage.tsx";
import HelpPage from "./pages/help/HelpPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* AP-TODO: Need to add login and protected routes */}
        {/* AP-TODO: Need to add a 404 page */}
        <Route path="/" element={<DashboardPage />} />
        <Route path="people" element={<PeoplePage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="help" element={<HelpPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
