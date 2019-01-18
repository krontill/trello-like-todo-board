import { ADD_CARD, EDIT_CARD, DELETE_CARD } from '../constants';

const initialState = [
  {
    id: '095390ad-006f-4fe4-a6ea-63e1ea2e74b9',
    title:
      'As React is just a lib, it doesn’t dictate rules about how you should organize and structure your projects. This is nice, because it gives us freedom to try different approaches and adapt the ones that better fit for us. On the other hand, this could cause some confusion for devs that are starting in React world. As React is just a lib, it doesn’t dictate rules about how you should organize and structure your projects. This is nice, because it gives us freedom to try different approaches and adapt the ones that better fit for us. On the other hand, this could cause some confusion for devs that are starting in React world.',
    text: 'Text Card',
    priority: 'low',
    dueDate: '2019-01-02',
    labels: ['Green', 'Red', 'Blue'],
  },
];

const cards = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARD:
      return [...state, action.payload];

    case EDIT_CARD:
      return state.map(card => {
        if (card.id === action.payload.id) return action.payload;
        return card;
      });

    case DELETE_CARD:
      return state.filter(card => card.id !== action.payload.cardId);

    default:
      return state;
  }
};

export default cards;
