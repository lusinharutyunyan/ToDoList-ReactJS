import React from "react";
import reactDom from "react-dom";
import "./TodoList.css"

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='container'>
        <h1>Todo List</h1>
        <div className="todos">
        <input type='text' placeholder='Type a Todo'></input>
        <button className="addBtn">Add</button>
        </div>
      </div>
    );
  }
}
