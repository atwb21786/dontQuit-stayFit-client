import React from 'react'
import { Link } from 'react-router-dom'

class Goals extends React.Component {
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
                        <form action='#'></form>
                        <button type='submit'>ENTER</button>
                        <button type='submit'>CANCEL</button>
                    <br/>
                    <h4>GOALS:</h4>
                </main>
            </div>
        )
    }
}

export default Goals