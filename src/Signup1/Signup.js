import React from "react";
import Navbar from "../navbar/Navbar";
import FormField from "../formfield/FormField";
/* import CoolButton from "./CoolButton/CoolButton"; */
import "bulma/css/bulma.css";

const Signup = () => {
  return (
    <div>
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />
      <FormField
        label="Password"
        type="password"
        placeholder="enter password"
      />
      {/* <CoolButton isSmall isDanger className="is-rounded my-class">
        Login
      </CoolButton>
      <CoolButton isSmall isSuccess>
        Signup
      </CoolButton> */}
    </div>
  );
};

export default Signup;
