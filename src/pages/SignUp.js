import React from "react";
import Template from "../components/Template";
import signupImage from "../assets/signup.png";

const SignUp = ({setIsLoggedIn}) => {
  return (
    <div>
      <Template
        title="Join the millions learning to code with StudyNotion for free."
        desc1="Build skills for today, tomorrow, and beyond."
        desc2="Education to future-proof your career."
        image={signupImage}
        formtype="login"
        setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  );
}

export default SignUp;
