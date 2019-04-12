import React, { Component } from 'react'

class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props;

    return (
      <div className='card card-body my-3'>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-info text-white">
                <i className="fas fa-book"></i>
              </div>
            </div>
            <input
              type="text"
              className='form-control'
              placeholder='add a todo item'
              value={item}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className={
              editItem
                ? 'btn btn-block btn-success mt-3 text-uppercase'
                : 'btn btn-block btn-info mt-3 text-uppercase'
            }
          >
            {editItem ? 'edit item' : 'add item'}
          </button>
        </form>
      </div>
    )
  }
}

export default TodoInput
