import React from 'react';
import PropTypes from 'prop-types';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { connect } from 'react-redux';
import { deleteList } from '../../actions/list';

const ListMenu = props => {
  const { anchorEl, open, handleClose, listId } = props;
  const options = [
    {
      text: 'Delete',
      func: () => props.handleDeleteList(listId),
    },
  ];
  return (
    <Menu
      id="list-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={() => handleClose()}
    >
      {options.map(option => (
        <MenuItem
          key={option.text}
          onClick={() => {
            handleClose();
            option.func();
          }}
        >
          {option.text}
        </MenuItem>
      ))}
    </Menu>
  );
};

ListMenu.propTypes = {
  anchorEl: PropTypes.objectOf(PropTypes.object).isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  listId: PropTypes.string.isRequired,
  handleDeleteList: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  handleDeleteList: listId => dispatch(deleteList(listId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListMenu);
