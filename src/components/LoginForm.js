import React from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState } from "react";


function LoginForm() {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = React.useState(false);

  function changeHandler(event) {
    setFormData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      };
    });
  }
  return (
    <form>
      <label>
        <p>
          Email Address <sup>*</sup>
        </p>

        <input
          required
          type="email"
          value={formData.email}
          name="email"
          onChange={changeHandler}
          placeholder="Enter your email"
        />
      </label>

      <label>
        <p>
          password <sup>*</sup>
        </p>

        <input
          required
          type={showPassword ? "text" : "password"}
          value={formData.password}
          name="password"
          onChange={changeHandler}
          placeholder="Password"
        />

        <span onClick={() => setShowPassword((prev) => !prev)}>
          {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        </span>

        <Link to="#">
          <p>Forgot Password</p>
        </Link>

      </label>

      <button type="submit">Sign In</button>

    </form>
  );
}

export default LoginForm;
