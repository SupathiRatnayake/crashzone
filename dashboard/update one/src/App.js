import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Selection from './pages/selection';
import Ads from './pages/Ads';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route path='/selection' component={Selection}/>
          <Route path='/dashboard' component={Dashboard}/>
          <Route path='/ads' component={Ads}/>
        </Switch>
      </Router>
    </div>

  );
}

export default App;
