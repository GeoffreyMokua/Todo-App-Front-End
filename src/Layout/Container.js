import React, { useState, useEffect, useContext, createContext } from "react";
import { endPointContext } from "../services/OptionProvider.js";
export const TasksProvider = createContext();

export default function Container({children}) {
    const url = useContext(endPointContext);

    const [tasksList, setTasksList] = useState([]);

    const addTask = (task) => {
        const taskExist = tasksList.find((item) => item.id === task.id);
        if (!taskExist) {
            setTasksList([...tasksList, task]);
        }
    };

    const removeTask = (task) => {
        const taskExist = tasksList.find((item) => item.id === task.id);
        if (taskExist) {
            setTasksList(tasksList.filter((item) => item.id !== task.id));
        }
    };

    useEffect( () =>{
        fetch(`http://localhost:9292/api${url}`)
            .then((res) => res.json())
            .then((todos) => {
                console.log("todos list: ", todos);
                setTasksList(todos);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [url] )

    return (
        <div className="app-container container col-xs-12 col-sm-12 col-md-10 col-xl-10 px-2 py-2">
            <TasksProvider.Provider value={{tasksList, addTask, removeTask}}>
                {children}
            </TasksProvider.Provider>

        </div>
    );
}