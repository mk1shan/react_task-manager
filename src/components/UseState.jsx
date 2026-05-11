import React, { useState } from 'react'

function UseState() {


const [count,setcount] = useState(0);


  return (
    <div>
      <h1>{count}</h1>

      <button onClick={()=>setcount(count+1)}>increase</button>

            <button onClick={()=>setcount(count-1)}>decrese</button>
                  <button onClick={()=>setcount(0)}>rset</button>
    </div>
  )
}

export default UseState
