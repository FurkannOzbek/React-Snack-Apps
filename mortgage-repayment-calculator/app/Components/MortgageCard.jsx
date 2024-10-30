"use client";
import styles from "./MortgageCard.module.css";
import { useState } from "react";
import { useEffect } from "react";
export default function MortgageCard() {
  const [formatAmount, setFormatAmount] = useState("");
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");
  const [yearsErrorMessage, setYearsErrorMessage] = useState("");
  const [rateErrorMessage, setRateErrorMessage] = useState("");
  const [amountErrorMessage, setAmountErrorMessage] = useState("");
  const [isRateError, setIsRateError] = useState(false);
  const [isYearsError, setIsYearsError] = useState(false);
  const [isAmountError, setIsAmountError] = useState(false);

  // Form Submit
  function formSubmit(e) {
    if (years == "" || years == undefined) {
      setYearsErrorMessage("This field is required");
      setIsYearsError(true);
      setYears("");
    }
    if (rate == "" || rate == undefined) {
      setRateErrorMessage("This field is required");
      setIsRateError(true);
      setRate("");
    }
    if (amount == "" || amount == undefined) {
      setAmountErrorMessage("This field is required");
      setIsAmountError(true);
      setAmount("");
    }
    e.preventDefault();
    console.log("submit");
    console.log(rate);
    console.log(years);
    console.log(amount);
  }
  // Format Currency
  const formatCurrency = (inputAmount) => {
    const maxAmount = 9999999999;

    if (inputAmount == "") {
      return "";
    }
    const formattedNumber = inputAmount
      .replace(/[^0-9.]/g, "") // Remove non-digit and non-dot characters
      .replace(/(\..*)\./g, "$1") // Remove all dots except the first one
      .replace(/^(\d+\.?\d{0,2}).*/, "$1"); // Limit to two digits after the dot
    const formattedValue = formattedNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ","); // Format the number with commas
    if (formattedNumber > maxAmount) {
      setAmountErrorMessage("Max amount is 9,999,999,999");
      setIsAmountError(true);
    }
    const amount = Math.min(formattedNumber, maxAmount);
    console.log(formattedNumber);
    return formattedValue;
  };

  // Format Years
  const formatYears = (inputYears) => {
    if (inputYears > 30 || inputYears < 0) {
      setYearsErrorMessage("Please type an input between 1-30");
      setIsYearsError(true);
    }
    // In default, when delete the amount from term input, if you delete all it sets the year as 0 , this code to prevent
    if (inputYears == "") {
      return "";
    }
    const formattedYears = inputYears.replace(/[^0-9]/g, "");
    const years = Math.min(formattedYears, 30);
    console.log("years", years);
    return years.toString();
  };
  // Format Rate
  const formatRate = (inputRate) => {
    if (inputRate > 100 || inputRate < 0) {
      setRateErrorMessage("Please type an input between 0-100");
      setIsRateError(true);
    }
    if (inputRate == "") {
      return "";
    }
    const formattedRate = inputRate.replace(/[^0-9]/g, "");
    const rate = Math.min(formattedRate, 100);
    return rate.toString();
  };

  // Handle the Input Change
  const handleCurrencyInputChange = (e) => {
    let inputValue = e.target.value;

    if (amount === undefined || amount == 0) {
      setIsAmountError(false);
      setAmount("");
    }
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
  const handleYearsInputChange = (e) => {
    setIsYearsError(false); // Reset the error situation if new number entered
    const years = e.target.value;
    if (years === undefined || years == 0) {
      setIsYearsError(false);
      setYears("");
    }
    const formattedYears = formatYears(years);
    setYears(formattedYears);
  };
  // Handle Rate Change
  const handleRateInputChange = (e) => {
    setIsRateError(false); // Reset the error situation if new rate entered
    const rate = e.target.value;
    console.log(rate);
    if (rate === undefined || rate == 0) {
      setIsRateError(false);
      setRate("");
    }
    const formattedRate = formatRate(rate);
    setRate(formattedRate);
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
              <span
                className={
                  !isAmountError
                    ? `${styles.currencyIcon}`
                    : `${styles.currencyIcon} ${styles.amountIconError}`
                }
              >
                {" "}
                £{" "}
              </span>
              <input
                value={formatAmount}
                onChange={handleCurrencyInputChange}
                className={
                  !isAmountError
                    ? `${styles.inputField}`
                    : `${styles.inputField} ${styles.amountError} `
                }
                maxLength={13}
              />
            </div>
            {!isAmountError ? (
              <div></div>
            ) : (
              <span className={styles.amountErrorMessage}> {amountErrorMessage}</span>
            )}
            {/* Term and Rate Input Field */}
            <div className={styles.inputWrapperTermAndRate}>
              {/* Container for Term Input*/}
              <div className={styles.mortgageTermContainer}>
                <label className={styles.inputLabel}>Mortgage Term</label>
                {/* Input Wrapper for input and span */}
                <div className={styles.inputWrapper}>
                  <input
                    value={years}
                    className={
                      !isYearsError
                        ? `${styles.inputField} ${styles.yearsInputField}`
                        : `${styles.inputField} ${styles.yearsInputField} ${styles.yearsError}`
                    }
                    onChange={handleYearsInputChange}
                  />
                  <span
                    className={
                      !isYearsError
                        ? `${styles.yearsIcon}`
                        : `${styles.yearsIcon} ${styles.yearsIconError}`
                    }
                  >
                    years
                  </span>
                </div>
                {!isYearsError ? (
                  <div></div>
                ) : (
                  <span className={styles.yearsErrorMessage}> {yearsErrorMessage}</span>
                )}
              </div>
              {/* Container for Rate Input*/}
              <div className={styles.interestRateContainer}>
                <label className={styles.inputLabel} style={{ float: "left" }}>
                  Interest Rate
                </label>
                {/* Input Wrapper for input and span */}
                <div className={styles.inputWrapper}>
                  <input
                    value={rate}
                    className={
                      !isRateError
                        ? `${styles.inputField} ${styles.rateInputField}`
                        : `${styles.inputField} ${styles.rateInputField} ${styles.rateError}`
                    }
                    onChange={handleRateInputChange}
                  />
                  <span
                    className={
                      !isRateError
                        ? `${styles.rateIcon}`
                        : `${styles.rateIcon} ${styles.rateIconError}`
                    }
                  >
                    {" "}
                    %{" "}
                  </span>
                </div>
                {!isRateError ? (
                  <div></div>
                ) : (
                  <span className={styles.rateErrorMessage}> {rateErrorMessage}</span>
                )}
              </div>
            </div>
            <button type="submit" onSubmit={formSubmit}></button>
          </form>
        </div>
        <div className={styles.resultTab}></div>
      </div>
    </>
  );
}
