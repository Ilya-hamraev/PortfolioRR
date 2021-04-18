import { useState } from "react";

import Modal from "components/UI/Modal";
import * as styles from "components/UI/Footer/styles";

const Footer = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.center}>
          <p className={styles.copyRight}>&copy; Robert Raudsepp</p>
          <p onClick={toggleModal} className={styles.rights}>
            privacy policy
          </p>
        </div>
      </footer>

      {isOpen && <Modal onClose={() => setIsOpen(false)} />}
    </>
  );
};

export default Footer;
