import { useReducer } from "react";

const reducer = (state, action)=>{
  let array;
  switch(action.type){
    case 'ADD':
      array=[...state]
      array.push(action.payload)
      return array
    case 'REMOVE':
      array=[...state]
      array.pop()
      return array
    case 'CLEAR':
      return array=[]
    default : break
  }
}

const MultipleStates=(props)=>{

  const [state, dispatch]= useReducer(reducer, ['Zero item'])

  const addToCardHandler=()=>{
    dispatch({type:'ADD', payload: Math.round(Math.random()*100+100)})
  }

  const removeFromCard=()=>{
    dispatch({type:'REMOVE'})
  }

  const clearAll=()=>{
    dispatch({type:'CLEAR'})
  }

  return (
    <>
      <h1>Your shopping card</h1>
      <h2>Shopping card is :{(state.length === 0) ? 'empty' : 'ready fot payment'}</h2>
      <button onClick={addToCardHandler} >Add random item to card</button>
      <button onClick={removeFromCard} >Remove the last item from card</button>
      <button onClick={clearAll} >Clear the list</button>
      <p><b>
        Your shopping card includes: 
        {state.length === 0 && 'empty'}
        {state.join("-")}
      </b></p>
    </>
  )
}

export default MultipleStates