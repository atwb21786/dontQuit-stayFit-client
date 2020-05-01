import React from 'react';
import './App.css';
import LandingPage from './LandingPage';
import Header from './Header/Header'
import Login from './Login';
import HomePage from './HomePage';
import Goals from './Goals/Goals'
import Weight from './Weight/Weight';
import Fitness from './Fitness/Fitness';
import Accountability from './Accountability/Accountability';
import Register from './Register'
import PublicRoute from './Utils/PublicRoute'
import PrivateRoute from './Utils/PrivateRoute'
import { Route } from 'react-router-dom'
// import config from './config'

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header>
          <PrivateRoute path={['/homepage', '/goals', '/weight', '/fitness', '/accountability']}
            component={Header}/>
        </header>
        <main className='App'>
          <Route exact path={'/'} component={LandingPage}/>
          <PublicRoute path={'/register'} component={Register}/>
          <PublicRoute path={'/login'} component={Login}/>
          <PrivateRoute path={'/homepage'} component={HomePage}/>
          <PrivateRoute path={'/goals'} component={Goals}/>
          <PrivateRoute path={'/weight'} component={Weight}/>
          <PrivateRoute path={'/fitness'} component={Fitness}/>
          <PrivateRoute path={'/accountability'} component={Accountability}/>
        </main>
      </div>
    );
  }
}

export default App;