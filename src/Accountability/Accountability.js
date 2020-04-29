import React from 'react'
import './Accountability.css'
import config from '../config'
import TokenService from '../Service/token-service'

class Accountability extends React.Component {
    state = {
        feedback: [],
        editFeedback: null
    }

    componentDidMount = () => {
        fetch(`${config.API_ENDPOINT}/feedback`, {
            headers: {
                'Authorization': `Bearer ${TokenService.getAuthToken()}`
            },
        })
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
        .then((fb) => {
            this.setState({
                feedback: [...this.state.feedback, fb]
            })
            this.props.history.push('/accountability')
        })
        e.target.reset()        
    }

    deleteFeedback = (e, index) => {
        e.preventDefault()
        console.log(index)
        fetch(`${config.API_ENDPOINT}/feedback/${index}`, {
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
                feedback: this.state.feedback.filter(fb => fb.id !== index)
            })
        })   
    }

    updateData = (e) => {
        e.preventDefault()
        const data = { 
            content: e.target.content.value
        }
        fetch(`${config.API_ENDPOINT}/feedback/${this.state.editFeedback}`, {
            method: 'PATCH', 
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(data)
        })
        .then((fb) => {
            this.setState({
                feedback: this.state.feedback.map(fb => { 
                    if(fb.id === this.state.editFeedback) {
                        fb.content = data.content
                    }
                    return fb
                }), 
                editFeedback: null
            })
            this.props.history.push('/accountability')
        })
    }

    openEdit = (id) => {
        this.setState({
            editFeedback: id
        })
    }

    cancelAddedFeedback = () => {
        this.setState({
            editFeedback: null
        })
    }

    handleClickCancel = () => {
        this.props.history.push('/homepage')
    }

    
    render() {
        return(
            <div>
                <main>
                    <h2>REFLECT ON TODAY, PLAN FOR TOMORROW</h2>
                        <form onSubmit={this.addFeedback}>
                            <label htmlFor="accountability"></label>
                            <textarea className="feedback" name='content' rows="8" cols="25" required></textarea>
                            <br/>
                            <button type='submit'>ENTER</button>
                            <button type='submit' onClick={this.handleClickCancel}>CANCEL</button>
                        </form>
                    <br/>
                    <h4 className="feedbackLog" >ACCOUNTABILITY LOG:</h4>
                    <ul>
                        {this.state.feedback.map((item, index) => (
                                
                                <li key={index}>
                                <button onClick={(e) => this.deleteFeedback(e, item.id)}>Delete</button>
                                <button onClick={() => this.openEdit(item.id)}>Update</button>
                                {this.state.editFeedback === item.id ? 
                                (<form onSubmit={this.updateData}>
                                    <label htmlFor="accountability"></label>
                                    <textarea name='content' required></textarea>
                                    <br/>
                                    <button type='submit'>ENTER</button>
                                    <button type='submit' onClick={this.cancelAddedFeedback}>CANCEL</button>
                                </form>) : "" }

                                    {new Date(item.date_created).toLocaleTimeString("en-US") + " "}
                                    {new Date(item.date_created).toLocaleTimeString("en-US") + ": "}
                                    {item.content}
                                    
                                </li>
                            ))}
                    </ul>
                </main>
            </div>
        )
    }
}

export default Accountability