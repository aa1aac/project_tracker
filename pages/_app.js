import App from "next/app";
import Router from "next/router";
import NProgress from "nprogress";

import "nprogress/nprogress.css";

import "../client/styles/styles.scss";

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
    return <Component {...pageProps} />;
  }
}
