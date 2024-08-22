const TodoListItem = ({ taskName, taskDescription }) => {
  return (
    <>
      <div className="task-container">
        <h2>{taskName}</h2>
        <p>{taskDescription}</p>
      </div>
    </>
  );
};

export default TodoListItem;
