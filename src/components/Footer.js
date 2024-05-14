"use client";

import React from "react";
import styles from "@/app/styles/footer.module.css";
import {
  HouseIcon,
  FolderIcon,
  DocumentIcon,
  ProfileIcon,
  QRIcon,
} from "../../assets/icons";
import { usePathname, useRouter } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <div className={styles.footer}>
      {footerItems.map((row, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            width: row.icon ? "100%" : "10%",
            color: row.path == pathname ? "#004dd9" : "#566786",
          }}
          onClick={() => (row.path ? router.push(row.path) : "/")}
        >
          <div style={{ width: "24px" }}>{row.icon}</div>
          {row.label}
        </div>
      ))}
      <div className={styles.qrCircle}>
        <QRIcon />
      </div>
    </div>
  );
};

export default Footer;

const footerItems = [
  {
    icon: <HouseIcon />,
    label: "Нүүр",
    path: "/home",
  },

  {
    icon: <DocumentIcon />,
    label: "Үйлчилгээ",
  },
  {},
  {
    icon: <FolderIcon />,
    label: "Чат",
  },
  {
    icon: <ProfileIcon />,
    label: "Профайл",
    path: "/",
  },
];
