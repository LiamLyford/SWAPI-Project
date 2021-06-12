import './App.css';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import FilmDetails from './pages/FilmDetails';
import CharacterDetails from './pages/CharacterDetails'
import Error from './pages/Error';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/film/:id" component={FilmDetails} />
          <Route path="/character/:id" component={CharacterDetails} />
          <Route component={Error} />
        </Switch>
      {/* </header> */}
    </div>
  );
}

export default App;
