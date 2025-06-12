import React from "react";
import { Link } from "react-router-dom";

// Import all your images from the /src/images folder
import plain from "../images/plain.jpg";
import pepperoni from "../images/pepperoni.jpg";
import bbqchicken from "../images/bbqchicken.jpg";
import buffchicken from "../images/buffchicken.jpg";
import shrimp from "../images/shrimp.jpg";
import cheeseburger from "../images/cheeseburger.jpg";
import meatlovers from "../images/meatlovers.jpg";
import hawaiin from "../images/hawaiin.jpg";

import chickenparm from "../images/chickenparm.jpg";
import roastpork from "../images/roastpork.jpg";
import cheesesteak from "../images/cheesesteak.jpg";

import housesalad from "../images/hsalad.jpg";
import caesarsalad from "../images/csalad.jpg";

export default function Menu() {
  return (
    <div className="menu-page">
      {/* Top bar with page title and Home link on left */}
      <header className="simple-header">
        <Link to="/" className="home-link">Home</Link>
        <h1>Menu</h1>
      </header>

      <main>
        <section className="menu-section">
          <h2>PIZZA</h2>
          <div className="menu-items">
            <div className="menu-item"><img src={plain} alt="Plain" /><p>Plain</p></div>
            <div className="menu-item"><img src={pepperoni} alt="Pepperoni" /><p>Pepperoni</p></div>
            <div className="menu-item"><img src={bbqchicken} alt="BBQ Chicken" /><p>BBQ Chicken</p></div>
            <div className="menu-item"><img src={buffchicken} alt="Buffalo Chicken" /><p>Buffalo Chicken</p></div>
            <div className="menu-item"><img src={shrimp} alt="Firecracker Shrimp" /><p>Firecracker Shrimp</p></div>
            <div className="menu-item"><img src={cheeseburger} alt="Cheeseburger" /><p>Cheeseburger</p></div>
            <div className="menu-item"><img src={meatlovers} alt="Meatlovers" /><p>Meatlovers</p></div>
            <div className="menu-item"><img src={hawaiin} alt="Hawaiian" /><p>Hawaiian</p></div>
          </div>

          <h2>SANDWICHES</h2>
          <div className="menu-items">
            <div className="menu-item"><img src={chickenparm} alt="Chicken Parm" /><p>Chicken Parm</p></div>
            <div className="menu-item"><img src={roastpork} alt="Roast Pork" /><p>Roast Pork</p></div>
            <div className="menu-item"><img src={cheesesteak} alt="Cheesesteak" /><p>Cheesesteak</p></div>
          </div>

          <h2>SALADS</h2>
          <div className="menu-items">
            <div className="menu-item"><img src={housesalad} alt="House Salad" /><p>House Salad</p></div>
            <div className="menu-item"><img src={caesarsalad} alt="Caesar Salad" /><p>Caesar Salad</p></div>
          </div>

          <h2>SIDES/APPS</h2>
          <div className="menu-items">
  <div className="menu-item"><p>8 Piece Wings</p></div>
  <div className="menu-item"><p>French Fries</p></div>
  <div className="menu-item"><p>Mozzarella Sticks</p></div>
  <div className="menu-item"><p>Garlic Knots</p></div>
            </div>
        </section>
      </main>
    </div>
  );
}