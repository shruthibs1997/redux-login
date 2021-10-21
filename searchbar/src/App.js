
import { Route, Switch } from 'react-router';
import './App.css';
import Search from './components/Search';
import Single from './components/Single';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Search/>
        </Route>
        <Route path="/list/:id">
          <Single/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
