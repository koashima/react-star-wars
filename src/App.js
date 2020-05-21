import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import getAllStarShips from './services/sw-api';



class App extends React.Component {
  state = { 
    starships: [],
  }

  async componentDidMount() { 
    const allStarShips = await getAllStarShips()
    this.setState({
      starships: allStarShips
    })
  }

  getStarships() {
    this.state.starships.map( (starship) => { 

    })
  }

  render () { 
    return (
      <div className="App">
        <header className="ui huge header inverted segment">STARWARS</header>
      </div>
    );
  }
 
}

export default App;
