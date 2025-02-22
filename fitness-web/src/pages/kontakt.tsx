// src/pages/kontakt.tsx
import React from 'react';
import styles from './kontakt.module.css'; // Import CSS moduly pro Kontakt

const KontaktPage: React.FC = () => {
  return (
    <div className={styles.kontaktContainer}>
      <h1 className={styles.pageTitle}>Kontaktní formulář</h1>
      <p className={styles.kontaktInfo}>
        Pro úvodní konzultaci a personalizovaný přístup prosím vyplňte formulář níže. Po odeslání se vám brzy ozvu.
      </p>

      <form
        className={styles.kontaktForm}
        action="https://formsubmit.co/zidomination@gmail.com" // **TVŮJ EMAIL UŽ BY MĚL BÝT NASTAVENÝ**
        method="POST"
      >
        {/* Skupina polí - Jméno */}
        <div className={styles.formGroup}>
          <label htmlFor="name">Jméno a Příjmení:</label>
          <input type="text" id="name" name="name" required className={styles.formInput} />
        </div>

        {/* Skupina polí - Email */}
        <div className={styles.formGroup}>
          <label htmlFor="email">E-mail:</label>
          <input type="email" id="email" name="email" required className={styles.formInput} />
        </div>

        {/* Skupina polí - Telefonní číslo */}
        <div className={styles.formGroup}>
          <label htmlFor="phone">Telefonní číslo (volitelné):</label>
          <input type="tel" id="phone" name="phone" className={styles.formInput} />
        </div>

        {/* Skupina polí - Věk */}
        <div className={styles.formGroup}>
          <label htmlFor="age">Věk:</label>
          <input type="number" id="age" name="age" className={styles.formInput} />
        </div>

        {/* Skupina polí - Výška */}
        <div className={styles.formGroup}>
          <label htmlFor="height">Výška (cm):</label>
          <input type="number" id="height" name="height" className={styles.formInput} />
        </div>

        {/* Skupina polí - Hmotnost */}
        <div className={styles.formGroup}>
          <label htmlFor="weight">Hmotnost (kg):</label>
          <input type="number" id="weight" name="weight" step="0.1" className={styles.formInput} />
        </div>

        {/* Skupina polí - Povolání/Studium - DROPDOWN */}
        <div className={styles.formGroup}>
          <label htmlFor="occupation">Povolání / Studium:</label>
          <select id="occupation" name="occupation" className={styles.formSelect}>
            <option value="">-- Vyberte možnost --</option>
            <option value="sedave-povolani">Sedavé povolání</option>
            <option value="fyzicky-narocne-povolani">Fyzicky náročné povolání</option>
            <option value="student-ss-vs">Student SŠ/VŠ</option>
            <option value="student-zs">Student ZŠ</option>
            <option value="jine">Jiné</option>
          </select>
        </div>

        {/* Skupina polí - Fyzická aktivita - TEXTAREA */}
        <div className={`${styles.formGroup} ${styles.fullWidth}`}> {/* Přidáno styles.fullWidth */}
          <label htmlFor="sportFrequency">Fyzická aktivita / Jak často, jak dlouho? Sporty?</label>
          <textarea id="sportFrequency" name="sportFrequency" rows={2} className={styles.formTextarea}></textarea>
        </div>

        {/* Skupina polí - Postavové ambice - TEXTAREA */}
        <div className={`${styles.formGroup} ${styles.fullWidth}`}> {/* Přidáno styles.fullWidth */}
          <label htmlFor="goal">Jaké máš se svojí postavou ambice, co bys s ní chtěl dělat?</label>
          <textarea id="goal" name="goal" rows={2} required className={styles.formTextarea}></textarea>
        </div>

        {/* Skupina polí - Stravovací návyky a alergie - TEXTAREA */}
        <div className={`${styles.formGroup} ${styles.fullWidth}`}> {/* Přidáno styles.fullWidth */}
          <label htmlFor="foodPreferences">Jaké máš stravovací návyky? Alergie? Co ti chutná/nechutná?</label>
          <textarea id="foodPreferences" name="foodPreferences" rows={3} className={styles.formTextarea}></textarea>
        </div>

        {/* Skupina polí - Výběr služby */}
        <div className={styles.formGroup}>
          <label htmlFor="service">Vyberte službu, která Vás zajímá:</label>
          <select id="service" name="service" required className={styles.formInput}>
            <option value="">-- Vyberte službu --</option>
            <option value="osobni-treninky">Osobní tréninky</option>
            <option value="online-coaching">Online coaching</option>
            <option value="vyzivove-poradenstvi">Výživové poradenství</option>
            <option value="treninkove-plany">Tvorba tréninkových plánů</option>
            <option value="jine">Jiné (upřesněte v zprávě)</option>
          </select>
        </div>

        {/* Skupina polí - Zpráva (volitelné, pro upřesnění) */}
        <div className={`${styles.formGroup} ${styles.fullWidth}`}> {/* Přidáno styles.fullWidth */}
          <label htmlFor="message">Zpráva / Upřesnění (volitelné):</label>
          <textarea id="message" name="message" rows={3} className={styles.formTextarea}></textarea>
        </div>

        {/* Skupina polí - Souhlas se zpracováním dat (checkbox) */}
        <div className={`${styles.formGroup} ${styles.fullWidth}`}> {/* Přidáno styles.fullWidth */}
          <div className={styles.checkboxGroup}>
            <input type="checkbox" id="privacyConsent" name="privacyConsent" required className={styles.formCheckbox} />
            <label htmlFor="privacyConsent" className={styles.privacyLabel}>Souhlasím se zpracováním smluvními podmínkami a zásadami ochrany osobních údajů.</label>
          </div>
        </div>

        <button type="submit" className={styles.formButton}>Odeslat formulář</button>
      </form>
    </div>
  );
};

export default KontaktPage;