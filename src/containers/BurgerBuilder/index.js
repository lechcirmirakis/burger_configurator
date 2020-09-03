import React, { Component } from "react";
import Burger from "../../components/Burger";
import BuildControls from "../../components/Burger/BuildControls/";
import { ITEMS_PRICES } from "../../static/items";
import { disabledControlsInfo } from "../../utilities";

class BurgerBuilder extends Component {
  state = {
    items: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 2,
  };

  // One function for add/remove of burger items
  updatedItemsHandler = (type, kind) => {
    const updatedItems = { ...this.state.items };
    if (this.state.items[type] <= 0 && kind === "remove") {
      return;
    }

    updatedItems[type] =
      kind === "add" ? this.state.items[type] + 1 : this.state.items[type] - 1;

    const updatedPrice =
      kind === "add"
        ? this.state.totalPrice + ITEMS_PRICES[type]
        : this.state.totalPrice - ITEMS_PRICES[type];

    this.setState({
      items: updatedItems,
      totalPrice: Math.round(updatedPrice * 10) / 10,
    });
  };

  render() {
    return (
      <>
        <Burger items={this.state.items} />
        <BuildControls
          updateItems={this.updatedItemsHandler}
          disabledInfo={disabledControlsInfo(this.state.items)}
          currentPrice={this.state.totalPrice}
        />
      </>
    );
  }
}

export default BurgerBuilder;
