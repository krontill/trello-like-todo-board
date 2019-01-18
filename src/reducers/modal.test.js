import modal from './modal';
import { SHOW_MODAL, HIDE_MODAL } from '../constants';

const initialState = {
  modalType: null,
  modalProps: {},
};

const editCard = {
  id: '095390ad-006f-4fe4-a6ea-63e1ea2e74b9',
  title:
    'As React is just a lib, it doesn’t dictate rules about how you should organize and structure your projects. This is nice, because it gives us freedom to try different approaches and adapt the ones that better fit for us. On the other hand, this could cause some confusion for devs that are starting in React world. As React is just a lib, it doesn’t dictate rules about how you should organize and structure your projects. This is nice, because it gives us freedom to try different approaches and adapt the ones that better fit for us. On the other hand, this could cause some confusion for devs that are starting in React world.',
  text: 'Text Card',
  priority: 'low',
  dueDate: '2019-01-02',
  labels: ['Green', 'Red', 'Blue'],
};

describe('Modal reducer', () => {
  it('Show modal for add card.', () => {
    const newPayload = {
      modalType: 'ADD_CARD_MODAL',
      modalProps: {
        listId: '095390ad-006f-4fe4-a6ea-63e1ea2e74b9',
      },
    };
    const action = {
      type: SHOW_MODAL,
      ...newPayload,
    };
    expect(modal(initialState, action)).toEqual(newPayload);
  });

  it('Show modal for edit card.', () => {
    const newPayload = {
      modalType: 'EDIT_CARD_MODAL',
      modalProps: {
        listId: '095390ad-006f-4fe4-a6ea-63e1ea2e74b9',
        card: editCard,
      },
    };
    const action = {
      type: SHOW_MODAL,
      ...newPayload,
    };
    expect(modal(initialState, action)).toEqual(newPayload);
  });

  it('Hide modal', () => {
    const action = {
      type: HIDE_MODAL,
    };
    expect(modal(initialState, action)).toEqual(initialState);
  });
});
