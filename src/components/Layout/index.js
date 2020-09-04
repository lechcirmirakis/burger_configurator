import React, { Component } from "react";
import { MainWrapper } from "./styles";
import Toolbar from "../Navigation/Toolbar";
import MobileNav from "../Navigation/MobileNav";

class Layout extends Component {
  state = {
    showMobileNav: true,
  };

  mobileNavCloseHandler = () => {
    this.setState({ showMobileNav: false });
  };

  render() {
    return (
      <>
        <Toolbar />
        <MobileNav
          closed={this.mobileNavCloseHandler}
          open={this.state.showMobileNav}
        />
        <MainWrapper>{this.props.children}</MainWrapper>
      </>
    );
  }
}

export default Layout;
