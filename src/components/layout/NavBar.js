import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function NavBar() {
    const user = useSelector(state => state.user)
    return (
        <div style={{display: 'flex', justifyContent: 'space-evenly', background: 'gray'}}>
            <div>
                <Link to='/'>
                    <h1>Home Page</h1>
                </Link>
            </div>
            <div  style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                {!user ?
                    <Link to="/signin">
                        <h3>Sign in</h3>
                    </Link>:

                    <h3>Hi, {user.username}</h3>
                }
            </div>
        </div>
    )
}

export default NavBar