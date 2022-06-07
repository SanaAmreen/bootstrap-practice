import React from 'react'
import { Toast } from 'react-bootstrap'

function ToastBoostrap() {
  return (
    <div>
    <Toast>
  <Toast.Header>
    <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
    <strong className="me-auto">Bootstrap</strong>
    <small>11 mins ago</small>
  </Toast.Header>
  <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
</Toast>
    </div>
  )
}

export default ToastBoostrap