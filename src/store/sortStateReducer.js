
const ratingActiveLocal = JSON.parse(localStorage.getItem('ratingActive'));
const priceActiveLocal = JSON.parse(localStorage.getItem('ratingPrice'));
const ratingLocal = JSON.parse(localStorage.getItem('sortRating'));
const priceLocal = JSON.parse(localStorage.getItem('sortPrice'))

const defaultState = {
  rating: ratingLocal || '',
  price: priceLocal || '',
  ratingActive: ratingActiveLocal || false,
  priceActive: priceActiveLocal || false,
};

const SORT_RATING = 'SORT_RATING';
const SORT_PRICE = 'SORT_PRICE';
const SORT_RATING_ACTIVE = 'SORT_RATING_ACTIVE';
const SORT_PRICE_ACTIVE = 'SORT_PRICE_ACTIVE';

export function reducerSort(state = defaultState, action) {
  switch (action.type) {
    case SORT_RATING: 
      return {...state, rating: action.payload} 
    case SORT_PRICE:  
    return {...state, price: action.payload}
    case SORT_RATING_ACTIVE:  
    return {...state, ratingActive: action.payload}
    case SORT_PRICE_ACTIVE:  
    return {...state, priceActive: action.payload}
    default: return state;
  }
};

export function setSortRating(payload) {
  return {
    type: SORT_RATING,
    payload
  }
};

export function setSortPrice(payload) {
  return {
    type: SORT_PRICE,
    payload
  }
};

export function setSortRatingActive(payload) {
  return {
    type: SORT_RATING_ACTIVE,
    payload
  }
};

export function setSortPriceActive(payload) {
  return {
    type: SORT_PRICE_ACTIVE,
    payload
  }
};