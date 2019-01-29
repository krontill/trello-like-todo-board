import React from 'react';
import PropTypes from 'prop-types';
import ModalRoot from '../ModalRoot';
import Logo from '../../components/Logo';
import SettingBg from '../../components/SettingBg';
import ListModal from '../../components/ListModal';
import ContentApp from '../ContentApp';
import UndoRedo from '../../components/UndoRedo';
import Container from './container';
import { StyledApp, StyledHeader, StyledToolBar } from './styles';

const App = props => {
  const {
    setting,
    handleAddList,
    handleChangeBg,
    onUndo,
    onRedo,
    canUndo,
    canRedo,
  } = props;

  return (
    <StyledApp background={setting.bg}>
      <StyledHeader>
        <div className="search" />
        <Logo />
        <StyledToolBar>
          <UndoRedo
            onUndo={onUndo}
            canUndo={canUndo}
            onRedo={onRedo}
            canRedo={canRedo}
          />
          <SettingBg handleChangeBg={handleChangeBg} />
          <ListModal action={handleAddList} />
        </StyledToolBar>
      </StyledHeader>
      <ContentApp />
      <ModalRoot />
    </StyledApp>
  );
};

App.propTypes = {
  setting: PropTypes.objectOf(PropTypes.string).isRequired,
  handleAddList: PropTypes.func.isRequired,
  handleChangeBg: PropTypes.func.isRequired,
  onUndo: PropTypes.func.isRequired,
  onRedo: PropTypes.func.isRequired,
  canUndo: PropTypes.bool.isRequired,
  canRedo: PropTypes.bool.isRequired,
};

export default Container(App);
