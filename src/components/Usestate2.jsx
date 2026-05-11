import React, { useEffect, useState } from 'react'

const Usestate2 = () => {

    const [count,setcount] = useState(0)

    useEffect(()=>{
        console.log("run onece")
    },[count])
  return (
    <div>
      <p>{count}</p>

      <button onClick={()=>setcount(count+1)}>increase</button>
    </div>
  )
}

export default Usestate2
