import { createContext, useContext, useState } from "react";
import toDoData from '../data/to-do.json';
import { v4 } from "uuid";

const ToDoContext = createContext();

export const useToDo = () => useContext(ToDoContext);

export default function ToDoProvider({children}) {
    const [toDos, setToDos] = useState(toDoData);

    const toggleComplete = (id, completed) => setToDos(toDos.map(todo => todo.id == id? {...todo, completed:!completed} : todo));

    const deleteToDo = id => setToDos(toDos.filter(todo => todo.id != id));

    const addToDo = title => setToDos([
        ...toDos, {
        id: v4(),
        title: title,
        completed: false
    }]);


    return (
        <ToDoContext.Provider value={{toDos, toggleComplete, deleteToDo, addToDo}}>
            {children}
        </ToDoContext.Provider>
    );
}