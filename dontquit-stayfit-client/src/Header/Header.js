import React from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../Service/token-service'

class Header extends React.Component {

    handleLogoutClick = () => {
        TokenService.clearAuthToken()
        this.props.history.go('/')
    }

    renderLogoutLink() {
        return (
            <div>
                <Link onClick={this.handleLogoutClick} to='/'>LOGOUT</Link>
            </div>
        )
    }

    render() {
        return(
            <div>
                <nav>
                    <Link to='/homepage'>HOME</Link>
                    {TokenService.hasAuthToken() ? this.renderLogoutLink : null}
                </nav>
                <header>
                    <h2>DON'T QUIT STAY FIT!</h2>
                </header>
            </div>
        )
    }
}

export default Header