import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PokemonListComponent from './Components/PokemonList'
import './App.css';
import PokemonInfoComponent from './Components/PokemonInfo';

function App() {
  
  return (
    <Router>
      <Switch>
        <Route path="/:pokemon">
          <PokemonInfoComponent />
        </Route>
        <Route path="/" >
          <PokemonListComponent />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
