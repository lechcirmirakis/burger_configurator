import React, { Component } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary";

class Checkout extends Component {
  state = {
    items: {},
  };

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const items = {};

    // entries, metoda pozwalająca wyciągać dla nas dane z urla

    for (let param of query.entries()) {
      items[param[0]] = +param[1];
    }

    this.setState({ items: items });
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
      </div>
    );
  }
}

export default Checkout;
