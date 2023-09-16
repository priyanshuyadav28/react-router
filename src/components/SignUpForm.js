import React from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";

function SignUpForm() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
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
    <div>
      {/* Student-instructor tab */}
      <div>
        <button>Student</button>
        <button>Instructor</button>
      </div>

      <form>
        {/* First and last name */}
        <div>
          <label>
            <p>
              First Name <sup>*</sup>
            </p>
            <input
              required
              type="text"
              name="firstName"
              onChange={changeHandler}
              placeholder="Enter first name"
              value={formData.firstName}
            />
          </label>

          <label>
            <p>
              Last Name <sup>*</sup>
            </p>
            <input
              required
              type="text"
              name="lastName"
              onChange={changeHandler}
              placeholder="Enter first name"
              value={formData.lastName}
            />
          </label>
        </div>

        {/* Email address */}
        <label>
          <p>
            Email Address <sup>*</sup>
          </p>
          <input
            required
            type="email"
            name="email"
            onChange={changeHandler}
            placeholder="Enter email address"
            value={formData.email}
          />
        </label>

        {/* Password - confirm password */}
        <div>

          <label>
            <p>
              Password <sup>*</sup>
            </p>

            <input
              required
              type={showPassword ? ("text") : ("password")}
              name="password"
              onChange={changeHandler}
              placeholder="Password"
              value={formData.password}
            />

            <span onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </label>

          <label>
            <p>
              Confirm Password <sup>*</sup>
            </p>
            <input
              required
              type={showPassword ? ("text") : ("password")}
              name="confirmPassword"
              onChange={changeHandler}
              placeholder="Confirm Password"
              value={formData.confirmPassword}
            />

            <span onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>

          </label>

        </div>

        <button>Create Account</button>

      </form>
    </div>
  );
}

export default SignUpForm;
