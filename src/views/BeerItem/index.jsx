import React, { Component, Fragment } from 'react';
import './style.scss';

import { load as loadSingleBeer } from '../../services/beer.js';

class BeerItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: null
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const id = this.props._id;
    loadSingleBeer(id)
      .then(beer => {
        this.setState({ beer });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { beer } = this.state;

    return (
      <div className="beer__single">
        {(beer && (
          <Fragment>
            <figure className="beer__single__image">
              <img src={beer.image} alt={beer.name} />
            </figure>
            <div className="beer__single__description">
              <h1>{beer.name}</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae illum quod sequi
                suscipit possimus nesciunt hic minus inventore distinctio iure!
              </p>
            </div>
          </Fragment>
        )) ||
          ''}
      </div>
    );
  }
}

export default BeerItem;