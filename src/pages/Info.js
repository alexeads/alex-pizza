import React, { useState, useEffect } from "react";
import Pizza from "../components/Pizza";
import axios from "axios";

const Info = () => {
  const [pizzaInfos, setPizzaInfos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
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

    loadData();
  }, []);

  if (loading) return <p>Loading pizzas...</p>;
  if (error) return <p>Error: {error}</p>;
  if (pizzaInfos.length === 0) return <p>No pizzas found.</p>;

  return (
    <div>
      <h2>Pizza Info</h2>
      {pizzaInfos.map((pizzaInfo) => (
        <Pizza
          key={pizzaInfo._id}
          name={pizzaInfo.name}
          size={pizzaInfo.size}
          price={pizzaInfo.price}
          toppings={pizzaInfo.toppings}
          img_name={pizzaInfo.img_name}
        />
      ))}
    </div>
  );
};

export default Info;
