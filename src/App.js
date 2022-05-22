import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import TodoForm from './components/AddTodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import './App.css';


const App = () => {

  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(initialState);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className='container'>
      <div className='app-wrapper'>
        <div>
          <Header />
        </div>
        <div>
          <TodoForm 
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          />
        </div>
        <div>
          <TodoList todos={todos} setTodos={setTodos} />
        </div>
      </div>
  
    </div>
  );
}

export default App;
