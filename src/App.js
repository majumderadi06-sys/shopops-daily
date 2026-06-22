import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import Login from "./components/Login";
import StaffHome from "./components/staff/StaffHome";
import OpeningLog from "./components/staff/OpeningLog";
import ClosingLog from "./components/staff/ClosingLog";
import PettyCash from "./components/staff/PettyCash";
import DamagedGoods from "./components/staff/DamagedGoods";
import Attendance from "./components/staff/Attendance";
import ManagerDashboard from "./components/manager/ManagerDashboard";
import Alerts from "./components/manager/Alerts";
import History from "./components/manager/History";
import Settings from "./components/manager/Settings";

function ProtectedRoute({ children, managerOnly = false }) {
  const { currentUser } = useAuth();
  if (!currentUser) return <Navigate to="/login" />;
  if (managerOnly && currentUser.role !== "manager") return <Navigate to="/staff" />;
  return children;
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/staff" element={<ProtectedRoute><StaffHome /></ProtectedRoute>} />
          <Route path="/staff/opening" element={<ProtectedRoute><OpeningLog /></ProtectedRoute>} />
          <Route path="/staff/closing" element={<ProtectedRoute><ClosingLog /></ProtectedRoute>} />
          <Route path="/staff/petty" element={<ProtectedRoute><PettyCash /></ProtectedRoute>} />
          <Route path="/staff/damaged" element={<ProtectedRoute><DamagedGoods /></ProtectedRoute>} />
          <Route path="/staff/attendance" element={<ProtectedRoute><Attendance /></ProtectedRoute>} />
          <Route path="/manager" element={<ProtectedRoute managerOnly><ManagerDashboard /></ProtectedRoute>} />
          <Route path="/manager/alerts" element={<ProtectedRoute managerOnly><Alerts /></ProtectedRoute>} />
          <Route path="/manager/history" element={<ProtectedRoute managerOnly><History /></ProtectedRoute>} />
          <Route path="/manager/settings" element={<ProtectedRoute managerOnly><Settings /></ProtectedRoute>} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
