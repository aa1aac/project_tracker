import React, { Component } from "react";
import { Switch, HashRouter as Router, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { connect } from "react-redux";

import IndexPage from "./pages/index";
import AddProjectPage from "./pages/AddProject";
import LoggedInIndex from "./pages/LoggedIndex";
import ProjectPage from "./pages/Project";
import EditProjectPage from "./pages/EditProject";
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
              <Route path="/" exact component={LoggedInIndex} />
              <Route path="/create-one" exact component={AddProjectPage} />
              <Route path="/project/:id" exact component={ProjectPage} />
              <Route
                path="/projects/edit/:id"
                exact
                component={EditProjectPage}
              />
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
