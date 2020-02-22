import React from 'react';

export class Month extends React.PureComponent {
  // generateMonth = (year, month) => {
  //   const currentDate = new Date(year, month);
  //   const nextDate = new Date(year, month + 1);
  //
  //   let startDay = currentDate.getDay() ? currentDate.getDay() : 7; // ?
  //
  //   nextDate.setDate(-0);
  //
  //   const days = nextDate.getDate();
  //
  //   const tdList = [];
  //
  //   for (let i = 1; i <= 7; i += 1) {
  //     tdList.push((
  //       <tr>It is TR</tr>
  //     ));
  //   }
  //
  //   // console.log(currentDate, nextDate, days);
  //   return tdList;
  // };

  render() {
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
            this.generateMonth(2020, 0)
          }
        </tbody>
      </table>
    );
  }
}
