import React, { Component } from "react";
import { Route } from "react-router-dom";

import CheckoutSummary from "../../components/Order/CheckoutSummary";
import ContactData from "../ContactData/";

class Checkout extends Component {
  state = {
    items: {},
    totalPrice: 0,
  };

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const items = {};
    let price = null;

    // entries, metoda pozwalająca wyciągać dla nas dane z urla

    for (let param of query.entries()) {
      if (param[0] === "price") {
        price = param[1];
      } else {
        items[param[0]] = +param[1];
      }
    }

    this.setState({ items: items, totalPrice: +price });
  }

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinue = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          items={this.state.items}
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinue={this.checkoutContinue}
        />
        <Route
          path={this.props.match.path + "/contact-data"}
          render={() => (
            <ContactData
              items={this.state.items}
              price={this.state.totalPrice}
            />
          )}
        />
      </div>
    );
  }
}

export default Checkout;
