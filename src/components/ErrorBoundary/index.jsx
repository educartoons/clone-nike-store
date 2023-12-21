import React from "react";
import SomethingError from "../SomethingError";

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
  };

  // eslint-disable-next-line no-unused-vars
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      return <SomethingError />;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
