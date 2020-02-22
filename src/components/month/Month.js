import React from 'react';
import './Month.scss';
import PropTypes from 'prop-types';

export class Month extends React.PureComponent {
  generateMonth = (date) => {
    const currentDate = date;
    const nextMonth = new Date(date.getFullYear(), date.getMonth() + 1);
    const startDay = currentDate.getDay() ? currentDate.getDay() : 7; // ?

    nextMonth.setDate(-0);
    const daysInMonth = nextMonth.getDate();

    return {
      currentDate,
      nextMonth,
      startDay,
      daysInMonth,
    };
  };

  showCurrentTask = (value) => {
    if (value) {
      this.props.showTasks(value);
      // console.log(value[0].name);
    } else {
      this.props.showTasks(null);
    }
  };

  render() {
    const { listTasks, initialDate } = this.props;
    // console.log(listTasks[2018])

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

    // console.log(list)
    const year = initialDate.getFullYear();
    const month = initialDate.toDateString().split(' ')[1];

    return (
      <div>
        <h2 className="calendar__title">{initialDate.toLocaleString()}</h2>
        <div>
          <div>
            <div className="WeekdayContainer">
              <div className="Weekday">ПН</div>
              <div className="Weekday">ВТ</div>
              <div className="Weekday">СР</div>
              <div className="Weekday">ЧТ</div>
              <div className="Weekday">ПТ</div>
              <div className="Weekday">СБ</div>
              <div className="Weekday">НД</div>
            </div>
          </div>

          <div>
            {
              list.map((trItem, index) => {
                return (
                  <div className="week">
                    {
                      trItem.map((tdItem) => {
                        return (
                          <button // Replace on td
                            className="day"
                            type="button"
                            onClick={
                              (event) => {
                                if (listTasks[year] && listTasks[year][month]) {
                                  this.showCurrentTask(
                                    listTasks[year][month][tdItem],
                                  );
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
};
