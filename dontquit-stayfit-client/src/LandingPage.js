import React from 'react'
import {Link} from 'react-router-dom'

class LandingPage extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <h2>DON'T QUIT STAY FIT!</h2>
                </header>
                <main>
                    <Link to='/login'>SIGN IN!</Link>
                </main>
                <footer>
                    <p>Demo username: abc</p>
                    <p>Demo password: 123</p>
                </footer>
                
            </div>
        )
    }
}

export default LandingPage