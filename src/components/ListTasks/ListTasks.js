import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import { NewTask } from '../NewTask/NewTask';

import './ListTasks.scss';

export class ListTasks extends React.Component {
  state = {
    listTasks: this.props.listTasks,
  };

  addTask = (task) => {
    const newTask = {
      ...task,
      id: v4(),
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
            listTasks[year]
            && listTasks[year][month]
            && listTasks[year][month][day]
              ? listTasks[year][month][day].map(item => (
                <div className="tasks-list__task task" key={item.id}>
                  <h3 className="task__title">{item.name}</h3>
                  <p className="task__text">{item.value}</p>
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
  currentDay: PropTypes.shape().isRequired,
  initialDate: PropTypes.shape().isRequired,
  listTasks: PropTypes.shape({}).isRequired,
  addTasksInList: PropTypes.func.isRequired,
};
