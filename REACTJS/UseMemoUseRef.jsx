import React, { useEffect,useMemo,useRef,useState } from 'react'

const Posts = ({posts,handleClick})=>{
  return (
    <div key={posts.id}>
    <h3 onClick={()=>{handleClick(posts.title)}}>{posts.title}</h3>
    <p>{posts.body}</p>
  </div>
  )
}

const App = () => {
  const [posts,setPosts] = useState([]);
  const [value,setValue] = useState('')
  const input = useRef(null)


  useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then((r)=> r.json())
      .then((r) => setPosts(r))
  },[]) 
  useEffect(()=>{
    input.current.focus();//useRef 
    console.log(input.current)
  },[value])

  const handleClick= (value)=>{
    setValue(value)
  }
  return (
    <div>
    <p>
    <input ref={input} type="search" value={value} onChange={(e)=>setValue(e.target.value)}/>
    </p>
  //user memo memoria oque está na tela, caso ocorra alguma atualização ele vai renderizar somente o que foi alterado
      {useMemo(()=>{
        return posts.length > 0 && posts.map((posts) =>(<Posts key={posts.id} posts={posts} handleClick={handleClick}/>))
      },[posts])}
      {posts.length <= 0 && <p>ainda não existem posts</p>}
    </div>
  )
}

export default App
