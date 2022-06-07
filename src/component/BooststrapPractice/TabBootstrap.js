import React from 'react'
import { Tabs, Tab } from 'react-bootstrap'

function TabBootstrap() {

  return (
    <div>

      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="home" title="Home">
      
        </Tab>
        <Tab eventKey="profile" title="Profile">
          
        </Tab>
        <Tab eventKey="contact" title="Dealer" disabled>
          
        </Tab>
      </Tabs>
    </div>
  )
}

export default TabBootstrap