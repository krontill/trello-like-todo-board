import React from 'react';
import './content.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ListCards from '../ListCards';

const Content = props => {
  const { lists } = props;
  return (
    <div className="content">
      {lists.map(list => (
        <ListCards list={list} key={list.id} />
      ))}
    </div>
  );
};

Content.propTypes = {
  lists: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = ({ lists }) => ({
  lists,
});

export default connect(mapStateToProps)(Content);
