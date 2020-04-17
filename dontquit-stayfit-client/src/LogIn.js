import React from 'react'
import TokenService from './Service/token-service'

import { Link } from 'react-router-dom'

class LogIn extends React.Component {
    
    static defaultProps = {
        onLoginSuccess: () => {}
    }

    state = { error: null }
    
    handleSubmitBasicAuth = ev => {
        ev.preventDefault()
        const { user_name, password } = ev.target
    
        TokenService.saveAuthToken(
          TokenService.makeBasicAuthToken(user_name.value, password.value)
        )
    
        user_name.value = ''
        password.value = ''
        this.props.onLoginSuccess()
      }

    


    render() {
        return (
            <div>
                <header>
                    <h2>DON'T QUIT STAY FIT!</h2>
                </header>
                <main>
                    <form onSubmit={this.loginSubmit}>
                    <fieldset>
                        <label htmlFor="username">USERNAME:</label>
                        <input type="text" id="username" name="user_name" required/>
                        <br/>
                        <label htmlFor="pwd">PASSWORD:</label>
                        <input type="password" id="pwd" name="password" required/>
                        <br/>
                        {/* <button type="submit">SUBMIT</button> */}
                        <button>SUBMIT</button>
                    </fieldset>
                    </form>
                    
                </main>
            </div>

        )
    }
}

export default LogIn