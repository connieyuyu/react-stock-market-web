import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export const DetailTable = (props) => {
  const detail = props.detail;
  const name = props.name;
  const details =
    props.selectedDate !== "All"
      ? detail.filter(
          (d) => new Date(d.timestamp) > new Date(props.selectedDate)
        )
      : detail;

  const renderDetailStocks = details.map((stock) => (
    <tr key={stock.timestamp}>
      <td>{stock.timestamp.slice(0, 10)}</td>
      <td>{stock.open}</td>
      <td>{stock.high}</td>
      <td>{stock.low}</td>
      <td>{stock.close}</td>
      <td>{stock.volumes}</td>
    </tr>
  ));

  const renderLineChart = (
    <ResponsiveContainer height={400} width="100%">
      <LineChart
        data={details}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <Line
          type="monotone"
          dataKey="close"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <XAxis dataKey="timestamp" />
        <YAxis />
        <Tooltip />
        <Legend />
      </LineChart>
    </ResponsiveContainer>
  );

  return (
    <div>
      <h3 className="table-title">Stock Table</h3>
      <h5>Showing stock detail for: {name}</h5>
      <table className="table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Open</th>
            <th>High</th>
            <th>Low</th>
            <th>Close</th>
            <th>Volumes</th>
          </tr>
        </thead>
        <tbody>{renderDetailStocks}</tbody>
      </table>
      <h3 className="table-title">Closing Price</h3>
      {renderLineChart}
    </div>
  );
};
