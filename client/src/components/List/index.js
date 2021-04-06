import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './style.css';

const List = (props) => {
  const [newPost, setnewPost] = useState('');
  const { post: { id, img_url, content, isClicked, price }, onClickPost } = props;


  return (
    <div className="col-lg-3">
      <div className="Post">
        <div className="Post__img">
          <Link to={'/detail'} className="item-sub-menu"><img className="img" src={img_url} /></Link>
        </div>
        <div className="Post__content">
          <h5><Link to={'/detail'} className="item-sub-menu">{content}</Link></h5>
          <p>{price} đ</p>
          <div className="rating">
            <input type="radio" name="rating" value="5" id="5" />
            <label for="5">☆</label>
            <input type="radio" name="rating" value="4" id="4" />
            <label for="4">☆</label>
            <input type="radio" name="rating" value="3" id="3" />
            <label for="3">☆</label>
            <input type="radio" name="rating" value="2" id="2" />
            <label for="2">☆</label>
            <input type="radio" name="rating" value="1" id="1" />
            <label for="1">☆</label>
          </div>
        </div>
      </div>
    </div>
  )

}

export default List;
