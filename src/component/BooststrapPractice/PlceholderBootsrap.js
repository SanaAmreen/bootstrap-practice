import React from 'react'
import { Placeholder, Card, Button} from 'react-bootstrap'
function PlceholderBootsrap() {
  return (
    <div>
    <div className="d-flex justify-content-around">
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://www.pcclean.io/wp-content/uploads/2020/4/miE3Ir.jpg" />
    <Card.Body>
      <Card.Title>River</Card.Title>
      <Card.Text>
        Rivers, one of the beauty of  nature.
        Also the most important part for humans, as they have basic needs for us i.e water.
      </Card.Text>
      <Button variant="primary">Go There</Button>
    </Card.Body>
  </Card>

</div>
    </div>
  )
}

export default PlceholderBootsrap