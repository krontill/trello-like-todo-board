import uuidv4 from 'uuid/v4';
import lists from './lists';

import { ADD_LIST, DELETE_LIST, EDIT_LIST, ADD_CARD } from '../constants';

const initialList = {
  id: uuidv4(),
  title: 'To Do',
  cards: ['095390ad-006f-4fe4-a6ea-63e1ea2e74b9'],
};

const initialState = [initialList];

const newList = {
  id: uuidv4(),
  title: 'To Do2',
  cards: [],
};

const newCard = {
  id: '666000ad-006f-4fe4-a6ea-63e1ea2e74b9',
  title: 'Card',
  text: 'Text',
  priority: 'Height',
  dueDate: '2019-01-03',
  labels: ['Green'],
};

describe('Lists reducer', () => {
  it('Add list.', () => {
    const action = {
      type: ADD_LIST,
      payload: newList,
    };
    expect(lists(initialState, action)).toEqual([initialList, newList]);
  });

  it('Add card in list.', () => {
    const action = {
      type: ADD_CARD,
      payload: {
        listId: initialList.id,
        ...newCard,
      },
    };
    expect(lists(initialState, action)).toEqual([
      {
        id: initialList.id,
        title: initialList.title,
        cards: [...initialList.cards, newCard.id],
      },
    ]);
  });

  it('Add card in list. If list id !== payload list id.', () => {
    const action = {
      type: ADD_CARD,
      payload: {
        listId: 'other-id',
        ...newCard,
      },
    };
    expect(lists(initialState, action)).toEqual(initialState);
  });

  it('Delete list.', () => {
    const action = {
      type: DELETE_LIST,
      payload: initialList.id,
    };
    expect(lists(initialState, action)).toEqual([]);
  });

  it('Edit list.', () => {
    const action = {
      type: EDIT_LIST,
      payload: {
        listId: initialList.id,
        title: newList.title,
      },
    };
    expect(lists(initialState, action)).toEqual([
      {
        id: initialList.id,
        title: newList.title,
        cards: [...initialList.cards],
      },
    ]);
  });

  it('Edit list. If list id !== payload list id.', () => {
    const action = {
      type: EDIT_LIST,
      payload: {
        listId: 'other-id',
        ...newCard,
      },
    };
    expect(lists(initialState, action)).toEqual(initialState);
  });
});
