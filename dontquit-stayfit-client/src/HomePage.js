import React from 'react'
import { Link } from 'react-router-dom'

class HomePage extends React.Component {

    render() {
        return(
            <div>
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