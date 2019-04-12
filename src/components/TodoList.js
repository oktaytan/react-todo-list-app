import React, { Component } from 'react'
import TodoItem from './TodoItem';

class TodoList extends Component {

  render() {
    const { items, clearList, handleDelete, handleEdit } = this.props;
    const isDisable = items.length === 0 ? true : false;

    return (
      <ul className="list-group my-5">
        <h3 className='text-uppercase text-center text-info'>Todo List</h3>

        {
          items.map(item => {
            return (
              <TodoItem
                key={item.id}
                title={item.title}
                handleDelete={() => handleDelete(item.id)}
                handleEdit={() => handleEdit(item.id)}
              />
            )
          })
        }

        <button
          type='button'
          className='btn btn-block btn-danger text-uppercase mt-4'
          onClick={clearList}
          disabled={isDisable}
        >clear list</button>
      </ul>
    )
  }
}

export default TodoList
