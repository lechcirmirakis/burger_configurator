import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CheckoutSummary from "../../components/Order/CheckoutSummary";
import ContactData from "../ContactData/";

const checkout = props => {
  const { history, items, match } = props;

  const checkoutCancelledHandler = () => {
    history.goBack();
  };

  const checkoutContinue = () => {
    history.replace("/checkout/contact-data");
  };

  return (
    <div>
      <CheckoutSummary
        items={items}
        checkoutCancelled={checkoutCancelledHandler}
        checkoutContinue={checkoutContinue}
      />
      <Route path={match.path + "/contact-data"} component={ContactData} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    items: state.items,
  };
};

export default connect(mapStateToProps)(checkout);
