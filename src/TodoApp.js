import React, { Component } from 'react';
import './TodoApp.css';
import TodoForm from './TodoForm';
import Todo from './Todo';

let todoItems = [];
class TodoApp extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            todoItems: todoItems
        }; 
        
        this.handleAddItem = this.handleAddItem.bind(this)
        this.handleRemoveItem = this.handleRemoveItem.bind(this)
        this.markHandleDone = this.markHandleDone.bind(this)
        this.eachTodoItems = this.eachTodoItems.bind(this)
    }
    
    handleAddItem(newText) {
        todoItems.unshift({
            index: todoItems.length+1, 
            value: newText, 
            done: false
        });
        this.setState({todoItems: todoItems});
    }

    handleRemoveItem (itemIndex) {
        console.log('removing items at ', itemIndex);
        todoItems.splice(itemIndex, 1);
        this.setState({todoItems: todoItems});
    }

    markHandleDone (itemIndex) {
        let todo = todoItems[itemIndex];
        todoItems.splice(itemIndex, 1);
        todo.done = !todo.done;
        todo.done ? todoItems.push(todo) : todoItems.unshift(todo);
        this.setState({todoItems: todoItems});  
    }

    eachTodoItems(item, index) {
        return(
            <Todo key={index} item={item} index={index}
                  handleRemoveItem={this.handleRemoveItem}
                  markHandleDone={this.markHandleDone}>
            </Todo>
        )
    }

    render() {
        return(
            <div>
                <TodoForm handleAddItem={this.handleAddItem}/>
                <ul>
                     {todoItems.map(this.eachTodoItems)}
                </ul>
            </div>
        )
    }
}

export default TodoApp