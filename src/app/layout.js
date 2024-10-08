import Footer from "../components/Footer";
import Header from "../components/Header";
import "./global.css";
import { Rubik } from "next/font/google";

const font = Rubik({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Цахим үйлчилгээний нэгдсэн портал",
  description: "Цахим үйлчилгээний нэгдсэн портал",
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={font.className}>
      <body>
        {/* <Header /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
