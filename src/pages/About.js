import React from "react";
import "../index.css";

import alex from "../images/alex.jpg";
import rob from "../images/rob.jpg";

export default function About() {
  return (
    <main>
      <section className="about-section">
        <div className="about-content">
          <div className="profile">
            <img src={alex} alt="Alex" />
            <p>Alex</p>
          </div>
          <p>
            My name is Alex Eads and I am a rising senior at the University 
            of South Carolina. I am from Philadelphia and have always been interested 
            in starting a restaurant. I have loved pizza since before I could talk 
            and walk. That is why I have decided to open and start my 
            own pizza franchise. Together, Robert and I have been building 
            the franchise, trying to spread the love of pizza to all.
          </p>
        </div>

        <div className="about-content">
          <div className="profile">
            <img src={rob} alt="Rob" />
            <p>Rob</p>
          </div>
          <p>
            My name is Robert Smith and I am a rising senior at the University of
            South Carolina. I am from Charlotte, North Carolina and I
            do not have as big of a passion for pizza or restaurants as 
            Alex does, but I handle the business end of things. We hope
            to one day become one of the biggest pizza franchises in the world.
          </p>
        </div>
      </section>
    </main>
  );
}