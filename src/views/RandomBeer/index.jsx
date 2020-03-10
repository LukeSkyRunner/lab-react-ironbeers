import React, {   Component } from 'react'
import './style.scss'


import Header from '../../components/Header'

class RandomBeer extends Component {

render(){
    return (
      <div>
        <Header />
         <p>RANDOM BEER!</p>
      </div>
    ); 
  }
  }

export default RandomBeer;
