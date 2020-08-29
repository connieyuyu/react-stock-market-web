import React from "react";

export const HomeComponent = () => {
  return (
    <div>
      <h1>Stock Market</h1>
      <p>
        Welcome to the Stock Market.
        <br />
        Click on the Stocks page to view all the stocks or search.
      </p>
      <img src={process.env.PUBLIC_URL + "/home-img.jpg"} alt="home" />
    </div>
  );
};
