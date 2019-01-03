import { Set } from 'immutable';
import { ADD_LIST, REMOVE_LIST } from '../constants';

const uuidv4 = require('uuid/v4');

const initialState = [
  {
    id: uuidv4(),
    title: 'To Do',
    cards: [
      {
        id: uuidv4(),
        title: 'Title Card',
        text: 'Text Card',
        priority: null, // ['height' , 'medium', 'low']
        dueDate: null,
        labels: null,
      },
      {
        id: uuidv4(),
        title:
          'As React is just a lib, it doesn’t dictate rules about how you should organize and structure your projects. This is nice, because it gives us freedom to try different approaches and adapt the ones that better fit for us. On the other hand, this could cause some confusion for devs that are starting in React world. As React is just a lib, it doesn’t dictate rules about how you should organize and structure your projects. This is nice, because it gives us freedom to try different approaches and adapt the ones that better fit for us. On the other hand, this could cause some confusion for devs that are starting in React world.',
        text: 'Text Card',
        priority: 'low', // ['height' , 'medium', 'low']
        dueDate: '2019-01-02',
        labels: Set([
          {
            color: 'green',
            name: null,
          },
          {
            color: 'yellow',
            name: null,
          },
          {
            color: 'orange',
            name: null,
          },
          {
            color: 'red',
            name: null,
          },
          {
            color: 'purple',
            name: null,
          },
          {
            color: 'blue',
            name: null,
          },
        ]),
      },
    ],
  },
];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIST:
      return [...state, action.payload];

    case REMOVE_LIST:
      return state.filter(item => item.id !== action.payload);

    default:
      return state;
  }
};
