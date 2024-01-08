import React from "react";
import styles from "./BoxConfirmBD.module.scss";

interface BackdropProps {
  show: boolean;
  // onClose: () => void;
}

const BoxConfirmBD: React.FC<BackdropProps> = (
  { 
    show,
    //  onClose
     }) => {

  return show ? (
    <div className={styles.backdrop}>
    </div>
  ) : null;
};

export default BoxConfirmBD;