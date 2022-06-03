import React from 'react'
import {Card} from 'react-bootstrap'
export default function CardsBootstrap() {
  return (

    <div className='cardsInline'>
  <Card className='Cards'>
    <Card.Img variant="top" src="/Asset/Nature.jpg" className='Nature'/>
    <Card.Body>
      <Card.Text>
        Nature's remedy is the best remedy for all Diseases.
      </Card.Text>
    </Card.Body>
  </Card>
  
  <Card className='Cards'>
    <Card.Body>
      <Card.Text>
        Proud to say " I am a food lover..!!".
      </Card.Text>
    </Card.Body>
    <Card.Img variant="top" src="/Asset/Food.jpg" className='Food'/>
  </Card>
  <Card className='Earing'>
  <Card.Img variant="top" src="/Asset/Earing.jpg" className='Earings'/>
  <Card.Body>
<Card.Text>
<h5>Jewels Galaxy</h5>
<p>GoldPlated Hooks Earings
combo For Womens/Girsls</p>
</Card.Text>
  </Card.Body>
  </Card>
</div>

  )
}

