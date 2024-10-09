"use client";

import { useRouter } from "next/navigation";

const Profile = () => {
  const router = useRouter();
  const now = new Date();
  const day = now.getDate();

  const check = () => {
    const nuuts = document.getElementById("nuuts").value;
    if (nuuts == day) {
      router.push(`/day/${day}`);
    } else {
      alert("Wrong password!");
    }
  };

  return (
    <div className="bg-white h-full flex flex-col items-center justify-center">
      <h1>Нууц үгээ худалдаж аваад ороорой</h1>
      <input className="border-2  w-24" placeholder="Password" id="nuuts" />
      <button className="border-2 w-24" onClick={check}>
        Click
      </button>
    </div>
  );
};

export default Profile;
