"use client";
import React, { useEffect, useState } from "react";
import styles from "../app/styles/documents.module.css";

const Documents = () => {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    const data = JSON.parse(window.localStorage.getItem("userData"));
    console.log(data.img);
    setUserData(data);
  }, []);

  // const userImg =
  return (
    <div className={styles.id + " myPadding"}>
      <h4 style={{ color: "#4a5e87" }}>Миний бичиг баримтууд</h4>
      <div className="w-full bg-black relative h-full">
        <div className="absolute top-[25%] w-[25%] bg-black left-[2%]">
          <img src={userData["img"]} alt="user image" />
        </div>
        <img src="https://i.ibb.co/DtFJw7Y/Clip-path-group.png" alt="" />
      </div>
    </div>
  );
};

export default Documents;
