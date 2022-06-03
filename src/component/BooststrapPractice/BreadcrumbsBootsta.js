import React from 'react'
import {Breadcrumb} from 'react-bootstrap'

function BreadcrumbsBootstrap() {
  return (
    <div>
    <Breadcrumb>
    <Breadcrumb.Item href="www.google.com">Home</Breadcrumb.Item>
    <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
      Library
    </Breadcrumb.Item>
    <Breadcrumb.Item active>Data</Breadcrumb.Item>
  </Breadcrumb>
  </div>
  )
}

export default BreadcrumbsBootstrap