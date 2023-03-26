import React,{useState,useEffect}from 'react'
//primeiro exemplo
function App() {
  const [horas,setHoras]=useState(4);
  const [minunt,setMinunt] = useState(30);
  const [segundos,setSegundos] = useState(50)

    useEffect(() => {
      const interval = setInterval(()=>{
        setSegundos(segundos+1)
        if(segundos===59){
          setSegundos(0);
          setMinunt(minunt+1);
            if(minunt===59){
              setMinunt(0);
              setHoras(horas+1);
            }

        }
      },1000)
      return () => {clearInterval(interval)
      }
    })
  return (
    <div style={{alignItems:'center',textAlign:'center',margin:'auto'}}>
      <h2>{horas}:{minunt}:{segundos}</h2>
    </div>
  )
}
//segundo exemplo
export default App


import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [reverse, setReverse] = useState(false);
  const [contador, setContator] = useState(0);

  const reverseClas = reverse ? 'reverse' : '';

  const handleClick = () => {
    setReverse(!reverse);
  };
  const handleCont = () => {
    setContator((c) => c + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${reverseClas}`} alt="logo" />
        <h1>o número é : {contador}</h1>
        <p>
          <button type="button" onClick={handleClick}>
            reverse {reverseClas}
          </button>
        </p>
        <p>
          <button type="button" onClick={handleCont}>
            adicionar
          </button>
        </p>
      </header>
    </div>
  );
}

export default App;
