import React from 'react'
import ApiAuthService from './Service/api-auth-service'


class Register extends React.Component {

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
    }

    render() {
        return (
            <div>
                <header>
                    <h2>DON'T QUIT STAY FIT!</h2>
                </header>
                <main>
                    <form onSubmit={this.getUserCredentials}>
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

export default Register


