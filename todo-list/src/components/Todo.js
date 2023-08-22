import React, { useState } from 'react'
import TodoForm from './TodoForm';
import {RiCloseCircleLine, RiFacebookCircleFill} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'

const Todo = ({todos, completeTodo, removeTodo, updateTodo}) => {
  const [edit, setEdit] = useState({
    id: null, 
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  }

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  // 1st div: it sets the new css (strikethrough + dull) if bool isCOmplete changes
  // 2nd div: onClick for text object then call completeTodo from TodoList 
  // 
  return todos.map((todo, index) => (
    <div
      className = {todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key = {index}
    >
      <div key = {todo.id} onClick = {() => completeTodo(todo.id)}> 
        {todo.text}
      </div>

      <div className = "icons">
        <RiCloseCircleLine 
            onClick = {() => removeTodo(todo.id)}
            className = 'delete-icon'
        />

        <TiEdit 
          onClick = {() => setEdit({ id: todo.id, value: todo.text})}
          className = 'edit-icon'
        />

      </div>
    </div>
  ));
}

export default Todo