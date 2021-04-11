import React, { useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from 'axios';
import { SIGN_UP,URL } from "../../constants/variables";

import "./style.css";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFailure, setIsFailure] = useState(false);
  let history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();

    axios.post(`${URL}/login`, {
      email, password
    })
      .then(function (response) {
        console.log(response);
        if (response.data.status === "success") {
          history.push({ pathname: '/home', state: { user: response.data.user } });
        } else {
          console.log("mật khẩu hoặc tài khoản sai");
          setIsFailure(true)
        }
      })
  }

  return (
    <div className="Login mt-5 mb-5">
      <div className="text-center">
        <h2>Đăng Nhập</h2>
      </div>
      <div className="text-center text-danger pt-2 pb-2">{isFailure ? 'Email hoặc mật khẩu không chính xác' : ''}</div>
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
        
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Mật Khẩu</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" onClick={handleSubmit}>
          Đăng Nhập
        </Button>
        <Link to={`/sign-up`}>
          <button className={"btn btn-outline-info w-100 mt-3 "} type="submit"> {SIGN_UP} </button>
        </Link>
      </Form>
    </div>
  );
}
