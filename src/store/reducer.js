import * as actionTypes from "./actions";
import { ITEMS_PRICES } from "../static/items";

const initialState = {
  items: {
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
  },
  totalPrice: 2,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      const priceAfterAdded = state.totalPrice + ITEMS_PRICES[action.itemName];

      return {
        ...state,
        items: {
          ...state.items,
          [action.itemName]: state.items[action.itemName] + 1,
        },
        totalPrice: Math.round(priceAfterAdded * 10) / 10,
      };
    case actionTypes.REMOVE_INGREDIENT:
      const priceAfterRemove = state.totalPrice - ITEMS_PRICES[action.itemName];

      return {
        ...state,
        items: {
          ...state.items,
          [action.itemName]: state.items[action.itemName] - 1,
        },
        totalPrice: Math.round(priceAfterRemove * 10) / 10,
      };
    default:
      return state;
  }
};

export default reducer;
