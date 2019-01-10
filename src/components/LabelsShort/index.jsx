import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import classNames from 'classnames';
import {
  BLUE,
  BLUE_HOVER,
  YELLOW,
  YELLOW_HOVER,
  GREEN,
  GREEN_HOVER,
  ORANGE,
  ORANGE_HOVER,
  RED,
  RED_HOVER,
  PURPLE,
  PURPLE_HOVER,
} from '../../constants/colors';

const styles = () => ({
  labels: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '16px 16px 0 16px',
  },
  label: {
    height: '8px',
    margin: '0 4px 4px 0',
    width: '40px',
    padding: '0',
    borderRadius: '4px',
    flexShrink: 0,
    transition: 'background .1s',
  },
  'label--yellow': {
    background: YELLOW,
    '&:hover, &$labelHover': {
      background: YELLOW_HOVER,
    },
  },
  'label--green': {
    background: GREEN,
    '&:hover, &$labelHover': {
      background: GREEN_HOVER,
    },
  },
  'label--orange': {
    background: ORANGE,
    '&:hover, &$labelHover': {
      background: ORANGE_HOVER,
    },
  },
  'label--red': {
    background: RED,
    '&:hover, &$labelHover': {
      background: RED_HOVER,
    },
  },
  'label--purple': {
    background: PURPLE,
    '&:hover, &$labelHover': {
      background: PURPLE_HOVER,
    },
  },
  'label--blue': {
    background: BLUE,
    '&:hover, &$labelHover': {
      background: BLUE_HOVER,
    },
  },
  labelHover: {},
  labelOpen: {
    height: '16px',
    padding: '0 8px',
    minWidth: '40px',
    maxWidth: '198px',
    width: 'auto',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    fontSize: '0.75rem',
    color: '#fff',
    lineHeight: '16px',
  },
});

class LabelsShort extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false, hover: false };
  }

  handleClick() {
    const { open } = this.state;
    this.setState({ open: !open });
  }

  handleHover() {
    this.setState({ hover: true });
  }

  handleLeave() {
    this.setState({ hover: false });
  }

  render() {
    const { classes, labels } = this.props;
    const { open, hover } = this.state;

    const labelClass = classNames({
      [classes.label]: true,
      [classes.labelOpen]: open,
      [classes.labelHover]: hover,
    });

    return (
      <div className={classes.labels}>
        {labels.map(label => (
          <span
            key={label.color + label.name}
            className={classNames(labelClass, {
              [classes[`label--${label.color}`]]: true,
            })}
            onClick={() => this.handleClick()}
            onMouseOver={() => this.handleHover()}
            onFocus={() => this.handleHover()}
            onMouseLeave={() => this.handleLeave()}
            role="presentation"
          >
            {open && label.name}
          </span>
        ))}
      </div>
    );
  }
}

LabelsShort.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  labels: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default withStyles(styles)(LabelsShort);
