import React, { useContext,createContext,useState } from 'react'

//estado inicial, valores iniciais do estado, estado inicial é um objeto
const globalState = {
  title : 'noticia um sobre qualquer coisa',
  counter: 1
}
// criação de um contexto
const GlobalContext = createContext();

const Div = ({children})=>{
   return (
   <>
    <H1/>
    <P/>
   </>
    )
}
const H1 = ()=>{
  const theContext = useContext(GlobalContext)
  const {contextState:{title} } = theContext;
  return <h1>{title}</h1>
}
const P = ()=>{
  const theContext = useContext(GlobalContext);
  const {contextState:{counter},setContextState } = theContext;
  return <p onClick={()=> setContextState((s)=>({...s,counter:s.counter +1}))}>{counter}</p>
}


const App = () => {
  const [contextState, setContextState] = useState(globalState);
  console.log(globalState.counter)
  return (
    //em qualquer filho do GlobalContext pode-se usar o useContext como o exemplo acima, objetivo utilizar a pops em qualquer parte do código tendo essa como inicial
    <GlobalContext.Provider value={{contextState,setContextState}}>
      <Div/>
    </GlobalContext.Provider>
  )
}
 
export default App
