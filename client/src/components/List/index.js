import React, { useState } from 'react';

import './style.css';

const List = (props) => {
  const [newPost, setnewPost] = useState('');
  // const { post: { id, author, content, isClicked, comments }, onClickPost } = props;


  const renderPost = () => {
    return (
      <div className="col-lg-4">
        <div className="Post">
          <div className="Post__img">
            <img className="img" src={'assets/img/product-1.jpg'} />
          </div>
          <div className="Post__content">
            <h5>Những Quy Luật Của Bản Chất Con Người</h5>
            <p>187.700 đ</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="row">
      {renderPost()}
    </div>
  )

}
export default List;
