import React, { Component } from 'react';
import './Todo.css';
import  FaTrash from 'react-icons/lib/fa/trash'
import  FaCheckCircleO from 'react-icons/lib/fa/check-circle-o'
import FaCircleO from 'react-icons/lib/fa/circle-o'

class Todo extends Component {
  constructor(props) {
    super(props)
    this.handleDone = this.handleDone.bind(this)
    this.remove = this.remove.bind(this)
  }
  handleDone() {
    var index = parseInt(this.props.index);
    this.props.markHandleDone(index);
  }
  remove() {
    var index = parseInt(this.props.index);
    this.props.handleRemoveItem(index);
  }
  render() {
    var todoClass, todoIcon;
    if(this.props.item.done) {
       return (
        <li>
          <span className="done" onClick={this.handleDone}><FaCheckCircleO /></span>
          <span  className="done">{this.props.item.value}</span>
          <button onClick={this.remove} id="remove"><FaTrash /></button>
        </li>
      );
    } else {
      return (
        <li>
          <span className="undone" onClick={this.handleDone}><FaCircleO /></span>
          <span className="undone">{this.props.item.value}</span>
          <button onClick={this.remove} id="remove"><FaTrash /></button>
        </li>
      );
    }
    
  }
}

export default Todo;
