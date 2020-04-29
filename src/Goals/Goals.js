import React from 'react'
import './Goals.css'
import config from '../config'
import TokenService from '../Service/token-service'

class Goals extends React.Component {
    
    state = {
        goals: [],
        editGoal: null
    }

    componentDidMount = () => {
        fetch(`${config.API_ENDPOINT}/goals`, {
            headers: {
                'Authorization': `Bearer ${TokenService.getAuthToken()}`
            },
        })
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
        e.target.reset()
    }

    

    deleteGoal = (e, index) => {
        e.preventDefault()
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

    updateData = (e) => {
        e.preventDefault()
        const data = { 
            content: e.target.content.value
        }
        fetch(`${config.API_ENDPOINT}/goals/${this.state.editGoal}`, {
            method: 'PATCH', 
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(data)
        })
        .then((goal) => {
            this.setState({
                goals: this.state.goals.map(goal => { 
                    if(goal.id === this.state.editGoal) {
                        goal.content = data.content
                    }
                    return goal
                }), 
                editGoal: null
            })
            this.props.history.push('/goals')
        })
    }

    openEdit = (id) => {
        this.setState({
            editGoal: id
        })
    }

    cancelAddedGoal = () => {
        this.setState({
            editGoal: null
        })
    }

    handleClickCancel = () => {
        this.props.history.push('/homepage')
    }

    render() {
        return(
            <div>
                <main>
                    <h2>WHAT ARE YOUR GOALS?</h2>
                    <form onSubmit={this.handleAddGoal}>
                        <label htmlFor='goals'></label>
                        <textarea name="content" className="goals" rows="8" cols="25" required></textarea>
                        <br/>
                        <button type='submit' >ENTER</button>
                        <button type='submit' onClick={this.handleClickCancel}>CANCEL</button>
                    </form>
                    <br/>
                    <h4 className="goalsLog">GOALS:</h4>
                    <ul>
                        {this.state.goals.map((goal, index) => (
                            
                            <li key={index}>
                            <button onClick={(e) => this.deleteGoal(e, goal.id)}>Delete</button>
                            <button onClick={() => this.openEdit(goal.id)}>Update</button>
                            {this.state.editGoal === goal.id ? 
                            (<form onSubmit={this.updateData} >
                                <label htmlFor='goals'></label>
                                <textarea name="content" required></textarea>
                                <br/>
                                <button type='submit'>ENTER</button>
                                <button type='submit' onClick={this.cancelAddedGoal}>CANCEL</button>
                            </form>) : "" }
                                
                                {new Date(goal.date_created).toLocaleDateString("en-US") + " "}
                                {new Date(goal.date_created).toLocaleTimeString("en-US") + ": "}
                                {goal.content}
                                

                            </li>
                        ))}
                    </ul>
                </main>
            </div>
        )
    }
}

export default Goals