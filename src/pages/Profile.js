import { Fragment } from "react";
import Card from "../component/CardProfile";

import "./Profile.css";
export default function Profile() {
    const data = [
    {
      Nama: "Ahmad Rafly Pradana",
      id: 1,
      NIM: 21120119130085,
      Universitas: "Diponegoro",
      img: "https://www.pinclipart.com/picdir/middle/578-5780354_foto-profil-gambar-animasi-creator-clipart.png",
    },
    {
      Nama: "Ilyasa Aliadjrun",
      id: 2,
      NIM: 21120119130058,
      Universitas: "Diponegoro",
      img: "https://www.pinclipart.com/picdir/middle/578-5780354_foto-profil-gambar-animasi-creator-clipart.png",
    },
    {
      Nama: "Gunawan Prasetya",
      id: 2,
      NIM: 21120119120025,
      Universitas: "Diponegoro",
      img: "https://www.pinclipart.com/picdir/middle/578-5780354_foto-profil-gambar-animasi-creator-clipart.png",
    },
    {
      Nama: "Liem, Christopher Jaya Mulyawan",
      id: 3,
      NIM: 21120119130073,
      Universitas: "Diponegoro",
      img: "https://www.pinclipart.com/picdir/middle/578-5780354_foto-profil-gambar-animasi-creator-clipart.png",
    },
  ];
    return (
      <>
      <p id="Header">Anggota Kelompok</p>
      {data.map((item, index) => (
        <Fragment key={item.id}>
          <Card
            Nama={item.Nama}
            img={item.img}
            NIM={item.NIM}
            Universitas={item.Universitas}
           />
          {data.length === index + 1 && <div style={{ marginBottom: 80 }} /> && <div style={{ justifyContent:"center" }} />}
        </Fragment>
      ))}
    </>
  );
  }
