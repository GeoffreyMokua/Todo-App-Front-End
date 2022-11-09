import Modal from 'react-bootstrap/Modal'
import { useState } from 'react'

export default function TaskModifier({todo, show, handleClose}) {
    
    const [dropdown, setDropdown] = useState(false);
    const toggleOpen = () => setDropdown(!dropdown);

    const [category, setCategory] = useState('')
    const handleTaskModifier = () => {
            handleClose(false);
        };
    const toggleStatus = (stauts) => {
        fetch(`http://localhost:9292/api/todo/status/${todo.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                status: stauts,
            }),
        })
            .then((response) => response.json())
            .then((record) => {
                console.log(record);
            })
            .catch((err) => {
                console.error(err);
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

    const [title, setTitle] = useState(todo.title);
    const [content, setContent] = useState(todo.content);
    
    const handleForm = () =>{
        todo.title = title
        todo.content = content
        fetch(`http://localhost:9292/api/todo/${todo.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                title: title,
                content: content,
            }),
        })
            .then((response) => response.json())
            .then((record) => {
                console.log(record);
            })
            .catch((err) => {
                console.error(err);
            });
            handleTaskModifier();
    }

    return (
        <Modal
            show={show}
            onHide={handleTaskModifier}
            onShow={modalOnOpen}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <div className="card">
                <div className="card-header">Update Todo</div>
                <div className="card-body">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Title</label>
                            <input
                                name="title"
                                type="title"
                                className="form-control"
                                placeholder="Title"
                                value={title}
                                onChange={(se) => {
                                    setTitle(se.target.value);
                                }}
                            />
                        </div>
                        <div className="  mb-3">
                            <div>
                                <label className="form-label">Category</label>
                                <fieldset className="row mx-0 justify-content-between">
                                    {/* d-flex justify-content-between */}
                                    <div className="col-10 px-0">
                                        <input
                                            // disabled
                                            id="disabledTextInput"
                                            name="category"
                                            type="text"
                                            className="form-control align-self-stretch"
                                            placeholder="Disabled"
                                            value={category}
                                            onChange={() => {
                                                return null;
                                            }}
                                        />
                                    </div>
                                    <div className="btn-group col-auto px-0">
                                        <button
                                            type="button"
                                            className="btn btn-outline-dark text-success dropdown-toggle"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                            onClick={toggleOpen}
                                        >
                                            Status
                                        </button>
                                        <div
                                            className={`dropdown-menu ${
                                                dropdown ? "show" : ""
                                            }`}
                                        >
                                            <a
                                                className="dropdown-item"
                                                href="#/"
                                                onClick={(e) => {
                                                    e.preventDefault()
                                                    e.stopPropagation();
                                                    toggleStatus("In Progress");
                                                }}
                                            >
                                                In Progress
                                            </a>
                                            <div className="dropdown-divider"></div>
                                            <a
                                                className="dropdown-item"
                                                href="#/"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    e.stopPropagation();
                                                    toggleStatus("Done");
                                                }}
                                            >
                                                Completed
                                            </a>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Todo Content</label>
                            <textarea
                                name="content"
                                className="form-control"
                                rows="3"
                                placeholder="Content"
                                value={content}
                                onChange={(se) => {
                                    setContent(se.target.value);
                                }}
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary mb-3"
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                handleForm();
                            }}
                        >
                            Save
                        </button>
                        &nbsp;
                        <button
                            type="button"
                            className="btn btn-primary mb-3"
                            onClick={(e) => {
                                e.stopPropagation();
                                handleTaskModifier();
                            }}
                        >
                            close
                        </button>
                    </form>
                </div>
            </div>
        </Modal>
    );
}
