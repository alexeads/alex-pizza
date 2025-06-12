import React from "react";
import "../index.css";

import miami from "../images/miami.jpg";
import philly from "../images/philly.jpg";
import columbia from "../images/columbia.jpg";
import newyork from "../images/newyork.jpg";
import la from "../images/la.jpg";

export default function Locations() {
  return (
    <main>
    

      <div className="locationsGrid">
        <div className="location">
          <h2>Miami, FL</h2>
          <img src={miami} alt="Miami" />
          <p>123 Address Street, 33101<br />305-000-0000</p>
        </div>

        <div className="location philadelphia">
          <h2>Philadelphia, PA</h2>
          <img src={philly} alt="Philadelphia" />
          <p>123 Address Street, 19010<br />215-000-000</p>
        </div>

        <div className="location center">
          <h2 className="original">Columbia, SC</h2>
          <img src={columbia} alt="Original Location" />
          <h3>Columbia, SC</h3>
          <p>123 Address Street, 29201<br />803-555-5555</p>
        </div>

        <div className="location">
          <h2>New York, NY</h2>
          <img src={newyork} alt="New York" />
          <p>123 Address Street, 07008<br />212-555-5555</p>
        </div>

        <div className="location los-angeles">
          <h2>Los Angeles, CA</h2>
          <img src={la} alt="Los Angeles" />
          <p>123 Address Street, 90210<br />213-555-5555</p>
        </div>
      </div>
    </main>
  );
}