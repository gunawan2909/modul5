
import "./CardProfile.css";

export default function CardSmall({ Nama, Universitas, img, NIM}) {
  return (
    <div className="kartu" >
      <div className ="gambar">
        <img src={img} className="PP" />
      </div>
      <div className="keterangan">
        <div>
          <p id="Nama">{Nama}</p>
          <p id="NIM">{NIM}</p> 
          <div className = "garis">            
          </div>
          <p id="Universitas">{Universitas}</p> 
          </div>
          
              
      </div>
    </div>
  );
}
