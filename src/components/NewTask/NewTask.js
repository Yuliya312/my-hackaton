import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class NewTask extends Component {
  state = {
    // id: 0,
    title: '',
    description: '',
    inputError: false,
  };

  changeHandler = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
      inputError: false,
    });
    // console.log(this.state);
    // console.log(this.props);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { title, description } = this.state;
    let error = false;

    this.setState({

    });

    if (!error) {
      this.setState({
        title: '',
        description: '',

      });

      this.props.addTask({
        title,
        description,
      });
      console.log(this.state);
    }
  }

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
            // value={title}
            onChange={this.changeHandler}
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
            // value={title}
            onChange={this.changeHandler}
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
