import TodoList from "./components/TodoList";
import { useState } from "react";

const App = function () {
  const todos = [
    { id: 1, task: "Do exercise", done: false },
    { id: 2, task: "Water the flower", done: true },
    { id: 3, task: "Water the flower", done: false },
    { id: 4, task: "Water the flower", done: false },
    { id: 5, task: "Water the flower", done: false },
    { id: 6, task: "Water the flower", done: false },
    { id: 7, task: "Water the flower", done: false },
  ];

  const [listState, setListState] = useState([...todos]);
  const updateListState = function (todoLists) {
    setListState([...todoLists]);
  };

  return (
    <div className="ui two column doubling stackable grid container">
      <div className="column">
        <h1>Todo-list</h1>
        <div className="ui inverted segment">
          <div className="ui inverted relaxed divided list">
            {listState
              .filter((item) => !item.done)
              .map((item) => (
                <TodoList
                  key={item.id}
                  item={item}
                  updateListState={updateListState}
                  todos={listState}
                />
              ))}
          </div>
        </div>
      </div>
      <div className="column">
        <h1>Completed</h1>
        <div className="ui inverted segment">
          <div className="ui inverted relaxed divided list">
            {listState
              .filter((item) => item.done)
              .map((item) => (
                <TodoList key={item.id} item={item} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
