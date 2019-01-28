import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import classNames from 'classnames';
import styles from './styles';

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
            key={label}
            className={classNames(labelClass, {
              [classes[`label--${label.toLowerCase()}`]]: true,
            })}
            onClick={() => this.handleClick()}
            onMouseOver={() => this.handleHover()}
            onFocus={() => this.handleHover()}
            onMouseLeave={() => this.handleLeave()}
            role="presentation"
          >
            {open && label}
          </span>
        ))}
      </div>
    );
  }
}

LabelsShort.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(LabelsShort);
