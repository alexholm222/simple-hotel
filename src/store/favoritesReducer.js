const FavoritesLocalStore = JSON.parse(localStorage.getItem('favorites'));

const defaultState = {
    favorites: FavoritesLocalStore || [],
  }; 
  
  export const ADD_FAVORITES = 'ADD_FAVORITES';
  export const REMOVE_FAVORITES = 'REMOVE_FAVORITES';
  export const SORT_FAVORITES = 'SORT_FAVORITES';
 
  export function favoritesReduser(state = defaultState, action) {
    switch(action.type) {
      case ADD_FAVORITES:
        return {...state, favorites: [...state.favorites, action.payload].reverse()}
      case REMOVE_FAVORITES:
        return {...state, favorites: state.favorites.filter(item => item.id !== action.payload)}
      case SORT_FAVORITES:
        return {...state, favorites: action.payload}
      default: return state;  
    }
  };
  
  export function addFavorites(payload) {
      return {
        type: ADD_FAVORITES,
        payload
      }
    };

  export function removeFavorites(payload) {
    return {
      type: REMOVE_FAVORITES,
      payload
    }
  };   

  export function sortFavorites(payload) {
    return {
      type: SORT_FAVORITES,
      payload
    }
  };   