import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import User from "./pages/User"
import Login from "./pages/Login"
import DashboardUser from "./pages/DashboardUser"
import DashboardRole from "./pages/DashboardRole"


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/user" element={<User />} />
          <Route path="/login" element={<Login />} />
          <Route path="/userdashboard" element={<DashboardUser />} />
          <Route path="/roledashboard" element={<DashboardRole />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
