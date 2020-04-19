import React from 'react'
import { Link } from 'react-router-dom'
import config from '../config'
import TokenService from '../Service/token-service'

class Weight extends React.Component {

    state = {
        weight: []
    }

    componentDidMount = () => {
        fetch(`${config.API_ENDPOINT}/weigh_in`)
        .then(weightLog => {
            if(!weightLog.ok) {
                return weightLog.json().then((e) => Promise.reject(e))
            }
            return weightLog.json()
        })
        .then(weightLog => {
            this.setState({
                weight: weightLog,
                date_created: new Date()
            })
        })
    }

    addWeight = e => {
        e.preventDefault();
        const item = e.target.content.value;
        fetch(`${config.API_ENDPOINT}/weigh_in`, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${TokenService.getAuthToken()}`

            },
            body: JSON.stringify({
                measurement: item,
                date_created: new Date()
            })
        })
        .then(res => res.json())
        .then(() => {
            this.setState({
                weight: [...this.state.weight, {
                    measurement: item,
                    date_created: new Date()
                }]
            })
            this.props.history.push('/weight')
        })
    }

    deleteWeight = index => {
        this.setState({
            wt: this.state.weight.splice(index, 1)
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
                    <h4>ENTER WEIGHT</h4>
                        <form onSubmit={this.addWeight}>
                            <label htmlFor="content"></label>
                            <input type="number" id="content" name="content"/>
                            <br/>
                            <button type='submit'>ENTER</button>
                            <button type='submit'>CANCEL</button>

                        </form>
                    
                    <h4>WEIGHT LOG:</h4>
                    <ul>
                        {this.state.weight.map((item, index) => (
                                
                                <li key={index}>
                                <button onClick={(e) => this.deleteWeight(index)}>Delete</button>
                                    {item.data}
                                    {item.date_created.toString()}
                                </li>
                            ))}
                    </ul>
                </main>
            </div>
        )
    }
}

export default Weight