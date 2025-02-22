// src/pages/aboutme.tsx
import React from 'react';
import styles from './aboutme.module.css';
import Image from 'next/image';

const AboutMePage: React.FC = () => {
  return (
    <div className={styles.oMneContainer}>
      <section className={styles.uvodSection}>
        <h1 className={styles.pageTitle}>O mně</h1>
        <div className={styles.profilovkaContainer}> {/* Nový kontejner pro profilovku */}
          <Image
            src="/images/trener.jpg"
            alt="Profilová fotka trenéra"
            className={styles.profilovka}
            width={200}
            height={200}
          />
        </div>
        <p className={styles.uvodniText}> {/* Nový styl pro úvodní text */}
          Vítejte na stránce O mně! Jmenuji se [Tvé Jméno] a jsem certifikovaný fitness coach s [Počet let] letou praxí.
        </p>
      </section>

      <section className={styles.zkusenostiSection}>
        <h2>Moje Zkušenosti a Přístup</h2>
        <p>Mám zkušenosti s [Vypiš oblasti tvých zkušeností, např. silový trénink, redukce váhy, funkční trénink]. Můj přístup je individuální a zaměřuje se na potřeby každého klienta.</p>
        <p>Věřím, že fitness je cesta, ne cíl, a rád/a vás budu provázet na vaší cestě ke zdravějšímu a silnějšímu já.</p>
      </section>
    </div>
  );
};

export default AboutMePage;