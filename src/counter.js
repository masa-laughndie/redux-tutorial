import expect from "expect";
import { createStore } from "redux";
import React from "react";
import ReactDOM from "react-dom";
import "./avoiding-array-mutations";
import "./avoiding-object-mutations";
import "./writing-a-todo-list-reducer";
import "./index.css";

const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

expect(counter(0, { type: "INCREMENT" })).toEqual(1);
expect(counter(1, { type: "INCREMENT" })).toEqual(2);
expect(counter(2, { type: "DECREMENT" })).toEqual(1);
expect(counter(1, { type: "SOMETHING" })).toEqual(1);
console.log("all test passed!");

const store = createStore(counter);

function Counter({ value, onIncrement, onDecrement }) {
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </div>
  );
}

const render = () => {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => store.dispatch({ type: "INCREMENT" })}
      onDecrement={() => store.dispatch({ type: "DECREMENT" })}
    />,
    document.getElementById("root")
  );
};

store.subscribe(render);

render();
