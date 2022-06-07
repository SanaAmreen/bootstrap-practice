import React, { useState } from 'react'
import { Spinner } from 'react-bootstrap'

function SpinnersBootstrap() {
    const [progress , setProgres] = useState(0);
  return (
    <div>
    <Spinner animation="border" now={progress} >

</Spinner>
    </div>
  )
}

export default SpinnersBootstrap