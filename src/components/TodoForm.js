import React, { Component } from "react";
import { connect } from "react-redux";
import { updateCurrent, saveTodo } from "../reducers/todo";

class TodoForm extends Component {
  handleInputChange = evt => {
    const val = evt.target.value;
    this.props.updateCurrent(val);
  };

  handleSubmit = evt => {
    evt.preventDefault();
    console.log("his.props.currentTodo",this.props.currentTodo)
    if (this.props.currentTodo !== "") {
      this.props.saveTodo(this.props.currentTodo);
    } else {
      alert("Please entry valid TODO ");
    }
  };

  render() {
    const { currentTodo } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          onChange={this.handleInputChange}
          value={currentTodo}
        />
        <input type="submit" value="Add"></input>
      </form>
    );
  }
}

export default connect(
  state => ({ currentTodo: state.todo.currentTodo }),
  { updateCurrent, saveTodo }
)(TodoForm);
