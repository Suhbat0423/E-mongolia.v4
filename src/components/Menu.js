import React from "react";
import styles from "../app/styles/menu.module.css";

const Menu = () => {
  return (
    <div className={styles.menus + " myPadding"}>
      <h4>Төрд байгаа миний мэдээлэл</h4>
      {menuItems.map((item, index) => (
        <div className={styles.menu} key={index}>
          <img src={item.img} alt={item.label} />
          <p>{item.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Menu;

const menuItems = [
  {
    img: "https://i.ibb.co/09WB2vn/svg-image-1.png",
    label: "Нийгмийн даатгалын мэдээлэл",
  },
  {
    img: "https://static.vecteezy.com/system/resources/previews/016/348/173/original/green-wallet-icon-design-free-vector.jpg",
    label: "Зээлийн мэдээлэл",
  },
  {
    img: "https://i.ibb.co/cC230CZ/svg-image-1-1.png",
    label: "Эрүүл мэндийн даатгал төлөлтийн мэдээлэл",
  },
  {
    img: "https://i.ibb.co/vY6rCwX/svg-image-1-2.png",
    label: "Иргэний бүртгэлийн мэдээлэл",
  },
  {
    img: "https://i.ibb.co/WckVSXJ/svg-image-1-3.png",
    label: "Хаягийг өөрчлөлтийн мэдээлэл",
  },
  {
    img: "https://i.ibb.co/7p5rc8g/svg-image-1-4.png",
    label: "Гэрлэлтийн мэдээлэл",
  },
  {
    img: "https://i.ibb.co/3CtjXsX/svg-image-1-5.png",
    label: "Гадаад пасспортын мэдээлэл",
  },
  {
    img: "https://i.ibb.co/hLH79xN/svg-image-1-6.png",
    label: "Өрхийн гишүүдийн мэдээлэл",
  },
  {
    img: "https://i.ibb.co/VLVKgDB/svg-image-1-7.png",
    label: "Сургуулийн мэдээлэл",
  },
  {
    img: "https://www.iconpacks.net/icons/1/free-bar-chart-icon-676-thumb.png",
    label: "Үнэт цааснууд / хувьцаа",
  },
  {
    img: "https://i.ibb.co/fYjxb9X/svg-image-1-8.png",
    label: "Компанийн мэдээлэл",
  },
  {
    img: "https://i.ibb.co/09WB2vn/svg-image-1.png",
    label: "Үл хөдлөх хөрөнгийн мэдээлэл",
  },
];
