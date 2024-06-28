import React from "react";
import { useTheme } from "../model/useTheme";
import "./themes";
import styles from "./ThemeToggleButton.module.sass";

const ThemeToggleButton: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className={styles.themeToggleButton} onClick={toggleTheme}>
      {theme === "light" ? "🌞" : "🌜"}
    </button>
  );
};
export default ThemeToggleButton;
