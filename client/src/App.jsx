import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Login from "./pages/admin/Login"
import Dashboard from "./pages/admin/Dashboard"
import Projects from "./pages/admin/Projects"
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route
            path="/"
            element={<Login />}
          ></Route>

          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          <Route
            path="/projects"
            element={<Projects />}
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
