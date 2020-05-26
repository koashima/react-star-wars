import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import getAllStarShips from './services/sw-api';
import StarshipPage from './pages/StarshipPage'



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
      <div className="App ui container">
        <header className="ui huge header inverted segment">STARWARS</header>
        <Router>          
          <Switch>
            <Route exact path='/' render={() =>
              <section className='ui container grid centered'>
                {this.state.starships.map( (starship, idx) => 
                  <Link 
                    to={`starships/${idx}`} 
                    key={starship.name} 
                    className="massive ui button three wide column"
                  >
                    {starship.name}
                  </Link>
                )}
              </section>
            }/>

          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
