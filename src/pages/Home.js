import React from "react";
import logo from "../images/logo.jpg";
import "../index.css";

export default function Home() {
  return (
    <>
      <header className="home-header">
        <div className="header-content">
          <div className="contact-info">
            <p>123 Address Street, Columbia SC</p>
          </div>

          <div className="logo-title">
            <img src={logo} alt="Logo" />
            <h1>Alex's Pizza</h1>
            <img src={logo} alt="Logo" />
          </div>

          <div className="email-info">
            <p>alexspizza@pizza.com</p>
            <p>803-000-0000</p>
          </div>
        </div>

        <nav>
          <ul>
            <li><a href="/about">ABOUT US</a></li>
            <li><a href="/menu">MENU</a></li>
            <li><a href="/order">ORDER</a></li>
            <li><a href="/locations">LOCATIONS</a></li>
            <li><a href="/contact">CONTACT US</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hours">
          <h2>Hours</h2>
          <ul>
            <li>Monday: 11AM–8:30PM</li>
            <li>Tuesday: 11AM–8:30PM</li>
            <li>Wednesday: 11AM–8:30PM</li>
            <li>Thursday: 11AM–9:30PM</li>
            <li>Friday: 11AM–10:30PM</li>
            <li>Saturday: 11AM–9:30PM</li>
            <li>Sunday: Closed</li>
          </ul>
        </section>
      </main>
    </>
  );
}