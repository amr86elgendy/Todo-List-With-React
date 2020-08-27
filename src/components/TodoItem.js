/** @format */

import React, { Component } from "react";

export default class TodoItem extends Component {
  handleCheck = (e) => {
    
    const title = e.target.parentElement.parentElement.previousElementSibling;
    
    title.classList.toggle('check');
  }
  render() {
    const { title, handleDelete, handleEdit } = this.props;

    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
        <h6>{title}</h6>
        <div>
          <span className=" btn p-0 mx-2 text-success" onClick={handleEdit}>
            <i className="fas fa-pen"></i>
          </span>
          <span className=" btn p-0 mx-2 text-primary" onClick={this.handleCheck}>
            <i className="fas fa-check"></i>
          </span>
          <span className="btn p-0 mx-2 text-danger" onClick={handleDelete}>
            <i className="fas fa-trash"></i>
          </span>
        </div>
      </li>
    );
  }
}
