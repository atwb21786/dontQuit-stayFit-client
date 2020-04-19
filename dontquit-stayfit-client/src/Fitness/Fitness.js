import React from 'react'
import { Link } from 'react-router-dom'
import config from '../config'
import TokenService from '../Service/token-service'

class Fitness extends React.Component {
    
    state = {
        fitness: []
    }

    componentDidMount = () => {
        fetch(`${config.API_ENDPOINT}/fitness`)
        .then(fitnessLog => {
            if(!fitnessLog.ok) {
                return fitnessLog.json().then((e) => Promise.reject(e))
            }
            return fitnessLog.json()
        })
        .then(fitnessLog => {
            this.setState({
                fitness: fitnessLog,
                date_created: new Date()
            })
        })
    }

    addWorkoutForm = e => {
        e.preventDefault()
        const fit = e.target.content.value;
        fetch(`${config.API_ENDPOINT}/fitness`, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${TokenService.getAuthToken()}`

            },
            body: JSON.stringify({
                content: fit,
                date_created: new Date()
            })
        })
        .then(res => res.json())
        .then(() => {
            this.setState({
                fitness: [...this.state.fitness, {
                    content: fit,
                    date_created: new Date()
                }]
            })
            this.props.history.push('/fitness')
        })
    }

    deleteWorkout = index => {
        this.setState({
            goal: this.state.fitness.splice(index, 1)
        })

    }
    
    render() {
        return(
            <div>
                <nav>
                    <Link to='/homepage' >HOME</Link>
                    <Link to='/' >LOGOUT</Link>
                </nav>
                <header>
                    <h2>DON'T QUIT STAY FIT!</h2>
                </header>
                <main>
                    <h4>ENTER WORKOUT</h4>
                        <form onSubmit={this.addWorkoutForm}>
                            <label htmlFor="fitness"></label>
                            <textarea name='content' required></textarea>
                            <br/>
                            <button type='submit'>ENTER</button>
                            <button type='submit'>CANCEL</button>
                        </form>
                    <br/>
                    <h4>FITNESS LOG:</h4>
                    <ul>
                        {this.state.fitness.map((item, index) => (
                                
                                <li key={index}>
                                <button onClick={(e) => this.deleteWorkout(index)}>Delete</button>
                                    {item.content}
                                    {item.date_created.toString()}
                                </li>
                            ))}
                    </ul>
                </main>
            </div>
        )
    }
}

export default Fitness