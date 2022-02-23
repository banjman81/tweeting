import React from 'react'

function Signin() {

    function handleLogin(e){
        e.preventDefault()
        console.log('boom')
    }

    return (
        <div>
            <form onSubmit={handleLogin}  style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', width: '20%', margin: '5px auto'}}>
                <input style={{margin: '5px'}} type="text" value='fakeuser@mail.com' onChange={(e)=> console.log(e.target.value)}/>
                <input style={{margin: '5px'}} type="password" value='12345678' onChange={(e)=> console.log(e.target.value)}/>
                <button style={{margin: '5px auto', width: '50%'}}>Login</button>
            </form>
        </div>
    )
}

export default Signin