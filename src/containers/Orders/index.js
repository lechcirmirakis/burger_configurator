import React, { Component } from "react";
import Order from "../../components/Order/";
import axios from "../../utilities/axios-orders";

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
      console.log(order);
      const { customer, id, totalPrice, ingredients } = order;
      const items = [];

      for (let item in ingredients) {
        items.push({
          name: item,
          quantity: ingredients[item],
        });
      }

      return (
        <Order
          name={customer.name}
          totalPrice={totalPrice}
          key={id}
          ingredients={items}
        ></Order>
      );
    };

    return <div>{this.state.orders.map(showOrders)}</div>;
  }
}
export default Orders;
