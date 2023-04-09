import imgHouse from '../images/house-forest.png';
import imgRoad from '../images/road.png';
import imgForest from '../images/forest.png';
import imgHousecopy from '../images/house-forestcopy.png';
import imgRoadcopy from '../images/roadcopy.png';

const defaultState = {
    images: [imgHouse, imgRoad, imgForest, imgHousecopy, imgRoadcopy],
  };
  
  export const SET_IMAGES = 'SET_IMAGES';

  
  export function sliderReduser(state = defaultState, action) {
    switch(action.type) {
      case SET_IMAGES:
        return {...state, images: action.payload}
      default: return state;  
    }
  };
  
    export function setImages() {
      return {
        type: SET_IMAGES,
      }
    };