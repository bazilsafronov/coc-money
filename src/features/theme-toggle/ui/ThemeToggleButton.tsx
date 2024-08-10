import React from "react";
import { useTheme } from "../model/useTheme";
import "./themes";
import styles from "./ThemeToggleButton.module.sass";
import moonIcon from "@/shared/icons/moon.svg";

const ThemeToggleButton: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={styles.toggleContainer}>
      <div
        className={`${styles.toggle} ${
          theme === "light" ? styles.light : styles.dark
        }`}
        onClick={toggleTheme}
      >
        <div className={styles.toggleThumb} />
      </div>
    </div>
  );
};
export default ThemeToggleButton;
