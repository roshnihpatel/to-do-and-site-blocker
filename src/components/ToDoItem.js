import { MdCheckBoxOutlineBlank,  MdOutlineCheckBox,  } from 'react-icons/md';
import { RxCrossCircled } from "react-icons/rx";
import { useToDo } from './to-do-hooks';

export default function ToDoItem({
    id,
    title,
    completed
}) {
    const {toggleComplete, deleteToDo} = useToDo();
    return (
        <section className='todo'>
            <button className='todo__button todo__button--checkbox' onClick={() => toggleComplete(id, completed)}>
                {completed ? <MdOutlineCheckBox/> : <MdCheckBoxOutlineBlank/>}
            </button>
            <div className={`todo__title todo__title--${completed ? 'completed': 'incomplete'}`}>{title}</div>
            <button className='todo__button todo__button--delete' onClick={() => deleteToDo(id)}>
                <RxCrossCircled/>
            </button>
        </section>
    );
}