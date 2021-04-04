import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";


import './style.css';
import Owldemo1 from '../../components/Owldemo1';
import List from '../../components/List';



const postList = [
  {
    id: uuidv4(),
    author: "Công Hiếu",
    content: "Quy luật bản chất con người.",
    isClicked: false,
    img_url: "assets/img/product-1.jpg",
    price: 270000
  },
  {
    id: uuidv4(),
    author: "Ngọc Hiệp",
    content: "Đọc vị bất kỳ ai.",
    isClicked: false,
    img_url: "assets/img/product-2.jpg",
    price: 180000
  },
  {
    id: uuidv4(),
    author: "Minh Quý",
    content: "Muôn kiếp thân sinh.",
    isClicked: false,
    img_url: "assets/img/product-3.jpg",
    price: 310000
  },
];


const Home = () => {
  const [posts, setPosts] = useState(postList)

  const handleClickPost = (postId) => {
    const newPosts = posts.map((post) => {
      if (post.id === postId) return { ...post, isClicked: !post.isClicked };
      return post;
    });

    setPosts(newPosts)
  };

  return (
    <div>
      <Owldemo1></Owldemo1>

      <section className="">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Phổ biến</h2>
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
      </section>
      
      <section className="">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Bán chạy</h2>
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
      </section>

    </div>
  )
}

export default Home;
