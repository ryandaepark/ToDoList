import React from 'react'
import TodoForm from './TodoForm'

const TodoList = () => {
  const [todos, setTodos] = ueState([]);

  const addTodo = todo => {
    if (!todo.text || /^\s*/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];
    
    setTodos(newTodos);
    console.log(...todos);
  };

  return (
    <div>
      <h1> What do you have planned today? </h1>
      <TodoForm onSubmit={addTodo} />
    </div>
  )
}

export default TodoList