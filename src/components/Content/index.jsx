import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import ListCards from '../ListCards';
import { editList } from '../../actions/list';
import { showModal } from '../../actions/modal';

const styles = () => ({
  content: {
    flex: '1 0 100%',
    padding: '4px',
    display: 'flex',
    alignItems: 'flex-start',
    overflowX: 'auto',
  },
});

const Content = props => {
  const { lists, handleEditList, handleShowModal, classes } = props;

  return (
    <div className={classes.content}>
      {lists.map(list => (
        <ListCards
          list={list}
          key={list.id}
          handleEditList={handleEditList}
          handleShowModal={handleShowModal}
        />
      ))}
    </div>
  );
};

Content.propTypes = {
  lists: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleEditList: PropTypes.func.isRequired,
  handleShowModal: PropTypes.func.isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

const mapStateToProps = ({ lists }) => ({
  lists,
});

const mapDispatchToProps = dispatch => ({
  handleEditList: (id, newTitle) => dispatch(editList(id, newTitle)),
  handleShowModal: (modalType, modalProps) =>
    dispatch(showModal(modalType, modalProps)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Content));
