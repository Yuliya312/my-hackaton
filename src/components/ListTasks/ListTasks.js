import React from 'react';
import PropTypes from 'prop-types';

export class ListTasks extends React.Component {
  state = {
    // currentTask: this.props.currentTask, // Unimportant
  };

  render() {
    const { currentTask } = this.props;

    return (
      <div>
        {
          currentTask
            ? this.props.currentTask.map(item => (
              <p>{item.value}</p>
            ))
            : null
        }
      </div>
    );
  }
}

ListTasks.defaultProps = {
  currentTask: null,
};

ListTasks.propTypes = {
  currentTask: PropTypes.arrayOf(PropTypes.shape()),
};
