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
          name: 'list of goods',
          value: 'potato, milk, bread',
        },
      ],
      5: [
        {
          name: 'call to mothter',
          value: 'she find new job',
        },
      ],
    },

    Feb: {
      1: [
        {
          name: 'watch the Witcher',
          value: 'I must watch this shit',
        },
        {
          name: 'watch Friends',
          value: 'the greatest comedy',
        },
      ],
      2: [
        {
          name: 'kill Malroy',
          value: 'some on mush die',
        },
      ],
    },

  },
};

export class App extends React.Component {
  state = {
    listTasks: initialTasks,
    initialDate: new Date(),
    currentDay: new Date(),
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

  updateInitialDate = (value) => {
    this.setState({
      currentDay: value,
    })
  };

  addTasksInList = (year, month, day, value) => {
    // console.log(year, month, day, value);
    this.setState(prevState => ({
      listTasks: {
        ...prevState.listTasks,
        [year]: {
          ...prevState.listTasks[year],
          [month]: {
            ...prevState.listTasks[year][month],
            [day]: value,
          }
        }
      }
    }))
  };

  render() {
    // console.log(this.state.listTasks);

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
                updateCurrentDate={this.updateCurrentDate}
                showTasks={this.showTasks}
              />
            </div>

            <Month
              listTasks={this.state.listTasks}
              updateInitialDate={this.updateInitialDate}
              initialDate={this.state.initialDate}
              showTasks={this.showTasks}
              currentDay={this.state.currentDay}
            />
          </div>
          <div className="calendar__task-list task-list">
            <ListTasks
              listTasks={this.state.listTasks}
              // currentTask={this.state.currentTask}
              initialDate={this.state.initialDate}
              currentDay={this.state.currentDay}
              addTasksInList={this.addTasksInList}
            />
          </div>
        </div>
      </div>
    );
  }
}
