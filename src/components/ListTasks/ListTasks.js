import React from 'react';
import PropTypes from 'prop-types';
import { NewTask } from '../NewTask/NewTask';

export class ListTasks extends React.Component {
  state = {
    listTasks: this.props.listTasks,
  };

  addTask = (task) => {
    const newTask = {
      ...task,
    };

    this.setState(prevState => ({
      tasks: [...prevState.tasks, newTask],
    }));
  };

  render() {
    const { listTasks } = this.props;
    const year = this.props.currentDay.getFullYear();
    const month = this.props.currentDay.toDateString().split(' ')[1];
    const day = this.props.currentDay.getDate();
    // console.log(listTasks[year][month][day])

    return (
      <>
        <NewTask
          listTasks={this.state.listTasks}
          addTasks={this.addTask}
          initialDate={this.props.initialDate}
          currentDay={this.props.currentDay}
          addTasksInList={this.props.addTasksInList}
        />
        <div className="tasks-list">
          {
            listTasks[year] && listTasks[year][month] && listTasks[year][month][day]
              ? listTasks[year][month][day].map(item => (
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.value}</p>
                </div>
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
  listTasks: PropTypes.shape({}).isRequired,
};
