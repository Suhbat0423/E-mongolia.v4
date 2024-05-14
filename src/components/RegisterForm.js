"use client";
import React, { useState } from "react";
import styles from "../app/styles/form.module.css";
import { calcBirthDate } from "@/utils/formatters";

const inputStyle =
  "border border-black/20 text-black rounded w-full p-2.5 outline-none focus:border-blue-500 placeholder:font-light placeholder:text-black/30";

const RegisterForm = () => {
  const [formData, setFormData] = useState({ gender: "Эрэгтэй" });
  const [modifiedData, setModifiedData] = useState({});

  const handleChange = (value, key) => {
    const temp = { ...formData };
    temp[key] = value;
    setFormData(temp);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64Img = reader.result;
      handleChange(base64Img, "img");
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const { date, register } = calcBirthDate(formData["register"]);
      const userData = {
        ...formData,
        date,
        register,
      };
      setModifiedData(userData);
      window.localStorage.setItem("userData", JSON.stringify(userData));
    } catch (error) {
      console.log(error);
    }
  };

  const form = [
    {
      type: "text",
      placeholder: "Нэр",
      value: formData["firstname"],
      setValue: (value) => handleChange(value, "firstname"),
    },
    {
      type: "text",
      placeholder: "Овог",
      value: formData["lastname"],
      setValue: (value) => handleChange(value, "lastname"),
    },
    {
      type: "text",
      placeholder: "Регистэр",
      value: formData["register"],
      setValue: (value) => handleChange(value, "register"),
    },
  ];
  return (
    <form className={styles.login + " myPadding"} onSubmit={handleSubmit}>
      <h1 className="text-2xl font-bold">Бүртгүүлэх</h1>
      {form.map((row, index) => (
        <input
          key={index}
          type={row.type}
          placeholder={row.placeholder}
          className={inputStyle}
          value={row.value}
          required={true}
          onChange={(e) => row.setValue(e.target.value)}
        />
      ))}
      <select
        className={inputStyle}
        onChange={(e) => handleChange(e.target.value, "gender")}
      >
        <option value="Эрэгтэй">Эрэгтэй</option>
        <option value="Эмэгтэй">Эмэгтэй</option>
      </select>
      <input type="file" accept="img" onChange={handleImageUpload} />
      <button
        type="submit"
        onClick={handleSubmit}
        className="w-full bg-blue-500 p-2 text-white rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default RegisterForm;
