import React, {useState} from "react"
import './App.css';
import Counter from "./Counter"
import NotFound from "./NotFound";


function App() {
  const [status, setStatus] = useState(true)

  return (
    <>
    {status ? <Counter /> : <NotFound />}
   </>
  );
}

export default App;
