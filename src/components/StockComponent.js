import React, { Component } from "react";
import "../../src/StockComponent.css";
import { Form, FormGroup, Input, Button } from "reactstrap";
import { StockTable } from "./StockTable";

class StockComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stocks: [],
      isLoading: true,
      search: "",
      filtered: [],
      industry: "All",
    };

    this.getSymbol = this.getSymbol.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.setIndustry = this.setIndustry.bind(this);
  }

  componentDidMount() {
    fetch("http://131.181.190.87:3001/all")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          stocks: data,
          isLoading: false,
        });
      });
  }

  getSymbol = (e) => {
    e.preventDefault();
    this.setState({
      filtered: this.state.stocks.filter((stock) =>
        stock.symbol.includes(this.state.search.toUpperCase())
      ),
    });
  };

  handleOnChange = (e) => {
    this.setState({ search: e.target.value });
  };

  setIndustry = (e) => {
    this.setState({ industry: e.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <h1 className="stock-page-title">Stock Market</h1>
        {this.state.isLoading ? (
          <h4>Loading...</h4>
        ) : (
          <div>
            <h5 className="instruction">Search for stock here.</h5>
            <Form className="search-form" onSubmit={this.getSymbol}>
              <FormGroup className="search-input">
                <Input
                  type="text"
                  name="search"
                  id="search"
                  value={this.state.search}
                  onChange={this.handleOnChange}
                />
              </FormGroup>
              <Button className="search-button">Search</Button>
            </Form>
            <h5 className="instruction">Filter for industry here.</h5>
            <FormGroup className="industry-input">
              <Input
                type="select"
                name="industry"
                id="industry"
                onChange={this.setIndustry}
              >
                <option value="All">All</option>
                <option value="Health Care">Health Care</option>
                <option value="Industrials">Industrials</option>
                <option value="Consumer Discretionary">
                  Consumer Discretionary
                </option>
                <option value="Information Technology">
                  Information Technology
                </option>
                <option value="Consumer Staples">Consumer Staples</option>
                <option value="Utilities">Utilities</option>
                <option value="Financials">Financials</option>
                <option value="Real Estate">Real Estate</option>
                <option value="Materials">Materials</option>
                <option value="Energy">Energy</option>
                <option value="Telecommunication Services">
                  Telecommunication Services
                </option>
              </Input>
            </FormGroup>
            <StockTable
              stocks={this.state.stocks}
              filtered={this.state.filtered}
              industry={this.state.industry}
            />
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default StockComponent;
