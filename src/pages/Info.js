import React, { useState, useEffect } from "react";
import Pizza from "../components/Pizza";
import axios from "axios";

const Info = () => {
  const [pizzaInfos, setPizzaInfos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [formError, setFormError] = useState(null);
  const [formSuccess, setFormSuccess] = useState(null);

  const loadData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        "https://pizza-backend-7ptp.onrender.com/api/pizzas"
      );
      setPizzaInfos(response.data);
    } catch (err) {
      setError(err.message || "Error loading data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    size: "",
    price: "",
    toppings: "",
    img_name: "pepperoni.jpg",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(null);
    setFormSuccess(null);

    const newPizza = {
      name: formData.name.trim(),
      size: formData.size.split(",").map((s) => s.trim()),
      price: formData.price.split(",").map((p) => p.trim()),
      toppings: formData.toppings.split(",").map((t) => t.trim()),
      img_name: formData.img_name.trim(),
    };

    console.log("Submitting new pizza:", newPizza);  // <-- Debug log

    try {
      await axios.post("https://pizza-backend-7ptp.onrender.com/api/pizzas", newPizza);
      setFormSuccess("Pizza added successfully!");
      setFormData({
        name: "",
        size: "",
        price: "",
        toppings: "",
        img_name: "pepperoni.jpg",
      });
      loadData();
    } catch (err) {
  console.error("Full error from backend:", err.response);
  console.error("Error data:", err.response?.data);
  setFormError(err.response?.data?.error || "Error adding pizza");
}
  };

  if (loading) return <p>Loading pizzas...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Pizza Info</h2>

      {/* Pizza List */}
      {pizzaInfos.length === 0 ? (
        <p>No pizzas found.</p>
      ) : (
        pizzaInfos.map((pizzaInfo) => (
          <Pizza
            key={pizzaInfo._id}
            name={pizzaInfo.name}
            size={pizzaInfo.size}
            price={pizzaInfo.price}
            toppings={pizzaInfo.toppings}
            img_name={pizzaInfo.img_name}
          />
        ))
      )}

      <hr />

      {/* Pizza Add Form */}
      <h3>Customize New Pizza</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name: <br />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <div>
          <label>
            Size: <br />
            <input
              type="text"
              name="size"
              value={formData.size}
              onChange={handleChange}
              placeholder='e.g. 12", 16"'
              required
            />
          </label>
        </div>

        <div>
          <label>
            Price<br />
            <input
              type="text"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder='e.g. $10, $15'
              required
            />
          </label>
        </div>

        <div>
          <label>
            Toppings: <br />
            <input
              type="text"
              name="toppings"
              value={formData.toppings}
              onChange={handleChange}
              placeholder="e.g. Cheese, Tomato"
              required
            />
          </label>
        </div>

        <div>
          <label>
            Image filename: <br />
            <input
              type="text"
              name="img_name"
              value={formData.img_name}
              onChange={handleChange}
              placeholder="e.g. pepperoni.jpg"
              required
            />
          </label>
        </div>

        <button type="submit">Add Pizza</button>
      </form>

      {/* Feedback */}
      {formError && <p style={{ color: "red" }}>{formError}</p>}
      {formSuccess && <p style={{ color: "green" }}>{formSuccess}</p>}
    </div>
  );
};

export default Info;