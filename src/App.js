import React from 'react';
import './App.scss';
import { Month } from './components/month/Month';

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
  };

  render() {
    return (
      <div className="app">
        <h1>Mate Hackaton</h1>
        <Month listTasks={this.state.listTasks} />
      </div>
    );
  }
}
