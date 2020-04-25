import React, { Component } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import LinearProgress from '@material-ui/core/LinearProgress';

const Battle = (props) => (
  <tr>
    <td>{props.battleName}</td>
    <td>{props.year}</td>
    <td>{props.region}</td>
    <td>{props.attacker_king}</td>
    <td>{props.defender_king}</td>
  </tr>
);
  

export default class BattlesList extends Component {
  constructor(props) {
    super(props);
    this.state = { battles: [] , dummy : ['mohit'], isLoading: true};
  }

  componentDidMount() {
    axios.get('/list')
      .then(response => {
        this.setState({ battles: response.data, isLoading: false });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  listOfBattles() {
    return this.state.battles.map((battle, it) => {
        const { name , year, region, attacker_king, defender_king } = battle;  
        return (
            <Battle 
            battleName={name} 
            year={year}
            region={region}
            attacker_king={attacker_king}
            defender_king={defender_king}
            key = {it}/>
            );
    })
  }
  ValueChange = (param1, param2) =>{
      if(param2){
         const modifiedArray = this.state.battles.map((item) =>{
            if(item.attacker_king === param2 || item.defender_king === param2){
                return item;
            }
         }).filter(item=>item); 
         this.setState({battles: modifiedArray});
      }else{
        axios.get('/list')
        .then(response => {
          this.setState({ battles: response.data, isLoading: false });
        })
        .catch((error) => {
            this.setState({ isLoading: false });
          console.log(error);
        })
      }
  };

  autocomplete(){
      if(!this.state.isLoading){
       const attackerOptions = this.state.battles.map(({ attacker_king }) => attacker_king).filter(item=>item);
       const defenderOptions = this.state.battles.map(({ defender_king }) => defender_king).filter(item=>item);
       const allOptions = [...attackerOptions, ...defenderOptions];
       const uniqueNames = [...new Set(allOptions)];
        return(
            <div className="form-group"> 
                <Autocomplete
                    id="disabled-options-demo"
                    options={uniqueNames}
                    onChange={this.ValueChange}
                    style={{ width: 500 }}
                    renderInput={(params) => (
                    <TextField {...params} label="Search by attacker king or defender king" variant="outlined" />
                    )}
                    />
                </div>);
    }
  }

  render() {
      if(this.state.isLoading){
        return (
            <div>
        <LinearProgress />
        <LinearProgress color="secondary" />
        </div>
        )

      }
    return (
      <div>
         { this.autocomplete() }
        <h3>List Of All Battles</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Battle Name</th>
              <th>Year</th>
              <th>Region</th>
              <th>Attacker King</th>
              <th>Defender King</th>
            </tr>
          </thead>
          <tbody>
            { this.listOfBattles() }
          </tbody>
        </table>
      </div>
    )
  }
}