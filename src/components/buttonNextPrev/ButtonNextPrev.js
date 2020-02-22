import React from 'react';
import PropTypes from 'prop-types';

export class ButtonNextPrev extends React.Component {
  goNext = () => {
    const { initialDate, updateCurrentDate } = this.props;
    const newDate = new Date(
      initialDate.getFullYear(),
      initialDate.getMonth() + 1,
    );

    updateCurrentDate(newDate);
  };

  goPrev= () => {
    const { initialDate, updateCurrentDate } = this.props;
    const newDate = new Date(
      initialDate.getFullYear(),
      initialDate.getMonth() - 1,
    );

    updateCurrentDate(newDate);
  };

  render() {
    return (
      <div ClassName="navigation__next-prev">
        <button type="button" onClick={this.goPrev}>Prev</button>
        <button type="button" onClick={this.goNext}>Next</button>
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
