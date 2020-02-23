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
          id: '202011',
          name: 'list of goods',
          value: 'potato, milk, bread',
        },
      ],
      5: [
        {
          id: '202015',
          name: 'call to mothter',
          value: 'she find new job',
        },
      ],
      23: [
        {
          id: '2020123',
          name: 'Test',
          value: 'try to work',
        },
      ],
    },

    Feb: {
      1: [
        {
          id: '202021',
          name: 'watch the Witcher',
          value: 'I must watch this shit',
        },
        {
          id: '2020212',
          name: 'watch Friends',
          value: 'the greatest comedy',
        },
      ],
      2: [
        {
          id: '202022',
          name: 'kill Malroy',
          value: 'some on mush die',
        },
      ],
      23: [
        {
          id: '2020223',
          name: 'Test-feb',
          value: 'try to work-feb',
        },
      ],
    },
    Mar: {
      1: [
        {
          id: '202031',
          name: 'watch the Witcher',
          value: 'I must watch this shit',
        },
        {
          id: '202021/2',
          name: 'watch Friends',
          value: 'the greatest comedy',
        },
      ],
      2: [
        {
          id: '202022',
          name: 'kill Malroy',
          value: 'some on mush die',
        },
      ],
      23: [
        {
          id: '2020223',
          name: 'Test-feb',
          value: 'try to work-feb',
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
    dayToday: () => {
      const today = new Date();

      return today.getDate();
    },
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
    });
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
          },
        },
      },
    }));
  };

  render() {
    return (
      <div>
        <div className="app">
          <h1>Mate Hackaton</h1>
          <div className="calendar">
            <div className="calendar__main">
              <div className="calendar__navigation navigation">
                <ButtonNextPrev
                  initialDate={this.state.initialDate}
                  updateCurrentDate={this.updateCurrentDate}
                  updateInitialDate={this.updateInitialDate}
                  showTasks={this.showTasks}
                  dayToday={this.state.dayToday()}

                />
                <ViewButtons />
              </div>
              <Month
                listTasks={this.state.listTasks}
                updateInitialDate={this.updateInitialDate}
                updateCurrentDate={this.updateCurrentDate}
                initialDate={this.state.initialDate}
                showTasks={this.showTasks}
                currentDay={this.state.currentDay}
                dayToday={this.state.dayToday()}
              />
            </div>
            <div className="calendar__add-task-form">
              <ListTasks
                listTasks={this.state.listTasks}
                initialDate={this.state.initialDate}
                currentDay={this.state.currentDay}
                addTasksInList={this.addTasksInList}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
