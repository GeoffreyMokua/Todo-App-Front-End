import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'

export default function TaskModifier({todo, show, handleClose}) {

    const[dropdown, setDropdown] = useState(false);
    const toggleOpen = () => setDropdown(!dropdown);

    const [category, setCategory] = useState('')
    const handleTaskModifier = () => {
      handleClose(false);
    };

    const toggleStatus = (status) => {
      fetch(`http://localhost:9292/api/todo/status/${todo.id}`), {
        method: "PATCH",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          status: status,
        })
      }
    }
    
  return (
    <Modal
        show={show}
        onHide={handleTaskModifier}
        onShow={modalOnOpen}
    
  )
}
