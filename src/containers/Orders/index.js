import React, { Component } from "react";

import axios from "../../utilities/axios-orders";

import Order from "../../components/Order/";
import Spinner from "../../components/UI/Spinner";

class Orders extends Component {
  state = {
    orders: [],
    isLoading: true,
  };

  componentDidMount() {
    axios
      .get("/orders.json")
      .then(res => {
        const downloadedOrders = [];
        for (let item in res.data) {
          downloadedOrders.push({
            ...res.data[item],
            id: item,
          });
        }

        this.setState({ isLoading: false, orders: downloadedOrders });
      })
      .catch(err => {
        this.setState({ isLoading: false });
      });
  }

  render() {
    const showOrders = order => {
      const { orderData, id, totalPrice, ingredients } = order;
      const items = [];

      for (let item in ingredients) {
        items.push({
          name: item,
          quantity: ingredients[item],
        });
      }

      return (
        <Order
          name={orderData.name}
          totalPrice={totalPrice}
          key={id}
          ingredients={items}
        ></Order>
      );
    };

    return (
      <>
        {this.state.isLoading ? <Spinner /> : this.state.orders.map(showOrders)}
      </>
    );
  }
}
export default Orders;
