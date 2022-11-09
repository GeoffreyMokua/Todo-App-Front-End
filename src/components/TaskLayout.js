import { useContext } from "react";
import { TasksProvider } from "../layout/Container.js";

export default function TaskLayout({itemComponent: ItemComponent}) {
    
    const { tasksList } = useContext(TasksProvider);
    
    return (
        tasksList.map( (todo) => (
            <ItemComponent 
                key={todo.id}
                todo={todo}
            />
        ))
    )
}
