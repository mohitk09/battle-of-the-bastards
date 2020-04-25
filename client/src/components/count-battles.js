import React, { Component } from 'react';
import axios from 'axios';
import LinearProgress from '@material-ui/core/LinearProgress';

export default class BattlesList extends Component {
  constructor(props) {
    super(props);
    this.state = { totalBattles: '', isLoading: true};
  }

  componentDidMount() {
    axios.get('/count').then(response => {
        this.setState({ totalBattles: response.data, isLoading: false })
      }).catch((error) => {
        this.setState({isLoading: false});
        console.log(error);
      })
  }



  render() {
    if(this.state.isLoading){
      return(    <div>
        <LinearProgress />
        <LinearProgress color="secondary" />
        </div>);
    }
    return (
        <div>
          {this.state.totalBattles}  
        </div>
    )
  }
}