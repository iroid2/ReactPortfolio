import Navbar from "@/components/Navbar";
import React from "react";
import buttonInfor from "../script";
import Image from "next/image";
export default function page() {
  return (
    <div>
      <Navbar />
      <div className="homeHero">
        <div className="card">
          <Image src={"/images/passp.jpg"} alt="" width={110} height={240} />
          <h1>iroid</h1>
          <p>Web Developer/ Accountant</p>
          <button>Download Cv</button>
        </div>
      </div>
    </div>
  );
}
