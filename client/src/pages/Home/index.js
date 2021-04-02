import React, { Component } from 'react';

import './style.css';
import Owldemo1 from '../../components/Owldemo1';
import List from '../../components/List';

class Home extends Component {

  render() {
    return (
      <div>
        <Owldemo1></Owldemo1>
        <div className="container">
          <List></List>
        </div>
        <h1>thân</h1>
      </div>

    )
  }

}

export default Home;
