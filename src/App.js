/** @format */

import React, { Component } from "react";
//import { v4 as uuidv4 } from 'uuid';
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

class App extends Component {
  state = {
    items: [],
    id: 0,
    item: "",
    editItem: false,
  };
  handleChange = (e) => {
    this.setState({
      item: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { id: this.state.id, title: this.state.item };
    const updatedItems = [...this.state.items, newItem];
    const currentItems = Array.from(this.state.items, (item) => item.title );

    if (currentItems.includes(this.state.item)) {
      alert("This Item is Already Existed");
      return false;
    }
    this.setState({
      items: updatedItems,
      id: this.state.id + 1,
      item: "",
      editItem: false,
    });
  };
  handleDelete = (id) => {
    const newItems = this.state.items.filter((item) => item.id !== id);
    this.setState({
      items: newItems,
    });
  };
  handleEdit = (id) => {
    const newItems = this.state.items.filter((item) => item.id !== id);
    const currentItem = this.state.items.find((item) => item.id === id);
    this.setState({
      items: newItems,
      item: currentItem.title,
      editItem: true,
    });
  };
  clearList = () => {
    this.setState({
      items: [],
      id: 0,
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">todo input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
