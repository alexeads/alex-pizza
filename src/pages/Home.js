import React from "react";
import logo from "../images/logo.jpg";
import "../index.css";

export default function Home() {
  return (
    <>

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