// src/components/Layout.tsx
import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer'; // Import nové komponenty Footer
import styles from './Layout.module.css';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.layoutContainer}>
      <Navbar />
      <main className={styles.mainContent}>{children}</main>
      <Footer /> {/* Použití nové komponenty Footer místo jednoduché patičky */}
    </div>
  );
};

export default Layout;