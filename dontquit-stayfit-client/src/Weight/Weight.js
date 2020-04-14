import React from 'react'
import { Link } from 'react-router-dom'

class Weight extends React.Component {

    state = {
        weight: [
            {
                data: 164.4,
                date_created: new Date()
            }
        ]
    }

    addWeight = e => {
        e.preventDefault();
        const item = e.target.content.value;
        console.log(item)
        this.setState({
            weight: [...this.state.weight, {
                data: item,
                date_created: new Date()
            }]
        })
    }

    deleteWeight = index => {
        this.setState({
            goal: this.state.weight.splice(index, 1)
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