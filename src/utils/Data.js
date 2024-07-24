// MODUL REACT
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquareText } from "react-icons/bs";
import { FaGithub, FaWhatsapp, FaInstagram } from "react-icons/fa";

export const TautanNavigasi = [
  {
    id: 0,
    nama: "Beranda",
    ikon: <BiHomeAlt />,
    tautan: "beranda",
  },
  {
    id: 1,
    nama: "Tentang",
    ikon: <BiUser />,
    tautan: "tentang",
  },
  {
    id: 2,
    nama: "Layanan",
    ikon: <BsClipboardData />,
    tautan: "layanan",
  },
  {
    id: 3,
    nama: "Pekerjaan",
    ikon: <BsBriefcase />,
    tautan: "pekerjaan",
  },
  {
    id: 4,
    nama: "Kontak",
    ikon: <BsChatSquareText />,
    tautan: "kontak",
  },
];

export const TautanSosialMedia = [
  {
    id: 0,
    nama: "Github",
    ikon: <FaGithub />,
    tautan: "https://github.com/rahmatakmal26",
  },
  {
    id: 1,
    nama: "Instagram",
    ikon: <FaInstagram />,
    tautan: "https://www.instagram.com/rahmatakmall",
  },
  {
    id: 2,
    nama: "Whatsapp",
    ikon: <FaWhatsapp />,
    tautan: "https://wa.me/+6285247044821",
  },
];

export const LayananSaya = [
  {
    id: 0,
    nama: "Karya Ilmiah",
    deskripsi:
      "Menyajikan hasil penelitian, mengembangkan ilmu pengetahuan serta memecahkan masalah dalam penelitian.",
    tautan: "Lihat Detail",
  },
  {
    id: 1,
    nama: "Web Development",
    deskripsi:
      "Menciptakan situs web yang fungsional dan memberikan pengalaman pengguna yang baik, dengan menyajikan informasi atau layanan secara efektif dan menghasilkan platform online.",
    tautan: "Lihat Detail",
  },
  {
    id: 2,
    nama: "Web Desain",
    deskripsi:
      "Merancang tampilan visual dan antarmuka pengguna situs web yang menarik, dan selaras dengan identitas merek, memudahkan navigasi, dan meningkatkan pengalaman pengguna secara keseluruhan.",
    tautan: "Lihat Detail",
  },
];
