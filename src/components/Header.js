import React from "react";
import styles from "../app/styles/header.module.css";
import { MailIcon, RingIcon } from "../../assets/icons";

const Header = () => {
  return (
    <header className={styles.header + " myPadding"}>
      <div className={styles.headerImg}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTysEbgQftaQLhOlY-W205awxZmP6EGyYmo7XXlbBzT&s"
          alt="logo"
          style={{ height: "40px" }}
        />
      </div>
      <div className={styles.headerIcons}>
        <div className={styles.headerIcon}>
          <MailIcon />
        </div>
        <div className={styles.headerIcon}>
          <RingIcon />
        </div>
      </div>
    </header>
  );
};

export default Header;
