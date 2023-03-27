import React, { createContext, useContext, useReducer, useRef } from 'react'
import P from 'prop-types'
//actions.js
export const actions = {
  CHANGE_TITLE: 'CHANGE_TITLE',
}

//data.js
export const globalState = {
  title:'qualquer coisa',
  body:'qualquer coisa no corpo',
  id:1
}
//reducer.jsx
export const reducer = (state,action) =>{
  console.log(action.type)
  // eslint-disable-next-line default-case
  switch (action.type) {
    case actions.CHANGE_TITLE :{
      console.log('mudar titulo')
      return {...state,title: action.payload}
    }
  }
  return {...state}
}

//appContext.jsx
export const Context = createContext();
export const AppContext = ({children}) =>{
  const[state, dispatch] = useReducer(reducer,globalState);
  const handleClick = (payload) => {
     dispatch({type:actions.CHANGE_TITLE, payload})
  }
  return(
    <Context.Provider value={{state,handleClick}}>{children}</Context.Provider>
  )
}
AppContext.propTypes = {
  children:P.node,
}
//h1/index.jsx

export const H1 = () =>{

  const context = useContext(Context);
  const inputRef = useRef();
  return(
    <>
    <h1 onClick={()=> context.handleClick(inputRef.current.value)}>{context.state.title}</h1>
    <input type="text" ref={inputRef} />
    </>
  );
}
//App.jsx
const App = () => {
  return (
    <AppContext>
    <div>
      <H1/>
    </div>
    </AppContext>
  )
}

export default App
