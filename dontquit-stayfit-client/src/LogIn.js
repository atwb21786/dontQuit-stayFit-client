import React from 'react'
import { Link } from 'react-router-dom'

class LogIn extends React.Component {
    
    render() {
        return (
            <div>
                <header>
                    <h2>DON'T QUIT STAY FIT!</h2>
                </header>
                <main>
                    <form>
                    <fieldset>
                        <label htmlFor="username">USERNAME:</label>
                        <input type="text" id="username" name="username" required/>
                        <br/>
                        <label htmlFor="pwd">PASSWORD:</label>
                        <input type="password" id="pwd" name="pwd" required/>
                        <br/>
                        {/* <button type="submit">SUBMIT</button> */}
                        <Link to='/homepage'>SUBMIT</Link>
                    </fieldset>
                    </form>
                    
                </main>
            </div>

        )
    }
}

export default LogIn