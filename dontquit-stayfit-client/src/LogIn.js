import React from 'react'

class LogIn extends React.Component {
    
    state = {
        signIn: false
    }

    handleClick = e => {
        this.setState({
            
        })

    }
    
    render() {
        return (
            <div>
                <header>
                    <h2>DON'T QUIT STAY FIT!</h2>
                </header>
                <main>
                    <fieldset>
                        <label htmlFor="username">USERNAME:</label>
                        <input type="text" id="username" name="username" required/>
                        <br/>
                        <label htmlFor="pwd">PASSWORD:</label>
                        <input type="password" id="pwd" name="pwd" required/>
                        <br/>
                        <button type="submit">SUBMIT</button>
                    </fieldset>
                </main>
            </div>

        )
    }
}

export default LogIn