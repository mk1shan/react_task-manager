import React from 'react'

function Onclik() {

const handleclik = ()=>{
    console.log("cliecked ")
}

  return (
    <div>
      <button onClick = {handleclik}>click button</button>
    </div>
  )
}

export default Onclik
