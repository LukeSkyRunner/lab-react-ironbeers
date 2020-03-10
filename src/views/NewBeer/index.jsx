import React, { Component } from 'react'
import './style.scss'


import Header from '../../components/Header'

class NewBeer extends Component {

  render(){
    return (
    <div>
      <Header />
      <p>CREATE NEW BEER!</p>
    </div>
    );
    }
  }
export default NewBeer;
