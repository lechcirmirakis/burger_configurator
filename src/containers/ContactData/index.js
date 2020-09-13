import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { ContactDataWrapper } from "./styles";
import PropTypes from "prop-types";
import axios from "../../utilities/axios-orders";

import Spinner from "../../components/UI/Spinner";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },
    isLoading: false,
  };

  orderHandler = event => {
    event.preventDefault();
    this.setState({ isLoading: true });

    // price in the real app must be calculated on server side
    const orderData = {
      ingredients: this.props.items,
      totalPrice: this.props.price,
      customer: {
        name: "Lech Cirmirakis",
        address: {
          street: "Marszalkowska",
          zipCode: "01-800",
          country: "Poland",
        },
      },
      email: "test@test.com.pl",
      delivery: "Uber Eats",
    };

    axios
      .post("/orders.json", orderData)
      .then(response => {
        this.setState({ isLoading: false });
        this.props.history.push("/");
      })
      .catch(error => {
        this.setState({ isLoading: false });
      });
  };

  render() {
    let form = (
      <form>
        <input type="text" name="name" placeholder="Your Name" />
        <input type="email" name="email" placeholder="Your Email" />
        <input type="text" name="street" placeholder="Your Adress" />
        <input type="text" name="postal" placeholder="Your Postal Code" />
        <button onClick={this.orderHandler}>Order</button>
      </form>
    );
    if (this.state.isLoading) {
      form = <Spinner />;
    }

    return (
      <ContactDataWrapper>
        <h4>Enter Your Contact Data</h4>
        {form}
      </ContactDataWrapper>
    );
  }
}

ContactData.propTypes = {
  items: PropTypes.object,
  totalPrice: PropTypes.number,
};

export default withRouter(ContactData);
