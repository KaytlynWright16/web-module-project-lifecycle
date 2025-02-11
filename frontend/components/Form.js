import React from 'react'

export default class Form extends React.Component {
  render() {
    return (
    <form id="todoForm" onSubmit={this.props.onTodoSubmit}>
    <input value={this.props.todoNameInput} onChange={this.props.onNameChange} type="text" placeholder="Type todo"></input>
    <input type="submit"></input>
    <button onClick={this.props.toggleDisplayCompleted}>{this.props.displayCompleted ? 'Hide': 'Show'} Completed</button>
  </form>
  )}
}
