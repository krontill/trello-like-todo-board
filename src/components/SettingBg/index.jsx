import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ColorLens from '@material-ui/icons/ColorLens';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import classNames from 'classnames';
import {
  BLUE,
  YELLOW,
  GREEN,
  ORANGE,
  RED,
  PURPLE,
  LABELS,
} from '../../constants/colors';
import mount from './mount.jpeg';
import sea from './sea.jpeg';

const optionsImages = ['Mount', 'Sea'];

const style = () => ({
  item: {
    textShadow: '0 0 2px white',
    '&$item--mount, &$item--sea': {
      backgroundSize: 'cover',
      minWidth: '100px',
      width: '100%',
      height: '75px',
    },
  },
  'item--blue': {
    background: BLUE,
  },
  'item--yellow': {
    background: YELLOW,
  },
  'item--green': {
    background: GREEN,
  },
  'item--orange': {
    background: ORANGE,
  },
  'item--red': {
    background: RED,
  },
  'item--purple': {
    background: PURPLE,
  },
  'item--mount': {
    background: `url("${mount}") no-repeat`,
  },
  'item--sea': {
    background: `url("${sea}") no-repeat`,
  },
});

class SettingBg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
    };
  }

  handleClick(event) {
    this.setState({ anchorEl: event.currentTarget });
  }

  handleClose() {
    this.setState({ anchorEl: null });
  }

  render() {
    const { anchorEl } = this.state;
    const { handleChangeBg, classes } = this.props;

    const icon = (
      <IconButton
        aria-label="Setting background"
        ria-owns={anchorEl ? 'setting-menu' : undefined}
        aria-haspopup="true"
        onClick={e => this.handleClick(e)}
      >
        <ColorLens nativeColor="rgba(255, 255, 255, 0.3)" />
      </IconButton>
    );

    const classMenuItem = option =>
      classNames(classes.item, {
        [classes[`item--${option.toLowerCase()}`]]: true,
      });

    const options = [...LABELS, ...optionsImages];

    const menuItemTemplate = options.map(option => (
      <MenuItem
        key={option}
        onClick={() => {
          handleChangeBg(option.toLowerCase());
          this.handleClose();
        }}
        className={classMenuItem(option)}
      >
        {option}
      </MenuItem>
    ));

    return (
      <div>
        {icon}
        <Menu
          id="setting-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => this.handleClose()}
        >
          {menuItemTemplate}
        </Menu>
      </div>
    );
  }
}

SettingBg.propTypes = {
  handleChangeBg: PropTypes.func.isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(style)(SettingBg);
