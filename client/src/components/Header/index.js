import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo-header.png';



import './style.css';

class Header extends Component {

  render() {
    return (
      <div className="header">

        <div className="header--top">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <Link to={'/'} className="Logo__Top">
                  <img
                    className="logo-img"
                    src={logo}
                    alt="img"
                  />
                </Link>
              </div>
              <div className="col-md-6">
                <div className="box--CoAu">
                  <ul className="m-0">
                    <li>Email: ntquy97@gmail.com</li>
                    <li>Phone: 086580****</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-light">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <nav className="navbar navbar-expand-lg navbar-light ">
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                      <li className="nav-item">
                        <Link to={'/'} className="nav-link">Home</Link>
                      </li>
                      <li className="nav-item">
                        <Link to={'/san-pham'} className="nav-link">Sản Phẩm</Link>
                      </li>
                      <li className="nav-item">
                        <Link to={'/bai-viet'} className="nav-link">Blog Sách</Link>
                      </li>
                      <li className="nav-item">
                        <Link to={'/lien-he'} className="nav-link">Liên Hệ</Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              <div className="col-lg-4">
                <div className="box--CoAu">
                  <ul className="m-0">
                    <li className="nav-item">
                      <Link to={'/login'} className="nav-link">Đăng Nhập</Link>
                    </li>
                    <li className="nav-item">
                      <Link to={'/sign-up'} className="nav-link">Đăng Ký</Link>
                    </li>
                    <li>Hi: User</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}
export default Header;
