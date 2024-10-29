import styles from "./MortgageCard.module.css";
export default function MortgageCard() {
  return (
    <>
      <div className={styles.mortgageCard}>
        <div className={styles.calculationTab}>
          <div className={styles.mortgageTitle}>
            <h1> Mortgage Calculator</h1>
            <div className={styles.mortgageClear}> Clear All</div>
          </div>
        </div>
        <div className={styles.resultTab}></div>
      </div>
    </>
  );
}
