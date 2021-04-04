import React, { useState } from 'react';


import './style.css';

const List = (props) => {
  const [newPost, setnewPost] = useState('');
  const { post: { id, img_url, content, isClicked, price }, onClickPost } = props;


  return (
    <div className="col-lg-3">
      <div className="Post">
        <div className="Post__img">
          <img className="img" src={img_url} />
        </div>
        <div className="Post__content">
          <h5>{content}</h5>
          <p>{price} đ</p>
        </div>
      </div>
    </div>
  )

}
export default List;
