import React from "react";

const Basket = ({ title, basket }) => {
    const basketData = [
        { product: { name: "painting 1" }, quantity: 2 },
        { product: { name: "painting 2" }, quantity: 1 },
      ];

  return (
    <div>
      <h1>{title}</h1>
      <table>
        <thead>
          <tr>
            <th>Produkt</th>
            <th>Antal</th>
          </tr>
        </thead>
        <tbody>
          {basket.map((basketItem, index) => (
            <tr key={index}>
              <td>{basketItem.product.name}</td>
              <td>{basketItem.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Basket;