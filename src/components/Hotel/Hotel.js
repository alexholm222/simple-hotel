import './Hotel.css';
import { useSelector } from 'react-redux';
import { dayText } from '../../utils/DateFormat';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { addFavorites, removeFavorites, sortFavorites  } from '../../store/favoritesReducer';
import { setSortRating, setSortPrice, setSortPriceActive, setSortRatingActive } from '../../store/sortStateReducer';

function Hotel({id, name, stars, price, searchData}) {
  const [isLike, setIsLike] = useState(false);
  const dispatch = useDispatch();
  const arr =[1,2,3,4,5];
  const starsArr = arr.slice(stars, 5);
  const starsArrActive = arr.slice(0, stars);
  const favorites = useSelector(state => state.favoritesReduser.favorites);
  
  useEffect(() => {
    favorites.some(item => item.id === id) ? setIsLike(true) : setIsLike(false) 
  },[favorites, id])

  function handleLike() {
    if(!isLike) {
      handleResetSort(false);
      dispatch(addFavorites({id, name, stars, price, timeS: Date.now(), searchData}));
    } else if(isLike) {
      handleResetSort(true);
      dispatch(removeFavorites(id));
    }
  }

  function handleResetSort(like){
     const sort = like ? 
     [...favorites].sort((a, b) => a.timeS < b.timeS ? 1 : -1) 
                         : 
     [...favorites].sort((a, b) => a.timeS > b.timeS ? 1 : -1);
     dispatch(sortFavorites(sort))
     dispatch(setSortPrice(''));
     dispatch(setSortRating(''));
     dispatch(setSortPriceActive(false))
     dispatch(setSortRatingActive(false)) 
   }
   
  return(
    <li className='hotel'>
      <div className='hotel__container'>
        <div className='hotel__picture'>
          <img style={{display: 'none'}} className='hotel__img' alt='изображение отеля'/>
        </div>
        <div className='hotel__box'>
          <div className='holte__container_info'>
            <div className='hotel__info'>
              <h2 className='hotel__title'>{name}</h2>
              <p className='hotel__date'>{searchData.dateTextForCard}<span></span>{`${searchData.day} ${dayText(searchData.day)}`}</p>
            </div>
            <div onClick={handleLike} className={`hotel__like ${isLike ? 'hotel__like_active' : ''}`}>
              <svg width="21" height="18" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.3807 2.59133C19.8676 2.08683 19.2583 1.68663 18.5878 1.41358C17.9172 1.14054 17.1985 1 16.4727 1C15.7468 1 15.0281 1.14054 14.3576 1.41358C13.687 1.68663 13.0778 2.08683 12.5646 2.59133L11.4997 3.63785L10.4348 2.59133C9.39834 1.57276 7.99258 1.00053 6.52679 1.00053C5.06099 1.00053 3.65523 1.57276 2.61876 2.59133C1.58229 3.6099 1 4.99139 1 6.43187C1 7.87235 1.58229 9.25383 2.61876 10.2724L3.68367 11.3189L11.4997 19L19.3158 11.3189L20.3807 10.2724C20.8941 9.76814 21.3013 9.16942 21.5791 8.51045C21.857 7.85148 22 7.14517 22 6.43187C22 5.71857 21.857 5.01225 21.5791 4.35328C21.3013 3.69431 20.8941 3.09559 20.3807 2.59133Z" fill="white" stroke="#C4C4C4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div> 
          </div>
          <div className='hotel__container_price'>
            <ul className='hotel__stars'>
              {starsArrActive.map((star) => {
               return <li key={star} className='hotel__star hotel__star_active'></li>
              })}
              {starsArr.map((star) => {
               return <li key={star} className='hotel__star'></li>
              })}
              
            </ul>
            <p className='hotel__text'>Price:<span className='hotel__text hotel__text_price'>{price} ₽</span></p>   
          </div> 
        </div>
      </div>
      <div className='hotel__line'></div>
    </li>
  )
};

export default Hotel;


