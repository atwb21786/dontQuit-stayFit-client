import React from 'react'
import { Link } from 'react-router-dom'

class Weight extends React.Component {
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
                        <form action='#'></form>
                        <button type='submit'>ENTER</button>
                        <button type='submit'>CANCEL</button>
                    <br/>
                    <h4>WEIGHT LOG:</h4>
                </main>
            </div>
        )
    }
}

export default Weight