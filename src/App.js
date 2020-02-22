import React from 'react';
import './App.scss';
import { Month } from './components/month/Month';
import { ButtonNextPrev } from './components/buttonNextPrev/ButtonNextPrev';
import { ListTasks } from './components/ListTasks/ListTasks';
import { ViewButtons } from './components/ViewButtons/ViewButtons';

const initialTasks = {
  2020: {

    Jan: {
      1: [
        {
          name: 'name of task Jan-2020-1',
          value: 'value of task Jan-2020-1',
        },
      ],
      5: [
        {
          name: 'name of task Jan-2020-2',
          value: 'value of task Jan-2020-2',
        },
      ],
    },

    Feb: {
      1: [
        {
          name: 'name of task Feb-2020-1',
          value: 'value of task Feb-2020-1',
        },
        {
          name: 'name of task Feb-2020-1-second',
          value: 'value of task Feb-2020-1-second',
        },
      ],
      2: [
        {
          name: 'name of task Feb-2020-2',
          value: 'value of task Feb-2020-2',
        },
      ],
    },

  },

  2021: {

    Jan: {
      1: [
        {
          name: 'name of task Jan-2018-1',
          value: 'value of task Jan-2018-1',
        },
      ],
      2: [
        {
          name: 'name of task Jan-2018-2',
          value: 'value of task Jan-2018-2',
        },
      ],
    },

    Feb: {
      1: [
        {
          name: 'name of task Feb-2018-1',
          value: 'value of task Feb-2018-1',
        },
      ],
      2: [
        {
          name: 'name of task Feb-2018-2',
          value: 'value of task Feb-2018-2',
        },
      ],
    },

  },
};

export class App extends React.Component {
  state = {
    listTasks: initialTasks,
    initialDate: new Date(),
    currentTask: null,
  };

  updateCurrentDate = (value) => {
    this.setState({
      initialDate: value,
    });
  };

  showTasks = (value) => {
    this.setState({
      currentTask: value,
    });
  };

  render() {
    return (
      <div>
        <div className="app">
          <h1>Mate Hackaton</h1>
          <div className="calendar">
            <div className="calendar__main">
              <div className="navigation">
                <ButtonNextPrev
                  initialDate={this.state.initialDate}
                  updateCurrentDate={this.updateCurrentDate}
                />
                <ViewButtons />
              </div>
              <Month
                listTasks={this.state.listTasks}
                initialDate={this.state.initialDate}
                showTasks={this.showTasks}
              />
            </div>
            <div className="calendar__task-list task-list">
              <ListTasks
                listTasks={this.state.listTasks}
                initialTasks={this.state.initialTasks}
                currentTask={this.state.currentTask}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
