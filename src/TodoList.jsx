import './TodoList.css';


import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
uuidv4();

export default function TodoList(){
    let [todos, setTodos] = useState([{task:"do something", id : uuidv4(), isDone:false}]);
    let [newTodo, setNewtodo]  = useState("");

    let addNewTodo = ()=>{
        setTodos([...todos, {task:newTodo, id:uuidv4(), isDone:false}]);
        setNewtodo("");
    }
    let updateTodoValue = (event)=>{
        setNewtodo(event.target.value);

    }

    let deleteTodo =(id)=>{
        setTodos(todos.filter((todo)=> todo.id!=id));
    }

    let markAllDone =()=>{

        setTodos(todos.map((todo)=>{
            return {...todo, isDone:true};
        
        }));

    }

    
    let markasDone =(id)=>{

        setTodos(todos.map((todo)=>{
            if(todo.id==id){
            return {...todo, isDone:true,};
            }else{
                return todo;
            }
        }));

    }

    return (
  <div className="todo-container">
    <div className="todo-input-group">
      <input
        placeholder="Add a task"
        value={newTodo}
        onChange={updateTodoValue}
      />
      <button onClick={addNewTodo}>Add</button>
    </div>

    <h2>Tasks To Do</h2>
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id}>
          <span className={todo.isDone ? "done" : ""}>{todo.task}</span>
          <div>
            <button className="btn-delete" onClick={() => deleteTodo(todo.id)}>
              Delete
            </button>
            <button className="btn-done" onClick={() => markasDone(todo.id)}>
              Mark Done
            </button>
          </div>
        </li>
      ))}
    </ul>

    <button className="btn-all-done" onClick={markAllDone}>
      Mark All as Done
    </button>
  </div>
);
}