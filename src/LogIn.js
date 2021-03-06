import React from 'react'
import './Login.css'
import TokenService from './Service/token-service'
import ApiAuthService from './Service/api-auth-service'


class Login extends React.Component {
    
    static defaultProps = {
        loginSuccess: () => {}
    }

    state = { error: null }
    
    handleJWTSubmission = (event) => {
        event.preventDefault();
        const { user_name, password } = event.target
        this.setState({ error: null })
        ApiAuthService.getLogin({
            user_name: user_name.value,
            password: password.value,
        })
        .then(user => {
            user_name.value = ''
            password.value = ''
            TokenService.saveAuthToken(user.authToken)
                this.props.loginSuccess()
                this.props.history.push('/homepage');

        })
        .catch(res => {
            this.setState({ error: res.error })
        })

    }

    handleClickCancel = () => {
        this.props.history.push('/')
    }

    render() {
        const error = this.state.error
        return (
            <div>
                <header>
                    <h2 className="logintitle">DON'T QUIT STAY FIT!</h2>
                </header>
                <form onSubmit={this.handleJWTSubmission}>
                    <h3>Log In</h3>
                    <fieldset>
                        <label htmlFor="username">USERNAME:</label>
                        <input type="text" id="username" name="user_name" required/>
                        <br/>
                        <label htmlFor="pwd">PASSWORD:</label>
                        <input type="password" id="pwd" name="password" required/>
                        <br/>
                        {/* <button type="submit">SUBMIT</button> */}
                        <button type='submit'>SUBMIT</button>
                        <button type='submit' onClick={this.handleClickCancel}>CANCEL</button>
                    </fieldset>
                </form>
                <footer className="error">{error}</footer>
                
            </div>

        )
    }
}

export default Login