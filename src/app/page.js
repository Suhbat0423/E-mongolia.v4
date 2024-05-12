"use client";
import styles from "./page.module.css";
import Mail from "../../icon/mail";
import Ring from "../../icon/ring";
import House from "../../icon/house";
import Document from "../../icon/document";
import Folder from "../../icon/folder";
import Profile from "../../icon/profile";
import QR from "../../icon/qr";

import { useState } from "react";

export default function page() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [registration, setRegistration] = useState("");
  const [gender, setGender] = useState("Er"); // Default value
  const [image, setImage] = useState(null);
  const [submittedData, setSubmittedData] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "firstName") {
      setFirstName(value);
    } else if (name === "lastName") {
      setLastName(value);
    } else if (name === "registration") {
      setRegistration(value);
    }
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = { firstName, lastName, registration, gender, image };
    setSubmittedData([...submittedData, newData]);
    setFirstName("");
    setLastName("");
    setRegistration("");
    setImage(null);
    // Optionally, you can reset gender to its default value here
    // setGender('Er');
  };

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
      <div className={styles.footer}>
        <div className={styles.footericons}>
          <House />
          <p>Hүүр</p>
        </div>
        <div className={styles.footericon}>
          <Document />
          <p>Үйлчилгээ</p>
        </div>
        <div className={styles.footericon}>
          <Folder />
          <p>Нэмэлт</p>
        </div>
        <div className={styles.footericon}>
          <Profile />
          <p className={styles.footerProfile}>Профайл</p>
        </div>
        <div className={styles.circle}>
          <QR />
        </div>
      </div>
      <div className={styles.login}>
        <h1>Бүртгүүлэх</h1>
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Нэр"
              name="firstName"
              value={firstName}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="Овог"
              name="lastName"
              value={lastName}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="Рэгистэр"
              name="registration"
              value={registration}
              onChange={handleInputChange}
            />
            <select
              id="cars"
              name="cars"
              value={gender}
              onChange={handleGenderChange}
            >
              <option value="Er">Эр</option>
              <option value="Em">Эм</option>
            </select>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            <button type="submit">Submit</button>
          </form>
          <div>
            {submittedData.map((data, index) => (
              <div key={index}>
                <h1>{`First Name: ${data.firstName}`}</h1>
                <h1>{`Last Name: ${data.lastName}`}</h1>
                <h1>{`Registration: ${data.registration}`}</h1>
                <h1>{`Gender: ${data.gender}`}</h1>
                {data.image && (
                  <img src={URL.createObjectURL(data.image)} alt="Uploaded" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </body>
  );
}
