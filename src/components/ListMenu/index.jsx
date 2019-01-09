import React from 'react';
import PropTypes from 'prop-types';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { connect } from 'react-redux';
import { deleteList } from '../../actions/list';

const ListMenu = props => {
  const { anchorEl, open, handleClose, list, handleDeleteList } = props;
  const options = [
    {
      text: 'Delete',
      func: () => handleDeleteList(list.id),
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
            option.func();
            handleClose();
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
  list: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    cards: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
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
