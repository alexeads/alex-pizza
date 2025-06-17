import React, { useState } from "react";
import axios from "axios";

const PizzaForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    size: "",
    price: "",
    toppings: "",
    img_name: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare data to send
    // Sizes, prices, and toppings are expected as arrays, so split strings by commas
    const dataToSend = {
      name: formData.name.trim(),
      size: formData.size.split(",").map((s) => s.trim()),
      price: formData.price.split(",").map((p) => p.trim()),
      toppings: formData.toppings.split(",").map((t) => t.trim()),
      img_name: formData.img_name.trim(),
    };

    try {
      const response = await axios.post(
        "https://pizza-backend-7ptp.onrender.com/api/pizzas",
        dataToSend
      );
      setMessage("Pizza added successfully!");
      setError("");
      setFormData({
        name: "",
        size: "",
        price: "",
        toppings: "",
        img_name: "",
      });
    } catch (err) {
      setError(
        err.response?.data?.error || "Error adding pizza, please try again."
      );
      setMessage("");
    }
  };

  return (
    <div>
      <h2>Add New Pizza</h2>
      {message && <p style={{ color: "green" }}>{message}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label><br />
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Size (comma separated):</label><br />
          <input
            name="size"
            value={formData.size}
            onChange={handleChange}
            placeholder='e.g. 12", 16"'
            required
          />
        </div>

        <div>
          <label>Price (comma separated):</label><br />
          <input
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder='e.g. $12, $18'
            required
          />
        </div>

        <div>
          <label>Toppings (comma separated):</label><br />
          <input
            name="toppings"
            value={formData.toppings}
            onChange={handleChange}
            placeholder='e.g. Cheese, Tomato, Olives'
            required
          />
        </div>

        <div>
          <label>Image file name:</label><br />
          <input
            name="img_name"
            value={formData.img_name}
            onChange={handleChange}
            placeholder='e.g. margherita.jpg'
            required
          />
        </div>

        <button type="submit">Add Pizza</button>
      </form>
    </div>
  );
};

export default PizzaForm;