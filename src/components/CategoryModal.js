import { useState } from 'react'
import { Modal } from 'react-bootstrap'

export default function CategoryModal({ status, handleClose }) {

    const [category, setCategory] = useState(null)

    const handleForm = (e) => {
        e.preventDefault()
        fetch("http://localhost:9292/api/category/new", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({category: category}),
        })
            .then((response) => response.json()) 
            .then((new_category) => {
                console.log("new_category : ", new_category);
            });
        handleClose()
    }

    return (
        <Modal
            show={status}
            onHide={handleClose}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            // size="sm"
        >

            <div className="card">
                <div className="card-header">New Category</div>
                    <div className="card-body">
                        <form>
                            <div className="mb-3">
                                <label className="form-label">Category</label>
                                <input name="category" type="title" className="form-control" placeholder="Category" onChange={(se)=>{setCategory(se.target.value)}}/>
                            </div>

                            <button type="submit" className="btn btn-primary mb-3" onClick={handleForm}>Save</button>
                            &nbsp;
                            <button type="button" className="btn btn-primary mb-3" onClick={handleClose}>close</button>
                        </form>
                    </div>
            </div>

        </Modal>
    )
}
