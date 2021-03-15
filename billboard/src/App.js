import Home from './pages/home';
import Main from './pages/main';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.css';

function App() {
  return (
  <div>
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/main' component={Main}/>
      </Switch>
    </Router>
  </div>
  )
}

export default App;
