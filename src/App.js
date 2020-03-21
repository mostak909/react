import React from "react";
import "./styles.css";

export default function App() {
  const bannar = {
    border: "1px solid gry",
    borderRadius: "7px",
    backgroundColor: "#F8F9FA",
    color: "blue",
    fontFamily: "sans-serif",
    padding: "7px",
    boxShadow: "0 .5rem 1rem rgba(0,0,0,.15)"
  };
  const nayoks = ["Razzak", "Bappi", "Josim", "Alomgir", "Salman"];
  const products = [
    { name: "Photoshop", price: "$90.99", offer: "40% Discount" },
    { name: "Illustrator", price: "$60.99", offer: "50% Discount" },
    { name: "PDF Reader", price: "$6.99", offer: "20% Discount" },
    { name: "Kabab Turki", price: "$10.99", offer: "15% Discount" },
    { name: "Alu-Singara", price: "$50.99", offer: "10% Discount" },
    { name: "SPiCE Puri", price: "$6.99", offer: "10% Discount" },
    { name: "Coffe Arabic", price: "$50.99", offer: "15% Discount" },
    { name: "Green Tea", price: "$6.99", offer: "50% Discount" }
  ];
  /* const productsNames = products.map(product => product.name);
  console.log(productsNames); */
  /* const nayoksNames = nayoks.map(nayok => nayok);
  console.log(nayoksNames); */
  return (
    <div className="App">
      <h3 style={bannar}>My Product</h3>

      {/* <Product product={products[0]} />
      <Product product={products[1]} /> */}
      {products.map(product => (
        <Product product={product} />
      ))}
      {/* <ul>
        {
          nayoks.map(nayok => <li>{nayok}</li>)
        }
        {
          products.map(product => <li>{product.name}</li>)
        }

      </ul> */}
    </div>
  );
}
function Product(props) {
  const productStyle = {
    border: "1px solid gry",
    borderRadius: "7px",
    backgroundColor: "#F8F9FA",
    color: "orange",
    fontFamily: "sans-serif",
    width: "300px",
    float: "left",
    margin: "10px",
    padding: "7px",
    boxShadow: "0 .5rem 1rem rgba(0,0,0,.15)"
  };
  const { name, price, offer } = props.product;
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <p>
        It is a long distracted by the readable The point of using Lorem Ipsum
      </p>
      <h6>{offer}</h6>
      <h5>{price}</h5>
      <button> Buy now </button>
    </div>
  );
}
