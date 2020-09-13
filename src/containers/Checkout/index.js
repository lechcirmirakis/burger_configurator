import React, { Component } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary";

class Checkout extends Component {
  state = {
    items: {
      salad: 1,
      meat: 1,
      bacon: 1,
      cheese: 1,
    },
  };
  render() {
    return (
      <div>
        <CheckoutSummary items={this.state.items} />
      </div>
    );
  }
}

export default Checkout;
