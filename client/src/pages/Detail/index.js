// import React, { Component } from 'react';
import React, { useState } from "react";

import './style.css';
import Owldetail from '../../components/Owldetail';
import List from '../../components/List';

const product =
{
  author: "Công Hiếu",
  title: "Quy luật bản chất con người.",
  intro: "Cuốn sách giúp bạn thấu hiểu bản thân mình và tâm lý những người xung quanh!",
  content: `Tâm Lý Học Hành Vi

  Cuốn sách giúp bạn thấu hiểu bản thân mình và tâm lý những người xung quanh!
  
  Được chấp bút bởi bậc thầy tâm lý hàng đầu Trung Quốc Khương Nguy.
  
  Tâm lý học theo chủ nghĩa hành vi phát triển đến đỉnh cao vào những năm 1920 của thế kỷ XX tại Mỹ, giữ vị trí chủ đạo trong lĩnh vực tâm lý học trong suốt ba mươi năm sau đó tại đất nước này.
  
  Không chỉ là một bộ môn khoa học trong phòng thực nghiệm, mà quan trọng hơn, những lý luận của tâm lý học hành vi giúp con người tự nhìn nhận bản thân, tự điều chỉnh tâm lý, đồng thời thông qua hành vi để nắm bắt và thấu hiểu tâm lý, đồng thời thông qua hành vi để nắm bắt và thấu hiểu tâm lý của những người xung quanh.
  
  Hành vi chính là tấm gương phản chiếu tâm lý của con người, qua đó, chúng ta tự soi chiếu bản thân, học cách chung sống hòa thuận với chính mình, bên cạnh đó cũng có thể hiểu rõ người khác và thiết lập mối quan hệ tốt đẹp trong xã hội.
  
  Khi mỗi người trong chúng ta đều học được cách trực tiếp đối diện với bản chất thật sự trong tâm hồn, vậy việc trở thành người thầy cho chính mình cũng không còn là mơ ước xa vời nữa.
  
  
  Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Tuy nhiên tuỳ vào từng loại sản phẩm hoặc phương thức, địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng kềnh, ...
  
  `,
  price: 270000
}

const postList = [
  {
    author: "Công Hiếu",
    content: "Quy luật bản chất con người.",
    isClicked: false,
    img_url: "assets/img/product-1.jpg",
    price: 270000
  },
  {
    author: "Ngọc Hiệp",
    content: "Đọc vị bất kỳ ai.",
    isClicked: false,
    img_url: "assets/img/product-2.jpg",
    price: 180000
  },
  {
    author: "Minh Quý",
    content: "Muôn kiếp thân sinh.",
    isClicked: false,
    img_url: "assets/img/product-3.jpg",
    price: 310000
  },
  {
    author: "Minh Quý",
    content: "Tâm Lý Học Hành Vi.",
    isClicked: false,
    img_url: "assets/img/product-4.jpg",
    price: 78.400
  },
];
const Detail = () => {
  const [posts, setPosts] = useState(postList)

  const handleClickPost = (postId) => {
    const newPosts = posts.map((post) => {
      if (post.id === postId) return { ...post, isClicked: !post.isClicked };
      return post;
    });

    setPosts(newPosts)
  };

  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-md-6">
          <Owldetail></Owldetail>
        </div>
        <div className="col-md-6">
          <div className="product">
            <h4>{product.title}</h4>
            <div className="rating deatil">
              <input type="radio" name="rating" value="5" id="5" />
              <label htmlFor="5">☆</label>
              <input type="radio" name="rating" value="4" id="4" />
              <label htmlFor="4">☆</label>
              <input type="radio" name="rating" value="3" id="3" />
              <label htmlFor="3">☆</label>
              <input type="radio" name="rating" value="2" id="2" />
              <label htmlFor="2">☆</label>
              <input type="radio" name="rating" value="1" id="1" />
              <label htmlFor="1">☆</label>
            </div>
            <p className="price">{product.price} đ</p>
            <p className="mb-5">{product.intro}</p>
            <button className="btn btn-outline-danger">Mua Hàng</button>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-12">
          <div>
            <h5>MÔ TẢ SẢN PHẨM</h5>
          </div>
          <div>
            <p>{product.content}</p>
          </div>
        </div>
      </div>

      <div className="row mt-5 mb-5">
        <div className="col-12">
          <div>
            <h5>Có Thể Bạn Quan tâm</h5>
          </div>
        </div>
        {posts.map((post) => (
          <List
            key={post.id}
            post={post}
            onClickPost={handleClickPost}
          />
        ))}
      </div>

    </div>
  )
}

export default Detail;
