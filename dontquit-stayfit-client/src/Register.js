import React from 'react'
import { Link } from 'react-router-dom'


class Register extends React.Component {

    loginSubmit = e => {
        e.preventDefault();
        fetch('http://localhost:8000/users', {
            method: "POST",
            headers: {
                "Content-type": "application/json",

            }, 
            body: JSON.stringify({
                
                    user_name: e.target.user_name.value,
                    password: e.target.password.value,
                
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
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

export default Register


