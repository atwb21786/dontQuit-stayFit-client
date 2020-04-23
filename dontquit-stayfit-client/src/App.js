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
import PublicRoute from './Utils/PublicRoute'
import PrivateRoute from './Utils/PrivateRoute'
// import config from './config'

class App extends React.Component {

  render() {
    return (
      <div>
        <header>
          <PrivateRoute path={['/homepage', '/goals', '/weight', '/fitness', '/accountability']}
            component={Header}/>
        </header>
        <main className='App'>
          <PublicRoute exact path={'/'} component={LandingPage}/>
          <PublicRoute path={'/register'} component={Register}/>
          <PublicRoute path={'/login'} component={LogIn}/>
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