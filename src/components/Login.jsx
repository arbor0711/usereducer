import { useReducer } from "react";
import loginHelper from "./loginHelper";

function reducer(state, action) {
switch(action.type){
    case 'USERNAME':
        return {
            ...state, 
            username: action.payload
        }
    case 'PASSWORD':
        return {...state, password:action.payload}
    case 'LOGGED_IN':
        return {...state, isLoggedIn:true}
    case 'LOGGED_OUT':
        return {...action, isLoggedIn:false, username:'', password:''}
    case 'IS_LOADING':
        return{...state, isLoading: true}
    case 'IS_NOT_LOADING':
        return{...state, isLoading: false}
    case 'ERROR':
        return{...state, isLoading: false, isError:true}
    default : break
}
}

const initialState = {
    username: '',
    password: '',
    isLoggedIn: false,
    isLoading: false,
    isError: false,
}

const Login= (props) =>{
    const [state, dispatch]= useReducer(reducer, initialState)

    const usernameHandler= (e)=>{
        dispatch({type:'USERNAME', payload:e.target.value})
    }
    const passwordHandler= (e)=>{
        dispatch({type:'PASSWORD', payload:e.target.value})
    }
    const logoutHandler= (e)=>{
        dispatch({type:'LOGGED_OUT'})
    }
    const submitHandler= async (e)=>{
        e.preventDefault()
    try{
        dispatch({type:'IS_LOADING'})
        await loginHelper({username:state.username, password:state.password})
        dispatch({type:'IS_NOT_LOADING'})
        dispatch({type:'LOGGED_IN'})
    }catch{
        dispatch({type:'ERROR'})
        alert('🚨 Incorrect username or password')
    }
}

    
    return (
        <>
            <hr />
            <h2>useReducer use case</h2>
            <h3>Modify complex states, such as arrays or objects: login form</h3>
            <div style={{ maxWidth: '50%', backgroundColor: '#a8dadc', borderRadius: '1rem', padding: '2rem' }}>
                {state.isLoggedIn
                    ? <><p>Welcome!</p><button onClick={logoutHandler}>Log out!</button></>
                    : <form onSubmit={submitHandler}>
                        <div style={{ margin: '1rem 0' }}>
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" onChange={usernameHandler} value={state.username} style={{ margin: '0 1rem' }} placeholder='user' />
                        </div>
                        <div style={{ margin: '1rem 0' }}>
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" onChange={passwordHandler} value={state.password} style={{ margin: '0 1rem' }} placeholder='password' />
                        </div>
                        <div style={{ margin: '1rem 0' }}>
                            <button type="submit" disabled={state.isLoading}>{state.isLoading ? 'Logging you in...' : 'Log in'}</button>
                        </div>

                    </form>
                }
            </div>
        </>
    );
}

export default Login