import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Battle = (props) => (
  <tr>
    <td>{props.battleName}</td>
    <td>{props.location}</td>
    <td>{props.year}</td>
    <td>{props.region}</td>
    <td>{props.battleName}</td>
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
        const { name , year, region, location, battle_type } = battle;  
        return (<Battle 
            battleName={battle.name} 
            year={year}
            region={region}
            location={location}
            battleType={battle_type}
            key = {it}/>);
    })
  }

  render() {
    return (
      <div>
        <h3>List Of All Battles</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Battle Name</th>
              <th> Location</th>
              <th> Year</th>
              <th>Region</th>
              <th> Battle Type</th>
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