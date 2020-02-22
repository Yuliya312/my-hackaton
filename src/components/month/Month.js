import React from 'react';
import './Month.scss';
import PropTypes from 'prop-types';

export class Month extends React.PureComponent {
  generateMonth = (year, month) => {
    const currentDate = new Date(year, month);
    const nextDate = new Date(year, month + 1);
    const startDay = currentDate.getDay() ? currentDate.getDay() : 7; // ?

    nextDate.setDate(-0);
    const days = nextDate.getDate();

    return {
      currentDate,
      nextDate,
      startDay,
      days,
    };
  };

  render() {
    const { listTasks } = this.props;
    // console.log(listTasks[2018])

    const canlendarBasicInform = this.generateMonth(2020, 0);
    const blanks = [];

    for (let i = 1; i < canlendarBasicInform.startDay; i += 1) {
      blanks.push((
        ''
      ));
    }

    const filled = [];

    for (let i = 1; i <= canlendarBasicInform.days; i += 1) {
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

    return (
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
                        <td>
                          {tdItem}
                          { listTasks[2020].jan[tdItem]
                            ? listTasks[2020].jan[tdItem]
                              .map(item => (
                                <div key={item.name}>item.value</div>
                              ))
                            : null
                          }
                        </td>
                      );
                    })
                  }
                </tr>
              );
            })
          }
        </tbody>
      </table>
    );
  }
}

Month.propTypes = {
  listTasks: PropTypes.shape({}).isRequired,
};
