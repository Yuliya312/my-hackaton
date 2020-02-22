import React from 'react';
import './App.scss';
import { Month } from './components/month/Month';
import { ButtonNextPrev } from './components/button/Button';

const initialTasks = {
  2020: {

    jan: {
      1: [
        {
          name: 'name of task jan-2020-1',
          value: 'value of task jan-2020-1',
        },
      ],
      5: [
        {
          name: 'name of task jan-2020-2',
          value: 'value of task jan-2020-2',
        },
      ],
    },

    feb: {
      1: [
        {
          name: 'name of task feb-2020-1',
          value: 'value of task feb-2020-1',
        },
      ],
      2: [
        {
          name: 'name of task feb-2020-2',
          value: 'value of task feb-2020-2',
        },
      ],
    },

  },

  2018: {

    jan: {
      1: [
        {
          name: 'name of task jan-2018-1',
          value: 'value of task jan-2018-1',
        },
      ],
      2: [
        {
          name: 'name of task jan-2018-2',
          value: 'value of task jan-2018-2',
        },
      ],
    },

    feb: {
      1: [
        {
          name: 'name of task feb-2018-1',
          value: 'value of task feb-2018-1',
        },
      ],
      2: [
        {
          name: 'name of task feb-2018-2',
          value: 'value of task feb-2018-2',
        },
      ],
    },

  },
};

export class App extends React.Component {
  state = {
    listTasks: initialTasks,
    initialDate: new Date(),
  };

  updateCurrentDate = (value) => {
    this.setState({
      initialDate: value,
    });
  };

  render() {
    return (
      <div className="app">
        <h1>Mate Hackaton</h1>
        <ButtonNextPrev
          initialDate={this.state.initialDate}
          updateCurrentDate={this.updateCurrentDate}
        />
        <Month
          listTasks={this.state.listTasks}
          initialDate={this.state.initialDate}
        />
      </div>
    );
  }
}
