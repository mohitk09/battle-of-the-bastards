import React, { Component } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const Battle = (props) => (
  <tr>
    <td>{props.battleName}</td>
    <td>{props.year}</td>
    <td>{props.region}</td>
    <td>{props.attacker_king}</td>
    <td>{props.defender_king}</td>
  </tr>
)

export default class BattlesList extends Component {
  constructor(props) {
    super(props);
    this.state = { battles: [] };
  }

  componentDidMount() {
    axios.get('/list')
      .then(response => {
        this.setState({ battles: response.data })
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

  render() {
      console.log('this.state', this.state);
    return (
      <div>
        <div className="form-group"> 
          <Autocomplete
            id="disabled-options-demo"
            options={this.state.battles.name}
            style={{ width: 500 }}
            renderInput={(params) => (
            <TextField {...params} label="Search by attacker king or defender king" variant="outlined" />
        )}
/>
        </div>
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