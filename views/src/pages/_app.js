import App from "next/app";
import Router from "next/router";
import NProgress from "nprogress";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";

import reducers from "../store/reducers";

import "nprogress/nprogress.css";

import "../client/styles/styles.scss";

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

export default class myApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}
