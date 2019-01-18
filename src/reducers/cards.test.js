import cards from './cards';
import { ADD_CARD, EDIT_CARD, DELETE_CARD } from '../constants';

const initialCard = {
  id: '095390ad-006f-4fe4-a6ea-63e1ea2e74b9',
  title:
    'As React is just a lib, it doesn’t dictate rules about how you should organize and structure your projects. This is nice, because it gives us freedom to try different approaches and adapt the ones that better fit for us. On the other hand, this could cause some confusion for devs that are starting in React world. As React is just a lib, it doesn’t dictate rules about how you should organize and structure your projects. This is nice, because it gives us freedom to try different approaches and adapt the ones that better fit for us. On the other hand, this could cause some confusion for devs that are starting in React world.',
  text: 'Text Card',
  priority: 'low',
  dueDate: '2019-01-02',
  labels: ['Green', 'Red', 'Blue'],
};

const initialState = [initialCard];

const newCard = {
  id: '666000ad-006f-4fe4-a6ea-63e1ea2e74b9',
  title: 'Card',
  text: 'Text',
  priority: 'Height',
  dueDate: '2019-01-03',
  labels: ['Green'],
};

const initialEditedCard = {
  id: '095390ad-006f-4fe4-a6ea-63e1ea2e74b9',
  title:
    'As React is just a lib, it doesn’t dictate rules about how you should organize and structure your projects. This is nice, because it gives us freedom to try different approaches and adapt the ones that better fit for us. On the other hand, this could cause some confusion for devs that are starting in React world. As React is just a lib, it doesn’t dictate rules about how you should organize and structure your projects. This is nice, because it gives us freedom to try different approaches and adapt the ones that better fit for us. On the other hand, this could cause some confusion for devs that are starting in React world.',
  text: 'Text Card',
  priority: 'low',
  dueDate: '2019-01-02',
  labels: ['Green', 'Red', 'Blue', 'Orange'], // Add Orange
};

describe('Cards reducer', () => {
  it('Add card', () => {
    const action = {
      type: ADD_CARD,
      payload: newCard,
    };
    expect(cards(initialState, action)).toEqual([initialCard, newCard]);
  });

  it('Edit card if card.id === action.payload.id return action.payload', () => {
    const action = {
      type: EDIT_CARD,
      payload: initialEditedCard,
    };
    expect(cards(initialState, action)).toEqual([initialEditedCard]);
  });

  it('Edit card if card.id !== action.payload.id return card', () => {
    const action = {
      type: EDIT_CARD,
      payload: {
        id: 'bad-id',
      },
    };
    expect(cards(initialState, action)).toEqual([initialCard]);
  });

  it('Delete card', () => {
    const action = {
      type: DELETE_CARD,
      payload: {
        cardId: initialCard.id,
      },
    };
    expect(cards(initialState, action)).toEqual([]);
  });
});
