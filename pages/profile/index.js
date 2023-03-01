import { useState } from "react";
import Modal from "@/components/Modal";
import styles from "../../styles/Profile.module.css";

const ProfileDefault = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className={styles.container}>
        <h1>Hey, click on the button to open the modal</h1>
        <button
          className={styles.openModalBtn}
          onClick={() => {
            setOpenModal(true);
          }}
        >
          Open
        </button>
      </div>
      {openModal && <Modal closeModal={setOpenModal} />}
    </>
  );
};

export default ProfileDefault;
