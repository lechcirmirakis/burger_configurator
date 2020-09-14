// config for Contact Data Form

export const orderForm = {
  name: {
    elementType: "input",
    elementConfig: {
      type: "text",
      placeholder: "Your Name",
    },
    value: "",
  },
  street: {
    elementType: "input",
    elementConfig: {
      type: "text",
      placeholder: "Street",
    },
    value: "",
  },
  zipCode: {
    elementType: "input",
    elementConfig: {
      type: "text",
      placeholder: "Zip Code",
    },
    value: "",
  },
  country: {
    elementType: "input",
    elementConfig: {
      type: "text",
      placeholder: "Country",
    },
    value: "",
  },
  email: {
    elementType: "input",
    elementConfig: {
      type: "email",
      placeholder: "Your Mail",
    },
    value: "",
  },
  deliveryMethod: {
    elementType: "select",
    elementConfig: {
      options: [
        {
          value: "fastest",
          displayValue: "Fastest",
        },
        {
          value: "cheapest",
          displayValue: "Cheapest",
        },
        {
          value: "personalPickup",
          displayValue: "Personal Pickup",
        },
      ],
    },
    value: "",
  },
};
