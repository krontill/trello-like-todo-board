import React from 'react';
import ReactDOM from 'react-dom';
import SettingBg from './index';

it('SettingBg renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<SettingBg handleChangeBg={jest.fn()} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
