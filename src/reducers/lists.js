import { Set } from 'immutable';
import { ADD_CARD, ADD_LIST, DELETE_LIST, EDIT_LIST } from '../constants';

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
            color: 'green',
            name: 'Ecology',
          },
          {
            color: 'yellow',
            name: 'Tasks for the summer. Tasks for the summer.',
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

    case DELETE_LIST:
      return state.filter(list => list.id !== action.payload);

    case EDIT_LIST:
      return state.map(list => {
        if (list.id === action.payload.listId) {
          const newList = list;
          newList.title = action.payload.title;
          return newList;
        }
        return list;
      });

    case ADD_CARD:
      return state.map(list => {
        if (list.id === action.payload.listId) {
          const newList = list;
          if (newList.cards) {
            newList.cards = [...newList.cards, action.payload.card];
          } else {
            newList.cards = [action.payload.card];
          }
          return newList;
        }
        return list;
      });

    default:
      return state;
  }
};
