import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import LogIn from './LogIn';
import HomePage from './HomePage';
import Goals from './Goals/Goals'
import Weight from './Weight/Weight';
import Fitness from './Fitness/Fitness';
import Accountability from './Accountability/Accountability';
import Register from './Register'
import config from './config'

class App extends React.Component {
  
  state = {
    goals: [],
    weight: [],
    fitness: [],
    feedback: []
  }

  componentDidMount = () => {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/goals`),
      fetch(`${config.API_ENDPOINT}/weigh_in`),
      fetch(`${config.API_ENDPOINT}/fitness`),
      fetch(`${config.API_ENDPOINT}/feedback`),
    ])
    .then(([goalLog, weightLog, fitnessLog, feedbackLog]) => {
      if(!goalLog.ok) {
        return goalLog.json().then((e) => Promise.reject(e))
      }
      if(!weightLog.ok) {
        return weightLog.json().then((e) => Promise.reject(e))
      }
      if(!fitnessLog.ok) {
        return fitnessLog.json().then((e) => Promise.reject(e))
      }
      if(!feedbackLog.ok) {
        return feedbackLog.json().then((e) => Promise.reject(e))
      }
      return Promise.all([goalLog.json(), weightLog.json(), fitnessLog.json(), feedbackLog.json()])
    
    })
    .then(([goalResult, weightResult, fitnessResult, feedbackResult]) => {
      this.setState({
        goals: goalResult,
        weight: weightResult,
        fitness: fitnessResult,
        feedback: feedbackResult
      })
    })

    

  } 
  
  render() {
    return (
      <main className='App'>
        <Route exact path={'/'} component={LandingPage}/>
        <Route path={'/login'} component={LogIn}/>
        <Route path={'/homepage'} component={HomePage}/>
        <Route path={'/goals'} component={Goals}/>
        <Route path={'/weight'} component={Weight}/>
        <Route path={'/fitness'} component={Fitness}/>
        <Route path={'/accountability'} component={Accountability}/>
        <Route path={'/register'} component={Register}/>
      </main>
    );
  }
}

export default App;