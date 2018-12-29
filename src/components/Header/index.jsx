import React from 'react';
import './header.css';
import IconButton from '@material-ui/core/IconButton';
import AddBox from '@material-ui/icons/AddBox';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Logo from '../Logo';
import { addList } from '../../actions/list';

const Header = props => {
  const { handleAddList } = props;
  return (
    <header className="header">
      <div className="search">search</div>
      <Logo />
      <div className="btn">
        <IconButton aria-label="Add list cards" onClick={() => handleAddList()}>
          <AddBox nativeColor="rgba(255, 255, 255, 0.3)" />
        </IconButton>
      </div>
    </header>
  );
};

Header.propTypes = {
  handleAddList: PropTypes.func.isRequired,
};

const mapStateToProps = ({ list }) => ({ list });

const mapDispatchToProps = dispatch => ({
  handleAddList: list => dispatch(addList(list)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
