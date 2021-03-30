import Home from './pages/home';
import Main from './pages/main';
import Advertisements from './pages/advertisements.component';
import {BrowserRouter as Router,Route,Switch, Link} from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import DisplayAd from './pages/DisplayAd';

function App() {
  return (
    <Router>
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light float-right">
        <Link to="/" className="nav-link">Dashboard</Link>
        <Link to="/advertisements" className="nav-link">Advertisements</Link>
        <Link to= "/display" className="nav-link">DisplayAd</Link>
      </nav>
      <Switch>
        <Route exact path='/' component={Main} /> // was changed from home to main
        // <Route path='/main' component={Main}/>
        <Route path='/advertisements' component={ Advertisements } />
      </Switch>
      </div>
    </Router>
  )
}

export default App;
