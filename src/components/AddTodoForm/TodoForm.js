import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const TodoForm = ({input, setInput, todos, setTodos}) => {
  
    const onInputChange = (event) => {
       setInput(event.target.value);
    };

    const onTodoFormSubmit = (event) => {
       event.preventDefault();
       setTodos([...todos, {id: uuidv4(), title: input, completed: false }]);
       setInput("");
    }
  
    return (
     <form onSubmit={onTodoFormSubmit}>
         <input 
         type="text" 
         placeholder='Add new todo' 
         className='task-input' 
         value={input} 
         required
         onChange={onInputChange}
         />

         <button className='button-add' type='submit'>
             Add
         </button>
     </form>
  )
}

export default TodoForm;