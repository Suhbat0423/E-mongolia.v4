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
      <div className={styles.menus}>
        <h4>Төрд байгаа миний мэдээлэл</h4>
        <div className={styles.menu}>
          <img src="https://i.ibb.co/09WB2vn/svg-image-1.png" alt="" />
          <p>Нийгмийн даатгалын мэдээлэл</p>
        </div>
        <div className={styles.menu}>
          <img
            src="https://static.vecteezy.com/system/resources/previews/016/348/173/original/green-wallet-icon-design-free-vector.jpg"
            alt=""
          />
          <p>Зээлийн мэдээлэл</p>
        </div>
        <div className={styles.menu}>
          <img src="https://i.ibb.co/cC230CZ/svg-image-1-1.png" alt="" />
          <p>Эрүүл мэндийн даатгал төлөлтийн мэдээлэл</p>
        </div>
        <div className={styles.menu}>
          <img src="https://i.ibb.co/vY6rCwX/svg-image-1-2.png" alt="" />
          <p>Иргэний бүртгэлийн мэдээлэл</p>
        </div>
        <div className={styles.menu}>
          <img src="https://i.ibb.co/WckVSXJ/svg-image-1-3.png" alt="" />
          <p>Хаягийг өөрчлөлтийн мэдээлэл</p>
        </div>
        <div className={styles.menu}>
          <img src="https://i.ibb.co/7p5rc8g/svg-image-1-4.png" alt="" />
          <p>Гэрлэлтийн мэдээлэл</p>
        </div>
        <div className={styles.menu}>
          <img src="https://i.ibb.co/3CtjXsX/svg-image-1-5.png" alt="" />
          <p>Гадаад пасспортын мэдээлэл</p>
        </div>
        <div className={styles.menu}>
          <img src="https://i.ibb.co/hLH79xN/svg-image-1-6.png" alt="" />
          <p>Өрхийн гишүүдийн мэдээлэл</p>
        </div>
        <div className={styles.menu}>
          <img src="https://i.ibb.co/VLVKgDB/svg-image-1-7.png" alt="" />
          <p>Сургуулийн мэдээлэл</p>
        </div>
        <div className={styles.menu}>
          <img
            src="https://www.iconpacks.net/icons/1/free-bar-chart-icon-676-thumb.png"
            alt=""
          />
          <p>Үнэт цааснууд / хувьцаа</p>
        </div>
        <div className={styles.menu}>
          <img src="https://i.ibb.co/fYjxb9X/svg-image-1-8.png" alt="" />
          <p>Компанийн мэдээлэл</p>
        </div>
        <div className={styles.menu}>
          <img src="https://i.ibb.co/09WB2vn/svg-image-1.png" alt="" />
          <p>Үл хөдлөх хөрөнгийн мэдээлэл</p>
        </div>
      </div>
      <div className={styles.footer}></div>
    </body>
  );
}
