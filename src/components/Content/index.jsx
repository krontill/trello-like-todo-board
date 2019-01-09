import React from 'react';
import './content.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ListCards from '../ListCards';
import { editList } from '../../actions/list';

const Content = props => {
  const { lists, handleEditList } = props;
  return (
    <div className="content">
      {lists.map(list => (
        <ListCards list={list} key={list.id} handleEditList={handleEditList} />
      ))}
    </div>
  );
};

Content.propTypes = {
  lists: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleEditList: PropTypes.func.isRequired,
};

const mapStateToProps = ({ lists }) => ({
  lists,
});

const mapDispatchToProps = dispatch => ({
  handleEditList: (id, newTitle) => dispatch(editList(id, newTitle)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);
