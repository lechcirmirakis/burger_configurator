import React, { Component } from "react";
import Modal from "../components/UI/Modal";

// High Order Component to handling errors with sending request to server by asiox
// when an error occurs, hoc uses a modal component to display the error information from error object

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: false,
    };

    componentDidMount() {
      axios.interceptors.request.use(req => {
        this.setState({ error: false });
        return req;
      });
      axios.interceptors.response.use(
        res => res,
        error => {
          this.setState({ error: error });
        }
      );
    }

    errorConfirmedHandler = () => {
      this.setState({ error: false });
    };

    render() {
      console.log('render HOC')
      return (
        <>
          <Modal
            cancelOrderHandler={this.errorConfirmedHandler}
            show={this.state.error}
          >
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </>
      );
    }
  };
};

export default withErrorHandler;
