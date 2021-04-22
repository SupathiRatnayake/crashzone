import Home from './pages/home';
import Main from './pages/main';
import Advertisements from './pages/advertisements.component';
import {BrowserRouter as Router,Route,Switch, Link} from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import DisplayAd from './pages/DisplayAd';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/about';
import Team from './pages/team';

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path='/' component={Main} /> 
        <Route path='/main' component={Main}/>
        <Route path='/advertisements' component={ Advertisements } />
        <Route path='/display' component = { DisplayAd } />
        <Route path='/about' component = { About}/>
        <Route path='/team' component = { Team }/>
      </Switch>
      <Footer/>
    </Router>
  )
}

export default App;
