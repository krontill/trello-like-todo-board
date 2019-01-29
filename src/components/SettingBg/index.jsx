import React from 'react';
import Menu from '@material-ui/core/Menu';
import ColorLens from '@material-ui/icons/ColorLens';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import { LABELS } from '../../constants/colors';
import StyledMenuItem from './styles';

const optionsImages = ['Mount', 'Sea'];

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

    const icon = (
      <IconButton
        title="Setting background"
        aria-label="Setting background"
        ria-owns={anchorEl ? 'setting-menu' : undefined}
        aria-haspopup="true"
        onClick={e => this.handleClick(e)}
      >
        <ColorLens nativeColor="rgba(255, 255, 255, 0.3)" />
      </IconButton>
    );

    const options = [...LABELS, ...optionsImages];

    const menuItemTemplate = options.map(option => (
      <StyledMenuItem
        key={option}
        onClick={() => {
          handleChangeBg(option.toLowerCase());
          this.handleClose();
        }}
        background={option.toLowerCase()}
      >
        {option}
      </StyledMenuItem>
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
};

export default SettingBg;
