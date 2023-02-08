import React, { useEffect, useState } from "react";


export async function fetchData(){
  try{
    const response = await fetch('https://catfact.ninja/fact')
    const data = await response.json()
    return data
  }catch(error){
    console.log(error)
  }
}

export const App = () =>{
  const [data, setData] = useState()

  useEffect(() =>{
    const fetchDataAndSet = async () =>{
      const data = await fetchData()
      setData(data.fact)
      console.log(data.fact)
    }
    fetchDataAndSet()
  },[])

  return(
    <div>pepe</div>
  )
}

export default App