// config for Contact Data Form

export const orderForm = {
  name: {
    elementType: "input",
    elementConfig: {
      type: "text",
      placeholder: "Your Name",
    },
    value: "",
    validation: {
      required: true,
    },
    valid: false,
  },
  street: {
    elementType: "input",
    elementConfig: {
      type: "text",
      placeholder: "Street",
    },
    value: "",
    validation: {
      required: true,
    },
    valid: false,
  },
  zipCode: {
    elementType: "input",
    elementConfig: {
      type: "text",
      placeholder: "Zip Code",
    },
    value: "",
    validation: {
      required: true,
      minLength: 5,
      maxLength: 5,
    },
    valid: false,
  },
  country: {
    elementType: "input",
    elementConfig: {
      type: "text",
      placeholder: "Country",
    },
    value: "",
    validation: {
      required: true,
    },
    valid: false,
  },
  email: {
    elementType: "input",
    elementConfig: {
      type: "email",
      placeholder: "Your Mail",
    },
    value: "",
    validation: {
      required: true,
    },
    valid: false,
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
