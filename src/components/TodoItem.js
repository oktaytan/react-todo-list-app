import React, { Component } from 'react'

class TodoItem extends Component {
  render() {
    const { title, handleDelete, handleEdit } = this.props;

    return (
      <li className="list-group-item d-flex justify-content-between my-2">
        <h5 className='text-capitalize'>{title}</h5>
        <div className='todo-icon'>
          <span className="mx-2 text-warning" onClick={handleEdit}>
            <i className="fas fa-pen"></i>
          </span>
          <span className="mx-2 text-danger" onClick={handleDelete}>
            <i className="fas fa-trash"></i>
          </span>
        </div>
      </li>
    )
  }
}

export default TodoItem
