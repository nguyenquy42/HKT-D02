import React, { useState, useEffect } from "react";
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

import './style.css'


const Login = ({ location }) => {
  let history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [isFailure, setIsFailure] = useState(false)

  const handleSignIn = () => {
    axios.post(`${URL}/login`, {
      email, password
    })
      .then(function (response) {
        console.log("🚀 ~ file: index.js ~ line 21 ~ response", response)
        if (response.data.isSuccess === true) {
          history.push(`/chat?email=${email}`);
        } else {
          history.push("/login");
          setIsFailure(true)
        }
      })
      .catch(function (error) {
        history.push("/login");
        setIsFailure(true)
      });
  };

  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-6">
          <div className="sign-in">
            <h3 className="sign-in__header">Đăng Nhập</h3>
            <div className="form-group">
              <div className="form-group">
                <input placeholder="Email" className="form-control" type="email" onChange={(event) => setEmail(event.target.value)} value={email} />
              </div>
              <div className="form-group">
                <input placeholder="Mật khẩu" className="form-control mt-20" type="password" onChange={(event) => setPassword(event.target.value)} value={password} />
              </div>
              <div className="form-group">
                <button className="btn" type="submit" onClick={handleSignIn}> Đăng Nhập </button>
                <div className="sign-in__fail-text">{isFailure ? 'Email hoặc mật khẩu không chính xác' : ''}</div>
                <button className="btn" type="submit" onClick={() => history.push('/sign-up')} > Đăng Ký </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
