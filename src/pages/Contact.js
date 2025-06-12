import React from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="contact-page">
      <main>
        <section className="contact-section">
          <div className="contact-box">
            <h2>Contact Us</h2>
            <p>Phone: (555) 123-4567</p>
            <p>alexspizza@pizza.com</p>
            <p>Address: 123 Pizza St, Food City</p>
          </div>
          <div className="contact-box">
            <h2>Now Hiring!</h2>
            <p>Contact Us Now!</p>
            <p>alexspizza@pizza.com</p>
          </div>
        </section>
      </main>
    </div>
  );
}