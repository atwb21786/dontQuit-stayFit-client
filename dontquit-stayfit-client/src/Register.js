import React from 'react'
import './Register.css'
import ApiAuthService from './Service/api-auth-service'


class Register extends React.Component {

    state = { error: null }

    getUserCredentials = (e) => {
        e.preventDefault()
        const username = e.target.user_name.value
        const password = e.target.password.value

        ApiAuthService.getRegister({
            user_name: username,
            password: password
        })
        .then(() => {
            this.props.history.push('/login')
        })
        .catch(res => {
            this.setState({ error: res.error })
        })
    }

    render() {
        const error = this.state.error
        return (
            <div>
                <header>
                    <h2 className="regtitle">DON'T QUIT STAY FIT!</h2>
                </header>
                <main>
                    <form onSubmit={this.getUserCredentials}>
                        <h3>REGISTRATION</h3>
                    <fieldset>
                        <label htmlFor="username">USERNAME:</label>
                        <input type="text" id="username" name="user_name" sizerequired/>
                        <br/>
                        <label htmlFor="pwd">PASSWORD:</label>
                        <input type="password" id="pwd" name="password" required/>
                        <br/>
                        {/* <button type="submit">SUBMIT</button> */}
                        <button>SUBMIT</button>
                    </fieldset>
                    </form>
                    <div>{error}</div>
                </main>
            </div>

        )
    }


}

export default Register


