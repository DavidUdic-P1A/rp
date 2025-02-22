// src/components/ThemeToggle.tsx
import React, { useState, useEffect } from 'react';
import styles from './ThemeToggle.module.css';
import { BsSun, BsMoonStarsFill } from 'react-icons/bs'; // Import ikony slunce a měsíce z react-icons

const ThemeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false); // State pro sledování režimu (false = light, true = dark)

  useEffect(() => {
    // Při prvním načtení zkontrolujeme uložené preference z localStorage
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setDarkMode(true);
    } else if (storedTheme === 'light') {
      setDarkMode(false);
    } else {
      // Pokud v localStorage nic není, zkusíme detekovat preferenci systému
      const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(prefersDarkMode);
    }
  }, []); // Prázdné dependency array, useEffect se spustí jen jednou po prvním renderu

  useEffect(() => {
    // Po každé změně darkMode state, uložíme preference do localStorage a aktualizujeme třídu na body
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]); // useEffect se spustí, když se změní darkMode state

  const toggleDarkMode = () => {
    setDarkMode(!darkMode); // Přepnutí režimu při kliknutí
  };

  return (
    <button className={styles.themeToggleButton} onClick={toggleDarkMode}>
      {darkMode ? <BsSun size="20" color="white"/> : <BsMoonStarsFill size="20" />} {/* Ikona se mění podle režimu */}
    </button>
  );
};

export default ThemeToggle;