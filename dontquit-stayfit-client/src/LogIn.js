import React from 'react'
import TokenService from './Service/token-service'
import ApiAuthService from './Service/api-auth-service'


class LogIn extends React.Component {
    
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

    // handleSubmitBasicAuth = ev => {
    //     ev.preventDefault()
    //     const { user_name, password } = ev.target
    
    //     TokenService.saveAuthToken(
    //       TokenService.makeBasicAuthToken(user_name.value, password.value)
    //     )
    
    //     user_name.value = ''
    //     password.value = ''
    //     this.props.onLoginSuccess()
    //   }

    


    render() {
        return (
            <div>
                <header>
                    <h2>DON'T QUIT STAY FIT!</h2>
                </header>
                <main>
                    <form onSubmit={this.handleJWTSubmission}>
                    <fieldset>
                        <label htmlFor="username">USERNAME:</label>
                        <input type="text" id="username" name="user_name" required/>
                        <br/>
                        <label htmlFor="pwd">PASSWORD:</label>
                        <input type="password" id="pwd" name="password" required/>
                        <br/>
                        {/* <button type="submit">SUBMIT</button> */}
                        <button type='submit'>SUBMIT</button>
                    </fieldset>
                    </form>
                    
                </main>
            </div>

        )
    }
}

export default LogIn