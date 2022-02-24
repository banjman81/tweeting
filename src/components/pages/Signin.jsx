import React from 'react'
import { fetchUser } from '../../fetchData'
import { useDispatch } from "react-redux";
import { SIGN_IN_ACTION } from '../ReduxStore/Store';
import { useNavigate } from 'react-router-dom';

function Signin() {
    const dispatch = useDispatch()

    let navigate = useNavigate()

    function handleLogin(e){
        e.preventDefault()
        fetchUser()
            .then(data => {
                dispatch({
                    type: SIGN_IN_ACTION,
                    payload: data
                })
                navigate('/')
            })
            .catch(e => console.log(e.message))
    }

    return (
            <div>
                <form onSubmit={handleLogin}  style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', width: '20%', margin: '5px auto'}}>
                    <input style={{margin: '5px'}} type="text" value='fakeuser@mail.com' onChange={(e)=> console.log(e.target.value)}/>
                    <input style={{margin: '5px'}} type="password" value='12345678' onChange={(e)=> console.log(e.target.value)}/>
                    <button style={{margin: '5px auto', width: '50%'}}>Login</button>
                </form>
            <button onClick={() => console.log((window.localStorage.getItem('applicationState')))}>log</button>
            </div>
    )
}

export default Signin