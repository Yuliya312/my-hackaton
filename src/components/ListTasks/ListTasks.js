import React from 'react';
import PropTypes from 'prop-types';
import { NewTask } from '../NewTask/NewTask';

export class ListTasks extends React.Component {
  state = {
    tasks: this.props.listTasks,
  };

  addTask = (task) => {
    // console.log(task);

    const newTask = {
      ...task,
    };

    this.setState(prevState => ({
      tasks: [...prevState.tasks, newTask],
    }));
  };
  // console.log(state);

  render() {
    const { currentTask } = this.props;
    // const { tasks } = this.state;
    // console.log(tasks);
    // console.log(this.state);
    // console.log(this.props);

    return (
      <>
        <NewTask
          tasks={this.state.tasks}
          addTasks={this.addTasks}
        />
        <div>
          {
            currentTask
              ? this.props.currentTask.map(item => (
                <p>{item.value}</p>
              ))
              : null
          }
        </div>
      </>
    );
  }
}

ListTasks.defaultProps = {
  currentTask: null,
};

ListTasks.propTypes = {
  currentTask: PropTypes.arrayOf(PropTypes.shape()),
  listTasks: PropTypes.shape().isRequired,
};
