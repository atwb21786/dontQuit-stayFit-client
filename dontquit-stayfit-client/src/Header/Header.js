import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import TokenService from '../Service/token-service'

class Header extends React.Component {

    handleLogoutClick = () => {
        TokenService.clearAuthToken()
        this.props.history.push('/')
    }

    renderLogoutLink() {
        return (
            <div>
                <Link onClick={this.handleLogoutClick} to='/' className='link'>LOGOUT</Link>
            </div>
        )
    }

    render() {
        return(
            <div>
                <nav>
                    <Link to='/homepage' className='link'>HOME</Link>
                    {TokenService.hasAuthToken() ? this.renderLogoutLink() : "" }
                </nav>
                <header>
                    <h2 className="headtitle">DON'T QUIT STAY FIT!</h2>
                </header>
            </div>
        )
    }
}

export default Header