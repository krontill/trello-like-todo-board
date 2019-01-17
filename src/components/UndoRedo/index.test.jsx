import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import UndoRedo from './index';

it('UndoRedo renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <UndoRedo
      onRedo={jest.fn()}
      onUndo={jest.fn()}
      canRedo={faker.random.boolean()}
      canUndo={faker.random.boolean()}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
