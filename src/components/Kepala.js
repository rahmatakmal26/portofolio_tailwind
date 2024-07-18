// MODUL REACT
import React from "react";
// LOGO
import Logo from "../assets/logo2.png";

const Kepala = () => {
  return (
    <header className="py-8">
      <div className="xl:container lg:container md:container mx-auto">
        <div className="flex justify-between items-center">
          {/* LOGO */}
          <a
            href="https://wa.me/+6285247044821"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Logo} alt="Logo" className="w-[100px]" />
          </a>
          {/* TOMBOL */}
          <a
            href="https://wa.me/+6285247044821"
            target="_blank"
            rel="noreferrer"
          >
            <button className="btn btn-sm">Tertarik Untuk Kerja Sama</button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Kepala;
