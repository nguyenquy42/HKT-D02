import React, { Component } from 'react';

import './style.css';

class About extends Component {

  render() {
    return (
      <section className="box">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="box__title">
                <h2 className="Title_category">LPBooks</h2>
              </div>
            </div>
            <div className="col-12">
              <p>Tọa lạc tại Sài Gòn, <a href="https://sachxua.vn/gioi-thieu-nha-sach-cu-bach-ma/"><strong>Nhà sách 0019</strong> <strong>Bạch Mã</strong> </a> đã hoạt động từ năm 1994 đến nay. Với sự uy tín và lâu dài trong kinh doanh, <strong>Nhà sách 0019</strong> <strong>Sachxua.vn</strong> luôn mong muốn mang đến những giá trị vô cùng quý giá từ sách xưa và nay đến mọi người. Một kho tàng văn hóa – nghệ thuật ẩn mình trong mỗi quyển sách.</p>
              <p><b> ✅ Uy tín – Chất lượng đặt lên hàng đầu</b></p>
              <p><b>✅ Đặt cọc và thanh toán phần còn lại khi Nhận hàng</b></p>
              <p><b>✅ Bảo đảm <strong>100% </strong>như cam kết</b></p>
              <p><b> ✅Uy tín – Chất lượng đặt lên hàng đầu</b></p>
            </div>
          </div>
        </div>
      </section>
    )
  }

}
export default About;
