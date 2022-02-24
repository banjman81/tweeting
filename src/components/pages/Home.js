import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { TWEET } from '../ReduxStore/Store'

function Home() {
    const dispatch = useDispatch()

    const user = useSelector(state => state.user)
    const tweets = useSelector(state => state.tweets)
    const [inputText, setInputText] = useState('')

    function handleSubmit(){
        if(inputText.length > 0){
            dispatch({
                type: TWEET,
                payload: {
                    content: inputText,
                    user : user.username
                }
            })
            setInputText('')
        }
        
    }

    function resetAll(){
        window.localStorage.clear()
        window.location.reload()
    }

    return (
        <div style={{margin: '10px auto'}}>
            {user?
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    <div style={{display: 'flex', margin: '5px auto', alignContent: 'center'}}>
                        <textarea style={{resize: 'none'}} name="text-input" id="text" onChange={e => setInputText(e.target.value)} cols="50" rows="2" value={inputText}></textarea>
                        <button onClick={() => handleSubmit()}>Submit</button> 
                    </div>
                    <div>
                        {tweets?
                            tweets.map((tweet, index) => {
                                return (
                                <div key={index} style={{border: '1px solid gray', width: '80%', margin: '5px auto', padding: '5px', textAlign: 'left', borderRadius: '5px', boxShadow: '2px 2px 2px gray'}}>
                                    <section style={{ margin: '0'}}>
                                        <h5 style={{margin: '0'}}>{tweet.user}</h5>
                                    </section>
                                    <section  style={{paddingLeft: '10%'}}>
                                        <p style={{margin: '0', fontSize: '20px'}}>{tweet.content}</p>
                                    </section>
                                </div>)
                            }): ''
                        }
                    </div>
                    <div>
                        <button onClick={() => resetAll()}><h3>RESET ALL</h3></button>
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