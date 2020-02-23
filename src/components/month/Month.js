import React from 'react';
import './Month.scss';
import PropTypes from 'prop-types';

export class Month extends React.PureComponent {
  generateMonth = (date) => {
    const currentDate = date;
    const nextMonth = new Date(date.getFullYear(), date.getMonth() + 1);

    currentDate.setDate(1);
    const startDay = currentDate.getDay() ? currentDate.getDay() : 7;

    nextMonth.setDate(-0);
    const daysInMonth = nextMonth.getDate();

    return {
      currentDate,
      nextMonth,
      startDay,
      daysInMonth,
    };
  };

  showCurrentTask = (tasks, date) => {
    if (tasks) {
      this.props.showTasks(tasks);
    } else {
      this.props.showTasks(null);
    }

    const currentDate = new Date(this.props.initialDate);

    currentDate.setDate(date);
    this.props.updateInitialDate(currentDate);
  };

  updateCurrentDate = (date) => {
    const currentDate = new Date(this.props.initialDate);

    currentDate.setDate(date);
    const test = new Date(currentDate);

    this.props.updateInitialDate(test);
  };

  render() {
    const { listTasks, initialDate, currentDay } = this.props;

    const canlendarBasicInform = this.generateMonth(initialDate);
    const blanks = [];

    for (let i = 1; i < canlendarBasicInform.startDay; i += 1) {
      blanks.push((
        ''
      ));
    }

    const filled = [];

    for (let i = 1; i <= canlendarBasicInform.daysInMonth; i += 1) {
      filled.push((
        i
      ));
    }

    const totalSorst = [...blanks, ...filled];

    const list = [];

    totalSorst.forEach((day, index) => {
      if (index % 7 === 0) {
        const trObj = [];

        for (let i = 0; i < 7; i += 1) {
          trObj[i] = totalSorst[index + i];
        }

        list.push(trObj);
      }
    });

    const year = initialDate.getFullYear();
    const month = initialDate.toDateString().split(' ')[1];
    // console.log(this.props.dayToday)

    return (
      <div className="calendar__month">
        <h2 className="calendar__title">{currentDay.toLocaleString()}</h2>
        <div>
          <div>
            <div className="calendar__title-week">
              <div className="calendar__weekday">ПН</div>
              <div className="calendar__weekday">ВТ</div>
              <div className="calendar__weekday">СР</div>
              <div className="calendar__weekday">ЧТ</div>
              <div className="calendar__weekday">ПТ</div>
              <div className="calendar__weekday">СБ</div>
              <div className="calendar__weekday">НД</div>
            </div>
          </div>

          <div>
            {
              list.map((trItem, index) => {
                return (
                  <div className="calendar__week">
                    {
                      trItem.map((tdItem) => {
                        return (
                          <button // Replace on td
                            className="calendar__day"
                            type="button"
                            onClick={
                              (event) => {
                                if (listTasks[year] && listTasks[year][month]) {
                                  this.showCurrentTask(
                                    listTasks[year][month][tdItem],
                                    tdItem,
                                  );
                                } else {
                                  this.updateCurrentDate(tdItem);
                                }
                              }
                            }
                          >
                            {tdItem}
                          </button>
                        );
                      })
                    }
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

Month.propTypes = {
  listTasks: PropTypes.shape({}).isRequired,
  initialDate: PropTypes.shape({
    getFullYear: PropTypes.func,
    toDateString: PropTypes.func,
  }).isRequired,
  showTasks: PropTypes.func.isRequired,
  updateInitialDate: PropTypes.func.isRequired,
  currentDay: PropTypes.shape().isRequired,
};
