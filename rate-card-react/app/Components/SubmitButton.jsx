import styles from "./SubmitButton.module.css";

export default function SubmitButton({ onClick }) {
  return (
    <>
      <button onClick={onClick} className={styles.submitButton}>
        SUBMIT
      </button>
    </>
  );
}
