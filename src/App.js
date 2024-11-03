import './App.css';
import ToDoList from './components/ToDoList';
import AddToDo from './components/AddToDo';

function App() {
  return (
    <div className="App">
      <h1 className='App__title'>To-Do List</h1>
      <AddToDo/>
      <ToDoList/>
    </div>
  );
}

export default App;
