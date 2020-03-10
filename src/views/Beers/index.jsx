import React, { Component } from 'react'
import './style.scss'
import Header from '../../components/Header'
import BeerItem from '../BeerItem'
import { list as listOfBeers} from '../../services/beer.js'


class Beers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: []
    };

  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    listOfBeers()
      .then(beers => {
        this.setState({
          beers
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="beer__list">
          {console.log(this.state.beers)}
          {this.state.beers.map(beer => (
            <BeerItem key={beer.id} {...beer} />
          ))}
        </div>
      </div>
    );
  }
}
export default Beers;
