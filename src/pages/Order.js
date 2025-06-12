import React from "react";
import { Link } from "react-router-dom";

export default function Order() {
  return (
    <div className="order-page">
      <main>
        <section className="order-section">
          <h2>PIZZA</h2>
          <div className="order-items">
            <div className="order-item">Plain</div>
            <div className="order-item">Pepperoni</div>
            <div className="order-item">BBQ Chicken</div>
            <div className="order-item">Buffalo Chicken</div>
            <div className="order-item">Firecracker Shrimp</div>
            <div className="order-item">Cheeseburger</div>
            <div className="order-item">Meatlovers</div>
            <div className="order-item">Hawaiian</div>
          </div>

          <h2>SALADS</h2>
          <div className="order-items">
            <div className="order-item">House Salad</div>
            <div className="order-item">Caesar Salad</div>
          </div>

          <h2>SANDWICHES</h2>
          <div className="order-items">
            <div className="order-item">Chicken Parm</div>
            <div className="order-item">Roast Pork</div>
            <div className="order-item">Cheesesteak</div>
          </div>

          <h2>SIDES/APPS</h2>
          <div className="order-items">
            <div className="order-item">8 Piece Wings</div>
            <div className="order-item">French Fries</div>
            <div className="order-item">Mozzarella Sticks</div>
            <div className="order-item">Garlic Knots</div>
          </div>

          <div className="delivery-options">
            <div className="option">PICKUP</div>
            <div className="option">DELIVERY</div>
            <div className="option">TOTAL: $100</div>
          </div>
        </section>
      </main>
    </div>
  );
}