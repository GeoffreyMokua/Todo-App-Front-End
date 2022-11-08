import { useContext } from "react";
import { endPointContext } from "../services/OptionProvider.js";

function TaskContiner({ children }) {
    const url = useContext(endPointContext);
    return url ? (
        <div className='task-container container-fluid d-flex justify-content-center flex-wrap py-2 px-2'>
            {children}
        </div>
    )
        : <></>
};
export default TaskContiner;