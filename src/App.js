import React from "react";
import "./App.css";
import StockComponent from "./components/StockComponent";
import { HomeComponent } from "./components/HomeComponent";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Navbar, Nav, NavItem, NavLink } from "reactstrap";
import StockDetails from "./components/StockDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar color="light" light expand="md">
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/home">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/stocks">Stocks</NavLink>
            </NavItem>
          </Nav>
        </Navbar>

        <Switch>
          <Route path="/home" component={HomeComponent} />
          <Route exact path="/stocks" component={StockComponent} />
          <Route
            path="/stocks/:symbol"
            component={({ match }) => (
              <StockDetails symbol={match.params.symbol} />
            )}
          />
          <Redirect to="/home" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
