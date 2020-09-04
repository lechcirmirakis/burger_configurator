import React, { Component } from "react";
import Burger from "../../components/Burger";
import BuildControls from "../../components/Burger/BuildControls/";
import { ITEMS_PRICES } from "../../static/items";
import { disabledControlsInfo } from "../../utilities";
import Modal from "../../components/UI/Modal/index";
import OrderSummary from "../../components/Burger/OrderSummary";

class BurgerBuilder extends Component {
  state = {
    items: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 2,
    isPurchasable: true,
    isPurchasing: false,
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

    this.updatePurchaseState(updatedItems);
  };

  // Function for enabled/disablen 'Order Now' button
  updatePurchaseState = items => {
    const sumOfPrices = Object.values(items).reduce((a, b) => a + b, 0);
    this.setState({
      isPurchasable: sumOfPrices <= 0,
    });
  };

  purchaseHandler = () => {
    this.setState({ isPurchasing: true });
  };

  purchaseCloseHandler = () => {
    this.setState({ isPurchasing: false });
  };

  continueOrderHandler = () => {
    alert("Go on");
  };

  render() {
    return (
      <>
        <Modal
          clicked={this.purchaseCloseHandler}
          show={this.state.isPurchasing}
        >
          <OrderSummary
            cancelOrderHandler={this.purchaseCloseHandler}
            continueOrderHandler={this.continueOrderHandler}
            items={this.state.items}
            price={this.state.totalPrice}
          />
        </Modal>
        <Burger items={this.state.items} />
        <BuildControls
          updateItems={this.updatedItemsHandler}
          disabledInfo={disabledControlsInfo(this.state.items)}
          ordered={this.purchaseHandler}
          currentPrice={this.state.totalPrice}
          isPurchasable={this.state.isPurchasable}
        />
      </>
    );
  }
}

export default BurgerBuilder;
