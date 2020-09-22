import React, { Component } from "react";
import { connect } from "react-redux";

import axios from "../../utilities/axios-orders";
import { disabledControlsInfo } from "../../utilities";
import withErrorHandler from "../../hoc/withErrorHandler";

import Burger from "../../components/Burger";
import BuildControls from "../../components/Burger/BuildControls/";
import Modal from "../../components/UI/Modal/index";
import OrderSummary from "../../components/Burger/OrderSummary";
import Spinner from "../../components/UI/Spinner/";
import * as actionTypes from "../../store/actions";

class BurgerBuilder extends Component {
  state = {
    totalPrice: 2,
    isPurchasing: false,
    isLoading: false,
    error: false,
  };

  // Function for enabled/disablen 'Order Now' button
  updatePurchaseState = items => {
    const sumOfPrices = Object.values(items).reduce((a, b) => a + b, 0);
    return sumOfPrices <= 0
  };

  orderSummaryToggle = () => {
    this.setState(prevState => {
      return { isPurchasing: !prevState.isPurchasing };
    });
  };

  continueOrderHandler = () => {
    const queryParams = [];

    for (let i in this.props.items) {
      queryParams.push(
        encodeURIComponent(i) + "=" + encodeURIComponent(this.props.items[i])
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
    // axios
    //   .get("/ingredients.json")
    //   .then(res => {
    //     this.setState({ items: res.data });
    //   })
    //   .catch(err => {
    //     this.setState({ error: true });
    //   });
  }

  render() {
    const { items, onItemsAdded, onItemsRemove } = this.props;

    let orderSummary = null;
    let burger = this.state.error ? (
      <p>Items can`t be loaded !</p>
    ) : (
      <Spinner />
    );

    if (items) {
      burger = (
        <>
          <Burger items={items} />
          <BuildControls
            itemAdded={onItemsAdded}
            itemRemove={onItemsRemove}
            disabledInfo={disabledControlsInfo(items)}
            ordered={this.orderSummaryToggle}
            currentPrice={this.state.totalPrice}
            isPurchasable={this.updatePurchaseState(items)}
          />
        </>
      );

      orderSummary = (
        <OrderSummary
          cancelOrderHandler={this.orderSummaryToggle}
          continueOrderHandler={this.continueOrderHandler}
          items={this.props.items}
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

const mapStateToProps = state => {
  return {
    items: state.items,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onItemsAdded: name =>
      dispatch({ type: actionTypes.ADD_INGREDIENT, itemName: name }),
    onItemsRemove: name =>
      dispatch({ type: actionTypes.REMOVE_INGREDIENT, itemName: name }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(BurgerBuilder, axios));
