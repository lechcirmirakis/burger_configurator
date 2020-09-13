import React, { Component } from "react";
import { ContactDataWrapper } from "./styles";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },
  };

  render() {
    return (
      <ContactDataWrapper>
        <h4>Enter Your Contact Data</h4>
        <form>
          <input type="text" name="name" placeholder="Your Name" />
          <input type="email" name="email" placeholder="Your Email" />
          <input type="text" name="street" placeholder="Your Adress" />
          <input type="text" name="postal" placeholder="Your Postal Code" />
          <button>Order</button>
        </form>
      </ContactDataWrapper>
    );
  }
}

export default ContactData;
