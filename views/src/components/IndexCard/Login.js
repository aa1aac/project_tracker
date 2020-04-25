import React, { useState } from "react";
import { connect } from "react-redux";

import * as UserActions from "../../store/actions/user/user";

const Login = ({ userLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (e) => {
    e.preventDefault();

    if (email && password) {
      userLogin({ email, password });
    }
  };

  return (
    <div>
      <h5 className="mb-2">Login</h5>
      <form onSubmit={onLogin}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            className="form-control bg-dark text-white"
            id="email"
            placeholder="Email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            className="form-control bg-dark text-white"
            id="password"
            placeholder="Password"
          />
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Login
        </button>
      </form>
    </div>
  );
};

export default connect(null, UserActions)(Login);
