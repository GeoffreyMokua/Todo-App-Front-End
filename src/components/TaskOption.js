import { useContext, useState } from "react"
import TaskModal from "./TaskModal.js"
import CategoryModal from "./CategoryModal.js";
import { OptionContext } from "../services/OptionProvider.js"
import { ModalContext } from "../services/ModalProvider.js";

export default function TaskOption() {
    const currentOption = useContext(OptionContext);
    const {show, handleOpen, handleClose} = useContext(ModalContext);
    
    const [catModalStatus, setCatModalStatus] = useState(false)

        const catModalOpen = () => {
            setCatModalStatus(true);
        };
        const catModalClose = () => {
            setCatModalStatus(false);
        };

    return (
        <div className="task-options container-fluid d-flex justify-content-between px-5">
            <div className="fs-4 fw-bold text-secondary text-capitalize">
                {currentOption}
            </div>
            <div>
                <button
                    type="button"
                    className="btn btn-outline-dark text-success"
                    onClick={(e) => {
                        e.stopPropagation();
                        handleOpen();
                    }}
                >
                    <i className="fas  fa-plus"></i> &nbsp; Task
                </button>
                &nbsp;
                <button
                    type="button"
                    className="btn btn-outline-dark text-success"
                    onClick={(e) => {
                        e.stopPropagation();
                        catModalOpen();
                    }}
                >
                    <i className="fas fa-plus"></i> &nbsp; Category
                </button>
            </div>
            <TaskModal status={show} handleClose={handleClose} />
            <CategoryModal
                status={catModalStatus}
                handleClose={catModalClose}
            />
        </div>
    );
}

