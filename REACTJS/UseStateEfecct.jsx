import React,{useState,useEffect}from 'react'

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

export default App
