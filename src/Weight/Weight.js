import React from 'react'
import './Weight.css'
import config from '../config'
import TokenService from '../Service/token-service'

class Weight extends React.Component {

    state = {
        weight: [],
        editWeight: null
    }

    componentDidMount = () => {
        fetch(`${config.API_ENDPOINT}/weigh_in`, {
            headers: {
                'Authorization': `Bearer ${TokenService.getAuthToken()}`
            },
        })
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

    handleAddWeight = e => {
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
        .then((weights) => {
            this.setState({
                weight: [...this.state.weight, weights]
            })
            this.props.history.push('/weight')
        })
        e.target.reset()
    }

    deleteWeight = (e, index) => {
        e.preventDefault()
        console.log(index)
        fetch(`${config.API_ENDPOINT}/weigh_in/${index}`, {
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
                weight: this.state.weight.filter(wt => wt.id !== index)
            })
        })   
    }

    updateData = (e) => {
        e.preventDefault()
        const data = { 
            measurement: e.target.content.value
        }
        fetch(`${config.API_ENDPOINT}/weigh_in/${this.state.editWeight}`, {
            method: 'PATCH', 
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(data)
        })
        .then((wt) => {
            this.setState({
                weight: this.state.weight.map(wt => { 
                    if(wt.id === this.state.editWeight) {
                        wt.measurement = data.measurement
                    }
                    console.log(wt)
                    return wt
                }), 
                editWeight: null
            })
            this.props.history.push('/weight')
        })
    }

    openEdit = (id) => {
        this.setState({
            editWeight: id
        })
    }

    cancelAddedWeight = () => {
        this.setState({
            editWeight: null
        })
    }

    handleClickCancel = () => {
        this.props.history.push('/homepage')
    }



    render() {
        return(
            <div>
                <main>
                    <h2>ENTER WEIGHT</h2>
                        <form onSubmit={this.handleAddWeight}>
                            <label htmlFor="content"></label>
                            <input className="weight" type="number" step="0.1" id="content" name="content" required/>
                            <br/>
                            <button type='submit'>ENTER</button>
                            <button type='submit' onClick={this.handleClickCancel}>CANCEL</button>
                        </form>
                    
                    <h4 className="weightLog" >WEIGHT LOG:</h4>
                    <ul>
                        {this.state.weight.map((item, index) => (
                                
                                <li key={index}>
                                <button onClick={(e) => this.deleteWeight(e, item.id)}>Delete</button>
                                <button onClick={() => this.openEdit(item.id)}>Update</button>
                                {this.state.editWeight === item.id ? 
                                (<form onSubmit={this.updateData}>
                                    <label htmlFor="content"></label>
                                    <input type="number" step="0.1" id="content" name="content" required/>
                                    <br/>
                                    <button type='submit'>ENTER</button>
                                    <button type='submit' onClick={this.cancelAddedWeight}>CANCEL</button>
                                </form>) : "" }

                                    {new Date(item.date_created).toLocaleDateString("en-US") + " "}
                                    {new Date(item.date_created).toLocaleTimeString("en-US") + ": "}
                                    {item.measurement + " lbs"}
                                    

                                </li>
                            ))}
                    </ul>
                </main>
            </div>
        )
    }
}

export default Weight