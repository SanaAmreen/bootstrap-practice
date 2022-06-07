import React, { useState } from 'react'
import {ProgressBar} from 'react-bootstrap'

function ProgressBootstrap() {
    const [progress , setProgres] = useState(0);
   
   const increas =()=>{
      setProgres(progress +10);
       console.log("clicked")
       if (progress>=100){
        setProgres(0);
    }
   }

  return (
    <div>
    <ProgressBar now={progress} label={`${progress}%`}/>
    <button onClick={increas}>click me!</button>
    </div>
  )
}

export default ProgressBootstrap