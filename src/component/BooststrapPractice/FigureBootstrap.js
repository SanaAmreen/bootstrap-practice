import React from 'react'
import {Figure} from'react-bootstrap'
function FigureBootstrap() {
  return (
    <div>
    <Figure>
  <Figure.Image
    width={200}
    height={300}
    alt="171x180"
    src="/Asset/workingwomen.jpg"
  />
  <Figure.Caption>
    More power to working womens.
  </Figure.Caption>
</Figure>
    </div>
  )
}

export default FigureBootstrap