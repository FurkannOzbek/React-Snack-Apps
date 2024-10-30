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
          {/* Mortgage Form */}
          <form className={styles.mortgageForm} onSubmit={formSubmit}>
            <label className={styles.inputLabel}>Mortgage Amount</label>
            {/* Input Wrapper for input and span */}
            <div className={styles.inputWrapper}>
              <span className={styles.currencyIcon}> £ </span>
              <input
                value={formatAmount}
                onChange={handleCurrencyInputChange}
                className={styles.inputField}
                maxLength={20}
              />
            </div>
            {/* Term and Rate Input Field */}
            <div className={styles.inputWrapperTermAndRate}>
              {/* Container for Term Input*/}
              <div className={styles.mortgageTermContainer}>
                <label className={styles.inputLabel}>
                  Mortgage Term
                  {/* Overriding css for not creating another class */}
                </label>
                {/* Input Wrapper for input and span */}
                <div className={styles.inputWrapper}>
                  <input className={`${styles.inputField} ${styles.yearsInputField}`} />
                  <span className={styles.yearsIcon}> years </span>
                </div>
              </div>
              {/* Container for Rate Input*/}
              <div className={styles.interestRateContainer}>
                <label className={styles.inputLabel} style={{ float: "left" }}>
                  Interest Rate
                </label>
                {/* Input Wrapper for input and span */}
                <div className={styles.inputWrapper}>
                  <input className={`${styles.inputField} ${styles.rateInputField}`} />
                  <span className={styles.rateIcon}> % </span>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className={styles.resultTab}></div>
      </div>
    </>
  );
}
