import { useState } from "react";

const TodoList = function ({ item, todos, updateListState }) {
  const [done, setDone] = useState(item.done);

  const completeTask = function () {
    item.done = true;
    setDone(true);
    updateListState(todos);
  };

  const deleteTask = function () {
    updateListState(todos.filter((todo) => todo !== item));
  };

  return (
    <div className="item">
      <div className="content">
        <div className="header">Task {item.id}</div>
        {item.task}
      </div>
      {done ? null : (
        <button onClick={completeTask} className="ui green button">
          <i className="check icon"></i>
        </button>
      )}
      {done ? null : (
        <button onClick={deleteTask} className="ui red button">
          <i className="close icon"></i>
        </button>
      )}
    </div>
  );
};

export default TodoList;
