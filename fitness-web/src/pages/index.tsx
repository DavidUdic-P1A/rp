// src/pages/index.tsx
import React from 'react';
import styles from './index.module.css';
import Link from 'next/link';
import Image from 'next/image';
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
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Dosáhněte svých fitness cílů</h1>
            <h2 className={styles.heroSubtitle}>Profesionální coaching</h2>
            <p className={styles.heroText}>
              Pomůžu vám transformovat vaše tělo a životní styl pomocí personalizovaných tréninkových plánů 
              a odborného vedení.
            </p>
            <div className={styles.heroButtons}>
              <Link href="/kontakt" className={styles.primaryButton}>
                Začít hned teď
              </Link>
              <Link href="/aboutme" className={styles.secondaryButton}>
                Více o mně
              </Link>
            </div>
          </div>
          <div className={styles.heroImageContainer}>
            <Image 
              src="/images/trener.jpg" 
              alt="Fitness trenér" 
              width={500} 
              height={600}
              className={styles.heroImage}
              priority
            />
          </div>
        </section>

        {/* Marquee sekce */}
        <section className={styles.marqueeSection}>
          <div className={styles.marqueeWrapper}>
            <div className={styles.marqueeContent}>
              <span>PŘEKONEJ SVÉ LIMITY</span>
              <span className={styles.marqueeSeparator}>•</span>
              <span>STAŇ SE NEJLEPŠÍ VERZÍ SEBE SAMA</span>
              <span className={styles.marqueeSeparator}>•</span>
              <span>TRANSFORMACE ZAČÍNÁ DNES</span>
              <span className={styles.marqueeSeparator}>•</span>
              <span>SILNĚJŠÍ KAŽDÝM DNEM</span>
              <span className={styles.marqueeSeparator}>•</span>
            </div>
            <div className={styles.marqueeContent} aria-hidden="true">
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
              <Link href="/kontakt" className={styles.serviceButton}>
                MÁM ZÁJEM →
              </Link>
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
              <Link href="/kontakt" className={styles.serviceButton}>
                MÁM ZÁJEM →
              </Link>
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
              <Link href="/kontakt" className={styles.serviceButton}>
                MÁM ZÁJEM →
              </Link>
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
              <Link href="/kontakt" className={styles.serviceButton}>
                MÁM ZÁJEM →
              </Link>
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
              <Link href="/kontakt" className={styles.serviceButton}>
                MÁM ZÁJEM →
              </Link>
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
              <Link href="/kontakt" className={styles.serviceButton}>
                MÁM ZÁJEM →
              </Link>
            </div>
          </div>
        </section>
        
        {/* Odstraněna původní CTA sekce, protože teď bude součástí nové patičky */}
      </div>
    </>
  );
};

export default HomePage;