import React, { Component } from "react";
import Burger from "../../components/Burger";

class BurgerBuilder extends Component {
  state = {
    items: {
      salad: 1,
      bacon: 2,
      cheese: 1,
      meat: 2,
    },
  };

  render() {
    return (
      <>
        <Burger items={this.state.items} />
        <div>Build Controls</div>
      </>
    );
  }
}

export default BurgerBuilder;
