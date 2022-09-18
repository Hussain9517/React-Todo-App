import React, {useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';
import 'bootstrap/dist/css/bootstrap.css';



function Form({input,setInput,todos,setTodos, editTodo, setEditTodo}) {
  const updadeTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) => 
        todo.id === id ? {title, id, completed} : todo
    )
    setTodos(newTodo);
    setEditTodo("");
  };
  useEffect(() => {
    if(editTodo){
        setInput(editTodo.title);
    }
    else
    {
        setInput("");
    }
  }, [setInput,editTodo]);
  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    if(!editTodo){
      setTodos([...todos, { id:uuidv4(), title: input, completed: false}])
      setInput("");
    }
    else
    {
        updadeTodo(input, editTodo.id, editTodo.completed)
    }
  };

  return (
    <form className='form' onSubmit={onFormSubmit}>
      <input type="text" placeholder="Enter your Task!" className='text-input form-control' value={input} required onChange={onInputChange}/>
      <button className='btn-add btn' type='submit'>Add Task</button>
    </form>
  )
}

export default Form
