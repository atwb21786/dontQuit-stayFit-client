import React from 'react'
import { Link } from 'react-router-dom'

class Goals extends React.Component {
    state = {
        goals: [
            {
                content: 'this is my goal',
                date_created: new Date()
            }
        ]
    }

    addGoal = e => {
        e.preventDefault()
        const goal = e.target.content.value;
        this.setState({
            goals: [...this.state.goals, {
                content: goal,
                date_created: new Date()
            }]
        })
    }

    deleteGoal = index => {
        this.setState({
            goal: this.state.goals.splice(index, 1)
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
                        <form onSubmit={this.addGoal}>
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
                            <button onClick={e => this.deleteGoal(index)}>Delete</button>
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