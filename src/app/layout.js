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
  name: "viewport",
  content: "width=device-width, user-scalable=no",
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
