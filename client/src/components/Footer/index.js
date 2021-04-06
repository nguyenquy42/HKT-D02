import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style.css';

class Footer extends Component {

  render() {
    return (
      <footer className="footer">
        <div className="footer__main">
          <div className="container">
            <div className="row">
              <div className="col-4">
                <div className="footer_items">
                  <Link to={'/'} className="Logo__Top">
                    <img className="img" src={'assets/img/logo-header.png'} />
                  </Link>
                  <p>Đay làm trang bán hàng được thực hiện cá nhân vẫn chưa hoàn thiện, nếu trang web có lỗi logic mong các bạn vui vẻ góp ý để giúp trang ngày càn phát triển, chân ái.</p>
                </div>
              </div>
              <div className="col-4">
                <div className="footer_items">
                  <h3>Chính Sách</h3>
                  <ul>
                    <li>
                      <Link to={'/#'} className="item-sub-menu">
                        chính sách bảo mật
                      </Link>
                    </li>
                    <li>
                      <Link to={'/#'} className="item-sub-menu">
                        chính sách đổi trả
                      </Link>
                    </li>
                    <li>
                      <Link to={'/#'} className="item-sub-menu">
                        chính sách vẫn chuyễn
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-4">
                <div className="footer_items">
                  <h3>Liên Hệ</h3>
                  <ul>
                    <li>
                      <Link to={'/#'} className="item-sub-menu">
                        email: ntquy42@gnail.com
                      </Link>
                    </li>
                    <li>
                      <Link to={'/#'} className="item-sub-menu">
                        số điện thoại: 086580****
                      </Link>
                    </li>
                    <li>
                      <Link to={'/#'} className="item-sub-menu">
                        Địa Chỉ: 43 Trần Hưng Đạo.
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }

}
export default Footer;
