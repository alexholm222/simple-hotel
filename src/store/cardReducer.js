const defaultState = {
  cards: [],
};

export const SET_CARDS = 'SET_CARDS';
export const FETCH_CARDS = 'FETCH_CARDS';

export function cardReduser(state = defaultState, action) {
  switch(action.type) {
    case SET_CARDS:
      return {...state, cards: action.payload}
    default: return state;  
  }
};

export function setCards(payload) {
    return {
      type: SET_CARDS,
      payload
    }
  };

  export function fetchCards() {
    return {
      type: FETCH_CARDS,
    }
  };