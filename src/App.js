import React, { Component } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Header from "./components/Header";
import Login from "./components/Login";
import NoMatch from "./components/NoMatch";
import Home from "./components/Home";
import Category from "./components/Category";

const Main = props => {
  return (
    <Switch>
      <Route path="/login" render={() => <Login login={props.login} />} />
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <ProtectedRoute exact path="/home" component={Home} {...props} /> 
      <ProtectedRoute path="/category" component={Category} {...props} />
      <Route component={NoMatch} />
    </Switch>
  );
};

class App extends Component {
  state = {
    isAuthenticated: false
  };

  login = () => {
    const {
      history,
      location: { state }
    } = this.props;
    this.setState({ isAuthenticated: true });
    history.push(state.from ? state.from : "/");
  };

  logout = () => {
    this.setState({ isAuthenticated: false });
  };

  render() {
    const { isAuthenticated } = this.state;
    return (
      <div>
        <Header logout={this.logout} />
        <Main login={this.login} isAuthenticated={isAuthenticated} />
      </div>
    );
  }
}

export default withRouter(App);
