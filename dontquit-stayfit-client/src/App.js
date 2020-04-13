import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import LogIn from './LogIn';
import HomePage from './HomePage';
import Goals from './Goals/Goals'
import Weight from './Weight/Weight';
import Fitness from './Fitness/Fitness';
import Accountability from './Accountability/Accountability';

class App extends React.Component {
  render() {
    return (
      <main className='App'>
        <Route exact path='/' component={LandingPage}/>
        <Route path='/login' component={LogIn}/>
        <Route path='/homepage' component={HomePage}/>
        <Route path={'/goals'} component={Goals}/>
        <Route path={'/weight'} component={Weight}/>
        <Route path={'/fitness'} component={Fitness}/>
        <Route path={'/accountability'} component={Accountability}/>
      </main>
    );
  }
}

export default App;