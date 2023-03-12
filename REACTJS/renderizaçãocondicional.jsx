import React,{useState}from 'react'
import './App.css'
const App = () => {
  const [nome,setNome] = useState("Alexandre");


  return (
    <div>
      //rederização condicional
      {
        (nome === "Alexandre")?
        <div>
          <p>{nome} deu certo</p>
        </div>:
        <div>
          <p>deu errado</p>
          {() => setNome("sAlexandre")}
        </div>
      }
    </div>
         )
} 

export default App
