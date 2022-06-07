import React from 'react'
import { Table } from 'react-bootstrap'

function TablesBootstrap() {
  return (
    <div>
    
    <Table striped bordered hover size="m">
    
  <thead className='Ta-ble'>
  <caption className='Caption'>My Family</caption>
    <tr>
      <th>Sr.no</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Sana</td>
      <td>Khan</td>
      <td>@sana</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Shoeb</td>
      <td>Khan</td>
      <td>@Shoeb</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan={2}>Tahmina Mahrin</td>
      <td>@Tammu</td>
    </tr>
    <tr>
    <td>4</td>
    <td>Shakib</td>
    <td>Khan</td>
    <td>@Shakib</td>
  </tr>
  </tbody>
</Table>
    </div>
  )
}

export default TablesBootstrap