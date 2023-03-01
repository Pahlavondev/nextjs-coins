import styles from "./Modal.module.css";

function Modal({ closeModal }) {
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        <div className={styles.titleCloseBtn}>
          <button onClick={() => closeModal(false)}>X</button>
        </div>

        <div className={styles.title}>
          <h1>Are You Sure You Want To Continue?</h1>
        </div>

        <div className={styles.body}>
          <p>
            The next page is awesome! You should move forward, you will enjoy
            it.
          </p>
        </div>

        <div className={styles.footer}>
          <button
            className={styles.cancelBtn}
            onClick={() => closeModal(false)}
          >
            Cancel
          </button>
          <button
            onClick={() =>
              window.open("https://nextjs.org/docs/getting-started", "_blank")
            }
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
