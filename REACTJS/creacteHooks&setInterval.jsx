import { number } from 'prop-types';
import React, { useRef } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
const useMyHook = (cb,dalay=1000) =>{
  const saveCb = useRef();
  useEffect(() => {
    saveCb.current = cb
  }, [cb]);
  useEffect(()=>{
    const interval = setInterval(()=>{
      saveCb.current();
    },dalay);
    return () =>clearInterval(interval);
  },[dalay])
}

const App = () => {
  const [counter,setCounter] = useState(0);
  const [delay,setDelay] = useState(1000);
  const [incrementor, setIncrementor] = useState(100);
  useMyHook(()=>setCounter((c) => c+1),delay)
  return (
    <div>
      <h2>contador: {counter}</h2>
      <h2>dalay: {delay}</h2>
      <button onClick={()=>{
        setDelay((d)=> d + incrementor)
      }}>+{incrementor}</button>
      <button onClick={()=>{
        setDelay((d)=> d - incrementor)
      }}>-{incrementor}</button>
      <input type="number" value={incrementor} onChange={((e)=>setIncrementor(Number(e.target.value)))}/>
    </div>
  )
}

export default App
