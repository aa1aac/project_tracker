import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      let res = await axios.post("/api/auth/signup", {
        name,
        email,
        password,
        confirm,
      });

      let { data } = res;
      console.log(data);
      toast.success(data.msg);
    } catch (error) {
      let errors = error.response.data.errors;
      console.log(errors);

      if (errors) {
        toast.error(error.response.data.errors[0]);
      }

      console.log(error);
    }
  };

  return (
    <div>
      <h5 className="mb-2">Signup</h5>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="form-control bg-dark text-white"
            id="name"
            placeholder="Name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-control bg-dark text-white"
            id="email"
            placeholder="Email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="form-control bg-dark text-white"
            id="password"
            placeholder="Password"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirm">Confirm Password</label>
          <input
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            type="password"
            className="form-control bg-dark text-white"
            id="confirm"
            placeholder="Confirm Password"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
