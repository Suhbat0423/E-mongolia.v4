import React, { useEffect, useState } from "react";
import styles from "../app/styles/documents.module.css";

const Documents = () => {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    const data = JSON.parse(window.localStorage.getItem("userData"));
    setUserData(data);
  }, []);

  return (
    <div className={styles.id + " myPadding"}>
      <h4 style={{ color: "#4a5e87" }}>Миний бичиг баримтууд</h4>
      {userData && (
        <div className="w-full  relative h-full font-arial">
          <div className="absolute top-[25%] w-[25%]  left-[2%]">
            <img src={userData["img"]} alt="user image" />
          </div>
          <div className="absolute top-[26%] text-[10px] left-[30.5%]">
            {userData["familyname"]}
          </div>
          <div className="absolute top-[38%] text-[10px] left-[30.5%]">
            {userData["lastname"]}
          </div>
          <div className="absolute top-[50%] text-[10px] left-[30.5%] uppercase">
            {userData["firstname"]}
          </div>
          <div className="absolute top-[61.5%] text-[10px] left-[30.5%]">
            {userData["gender"]}
          </div>
          <div className="absolute top-[79.1%] text-[10px] left-[30.5%]">
            {userData["date"]}
          </div>
          <div className="absolute top-[90%] text-[10px] left-[30.5%]">
            {userData["register"]}
          </div>
          <img
            src="https://e-mongolia.mn/static/assets/c64bc212ac0e9ef3ef1e586f9f803ccd.svg"
            alt=""
          />
        </div>
      )}
    </div>
  );
};

export default Documents;
