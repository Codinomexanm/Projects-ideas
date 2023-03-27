import React, { useReducer } from 'react'

const globalState = {
  title:'qualquer coisa',
  body:'qualquer coisa no corpo',
  counter:0
}
const reducer = (state,action) =>{
  switch (action.type) {
    case 'muda':
      console.log('chamou muda');
      return {...state,title:action.payload};
    case 'inverter':{
      console.log('chamou inverter');
      const {title} = state;
      return {...state,title:title.split('').reverse().join('')};
    }
  }
  console.log('nenhuma ação encontrada')
  return {...state};
}
const App = () => {
  const [state, dispath] = useReducer(reducer,globalState);
  const {counter, title} = state;
  return (
    <div>
      <h2>{title} {counter}</h2>
      <button onClick={()=>dispath({type:'muda',payload:new Date().toLocaleString('pt-BR')})}> click</button>
      <button onClick={()=>dispath({type:'inverter'})}> inverter</button>
      <button onClick={()=>dispath({type:'semacao'})}> Sem ação</button>
    </div>
  )
}

export default App
