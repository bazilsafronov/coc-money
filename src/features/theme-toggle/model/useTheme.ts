import {useState, useEffect} from "react";

type Theme = 'light' | 'dark';

export const useTheme = () => {
    const [theme, setTheme] = useState<Theme>(() => {
        const savedTheme = localStorage.getItem('theme');
        return( savedTheme as Theme ) || 'light';
    });

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevState =>  prevState === 'light' ? 'dark' : 'light');
    }
    return { theme, toggleTheme };
}