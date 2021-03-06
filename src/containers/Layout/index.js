import React, { Component } from "react";

import Toolbar from "../../components/Navigation/Toolbar";
import MobileNav from "../../components/Navigation/MobileNav";

import { MainWrapper } from "./styles";

class Layout extends Component {
  state = {
    showMobileNav: false,
  };

  mobileNavCloseHandler = () => {
    this.setState({ showMobileNav: false });
  };

  mobileNavToggleHandler = () => {
    this.setState(prevState => {
      return { showMobileNav: !prevState.showMobileNav };
    });
  };

  render() {
    return (
      <>
        <Toolbar openHandler={this.mobileNavToggleHandler} />
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
