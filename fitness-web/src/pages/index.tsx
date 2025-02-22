// src/pages/index.tsx
import React from 'react';
import styles from './index.module.css';
import Link from 'next/link';

const HomePage: React.FC = () => {
  return (
    <div className={styles.homepageContainer}>
      <section className={styles.heroSection}>
        <h1 className={styles.heroTitle}>Vítejte na mém webu Fitness Coachingu!</h1>
        <p className={styles.heroSubtitle}>Dosáhněte svých fitness cílů s profesionálním vedením.</p>
      </section>

      <section className={styles.servicesSection}>
        <h2>Moje Služby</h2>
        <div className={styles.servicesGrid}>
          
          {/* COACHING+ */}
          <div className={styles.serviceCard}>
            <h3 className={styles.serviceTitle}>COACHING+</h3>
            <ul className={styles.serviceFeatures}>
              <li>✓ 1 společný trénink měsíčně</li>
              <li>✓ Jídelníček</li>
              <li>✓ Tréninkový plán na míru</li>
              <li>✓ Video vysvětlivky cviků</li>
              <li>✓ 2x týdně kontroly</li>
              <li>✓ WhatsApp chat</li>
            </ul>
            <div className={styles.priceContainer}>
              <span className={styles.price}>2500,-</span>
              <span className={styles.period}>/ 1 měsíc</span>
            </div>
            <button className={styles.serviceButton}>
              MÁM ZÁJEM →
            </button>
          </div>

          {/* COACHING CLASSIC */}
          <div className={styles.serviceCard}>
            <h3 className={styles.serviceTitle}>COACHING CLASSIC</h3>
            <ul className={styles.serviceFeatures}>
              <li>✓ Jídelníček</li>
              <li>✓ Tréninkový plán na míru</li>
              <li>✓ Video vysvětlivky cviků</li>
              <li>✓ 2x týdně kontroly</li>
              <li>✓ WhatsApp chat</li>
            </ul>
            <div className={styles.priceContainer}>
              <span className={styles.price}>2000,-</span>
              <span className={styles.period}>/ 1 měsíc</span>
            </div>
            <button className={styles.serviceButton}>
              MÁM ZÁJEM →
            </button>
          </div>

          {/* COACHING STUDENT */}
          <div className={styles.serviceCard}>
            <h3 className={styles.serviceTitle}>COACHING STUDENT</h3>
            <ul className={styles.serviceFeatures}>
              <li>✓ Jídelníček</li>
              <li>✓ Tréninkový plán na míru</li>
              <li>✓ Video vysvětlivky cviků</li>
              <li>✓ 2x týdně kontroly</li>
              <li>✓ WhatsApp chat</li>
            </ul>
            <div className={styles.priceContainer}>
              <span className={styles.price}>2000,-</span>
              <span className={styles.period}>/ 1. měsíc, dále 1500,-</span>
            </div>
            <button className={styles.serviceButton}>
              MÁM ZÁJEM →
            </button>
          </div>

          {/* PORADENSTVÍ */}
          <div className={styles.serviceCard}>
            <h3 className={styles.serviceTitle}>PORADENSTVÍ</h3>
            <ul className={styles.serviceFeatures}>
              <li>✓ Suplementace</li>
              <li>✓ Optimalizace zdraví</li>
              <li>✓ Odběry</li>
            </ul>
            <div className={styles.priceContainer}>
              <span className={styles.price}>2500,-</span>
              <span className={styles.period}>/ 1 měsíc</span>
            </div>
            <button className={styles.serviceButton}>
              MÁM ZÁJEM →
            </button>
          </div>

          {/* JÍDELNÍČEK */}
          <div className={styles.serviceCard}>
            <h3 className={styles.serviceTitle}>JÍDELNÍČEK</h3>
            <ul className={styles.serviceFeatures}>
              <li>✓ 12 variant pro každé jídlo</li>
              <li>✓ Náročnost přípravy dle chuti</li>
              <li>✓ Jídla na míru chutím</li>
              <li>✓ 2x týdně kontroly</li>
              <li>✓ WhatsApp chat</li>
            </ul>
            <div className={styles.priceContainer}>
              <span className={styles.price}>1500,-</span>
              <span className={styles.period}>/ 1 měsíc</span>
            </div>
            <button className={styles.serviceButton}>
              MÁM ZÁJEM →
            </button>
          </div>

          {/* TRÉNINKOVÝ PLÁN */}
          <div className={styles.serviceCard}>
            <h3 className={styles.serviceTitle}>TRÉNINKOVÝ PLÁN</h3>
            <ul className={styles.serviceFeatures}>
              <li>✓ Jednorázový</li>
              <li>✓ Na míru dle stanovených cílů</li>
              <li>✓ Na míru dle vybavení</li>
              <li>✓ Na míru dle časových možností</li>
            </ul>
            <div className={styles.priceContainer}>
              <span className={styles.price}>2000,-</span>
            </div>
            <button className={styles.serviceButton}>
              MÁM ZÁJEM →
            </button>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <h2>Začněte svou cestu k lepšímu zdraví ještě dnes!</h2>
        <p>Kontaktujte mě pro úvodní konzultaci zdarma.</p>
        <Link href="/kontakt" className={styles.ctaButton}>
          Kontaktujte mě
        </Link>
      </section>
    </div>
  );
};

export default HomePage;