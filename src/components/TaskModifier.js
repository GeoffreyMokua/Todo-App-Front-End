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
      fetch(`http://localhost:9292/api/todo/status/${todo.id}`, {
        method: "PATCH",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          status: status,
        }),
      })
        .then((response) => response.json())
        .then((record) => {
          console.log(record);
        })
        .catch((err) => {
          console.error(err)
        });

        toggleOpen()
    }

    const modalOnOpen = () =>{
      fetch(`http://localhost:9292/api/todo/${todo.id}`)
          .then((res) => res.json())
          .then((todo_obj) => {
              if(todo_obj.category){
                  setCategory(todo_obj.category.category)
              } else{
                  setCategory('')
              }
          })
          .catch((err) => {
              console.error(err);
          });
  }
    
  return (
    <Modal
        show={show}
        onHide={handleTaskModifier}
        onShow={modalOnOpen}
    
  )
}
