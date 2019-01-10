import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ColorLens from '@material-ui/icons/ColorLens';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  BLUE,
  YELLOW,
  GREEN,
  ORANGE,
  RED,
  PURPLE,
} from '../../constants/colors';
import changeBg from '../../actions/setting';

const options = [
  { text: 'Blue', color: BLUE },
  { text: 'Yellow', color: YELLOW },
  { text: 'Green', color: GREEN },
  { text: 'Orange', color: ORANGE },
  { text: 'Red', color: RED },
  { text: 'Purple', color: PURPLE },
];

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
    const { handleChangeBg } = this.props;

    return (
      <div>
        <IconButton
          aria-label="Setting background"
          ria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup="true"
          onClick={e => this.handleClick(e)}
        >
          <ColorLens nativeColor="rgba(255, 255, 255, 0.3)" />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => this.handleClose()}
        >
          {options.map(option => (
            <MenuItem
              key={option.text}
              onClick={() => {
                handleChangeBg(option.text.toLowerCase());
                this.handleClose();
              }}
              style={{ background: option.color }}
            >
              {option.text}
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  }
}

SettingBg.propTypes = {
  handleChangeBg: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  handleChangeBg: bg => dispatch(changeBg(bg)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingBg);
