import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Dashboard from "@/pages/dashboard";
import Accounts from "@/pages/accounts";
import Wallet from "@/pages/wallet";
import Welcome from "@/pages/welcome";
import Analytics from "@/pages/analytics";
import Settings from "@/pages/settings";
import Security from "@/pages/security";
import Signup from "@/pages/signup";
import Help from "@/pages/help";
import Layout from "@/widgets/Layout/ui/Layout";
import { useAuth } from "@/shared/providers/AuthContext";

function App() {
  const { user } = useAuth();
  const isAuthenticated = !!user;

  return (
    <Router>
      <Routes>
        <Route
          path="/signup"
          element={
            !isAuthenticated ? <Signup /> : <Navigate replace to="/dashboard" />
          }
        />
        <Route
          path="/dashboard"
          element={
            isAuthenticated ? <Dashboard /> : <Navigate replace to="/signup" />
          }
        />
        <Route element={<Layout />}>
          <Route path="/" element={<Welcome />} />
          <Route path="accounts" element={<Accounts />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="settings" element={<Settings />} />
          <Route path="security" element={<Security />} />
          <Route path="help" element={<Help />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
