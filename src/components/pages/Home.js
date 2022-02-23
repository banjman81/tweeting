import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Home() {
    const user = useSelector(state => state.user)
    return (
        <div style={{margin: '10px auto'}}>
            {user?
                <div>
                    <div>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div>

                    </div>
                </div>:

                <div>
                    <Link to='/signin'><h3>Go to sign in page</h3></Link>
                </div>
            }
        </div>
    )
}

export default Home