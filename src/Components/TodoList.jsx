import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    setTodos([...todos, { text: newTodo, id: Date.now() }]);
    setNewTodo('');
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo)));
  };

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <div className='add-task'>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="New Todo"
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul className='task-list'>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} editTodo={editTodo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;