import React from 'react'
import { Link } from 'react-router-dom'

class Accountability extends React.Component {
    state = {
        feedback: [
            {
                content: 'I wish to feel great every day!',
                date_created: new Date()
            }
        ]
    }

    addFeedback = e => {
        e.preventDefault();
        const item = e.target.content.value;
        this.setState({
            feedback: [...this.state.feedback, {
                content: item,
                date_created: new Date()
            }]
        })
    }

    deleteFeedback = index => {
        this.setState({
            goal: this.state.feedback.splice(index, 1)
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
                    <h4>REFLECT ON TODAY, PLAN FOR TOMORROW</h4>
                        <form onSubmit={this.addFeedback}>
                            <label htmlFor="feedback"></label>
                            <textarea name='content'></textarea>
                            <br/>
                            <button type='submit'>ENTER</button>
                            <button type='submit'>CANCEL</button>
                        </form>
                    <br/>
                    <h4>ACCOUNTABILITY LOG:</h4>
                    <ul>
                        {this.state.feedback.map((item, index) => (
                                
                                <li key={index}>
                                <button onClick={(e) => this.deleteFeedback(index)}>Delete</button>
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

export default Accountability