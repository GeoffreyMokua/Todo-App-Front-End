import { useState, useContext } from "react";
import TaskModifier from "./TaskModifier.js";
import { TasksProvider } from "../layout/Container.js";

const usDateFormat =  (input) => {
    return new Date(input).toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });
}

export default function ToDoCard({todo}) {

    const { removeTask } = useContext(TasksProvider)
    const { title, content, updated_at } = todo || {};
    const [show, setShow] = useState(false);

    const handleOpen = () => {
        setShow(true);
    };
    const handleClose = () => {
        setShow(false);
    };
    const handleTodoCard = () => {
        handleOpen(true);
    };

    const handleDelete = () => {
        fetch(`http://localhost:9292/api/todo/${todo.id}`, { method: "DELETE" })
            .then((res) => res.json())
            .then((record) => {
                console.log(record);
            })
            .catch((err) => {
                console.error(err);
            });
            removeTask(todo)
    };

    return (
        <div
            className="card-deck w-1"
            onClick={(e) => {
                e.stopPropagation();
                handleTodoCard();
            }}
        >
            <div
                className="card m-2"
                // align-items-stretch
                style={{
                    minWidth: "250px",
                    maxWidth: "250px",
                    minHeight: "250px",
                    maxHeight: "250px",
                }}
            >
                <h4 className="card-header">{title}</h4>
                <div className="card-body">
                    <p className="card-text">{content}</p>
                </div>
                <div className="card-footer bg-transparent px-0">
                    <div className="d-flex justify-content-between m-0 p-0">
                        <div className="mx-2">
                            <i className="far fa-clock text-success"></i>&nbsp;
                            <small
                                data-bs-toggle="tooltip"
                                data-bs-placement="buttom"
                                title="Created At"
                            >
                                {usDateFormat(updated_at)}
                            </small>
                        </div>
                        <div className="mx-2 px-1">
                            {(() => {
                                const hasStatusProp =
                                    todo.hasOwnProperty("status");

                                if (hasStatusProp) {
                                    if (todo.status.status === "In Progress") {
                                        return (
                                            <i
                                                className="fa fa-spinner fa-pulse text-success mr-2"
                                                data-bs-toggle="tooltip"
                                                data-bs-placement="buttom"
                                                title="Status: In Progress"
                                            ></i>
                                        );
                                    } else {
                                        return (
                                            <i
                                                className="fa fa-check-double text-success"
                                                data-bs-toggle="tooltip"
                                                data-bs-placement="buttom"
                                                title="Status: Completed"
                                            ></i>
                                        );
                                    }
                                }
                            })()}
                            &nbsp;&nbsp;
                            <i
                                className="fas fa-edit text-success"
                                data-bs-toggle="tooltip"
                                data-bs-placement="buttom"
                                title="Update Todo"
                                onClick={handleOpen}
                            ></i>
                            &nbsp; &nbsp;
                            <i
                                className="fas fa-trash-alt text-success"
                                data-bs-toggle="tooltip"
                                data-bs-placement="buttom"
                                title="Delete Todo"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleDelete();
                                }}
                            ></i>
                        </div>
                    </div>
                </div>
            </div>
            {show && (
                <TaskModifier
                    todo={todo}
                    show={show}
                    handleClose={handleClose}
                />
            )}

            
        </div>
    );
}
