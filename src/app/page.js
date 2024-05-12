import styles from "./page.module.css";
import Mail from "../../icon/mail";
import Ring from "../../icon/ring";

export default function page() {
  return (
    <body>
      <header className={styles.header}>
        <div className={styles.headerImg}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTysEbgQftaQLhOlY-W205awxZmP6EGyYmo7XXlbBzT&s"
            alt=""
          />
        </div>
        <div className={styles.icons}>
          <Mail />
          <Ring />
        </div>
      </header>
      <div className={styles.id}>
        <p>Миний бичиг баримтууд</p>
        <img src="https://i.ibb.co/DtFJw7Y/Clip-path-group.png" alt="" />
      </div>
    </body>
  );
}
