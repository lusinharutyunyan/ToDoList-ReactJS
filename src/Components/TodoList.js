import React from "react";
import reactDom from "react-dom";
import { isElement } from "react-dom/cjs/react-dom-test-utils.production.min";
import "./TodoList.css";

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: "",
      list: [],
    };
  }
  updateInput(key, value) {
    this.setState({ [key]: value });
  }
  addItem() {
    const item = {
      id: Math.random(),
      value: this.state.item.slice(),
    };
    const list = [...this.state.list];
    list.push(item);
    this.setState({ list, item: "" });
  }

  


  render() {
    return (
      <div>
        <h1>My To Do List</h1>
        <div className='container'>
          <div className='todoForm'>
            <input
              className='todoInput'
              placeholder='Type your to do here'
              type='text'
              value={this.state.item}
              onChange={(e) =>
                this.updateInput("item", e.target.value)
              }></input>
            <button
              className='addItem'
              onClick={() => this.addItem()}
              disabled={!this.state.item.length}>
              Add 
            </button>
            <ul>
              {this.state.list.map((item) => {
                return <li key={item.id}>{item.value}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
