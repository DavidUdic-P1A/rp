// src/pages/index.tsx
import React from 'react';
import styles from './index.module.css';
import Link from 'next/link';
import Head from 'next/head';

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <title>Fitness Coaching - Osobní trénink a výživové poradenství</title>
        <meta name="description" content="Profesionální fitness coaching, tréninkové plány a výživové poradenství pro váš lepší životní styl." />
      </Head>
      
      <div className={styles.homepageContainer}>
        <section className={styles.heroSection}>
          <div className={styles.heroBackdrop}></div>
          <div className={styles.heroContainer}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>DOSÁHNI SVÉHO MAXIMA</h1>
              <div className={styles.heroTitleLine}></div>
              <h2 className={styles.heroSubtitle}>Osobní fitness trenér</h2>
              <p className={styles.heroText}>
                Transformační tréninkové programy a výživové plány na míru 
                pro skutečné výsledky.
              </p>
              <div className={styles.heroButtons}>
                <Link href="/kontakt" className={styles.primaryButton}>
                  ZAČÍT TRÉNOVAT
                </Link>
                <Link href="/aboutme" className={styles.secondaryButton}>
                  O TRENÉROVI
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Marquee sekce */}
        <section className={styles.marqueeSection}>
          <div className={styles.marqueeTrack}>
            <div className={styles.marqueeContent}>
              <span>PŘEKONEJ SVÉ LIMITY</span>
              <span className={styles.marqueeSeparator}>•</span>
              <span>STAŇ SE NEJLEPŠÍ VERZÍ SEBE SAMA</span>
              <span className={styles.marqueeSeparator}>•</span>
              <span>TRANSFORMACE ZAČÍNÁ DNES</span>
              <span className={styles.marqueeSeparator}>•</span>
              <span>SILNĚJŠÍ KAŽDÝM DNEM</span>
              <span className={styles.marqueeSeparator}>•</span>
              <span>PŘEKONEJ SVÉ LIMITY</span>
              <span className={styles.marqueeSeparator}>•</span>
              <span>STAŇ SE NEJLEPŠÍ VERZÍ SEBE SAMA</span>
              <span className={styles.marqueeSeparator}>•</span>
              <span>TRANSFORMACE ZAČÍNÁ DNES</span>
              <span className={styles.marqueeSeparator}>•</span>
              <span>SILNĚJŠÍ KAŽDÝM DNEM</span>
              <span className={styles.marqueeSeparator}>•</span>
            </div>
          </div>
        </section>

        <section className={styles.servicesSection}>
          <div className={styles.sectionHeader}>
            <h2>SLUŽBY PRO TVŮJ ÚSPĚCH</h2>
            <p className={styles.sectionSubtitle}>Vyberte si službu, která vám pomůže dosáhnout vašich fitness cílů</p>
          </div>
          <div className={styles.servicesGrid}>
            
            {/* COACHING+ */}
            <div className={styles.serviceCard}>
              <div className={styles.serviceCardInner}>
                <div className={styles.serviceCardDecoration}></div>
                <div className={styles.serviceHeader}>
                  <div className={styles.serviceIconContainer}>
                    <span className={styles.serviceIcon}>🌟</span>
                  </div>
                  <h3 className={styles.serviceTitle}>COACHING+</h3>
                  <div className={styles.priceContainer}>
                    <span className={styles.price}>2500,-</span>
                    <span className={styles.period}>/ 1 měsíc</span>
                  </div>
                </div>
                <ul className={styles.serviceFeatures}>
                  <li>✓ 1 společný trénink měsíčně</li>
                  <li>✓ Jídelníček</li>
                  <li>✓ Tréninkový plán na míru</li>
                  <li>✓ Video vysvětlivky cviků</li>
                  <li>✓ 2x týdně kontroly</li>
                  <li>✓ WhatsApp chat</li>
                </ul>
                <Link href="/kontakt" className={styles.serviceButton}>
                  MÁM ZÁJEM <span className={styles.buttonArrow}>→</span>
                </Link>
              </div>
            </div>

            {/* COACHING CLASSIC */}
            <div className={styles.serviceCard}>
              <div className={styles.serviceCardInner}>
                <div className={styles.serviceCardDecoration}></div>
                <div className={styles.serviceHeader}>
                  <div className={styles.serviceIconContainer}>
                    <span className={styles.serviceIcon}>🏆</span>
                  </div>
                  <h3 className={styles.serviceTitle}>COACHING CLASSIC</h3>
                  <div className={styles.priceContainer}>
                    <span className={styles.price}>2000,-</span>
                    <span className={styles.period}>/ 1 měsíc</span>
                  </div>
                </div>
                <ul className={styles.serviceFeatures}>
                  <li>✓ Jídelníček</li>
                  <li>✓ Tréninkový plán na míru</li>
                  <li>✓ Video vysvětlivky cviků</li>
                  <li>✓ 2x týdně kontroly</li>
                  <li>✓ WhatsApp chat</li>
                </ul>
                <Link href="/kontakt" className={styles.serviceButton}>
                  MÁM ZÁJEM <span className={styles.buttonArrow}>→</span>
                </Link>
              </div>
            </div>

            {/* COACHING STUDENT */}
            <div className={styles.serviceCard}>
              <div className={styles.serviceCardInner}>
                <div className={styles.serviceCardDecoration}></div>
                <div className={styles.serviceHeader}>
                  <div className={styles.serviceIconContainer}>
                    <span className={styles.serviceIcon}>📚</span>
                  </div>
                  <h3 className={styles.serviceTitle}>COACHING STUDENT</h3>
                  <div className={styles.priceContainer}>
                    <span className={styles.price}>2000,-</span>
                    <span className={styles.period}>/ 1. měsíc, dále 1500,-</span>
                  </div>
                </div>
                <ul className={styles.serviceFeatures}>
                  <li>✓ Jídelníček</li>
                  <li>✓ Tréninkový plán na míru</li>
                  <li>✓ Video vysvětlivky cviků</li>
                  <li>✓ 2x týdně kontroly</li>
                  <li>✓ WhatsApp chat</li>
                </ul>
                <Link href="/kontakt" className={styles.serviceButton}>
                  MÁM ZÁJEM <span className={styles.buttonArrow}>→</span>
                </Link>
              </div>
            </div>

            {/* PORADENSTVÍ */}
            <div className={styles.serviceCard}>
              <div className={styles.serviceCardInner}>
                <div className={styles.serviceCardDecoration}></div>
                <div className={styles.serviceHeader}>
                  <div className={styles.serviceIconContainer}>
                    <span className={styles.serviceIcon}>💡</span>
                  </div>
                  <h3 className={styles.serviceTitle}>PORADENSTVÍ</h3>
                  <div className={styles.priceContainer}>
                    <span className={styles.price}>2500,-</span>
                    <span className={styles.period}>/ 1 měsíc</span>
                  </div>
                </div>
                <ul className={styles.serviceFeatures}>
                  <li>✓ Suplementace</li>
                  <li>✓ Optimalizace zdraví</li>
                  <li>✓ Odběry</li>
                </ul>
                <Link href="/kontakt" className={styles.serviceButton}>
                  MÁM ZÁJEM <span className={styles.buttonArrow}>→</span>
                </Link>
              </div>
            </div>

            {/* JÍDELNÍČEK */}
            <div className={styles.serviceCard}>
              <div className={styles.serviceCardInner}>
                <div className={styles.serviceCardDecoration}></div>
                <div className={styles.serviceHeader}>
                  <div className={styles.serviceIconContainer}>
                    <span className={styles.serviceIcon}>🍽️</span>
                  </div>
                  <h3 className={styles.serviceTitle}>JÍDELNÍČEK</h3>
                  <div className={styles.priceContainer}>
                    <span className={styles.price}>1500,-</span>
                    <span className={styles.period}>/ 1 měsíc</span>
                  </div>
                </div>
                <ul className={styles.serviceFeatures}>
                  <li>✓ 12 variant pro každé jídlo</li>
                  <li>✓ Náročnost přípravy dle chuti</li>
                  <li>✓ Jídla na míru chutím</li>
                  <li>✓ 2x týdně kontroly</li>
                  <li>✓ WhatsApp chat</li>
                </ul>
                <Link href="/kontakt" className={styles.serviceButton}>
                  MÁM ZÁJEM <span className={styles.buttonArrow}>→</span>
                </Link>
              </div>
            </div>

            {/* TRÉNINKOVÝ PLÁN */}
            <div className={styles.serviceCard}>
              <div className={styles.serviceCardInner}>
                <div className={styles.serviceCardDecoration}></div>
                <div className={styles.serviceHeader}>
                  <div className={styles.serviceIconContainer}>
                    <span className={styles.serviceIcon}>📋</span>
                  </div>
                  <h3 className={styles.serviceTitle}>TRÉNINKOVÝ PLÁN</h3>
                  <div className={styles.priceContainer}>
                    <span className={styles.price}>2000,-</span>
                  </div>
                </div>
                <ul className={styles.serviceFeatures}>
                  <li>✓ Jednorázový</li>
                  <li>✓ Na míru dle stanovených cílů</li>
                  <li>✓ Na míru dle vybavení</li>
                  <li>✓ Na míru dle časových možností</li>
                </ul>
                <Link href="/kontakt" className={styles.serviceButton}>
                  MÁM ZÁJEM <span className={styles.buttonArrow}>→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action sekce */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaOverlay}></div>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>PŘIPRAVEN ZMĚNIT SVŮJ ŽIVOT?</h2>
            <p className={styles.ctaText}>První krok k úspěchu je nejdůležitější. Začni svou transformaci ještě dnes.</p>
            <Link href="/kontakt" className={styles.ctaButton}>
              KONTAKTOVAT TRENÉRA
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;