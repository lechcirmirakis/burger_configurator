import React, { Component } from "react";
import Burger from "../../components/Burger";
import BuildControls from "../../components/Burger/BuildControls/";
import { ITEMS_PRICES } from "../../static/items";
import { disabledControlsInfo } from "../../utilities";
import Modal from "../../components/UI/Modal/index";
import OrderSummary from "../../components/Burger/OrderSummary";
import withErrorHandler from "../../hoc/withErrorHandler";
import axios from "../../utilities/axios-orders";
import Spinner from "../../components/UI/Spinner/";

class BurgerBuilder extends Component {
  state = {
    items: null,
    totalPrice: 2,
    isPurchasable: true,
    isPurchasing: false,
    isLoading: false,
    error: false,
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

  orderSummaryToggle = () => {
    this.setState(prevState => {
      return { isPurchasing: !prevState.isPurchasing };
    });
  };

  continueOrderHandler = () => {
    const queryParams = [];

    for (let i in this.state.items) {
      queryParams.push(
        encodeURIComponent(i) + "=" + encodeURIComponent(this.state.items[i])
      );
    }

    queryParams.push("price=" + this.state.totalPrice);
    const queryString = queryParams.join("&");
  
    this.props.history.push({
      pathname: "/checkout",
      search: "?" + queryString,
    });
  };

  componentDidMount() {
    axios
      .get("/ingredients.json")
      .then(res => {
        this.setState({ items: res.data });
      })
      .catch(err => {
        this.setState({ error: true });
      });
  }

  render() {
    let orderSummary = null;
    let burger = this.state.error ? (
      <p>Items can`t be loaded !</p>
    ) : (
      <Spinner />
    );

    if (this.state.items) {
      burger = (
        <>
          <Burger items={this.state.items} />
          <BuildControls
            updateItems={this.updatedItemsHandler}
            disabledInfo={disabledControlsInfo(this.state.items)}
            ordered={this.orderSummaryToggle}
            currentPrice={this.state.totalPrice}
            isPurchasable={this.state.isPurchasable}
          />
        </>
      );

      orderSummary = (
        <OrderSummary
          cancelOrderHandler={this.orderSummaryToggle}
          continueOrderHandler={this.continueOrderHandler}
          items={this.state.items}
          price={this.state.totalPrice}
        />
      );
    }

    if (this.state.isLoading) {
      orderSummary = <Spinner />;
    }

    return (
      <>
        <Modal
          cancelOrderHandler={this.orderSummaryToggle}
          show={this.state.isPurchasing}
        >
          {orderSummary}
        </Modal>
        {burger}
      </>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);
