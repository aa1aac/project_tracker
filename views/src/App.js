import React, { Component } from "react";
import { Switch, HashRouter as Router, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { connect } from "react-redux";

import IndexPage from "./pages/index";
import Navbar from "./components/Layout/Navbar";

import { getUser } from "./store/actions/user/user";

import "./styles/styles.scss";
import "react-toastify/dist/ReactToastify.min.css";

class App extends Component {
  componentDidMount() {
    this.props.getUser();
  }

  render() {
    console.log(this.props.user);
    return (
      <Router>
        <ToastContainer autoClose={5000} />

        {this.props.user._id ? (
          <div>
            <Navbar />
            <Switch>
              <Route path="/" component={() => <div>LoggedIn</div>} />
            </Switch>
          </div>
        ) : (
          <Switch>
            <Route path="/" component={IndexPage} />
          </Switch>
        )}
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, { getUser })(App);
