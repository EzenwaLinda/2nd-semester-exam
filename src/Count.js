import React, {useReducer}  from "react"
import {ACTIONS, reducer} from "./reducer"


function useCounter(){
    const [state, dispatch] = useReducer(reducer, {count: 0})

    const incrementCounter = () => {
      dispatch({type: ACTIONS.INCREMENT})
    }
  
    const decrementCounter = () => {
      dispatch({type: ACTIONS.DECREMENT})
   }
  
    const resetCounter = () => {
      dispatch({type: ACTIONS.RESET})
    }
  
    const setValue = (value) => {
      dispatch({type: ACTIONS.SETVALUE,payload: value})
    }


    return [state, incrementCounter, decrementCounter, resetCounter,setValue]
}


export default useCounter