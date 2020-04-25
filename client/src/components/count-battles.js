import React, { Component } from 'react';
import axios from 'axios';

export default class BattlesList extends Component {
  constructor(props) {
    super(props);
    this.state = { totalBattles: ''};
  }

  componentDidMount() {
    axios.get('/count')
      .then(response => {
          console.log('response', response);
        this.setState({ totalBattles: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }



  render() {
    return (
        <div className={countClass}>
          {this.state.totalBattles}  
        </div>
    )
  }
}