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
        <h2>{initialDate.toLocaleString()}</h2>
        <table>
          <thead>
            <tr>
              <th>ПН</th>
              <th>ВТ</th>
              <th>СР</th>
              <th>ЧТ</th>
              <th>ПТ</th>
              <th>СБ</th>
              <th>НД</th>
            </tr>
          </thead>

          <tbody>
            {
              list.map((trItem, index) => {
                return (
                  <tr>
                    {
                      trItem.map((tdItem) => {
                        return (
                          <button // Replace on td
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
                  </tr>
                );
              })
            }
          </tbody>
        </table>
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
