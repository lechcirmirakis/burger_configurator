import React, { Component } from "react";
import Burger from "../../components/Burger";
import BuildControls from '../../components/Burger/BuildControls/';

class BurgerBuilder extends Component {
  state = {
    items: {
      salad: 0,
      bacon: 2,
      cheese: 3,
      meat: 0,
    },
  };

  render() {
    return (
      <>
        <Burger items={this.state.items} />
        <BuildControls>Build Controls</BuildControls>
      </>
    );
  }
}

export default BurgerBuilder;
