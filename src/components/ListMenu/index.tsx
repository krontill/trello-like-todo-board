import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

interface ListMenuProps {
  anchorEl: HTMLElement;
  open: boolean;
  handleClose: () => void;
  handleDeleteList: (id: string) => void;
  list: {
    id: string,
    title?: string,
    cards?: string[]
  }
}

const ListMenu = (props: ListMenuProps) => {
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

export default ListMenu;
