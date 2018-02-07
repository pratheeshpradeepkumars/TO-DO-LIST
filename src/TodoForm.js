import React, { Component } from 'react';
import './TodoForm.css';
import  FaPlus from 'react-icons/lib/fa/plus'

class TodoForm extends Component {
    constructor(props) {
        super(props) 

        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        var input = this._newText
        input.focus()
    }

    onSubmit(event) {
        event.preventDefault()
        var newItemValue = this._newText.value
        if(newItemValue) {
            this.props.handleAddItem(newItemValue);
            this.refs.form.reset();
        }
    }

    render() {
        return(
            <form ref="form" onSubmit={this.onSubmit}>
                <input ref={input => this._newText = input} type="text" placeholder= "Add New To-do" />
                <button id="add"><FaPlus /></button>   
            </form>
        )
    }
}

export default TodoForm