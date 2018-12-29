import { ADD_LIST, REMOVE_LIST } from '../constants';

const uuidv4 = require('uuid/v4');

const initialState = [
  {
    id: uuidv4(),
    title: 'To Do',
    list: [
      {
        title: 'Title Card',
        text: 'Text Card',
        color: 'white', // ['green', 'yellow', 'orange', 'red', 'purple', 'blue']
        priority: null, // ['height' , 'medium', 'low']
        dueDate: null,
        labels: [],
      },
    ],
  },
];

const newList = {
  id: uuidv4(),
  title: null,
  list: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIST:
      return [...state, newList];

    case REMOVE_LIST:
      return state.filter(item => item.id !== action.payload);

    default:
      return state;
  }
};
