import React from "react";
import { useTheme } from '../model/useTheme';
import './themes';

const ThemeToggleButton: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return(
        <button
            onClick={toggleTheme}>
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </button>
    )
}
export default ThemeToggleButton;