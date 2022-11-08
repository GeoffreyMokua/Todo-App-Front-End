import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'

export default function TaskModifier({todo, show, handleClose}) {

    const[dropdown, setDropdown] = useState(false);
    const toggleOpen = () => setDropdown(!dropdown);

    const [category, setCategory] = useState('')
    
  return (
    <Modal
        show={show}
        onHide={handleTaskModifier}
        onShow={modalOnOpen}
    
  )
}
