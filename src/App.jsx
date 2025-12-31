import { useState } from "react";
import logo from "./assets/logo.png";

export default function App() {
  const [lang, setLang] = useState("en");
  const [km, setKm] = useState("");

  const fare = km ? km * 2 : 0;

  const cities = [
    "Mangawan","Gangev","Garh","Katra","Sohagi","Chakghat","Mauganj","Naigarhi",
    "Teonthar","Chilla","Chandpur","Naudhiya","Janeh","Sankargarh","Naribari",
    "Jari","Gauhaniya","Ghoorpur","Naini","Prayagraj"
  ];

  return (
    <div>
      <header style={{background:"#0f172a",color:"#fff",padding:"15px"}}>
        <img src={logo} alt="Ralhi Travels" height="50" />
        <button onClick={()=>setLang(lang==="en"?"hi":"en")} style={{width:"120px",marginTop:"10px"}}>
          {lang==="en"?"हिंदी":"English"}
        </button>
      </header>

      <section style={{padding:"30px",textAlign:"center"}}>
        <h1>{lang==="en"?"Luxury Bus Services MP & UP":"एमपी और यूपी में लक्ज़री बस सेवा"}</h1>
        <p>{lang==="en"?"Standard Fare ₹2 per KM":"मानक किराया ₹2 प्रति किलोमीटर"}</p>
        <a href="tel:8839404484"><button>📞 Call Now</button></a>
        <a href="https://wa.me/918839404484"><button style={{background:"green",marginTop:"10px"}}>💬 WhatsApp</button></a>
      </section>

      <section style={{padding:"30px"}}>
        <h2>{lang==="en"?"Auto Fare Calculator":"ऑटो किराया कैलकुलेटर"}</h2>
        <input type="number" placeholder="Enter KM" onChange={e=>setKm(e.target.value)} />
        <h3>{lang==="en"?"Estimated Fare":"अनुमानित किराया"}: ₹{fare}</h3>
      </section>

      <section style={{padding:"30px",background:"#e5e7eb"}}>
        <h2>{lang==="en"?"Online Booking":"ऑनलाइन बुकिंग"}</h2>
        <input placeholder="Name" />
        <input placeholder="Phone" />
        <select>{cities.map(c=><option key={c}>{c}</option>)}</select>
        <input placeholder="Destination" />
        <button>Submit Booking</button>
      </section>

      <section style={{padding:"30px"}}>
        <h2>Service Locations</h2>
        <p>{cities.join(", ")}</p>
      </section>

      <section style={{padding:"30px"}}>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps?q=Rewa%20Madhya%20Pradesh&output=embed"
          width="100%"
          height="350"
        ></iframe>
      </section>

      <footer style={{background:"#0f172a",color:"#fff",padding:"15px",textAlign:"center"}}>
        © {new Date().getFullYear()} Ralhi Travels | Since 1999
      </footer>
    </div>
  );
}
