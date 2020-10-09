import React from 'react';
import { message } from 'antd';

class RenderErrorCatch extends React.Component {
  static getDerivedStateFromProps(props, state) {
    if (props.location.pathname !== state.errorPage) {
      return {
        errorPage: false,
      };
    }
    return null;
  }

  state = {
    errorPage: false,
  };

  componentDidCatch(error) {
    if (process.env.NODE_ENV !== 'development') {
      const { location, history } = this.props;
      message.error({
        content: `非常抱歉，您当前访问的页面:${location.pathname}因为意外的错误崩溃了`,
        duration: 2,
        key: 'error',
      });
      this.setState({ errorPage: location.pathname });
      history.replace('/exception/500');
      // eslint-disable-next-line no-console
      console.error(error);
    }
  }

  render() {
    const { children, location } = this.props;
    const { errorPage } = this.state;
    if (errorPage === location.pathname) {
      return null;
    }
    return children;
  }
}

export default RenderErrorCatch;
