import selectedCard from './selectedCard';
import { SELECT_CARD } from '../constants';

const initialState = null;

const cardId = '095390ad-006f-4fe4-a6ea-63e1ea2e74b9';
const otherCardId = '666390ad-006f-4fe4-a6ea-63e1ea2e74b9';

describe('Selected card reducer', () => {
  it('First selected card.', () => {
    const action = {
      type: SELECT_CARD,
      payload: cardId,
    };
    expect(selectedCard(initialState, action)).toEqual(cardId);
  });

  it('Next selected card.', () => {
    const action = {
      type: SELECT_CARD,
      payload: otherCardId,
    };
    expect(selectedCard(otherCardId, action)).toEqual(initialState);
  });
});
