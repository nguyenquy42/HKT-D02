import React, { useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from 'axios';
import { URL } from "../../constants/variables";

import "./style.css";

export default function SignUp() {

  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFailure, setIsFailure] = useState(false);

  console.log(email, password);
  console.log(`${URL}/users`);
  function handleSignUp() {
    axios.post(`${URL}/users`, {
      email, password
    })
      .then(function (response) {
        if (response.data.isSuccess === true) {
          history.push(`/sign-up?email=${email}&password=${password}`);
        } else {
          history.push("/sign-up");
          setIsFailure(true);
        }
      })
  }

  return (
    <div className="Login mt-5 mb-5">
      <div className="text-center">
        <h2>Đăng Ký</h2>
      </div>
      <div className="text-center text-danger pt-2 pb-2">{isFailure ? 'Email đã tồn tại' : ''}</div>
      <Form onSubmit={handleSignUp}>
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
        <Button block size="lg" type="submit" onClick={handleSignUp}>
          Đăng Ký
        </Button>
        <Link to={`/login`}>
          <button className={"btn btn-outline-info w-100 mt-3 "} type="submit"> Đăng Nhập </button>
        </Link>
      </Form>
    </div>
  );
}
