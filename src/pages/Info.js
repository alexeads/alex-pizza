import React, { useState, useEffect } from "react";
import Pizza from "../components/Pizza";
import axios from "axios";

const Info = () => {
  const [pizzaInfos, setPizzaInfos] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const response = await axios.get(
          "http://localhost:3000/api/pizzas"
      );
      setPizzaInfos(response.data);
    };

    loadData();
  }, []);

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