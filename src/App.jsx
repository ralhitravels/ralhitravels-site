import { useState } from "react";
import logo from "./assets/logo.png";

export default function App() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [km, setKm] = useState("");

  const cities = [
    "Rewa","Mangawan","Gangev","Garh","Katra","Sohagi","Chakghat","Teonthar",
    "Badagaon","Deeh","Sonauri","Kakaraha","Mauganj","Naigarhi","Shivrajpur",
    "Chilla","Chandpur","Naudhiya","Janeh","Sankargarh","Naribari","Jari",
    "Gauhaniya","Ghoorpur","Naini","Prayagraj","Satna","Sidhi","Singrauli",
    "Bhopal","Indore"
  ];

  const fare = km ? km * 2 : 0;

  const submitBooking = () => {
    if (name.length < 3 || !/^[a-zA-Z ]+$/.test(name)) {
      alert("Please enter a valid name (min 3 letters)");
      return;
    }
    if (!/^[0-9]{10}$/.test(phone)) {
      alert("Please enter a valid 10-digit phone number");
      return;
    }
    if (!source || !destination || !km) {
      alert("Please fill all booking details");
      return;
    }

    const message = `
Hello Ralhi Travels,
I want to book a Luxury Bus.

From: ${source}
To: ${destination}
Distance: ${km} km
Estimated Fare: ₹${fare}

Name: ${name}
Phone: ${phone}
    `;

    window.open(
      `https://wa.me/918839404484?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div>
      {/* HEADER */}
      <div className="section" style={{ background: "#0f172a", color: "#fff" }}>
        <img src={logo} alt="Ralhi Travels" height="55" />
        <h2>Welcome to Ralhi Travels</h2>
        <h1>Luxury bus services across Madhya Pradesh & Uttar Pradesh</h1>
      </div>

      {/* BOOKING FORM */}
      <div className="section">
        <div className="card">
          <h2>Online Booking</h2>

          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <select onChange={(e) => setSource(e.target.value)}>
            <option value="">Select Source</option>
            {cities.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>

          <select onChange={(e) => setDestination(e.target.value)}>
            <option value="">Select Destination</option>
            {cities.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>

          <input
            type="number"
            placeholder="Distance (KM)"
            onChange={(e) => setKm(e.target.value)}
          />

          <h3>Estimated Fare: ₹{fare} (₹2/km)</h3>

          <button onClick={submitBooking}>Book via WhatsApp</button>
        </div>
      </div>

      {/* MAP */}
      <div className="section">
        <h2>Our Service Area</h2>
        <iframe
          title="map"
          src="https://www.google.com/maps?q=Rewa%20Madhya%20Pradesh&output=embed"
          width="100%"
          height="350"
          style={{ borderRadius: "10px" }}
        ></iframe>
      </div>

      {/* FOOTER */}
      <div
        className="section"
        style={{ background: "#0f172a", color: "#fff", textAlign: "center" }}
      >
        © {new Date().getFullYear()} Ralhi Travels | Since 1999
      </div>

      {/* STICKY BUTTONS */}
      <div className="sticky-buttons">
        <a href="tel:8839404484">
          <button>📞 Call</button>
        </a>
        <a href="https://wa.me/918839404484">
          <button style={{ background: "green" }}>💬 WhatsApp</button>
        </a>
      </div>
    </div>
  );
}
