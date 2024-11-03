import { useToDo } from "./to-do-hooks";
import ToDoItem from "./ToDoItem";

export default function ToDoList() {
    const {toDos} = useToDo();
    return (
        <ul className="todo-list">
            {toDos.map((todo) => (<ToDoItem key={todo.id} {...todo}/>))}
        </ul>
    );
}