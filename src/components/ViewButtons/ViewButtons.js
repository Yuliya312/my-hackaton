import React from 'react';
// import PropTypes from 'prop-types';

export class ViewButtons extends React.Component {
  // goNext = () => {
  //   const { initialDate, updateCurrentDate } = this.props;
  //   const newDate = new Date(
  //     initialDate.getFullYear(),
  //     initialDate.getMonth() + 1,
  //   );

  //   updateCurrentDate(newDate);
  // };

  // goPrev= () => {
  //   const { initialDate, updateCurrentDate } = this.props;
  //   const newDate = new Date(
  //     initialDate.getFullYear(),
  //     initialDate.getMonth() - 1,
  //   );

  // updateCurrentDate(newDate);
  // };

  render() {
    return (
      <div className="navigation__view-buttons">
        <button
          className="navigation__view-btn"
          type="button"
          onClick={this.goPrev}
        >
          Year
        </button>
        <button
          className="navigation__view-btn"
          type="button"
          onClick={this.goNext}
        >
          Month
        </button>
        <button
          className="navigation__view-btn"
          type="button"
          onClick={this.goNext}
        >
          Day
        </button>
      </div>
    );
  }
}

// ButtonNextPrev.propTypes = {
//   updateCurrentDate: PropTypes.func.isRequired,
//   initialDate: PropTypes.shape({
//     getFullYear: PropTypes.func,
//     getMonth: PropTypes.func,
//   }).isRequired,
// };
