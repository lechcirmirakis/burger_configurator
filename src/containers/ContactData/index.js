import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { ContactDataWrapper } from "./styles";
import { OrderSummaryButton } from "../../styles/button";
import PropTypes from "prop-types";
import axios from "../../utilities/axios-orders";

import { orderForm } from "../../static/formInputs";
import Spinner from "../../components/UI/Spinner";
import Input from "../../components/UI/Input";

class ContactData extends Component {
  state = {
    orderForm: orderForm,
    isLoading: false,
    formIsValid: false,
  };

  orderHandler = event => {
    event.preventDefault();
    this.setState({ isLoading: true });

    const formData = {};

    for (let formElementId in this.state.orderForm) {
      formData[formElementId] = this.state.orderForm[formElementId].value;
    }

    // price in the real app must be calculated on server side
    const order = {
      ingredients: this.props.items,
      totalPrice: this.props.price,
      orderData: formData,
    };

    axios
      .post("/orders.json", order)
      .then(response => {
        this.setState({ isLoading: false });
        this.props.history.push("/");
      })
      .catch(error => {
        this.setState({ isLoading: false });
      });
  };

  checkValidity = (value, rules) => {
    let isValid = true;

    if (!rules) {
      return true;
    }

    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }

    return isValid;
  };

  inputChangeHandler = (event, inputId) => {
    // aby zmieniać state "immutable", a jest to obiekt czyli typ referencyjny
    // potrzebujemy zclonować obiekt głebiej ponieważ mamy zagnieżdzone obiekty
    const updatedOrderForm = { ...this.state.orderForm };
    const updatedFormElement = { ...updatedOrderForm[inputId] };

    updatedFormElement.value = event.target.value;

    updatedFormElement.valid = this.checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );

    updatedFormElement.touched = true;

    updatedOrderForm[inputId] = updatedFormElement;

    // check if all inputs in form is valid to get all form is valid state
    let formIsValid = true;
    for (let inputId in updatedOrderForm) {
      formIsValid = updatedOrderForm[inputId].valid && formIsValid;
    }

    this.setState({ orderForm: updatedOrderForm, formIsValid: formIsValid });
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
      const {
        elementType,
        elementConfig,
        value,
        valid,
        validation,
        touched,
      } = config;

      return (
        <Input
          key={id}
          elementType={elementType}
          elementConfig={elementConfig}
          value={value}
          changed={event => this.inputChangeHandler(event, id)}
          invalid={!valid}
          shouldValidate={validation}
          touched={touched}
        />
      );
    };

    let form = (
      <form onSubmit={this.orderHandler}>
        {formElementsArray.map(showFormInputs)}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <OrderSummaryButton disabled={!this.state.formIsValid}>
            Order
          </OrderSummaryButton>
        </div>
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
