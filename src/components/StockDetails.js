import React, { Component } from "react";
import { Spinner } from "reactstrap";
import { Form, FormGroup, Input } from "reactstrap";
import { DetailTable } from "./DetailTable";

class StockDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      detail: [],
      isLoading: true,
      name: "",
      selectedDate: "All",
    };

    this.setDate = this.setDate.bind(this);
  }

  componentDidMount() {
    fetch("http://131.181.190.87:3001/history?symbol=" + this.props.symbol)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({ detail: data, isLoading: false, name: data[0].name });
      });
  }

  setDate = (e) => {
    this.setState({ selectedDate: e.target.value });
  };

  render() {
    return (
      <div>
        <h1>Stock Information</h1>
        {this.state.isLoading ? (
          <h4>
            <Spinner type="grow" color="primary" />
            <Spinner type="grow" color="secondary" />
            <Spinner type="grow" color="success" />
            Loading...
          </h4>
        ) : (
          <div>
            <h5>See history after: </h5>
            <Form>
              <FormGroup>
                <Input type="select" onChange={this.setDate}>
                  <option value="All">All</option>
                  {this.state.detail.map((detail) => (
                    <option value={detail.timestamp}>
                      {detail.timestamp.slice(0, 10)}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Form>
            <br />

            <DetailTable
              detail={this.state.detail}
              name={this.state.name}
              selectedDate={this.state.selectedDate}
            />
          </div>
        )}
      </div>
    );
  }
}

export default StockDetails;
