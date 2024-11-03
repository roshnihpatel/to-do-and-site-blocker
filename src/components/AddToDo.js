import { useState } from "react";
import { useToDo } from "./to-do-hooks";

export default function AddToDo() {
    const { addToDo } = useToDo();

    const [title, setTitle] = useState("");
    
    const submit = e => {
        e.preventDefault();
        addToDo(title);
        setTitle("");
    }
    
    return (
        <form className="form" onSubmit={submit}>
            <input className="form__input" value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder="add new to-do..." required/>
            <button className="form__button" >add</button>
        </form>
    );
}