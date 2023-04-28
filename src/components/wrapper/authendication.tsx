import React, { Component } from "react";

const AuthenticationWrapper = (WrappedComponent: any) => {
  class Authentication extends Component {
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return Authentication;
};

export default AuthenticationWrapper;
