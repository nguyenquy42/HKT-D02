import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import './style.css';

class Header extends Component {

  render() {
    return (
      <div className="header">

        <div className="footer--top">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <Link to={'/'} className="Logo__Top">Sách Củ</Link>
              </div>
              <div className="col-md-6">
                <ul className="m-0">
                  <li>Email: ntquy97@gmail.com</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to={'/'} className="navbar-brand">My app</Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={'/'} className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to={'/san-pham'} className="nav-link">Sản Phẩm</Link>
              </li>
              <li className="nav-item">
                <Link to={'/login'} className="nav-link">Đăng Nhập</Link>
              </li>
              <li className="nav-item">
                <Link to={'/sign-up'} className="nav-link">Đăng Ký</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }

}
export default Header;
