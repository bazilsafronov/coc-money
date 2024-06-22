import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ThemeToggleButton from '@/features/theme-toggle/ui/ThemeToggleButton'
import Sidebar from "@/widgets/Sidebar/ui/Sidebar";
import Dashboard from '@/pages/dashboard';
import Accounts from '@/pages/accounts';
import Wallet from '@/pages/wallet';
import Welcome from "@/pages/welcome";
import Analytics from "@/pages/analytics";
import Settings from "@/pages/settings";
import Security from "@/pages/security";
import Help from "@/pages/help";
import Layout from "@/widgets/Layout/ui/Layout";


function App() {
    return (
        <React.StrictMode>
        <Router>
            <Layout>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/accounts" element={<Accounts />} />
                <Route path="/wallet" element={<Wallet />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/security" element={<Security />} />
                <Route path="/help" element={<Help />} />
            </Routes>
            </Layout>
        </Router>
        </React.StrictMode>
    );
}

export default App;