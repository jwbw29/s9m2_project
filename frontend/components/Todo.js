import React from "react";

export default class Todo extends React.Component {
  render() {
    return (
      <div onClick={this.props.toggleCompleted(this.props.todo.id)} id="todo">
        {this.props.todo.name} {this.props.todo.completed ? " ✅" : ""}
      </div>
    );
  }
}
