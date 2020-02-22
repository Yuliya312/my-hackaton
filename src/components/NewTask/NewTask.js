import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './NewTask.scss';

export class NewTask extends Component {
  state = {
    name: '',
    value: '',
  };

  changeHandler = (event) => {
    const { name, value } = event.target;

    if (name === 'title') {
      this.setState({
        name: value,
      });
    } else if (name === 'description') {
      this.setState({
        value: value,
      });
    }

  };

  handleSubmit = (event) => {
    event.preventDefault();
    const year = this.props.currentDay.getFullYear();
    const month = this.props.currentDay.toDateString().split(' ')[1];
    const day = this.props.currentDay.getDate();

    let newTask = this.props.listTasks[year][month][day];
    if (newTask) {
      newTask.push({
        name: this.state.name,
        value: this.state.value,
      });
    } else {
      newTask = [];
      newTask.push({
        name: this.state.name,
        value: this.state.value,
      });
    }
    this.props.addTasksInList(year, month, day, newTask);

     this.setState({
       name: '',
       value: '',
     })
  };

  render() {
    return (
      <form
        name="addTask"
        className="form"
        onSubmit={this.handleSubmit}
      >
        <label htmlFor="taskTitle">
          Title:
          <input
            type="text"
            name="title"
            id="taskTitle"
            className="form__input"
            placeholder="task title"
            onChange={this.changeHandler}
            value={this.state.name}
          />
        </label>
        <label htmlFor="taskDescription">
          Description:
          <textarea
            type="text"
            name="description"
            id="taskDescription"
            className="form__input"
            placeholder="task description"
            rows="5"
            cols="30"
            onChange={this.changeHandler}
            value={this.state.value}
          />
        </label>
        <button type="submit" className="form__btn">Add task</button>
      </form>
    );
  }
}

NewTask.propTypes = {
  // tasks: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     title: PropTypes.string.isRequired,
  //   }).isRequired,
  // ).isRequired,
  addTask: PropTypes.func.isRequired,
};
