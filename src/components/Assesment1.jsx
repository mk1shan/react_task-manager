import React from 'react'

function Assesment1({name,course,age} ) {

    const handleclick = ()=>{
        console.log(`view name ${name}`)
    }
  return (
    <div>
      <h1>student card </h1>
      <h1>name is :{name}</h1>
      <h1>course is :{course}</h1>
      <h1>agfe is :{age}</h1>
      <button onClick={handleclick}>click</button>
    </div>
  )
}

export default Assesment1
