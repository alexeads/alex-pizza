import "./Pizza.css";

function Pizza(props) {
  const baseURL = "http://localhost:3000/images/";  // point to backend static image URL

  return (
    <div className="pizza columns">
      <div className="images">
        <img src={baseURL + props.img_name} alt={props.name} />
      </div>
      <div className="info">
        <h1>{props.name}</h1>
        <p>Size: {props.size.join(", ")}</p>
        <p>Price: {props.price.join(", ")}</p>
        <p>Toppings: {props.toppings.join(", ")}</p>
      </div>
    </div>
  );
}

export default Pizza;