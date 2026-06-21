import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import Projects from "./pages/admin/Projects";
import Skills from "./pages/admin/Skill";
import Experiences from "./pages/admin/Experience";
import Education from "./pages/admin/Education";
import Certificates from "./pages/admin/Certificate";
import Contacts from "./pages/admin/Contact";
import Settings from "./pages/admin/Setting";

import AdminLayout from "./layouts/AdminLayout";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Login />}
        />

        <Route element={<AdminLayout />}>

          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          <Route
            path="/projects"
            element={<Projects />}
          />

          <Route
            path="/skills"
            element={<Skills />}
          />

          <Route
            path="/experiences"
            element={<Experiences />}
          />

          <Route
            path="/educations"
            element={<Education />}
          />

          <Route
            path="/certificates"
            element={<Certificates />}
          />

          <Route
            path="/contacts"
            element={<Contacts />}
          />

          <Route
            path="/settings"
            element={<Settings />}
          />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;