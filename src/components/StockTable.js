import React from "react";
import { Link } from "react-router-dom";

export const StockTable = (props) => {
  const stocks = props.filtered.length === 0 ? props.stocks : props.filtered;
  const stocks2 =
    props.industry !== "All"
      ? stocks.filter((stock) => stock.industry === props.industry)
      : stocks;

  const renderStocks = stocks2.map((stock) => (
    <tr key={stock.symbol}>
      <td>
        <Link to={`/stocks/${stock.symbol}`}>{stock.symbol}</Link>
      </td>
      <td>
        <Link to={`/stocks/${stock.symbol}`}>{stock.name}</Link>
      </td>
      <td>{stock.industry}</td>
    </tr>
  ));

  return (
    <div>
      <h3 className="table-title">Stock Table</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Stock</th>
            <th>Name</th>
            <th>Industry</th>
          </tr>
        </thead>
        <tbody>{renderStocks}</tbody>
      </table>
    </div>
  );
};
