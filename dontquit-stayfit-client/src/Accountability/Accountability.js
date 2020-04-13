import React from 'react'
import { Link } from 'react-router-dom'

class Accountability extends React.Component {
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
                        <form action='#'></form>
                        <button type='submit'>ENTER</button>
                        <button type='submit'>CANCEL</button>
                    <br/>
                    <h4>ACCOUNTABILITY LOG:</h4>
                </main>
            </div>
        )
    }
}

export default Accountability