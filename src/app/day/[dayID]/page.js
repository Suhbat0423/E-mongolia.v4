"use client";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import Documents from "../../../components/Documents";
import Menu from "../../../components/Menu";

const DayID = ({ params }) => {
  const now = new Date();
  const day = now.getDate();

  if (params.dayID == day) {
    return (
      <div>
        <Header />
        <Documents />
        <Menu />
        <Footer />
      </div>
    );
  } else {
    return <div>alii shuu bandi min</div>;
  }
};

export default DayID;
