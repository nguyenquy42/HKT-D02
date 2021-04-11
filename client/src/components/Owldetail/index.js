import React, { Component } from 'react';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './style.css';

class Owldetail extends Component {
  render() {
    return (
      <div>
        <div className='container-fluid' >
          <OwlCarousel items={1}
            className="owl-theme"
            loop
            dots={false}
            margin={10} >
            <div ><img className="img" src={'assets/img/detail/1.jpg'} /></div>
            <div ><img className="img" src={'assets/img/detail/2.jpg'} /></div>
            <div ><img className="img" src={'assets/img/detail/3.jpg'} /></div>
            <div ><img className="img" src={'assets/img/detail/4.jpg'} /></div>
          </OwlCarousel>
        </div>
      </div>
    )
  }
}

export default Owldetail;