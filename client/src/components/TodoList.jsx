import { useState, useEffect } from 'react';
import TodoListItem from './TodoListItem';

const TodoList = () => {
  const [taskListArray, setTaskListArray] = useState([]);
  useEffect(() => {
    try {
      (async function () {
        const response = await fetch('http://127.0.0.1:8000/todos/api');
        if (!response.ok) {
          throw new Error(response.status);
        }
        const data = await response.json();
        console.log(data);
        setTaskListArray(data);
      })();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  return (
    <>
      <header>
        <h1>Todo List</h1>
        <p>Add tasks to complete!</p>
      </header>
      <div className="list-container">
        {taskListArray.map((task) => (
          <TodoListItem
            key={crypto.randomUUID()}
            taskName={task.task_name}
            taskDescription={task.task_description}
          />
        ))}
      </div>
    </>
  );
};

export default TodoList;
