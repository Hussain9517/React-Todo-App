import React, {useState, useEffect} from 'react';
import "./App.css";
import Header from './components/Header';
import Form from './components/form';
import Todolist from './components/todolist';
import 'bootstrap/dist/css/bootstrap.css';


function App(){
    const initialState = JSON.parse(localStorage.getItem("todos")) || [];
    const [input,setInput] = useState("");
    const [todos, setTodos] = useState(initialState);
    const [editTodo, setEditTodo] = useState(null);

    useEffect(() => {
        localStorage.setItem("todos",JSON.stringify(todos));
    }, [todos]);
    return (
        <div className='container-fluid'>
          <div className='container Container-margin'>
            <div>
            <Header/>
            </div>
            <div>
            <Form
            input = {input}
            setInput = {setInput}
            todos = {todos}
            setTodos = {setTodos}
            editTodo = {editTodo}
            setEditTodo = {setEditTodo}
            />
            </div>
            <div>
            <Todolist todos={todos} setTodos={setTodos} setEditTodo={setEditTodo}/>
            </div>
          </div>
        </div>


      
    )
}




export default App;