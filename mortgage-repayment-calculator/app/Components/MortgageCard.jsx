"use client";
import styles from "./MortgageCard.module.css";
import { useState } from "react";
export default function MortgageCard() {
  const [amount, setAmount] = useState("");
  function formSubmit(e) {
    e.preventDefault();
    console.log("form submitted");
  }
  const formatCurrency = (value) => {
    // Remove any non-digit characters except for the decimal point
    const numberString = value.replace(/[^0-9.]/g, "");

    // Split the number into whole and decimal parts
    const [whole, decimal] = numberString.split(".");

    // Format the whole part with commas
    const formattedWhole = whole ? whole.replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "";

    // Limit the decimal part to 2 digits
    const formattedDecimal = decimal ? decimal.slice(0, 2) : "";

    // Combine the formatted parts
    return formattedDecimal ? `${formattedWhole}.${formattedDecimal}` : formattedWhole;
  };
  const handleCurrencyInputChange = (e) => {
    let inputValue = e.target.value;

    // Format the input value
    let formattedValue = formatCurrency(inputValue);

    // Remove leading zero if present and not just '0'
    if (
      formattedValue.length > 0 &&
      formattedValue[0] === "0" &&
      formattedValue !== "0" &&
      !formattedValue.startsWith("0.")
    ) {
      formattedValue = formattedValue.slice(1); // Remove the leading zero
    }

    // Update the state with the formatted value
    setAmount(formattedValue);
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
            <label>Mortgage Amount</label>
            <div className={styles.inputWrapper}>
              <span className={styles.currencyIcon}> £ </span>
              <input
                value={amount}
                onChange={handleCurrencyInputChange}
                placeholder="Enter Amount"
                className={styles.inputField}
              />
            </div>
          </form>
        </div>
        <div className={styles.resultTab}></div>
      </div>
    </>
  );
}
