import React from 'react';
import ReactDOM from 'react-dom';
import FieldTitle from './index';

it('FieldTitle renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<FieldTitle classes={{}} handleChange={jest.fn()} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('FieldTitle with initial state renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <FieldTitle
      title="As React is just a lib, it doesn’t dictate rules about how you should organize and structure your projects. This is nice, because it gives us freedom to try different approaches and adapt the ones that better fit for us. On the other hand, this could cause some confusion for devs that are starting in React world. As React is just a lib, it doesn’t dictate rules about how you should organize and structure your projects. This is nice, because it gives us freedom to try different approaches and adapt the ones that better fit for us. On the other hand, this could cause some confusion for devs that are starting in React world."
      classes={{}}
      handleChange={jest.fn()}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
