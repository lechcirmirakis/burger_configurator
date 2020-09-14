import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { ContactDataWrapper } from "./styles";
import PropTypes from "prop-types";
import axios from "../../utilities/axios-orders";

import { orderForm } from "../../static/formInputs";
import Spinner from "../../components/UI/Spinner";
import Input from "../../components/UI/Input";

class ContactData extends Component {
  state = {
    orderForm: orderForm,
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

  inputChangeHandler = (event, inputId) => {
    // aby zmieniać state "immutable", a jest to obiekt czyli typ referencyjny
    // potrzebujemy zclonować obiekt głebiej ponieważ mamy zagnieżdzone obiekty
    const updatedOrderForm = { ...this.state.orderForm };
    const updatedFormElement = { ...updatedOrderForm[inputId] };

    updatedFormElement.value = event.target.value;

    updatedOrderForm[inputId] = updatedFormElement;
    this.setState({ orderForm: updatedOrderForm });
  };

  render() {
    const formElementsArray = [];

    for (let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key],
      });
    }

    const showFormInputs = formInput => {
      const { id, config } = formInput;
      return (
        <Input
          key={id}
          elementType={config.elementType}
          elementConfig={config.elementConfig}
          value={config.value}
          changed={event => this.inputChangeHandler(event, id)}
        />
      );
    };

    let form = (
      <form>
        {formElementsArray.map(showFormInputs)}
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
