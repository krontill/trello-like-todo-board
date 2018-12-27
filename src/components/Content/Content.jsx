import React from 'react';
import './content.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { increment, decrement } from '../../actions/counter';

const content = props => {
  const { count, handleIncrement, handleDecrement } = props;
  return (
    <div className="content">
      <p>
        Count:
        {count}
      </p>
      <p>
        <button type="button" onClick={handleIncrement}>
          Increment
        </button>
      </p>
      <p>
        <button type="button" onClick={handleDecrement}>
          Decrementing
        </button>
      </p>
    </div>
  );
};

content.propTypes = {
  count: PropTypes.number.isRequired,
  handleIncrement: PropTypes.func.isRequired,
  handleDecrement: PropTypes.func.isRequired,
};

const mapStateToProps = ({ counter }) => ({
  count: counter.count,
});

const mapDispatchToProps = dispatch => ({
  handleIncrement: () => dispatch(increment()),
  handleDecrement: () => dispatch(decrement()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(content);
