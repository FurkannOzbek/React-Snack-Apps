"use client";
import styles from "./MortgageCard.module.css";
import { useState } from "react";
import { useEffect } from "react";
export default function MortgageCard() {
  const [formatAmount, setFormatAmount] = useState("");
  const [amount, setAmount] = useState(1);

  function formSubmit(e) {
    e.preventDefault();
    console.log("form submitted");
  }
  // Formating the Currency
  const formatCurrency = (numberString) => {
    const formattedNumber = numberString
      .replace(/[^0-9.]/g, "") // Remove non-digit and non-dot characters
      .replace(/(\..*)\./g, "$1") // Remove all dots except the first one
      .replace(/^(\d+\.?\d{0,2}).*/, "$1"); // Limit to two digits after the dot
    // Format the number with commas
    const formattedValue = formattedNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return formattedValue;
  };

  // Handle the Input Change
  const handleCurrencyInputChange = (e) => {
    let inputValue = e.target.value;
    // Format the input value
    let formattedValue = formatCurrency(inputValue);
    // Remove leading zero if present and not just '0'
    if (formattedValue.length > 0 && formattedValue[0] === "0" && formattedValue !== "0") {
      formattedValue = formattedValue.slice(1); // Remove the leading zero
    }
    // The amount without comas for be able to calculation
    const valueWithoutComas = inputValue.replace(/,/g, "");
    setAmount(valueWithoutComas);
    setFormatAmount(formattedValue);
  };

  return (
    <>
      <div className={styles.mortgageCard}>
        <div className={styles.calculationTab}>
          <div className={styles.mortgageTitle}>
            <h1> Mortgage Calculator</h1>
            <div className={styles.mortgageClear}> Clear All</div>
          </div>

          <form className={styles.mortgageForm} onSubmit={formSubmit}>
            <label className={styles.currencyLabel}>Mortgage Amount</label>
            <div className={styles.inputWrapper}>
              <span className={styles.currencyIcon}> £ </span>
              <input
                value={formatAmount}
                onChange={handleCurrencyInputChange}
                placeholder="Enter Amount"
                className={styles.inputField}
                maxLength={20}
              />
            </div>
          </form>
        </div>
        <div className={styles.resultTab}></div>
      </div>
    </>
  );
}
