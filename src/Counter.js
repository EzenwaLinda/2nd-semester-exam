import React from "react"
import useCounter from "./Count"
import {Helmet} from "react-helmet-async"

function Counter() {
  const [state, incrementCounter, decrementCounter, resetCounter, setValue] = useCounter()
  
  return (
    <>
      <Helmet>
        <title>Counter App</title>
        <meta  name="description" content="your cool counter app" />
        <link rel="canonical" href="/" />
      </Helmet>
      <div className="container">
        <div>
          <h1>Counter App</h1>
          <div className="count">{state.count}</div>
          <button className="button-1" onClick = {incrementCounter}>increment</button>
          <button  className="button-2"  onClick = {decrementCounter}>decrement</button>
          <button  className="button-3"  onClick = {resetCounter}>resetCount</button>
          <button  className="button-4"  onClick = {() => setValue(10)}>setvalue</button>
        </div>
      </div>
    </>
  );
}

export default Counter;
