import Axios from "axios";
import React, { useState, useContext} from "react";
import {Context} from '../utils/GlobalContext'
import { useNavigate } from "react-router-dom";
import "../UI/Login.css";
import { setAuthorizationToken } from "../utils/setAuthToken";
export default function Login() {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();
  const {setToken} = useContext(Context);
  let token = "";
  const onUserNameChange = (e) => {
    if (e.target.value) {
      setUsername(e.target.value);
    }
  };
  const onPasswordChange = (e) => {
    if (e.target.value) {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post('http://localhost:5050/login',{
      username: Username,
      password: Password
    }).then((res) => {
      setAuthorizationToken(res.data.token)
      localStorage.setItem("token", res.data.token);
      navigate("/shuffle");
    });
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input onChange={onUserNameChange} />
        <label>Password</label>
        <input onChange={onPasswordChange} />
        <button>Log In</button>
      </form>
    </div>
  );
}
