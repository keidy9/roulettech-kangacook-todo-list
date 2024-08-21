import { useState, useEffect } from 'react';
import TodoListItem from './TodoListItem';

const TodoList = () => {
  return (
    <>
      <header>
        <h1>Todo List</h1>
        <p>Add tasks to complete!</p>
      </header>
      <div className="list-container">
        <TodoListItem />
      </div>
    </>
  );
};

export default TodoList;
