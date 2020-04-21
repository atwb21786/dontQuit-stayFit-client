import React from 'react';
import LandingPage from './LandingPage';
import Header from './Header/Header'
import LogIn from './LogIn';
import HomePage from './HomePage';
import Goals from './Goals/Goals'
import Weight from './Weight/Weight';
import Fitness from './Fitness/Fitness';
import Accountability from './Accountability/Accountability';
import Register from './Register'
import { Route } from 'react-router-dom'
import PublicRoute from './Utils/PublicRoute'
import PrivateRoute from './Utils/PrivateRoute'
// import config from './config'

class App extends React.Component {

  render() {
    return (
      <main className='App'>
        <Route exact path={'/'} component={LandingPage}/>
        <Route path={'/homepage'} component={Header}/>
        <Route path={'/register'} component={Register}/>
        <Route path={'/login'} component={LogIn}/>
        <Route path={'/homepage'} component={HomePage}/>
        <Route path={'/goals'} component={Goals}/>
        <Route path={'/weight'} component={Weight}/>
        <Route path={'/fitness'} component={Fitness}/>
        <Route path={'/accountability'} component={Accountability}/>
      </main>
    );
  }
}

export default App;