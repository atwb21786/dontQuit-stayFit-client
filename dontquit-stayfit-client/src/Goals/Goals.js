import React from 'react'
import { Link } from 'react-router-dom'
import config from '../config'
import TokenService from '../Service/token-service'

class Goals extends React.Component {
    
    state = {
        goals: []
    }

    componentDidMount = () => {
        fetch(`${config.API_ENDPOINT}/goals`)
        .then(goalLog => {
            if(!goalLog.ok) {
                return goalLog.json().then((e) => Promise.reject(e))
            }
            return goalLog.json()
        })
        .then(goalLog => {
            this.setState({
                goals: goalLog,
                date_created: new Date()
            })
        })
    }

    
    handleAddGoal = e => {
        e.preventDefault()
        const goal = e.target.content.value;
        fetch(`${config.API_ENDPOINT}/goals`, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${TokenService.getAuthToken()}`

            },
            body: JSON.stringify({
                content: goal,
                date_created: new Date()
            })
        })
        .then(res => res.json())
        .then((goal) => {
            this.setState({
                goals: [...this.state.goals, goal]
            })
            this.props.history.push('/goals')
        })
    }

    

    deleteGoal = (e, index) => {
        e.preventDefault()
        console.log(index)
        fetch(`${config.API_ENDPOINT}/goals/${index}`, {
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
                goals: this.state.goals.filter(goal => goal.id !== index)
            })
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
                    <h4>WHAT ARE YOUR GOALS?</h4>
                        <form onSubmit={this.handleAddGoal}>
                            <label htmlFor='goals'></label>
                            <textarea name="content"></textarea>
                            <br/>
                            <button type='submit'>ENTER</button>
                            <button type='submit'>CANCEL</button>
                        </form>
                        
                    <br/>
                    <h4>GOALS:</h4>
                    <ul>
                        {this.state.goals.map((goal, index) => (
                            
                            <li key={index}>
                            <button onClick={(e) => this.deleteGoal(e, goal.id)}>Delete</button>
                                {goal.content}
                                {goal.date_created.toString()}

                            </li>
                        ))}
                    </ul>
                </main>
            </div>
        )
    }
}

export default Goals