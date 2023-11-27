import React, { useEffect, useState } from "react";
import Input from "../../../Components/Input";
import axios from "axios";

const Login = () => {
  const [value, setValue] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  const getLoginCred = async () => {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    const body = {
      username: "aniket.magadum@fyntune.com",
      password: "password",
    };
    const res = await axios.post(
      "https://uatapicorporatetravel.fynity.in/api/login",
      body,
      { headers: headers }
    );
    console.log(res.data);
  };

  useEffect(() => {
    getLoginCred();
  }, []);
  return (
    <div>
      <Input
        label="Email"
        type="text"
        name="email"
        id="email"
        value={value.email}
        onChange={handleChange}
      />
      <Input
        label="Password"
        type="password"
        name="password"
        id="password"
        value={value.password}
        onChange={handleChange}
      />
    </div>
  );
};

export default Login;
