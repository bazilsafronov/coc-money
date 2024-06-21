import React from 'react';
import ThemeToggleButton from '@/features/theme-toggle/ui/ThemeToggleButton'
import Sidebar from "@/widgets/Sidebar/ui/Sidebar";

function App() {
    return (
        <div>
            <Sidebar />
            <ThemeToggleButton />
        </div>
    );
}

export default App;