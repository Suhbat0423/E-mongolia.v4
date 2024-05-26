import React, { useEffect, useState } from "react";
import { Refresh } from "../../assets/icons";
import styles from "../app/styles/popUp.module.css";

const Popup = ({ isOpen, onClose }) => {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    const data = JSON.parse(window.localStorage.getItem("userData"));
    setUserData(data);
  }, []);

  return (
    <div
      className={`fixed inset-0 flex items-end justify-center z-50 ${
        isOpen ? "visible" : "invisible"
      }`}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 blur "></div>
      <div
        className={`${styles.animation} absolute bottom-0 bg-white w-full h-3/5 rounded-t-xl py-5 px-5 flex flex-col items-center`}
      >
        <div className=" h-1 w-14 bg-[#4a5e87] mt-1 "></div>
        <h1 className="mt-5 font-semibold text-[#4a5e87]">Иргэний бүртгэл</h1>
        <div className={" myPadding "}>
          {userData && (
            <div className="w-full  relative h-full font-arial ">
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
              <img src="https://i.ibb.co/DtFJw7Y/Clip-path-group.png" alt="" />
            </div>
          )}
        </div>
        <div className="w-full flex justify-around mt-8">
          <button className="w-52 h-12 bg-blue-600 font-semibold text-white rounded-3xl text-sm">
            Дахин захиалах
          </button>
          <button className="border w-16 h20 ml-[-40px] rounded-3xl border-blue-600 flex justify-center items-center">
            <Refresh />
          </button>
        </div>
        <p className="mt-8 text-[#4a5e87] font-semibold">Хаах</p>
      </div>
    </div>
  );
};

export default Popup;
