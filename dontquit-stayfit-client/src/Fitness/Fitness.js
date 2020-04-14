import React from 'react'
import { Link } from 'react-router-dom'

class Fitness extends React.Component {
    
    state = {
        fitness: [
            {
                content: 'workout every day',
                date_created: new Date()
            }
        ]
    }

    addWorkout = e => {
        e.preventDefault()
        const fit = e.target.content.value;
        this.setState({
            fitness: [...this.state.fitness, {
                content: fit,
                date_created: new Date()
            }]
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
                        <form onSubmit={this.addWorkout}>
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