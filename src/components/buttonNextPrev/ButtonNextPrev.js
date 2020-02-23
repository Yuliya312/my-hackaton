import React from 'react';
import PropTypes from 'prop-types';

export class ButtonNextPrev extends React.Component {
  goNext = () => {
    const { initialDate, updateCurrentDate } = this.props;
    const newDate = new Date(
      initialDate.getFullYear(),
      initialDate.getMonth() + 1,
    );
    const toogleOnTodayDay = newDate;
    toogleOnTodayDay.setDate(this.props.dayToday)

    updateCurrentDate(toogleOnTodayDay);
    this.props.updateInitialDate(toogleOnTodayDay);
  };

  goPrev= () => {
    const { initialDate, updateCurrentDate } = this.props;
    const newDate = new Date(
      initialDate.getFullYear(),
      initialDate.getMonth() - 1,
    );
    const toogleOnTodayDay = newDate;
    toogleOnTodayDay.setDate(this.props.dayToday)
    updateCurrentDate(toogleOnTodayDay);
    this.props.updateInitialDate(toogleOnTodayDay);

  };

  render() {
    return (
      <div className="navigation__next-prev">
        <button
          className="navigation__btn"
          type="button"
          onClick={this.goPrev}
        >
          Prev
        </button>
        <button
          className="navigation__btn"
          type="button"
          onClick={this.goNext}
        >
          Next
        </button>
      </div>
    );
  }
}

ButtonNextPrev.propTypes = {
  updateCurrentDate: PropTypes.func.isRequired,
  initialDate: PropTypes.shape({
    getFullYear: PropTypes.func,
    getMonth: PropTypes.func,
  }).isRequired,
};
