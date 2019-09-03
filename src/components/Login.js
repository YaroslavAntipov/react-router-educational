import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="username">Username</label>
          <input id="username" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
          <button
            type="submit"
            onClick={e => {
              e.preventDefault();
              this.props.login();
            }}
          >
            Login
          </button>
        </form>
      </div>
    );
  }
}