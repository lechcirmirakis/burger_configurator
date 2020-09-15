import React, { Component } from "react";

import Modal from "../components/UI/Modal";

// High Order Component to handling errors with sending request to server by asiox
// when an error occurs, hoc uses a modal component to display the error information from error object

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: false,
    };

    UNSAFE_componentWillMount() {
      this.reqInterceptor = axios.interceptors.request.use(req => {
        this.setState({ error: false });
        return req;
      });
      this.resInterceptor = axios.interceptors.response.use(
        res => res,
        error => {
          this.setState({ error: error });
        }
      );
    }

    // remove instance of interceptors when component will unmount,
    // for not keeping unnecessary data im memory

    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.request.eject(this.resInterceptor);
    }

    errorConfirmedHandler = () => {
      this.setState({ error: false });
    };

    render() {
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
