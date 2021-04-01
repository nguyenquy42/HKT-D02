import React, { Component } from 'react';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './style.css';

class Owldemo1 extends Component {
  render() {
    return (
      <div>
        <div class='container-fluid' >
          <OwlCarousel items={1}
            className="owl-theme"
            loop
            margin={8} >
            <div ><img className="img" src={'assets/img/banner-1.png'} /></div>
            <div><img className="img" src={'assets/img/banner-2.png'} /></div>
            <div><img className="img" src={'assets/img/banner-3.png'} /></div>
          </OwlCarousel>
        </div>
      </div>
    )
  }
}

export default Owldemo1;