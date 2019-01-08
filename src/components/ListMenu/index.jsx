import React from 'react';
import PropTypes from 'prop-types';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const options = ['Edit', 'Delete'];

const ListMenu = props => {
  const { anchorEl, open, handleClose } = props;
  return (
    <Menu
      id="list-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={() => handleClose()}
    >
      {options.map(option => (
        <MenuItem key={option} onClick={() => handleClose()}>
          {option}
        </MenuItem>
      ))}
    </Menu>
  );
};

ListMenu.propTypes = {
  anchorEl: PropTypes.objectOf(PropTypes.object).isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default ListMenu;
