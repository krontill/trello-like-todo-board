import React from 'react';
import ReactDOM from 'react-dom';
import uuidv4 from 'uuid/v4';
import faker from 'faker';
import CardModal from './index';

it('CardModal renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <CardModal
      action={jest.fn()}
      titleModal={faker.lorem.text()}
      handleHideModal={jest.fn()}
      btnText={faker.random.word()}
      listId={uuidv4()}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
