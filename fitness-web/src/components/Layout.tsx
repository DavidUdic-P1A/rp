// src/components/Layout.tsx
import React, { ReactNode } from 'react';
import Navbar from './Navbar'; // **DŮLEŽITÉ: Import Navbar!**
import styles from './Layout.module.css';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.layoutContainer}>
      <Navbar /> {/* **DŮLEŽITÉ: Vložení Navbar komponenty!** */}
      <main className={styles.mainContent}>{children}</main>
      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Fitness Coaching - Všechna práva vyhrazena.</p>
      </footer>
    </div>
  );
};

export default Layout;