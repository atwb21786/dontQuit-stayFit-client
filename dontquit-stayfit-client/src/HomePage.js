import React from 'react'
import Header from './Header/Header'
import { Link } from 'react-router-dom'

class HomePage extends React.Component {

    render() {
        return(
            <div>
                <header>
                    <Header />
                </header>
                <main>
                    <Link to='/goals'>GOALS</Link>
                    <br/>
                    <Link to='/weight'>WEIGHT</Link>
                    <br/>
                    <Link to='/fitness'>FITNESS</Link>
                    <br/>
                    <Link to='/accountability'>
                        REVIEW TODAY, PLAN TOMORROW
                    </Link>
                </main>
            </div>
        )
    }
}

export default HomePage