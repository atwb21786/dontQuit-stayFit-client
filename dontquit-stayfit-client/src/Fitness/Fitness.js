import React from 'react'
import { Link } from 'react-router-dom'
import config from '../config'
import TokenService from '../Service/token-service'

class Fitness extends React.Component {
    
    state = {
        fitness: [],
        editFitness: null
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
        .then((workout) => {
            this.setState({
                fitness: [...this.state.fitness, workout]
            })
            this.props.history.push('/fitness')
        })
        e.target.reset()
    }

    deleteWorkout = (e, index) => {
        e.preventDefault()
        console.log(index)
        fetch(`${config.API_ENDPOINT}/fitness/${index}`, {
            method: 'DELETE', 
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${TokenService.getAuthToken()}`
            }
        })
        .then(res => { 
            if (!res.ok) 
                return res.json().then(e => Promise.reject(e))
        })
        .then(() => {
            this.setState({
                fitness: this.state.fitness.filter(fit => fit.id !== index)
            })
        })   
    }

    updateData = (e) => {
        e.preventDefault()
        const data = { 
            content: e.target.content.value
        }
        fetch(`${config.API_ENDPOINT}/fitness/${this.state.editFitness}`, {
            method: 'PATCH', 
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(data)
        })
        .then((goal) => {
            this.setState({
                fitness: this.state.fitness.map(workout => { 
                    if(workout.id === this.state.editFitness) {
                        workout.content = data.content
                    }
                    return workout
                }), 
                editFitness: null
            })
            this.props.history.push('/fitness')
        })
    }

    openEdit = (id) => {
        this.setState({
            editFitness: id
        })
    }

    cancelAddedWorkout = () => {
        this.setState({
            editFitness: null
        })
    }

    handleClickCancel = () => {
        this.props.history.push('/homepage')
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
                            <button type='submit' onClick={this.handleClickCancel}>CANCEL</button>
                        </form>
                    <br/>
                    <h4>FITNESS LOG:</h4>
                    <ul>
                        {this.state.fitness.map((item, index) => (
                                
                                <li key={index}>
                                <button onClick={(e) => this.deleteWorkout(e, item.id)}>Delete</button>
                                <button onClick={() => this.openEdit(item.id)}>Update</button>
                                {this.state.editFitness === item.id ? 
                                (<form onSubmit={this.updateData}>
                                    <label htmlFor="fitness"></label>
                                    <textarea name='content' required></textarea>
                                    <br/>
                                    <button type='submit'>ENTER</button>
                                    <button type='submit' onClick={this.cancelAddedWorkout}>CANCEL</button>
                                </form>) : "" }

                                    {item.content}
                                    {item.date_created}
                                </li>
                            ))}
                    </ul>
                </main>
            </div>
        )
    }
}

export default Fitness