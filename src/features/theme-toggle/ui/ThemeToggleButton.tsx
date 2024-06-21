import React from "react";
import { useTheme } from '../model/useTheme';

const ThemeToggleButton: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return(
        <button onClick={toggleTheme}>
            Dark Mode {theme === 'dark' ? 'dark' : 'light'}
        </button>
    )
}
export default ThemeToggleButton;