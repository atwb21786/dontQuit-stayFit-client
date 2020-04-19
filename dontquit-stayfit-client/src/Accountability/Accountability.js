import React from 'react'
import { Link } from 'react-router-dom'
import config from '../config'
import TokenService from '../Service/token-service'

class Accountability extends React.Component {
    state = {
        feedback: []
    }

    componentDidMount = () => {
        fetch(`${config.API_ENDPOINT}/feedback`)
        .then(feedbackLog => {
            if(!feedbackLog.ok) {
                return feedbackLog.json().then((e) => Promise.reject(e))
            }
            return feedbackLog.json()
        })
        .then(feedbackLog => {
            this.setState({
                feedback: feedbackLog,
                date_created: new Date()
            })
        })
    }

    addFeedback = e => {
        e.preventDefault();
        const fb = e.target.content.value;
        fetch(`${config.API_ENDPOINT}/feedback`, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${TokenService.getAuthToken()}`

            },
            body: JSON.stringify({
                content: fb,
                date_created: new Date()
            })
        })
        .then(res => res.json())
        .then(() => {
            this.setState({
                feedback: [...this.state.feedback, {
                    content: fb,
                    date_created: new Date()
                }]
            })
        })
        
    }

    deleteFeedback = index => {
        this.setState({
            fb: this.state.feedback.splice(index, 1)
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