import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import LabelsShort from './index';
import { LABELS } from '../../constants/colors';

it('LabelsShort renders without crashing', () => {
  const div = document.createElement('div');
  const labels = faker.random.arrayElement([LABELS]);

  ReactDOM.render(<LabelsShort labels={labels} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
