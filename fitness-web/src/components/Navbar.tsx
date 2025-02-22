// src/components/Navbar.tsx
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';
import ThemeToggle from './ThemeToggle'; // Import ThemeToggle komponenty
import { BsList, BsX } from 'react-icons/bs'; // Import ikon hamburger menu a zavření

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State pro ovládání mobilního menu

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen); // Přepínání stavu menu
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarBrand}> {/* Kontejner pro brand (logo/název webu) */}
        <Link href="/" className={styles.brandLink}>
          Fitness Coaching {/* Prozatím textový název, můžeš nahradit komponentou s logem */}
        </Link>
      </div>

      <div className={styles.desktopNav}> {/* Kontejner pro DESKTOP navigaci - **VIDITELNÝ JEN NA DESKTOPU** */}
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/" className={styles.navLink}>
              Domů
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/aboutme" className={styles.navLink}>
              O mně
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/kontakt" className={styles.navLink}>
              Kontakt
            </Link>
          </li>
        </ul>
        <ThemeToggle /> {/* ThemeToggle pro desktop */}
      </div>

      {/* Mobilní navigace (hamburger menu) - **VIDITELNÁ JEN NA MOBILU** */}
      <div className={styles.mobileNav}>
        <button className={styles.menuToggleButton} onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <BsX size="25" color="var(--color-text-primary)"/> : <BsList size="25" color="var(--color-text-primary)"/>} {/* Ikona se mění podle stavu menu */}
        </button>

        {isMobileMenuOpen && ( // Podmíněné renderování mobilního menu
          <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}> {/* **KONTROLA: PODMÍNĚNÁ TŘÍDA 'open'** */}
            <ul className={styles.mobileMenuList}>
              <li className={styles.mobileMenuItem}>
                <Link href="/" className={styles.mobileMenuLink} onClick={() => setIsMobileMenuOpen(false)}> {/* Zavření menu po kliknutí */}
                  Domů
                </Link>
              </li>
              <li className={styles.mobileMenuItem}>
                <Link href="/aboutme" className={styles.mobileMenuLink} onClick={() => setIsMobileMenuOpen(false)}>
                  O mně
                </Link>
              </li>
              <li className={styles.mobileMenuItem}>
                <Link href="/kontakt" className={styles.mobileMenuLink} onClick={() => setIsMobileMenuOpen(false)}>
                  Kontakt
                </Link>
              </li>
              <li className={styles.mobileMenuItem}>
                <ThemeToggle /> {/* ThemeToggle pro mobilní menu */}
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;