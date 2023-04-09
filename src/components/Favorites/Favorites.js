import './Favorites.css';
import Hotel from '../Hotel/Hotel';
import { useSelector, useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { sortFavorites } from '../../store/favoritesReducer';
import { setSortRating, setSortPrice, setSortPriceActive, setSortRatingActive } from '../../store/sortStateReducer';

function Favorites() {
  const dispatch = useDispatch()
  const favorites = useSelector(state => state.favoritesReduser.favorites);
  const rating = useSelector(state => state.reducerSort.rating);
  const price = useSelector(state => state.reducerSort.price);
  const ratingActive = useSelector(state => state.reducerSort.ratingActive);
  const priceActive = useSelector(state => state.reducerSort.priceActive);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  },[favorites]);
  
  useEffect(() => {
    localStorage.setItem('sortRating', JSON.stringify(rating));
    localStorage.setItem('ratingActive', JSON.stringify(ratingActive));
    localStorage.setItem('sortPrice', JSON.stringify(price));
    localStorage.setItem('ratingPrice', JSON.stringify(priceActive));
  },[price, priceActive, rating, ratingActive])

// функции сортировки
  function handleSortRating() {
    dispatch(setSortPrice(''));
    dispatch(setSortRatingActive(true));
    dispatch(setSortPriceActive(false))
    if(rating === '') {
      const sort = [...favorites].sort((a, b) => a.stars > b.stars ? 1 : -1);
      dispatch(sortFavorites(sort))
      dispatch(setSortRating('up'))
    } else if(rating === 'up') {
      const sort = [...favorites].sort((a, b) => a.stars < b.stars ? 1 : -1);
      dispatch(sortFavorites(sort))
      dispatch(setSortRating('down'))
    } else {
      const sort = [...favorites].sort((a, b) => a.timeS < b.timeS ? 1 : -1);
      dispatch(sortFavorites(sort))
      dispatch(setSortRating(''))
      dispatch(setSortRatingActive(false));
    }
   
  }

  function handleSortPrice() {
    dispatch(setSortRating(''));
    dispatch(setSortPriceActive(true));
    dispatch(setSortRatingActive(false))
    if(price === '') {
      const sort = [...favorites].sort((a, b) => a.price > b.price ? 1 : -1);
      dispatch(sortFavorites(sort))
      dispatch(setSortPrice('up'))
    } else if(price === 'up') {
      const sort = [...favorites].sort((a, b) => a.price  < b.price ? 1 : -1);
      dispatch(sortFavorites(sort))
      dispatch(setSortPrice('down'))
    } else {
      const sort = [...favorites].sort((a, b) => a.timeS < b.timeS ? 1 : -1);
      dispatch(sortFavorites(sort))
      dispatch(setSortPrice(''))
      dispatch(setSortPriceActive(false));
    }
  }
  
  return(
    <section className='favorites'>
      <h2 className='favorites__title'>Избранное</h2>
      <div className='container__sorting'>
        <div onClick={handleSortRating} className={`favorites__sorting ${ratingActive ? 'favorites__sorting_active' : ''}`}>
          <p  className='favorites__text'>Рейтинг</p>
          <div className='favorites__arrows'>
            <div className={`favorites__arrow favorites__arrow_up ${rating === 'up' ? 'favorites__arrow_active' : ''}`}>
              <svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.5 1.83245L7.43934 0.77179L4.25736 3.95377L1.07538 0.77179L0.0147181 1.83245L4.25736 6.07509L8.5 1.83245Z" fill="#41522E" fillOpacity="0.3"/>
              </svg> 
            </div>
            <div className={`favorites__arrow favorites__arrow_down ${rating=== 'down' ? 'favorites__arrow_active' : ''}`}>
              <svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.5 1.83245L7.43934 0.77179L4.25736 3.95377L1.07538 0.77179L0.0147181 1.83245L4.25736 6.07509L8.5 1.83245Z" fill="#41522E" fillOpacity="0.3"/>
              </svg>
            </div>
          </div>
        </div>
        <div onClick={handleSortPrice} className={`favorites__sorting ${priceActive ? 'favorites__sorting_active' : ''}`}>
          <p className='favorites__text'>Цена</p>
          <div className='favorites__arrows'>
            <div className={`favorites__arrow favorites__arrow_up ${price === 'up' ? 'favorites__arrow_active' : ''}`}>
              <svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.5 1.83245L7.43934 0.77179L4.25736 3.95377L1.07538 0.77179L0.0147181 1.83245L4.25736 6.07509L8.5 1.83245Z" fill="#41522E" fillOpacity="0.3"/>
              </svg>
            </div>
            <div className={`favorites__arrow favorites__arrow_down ${price === 'down' ? 'favorites__arrow_active' : ''}`}>
              <svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.5 1.83245L7.43934 0.77179L4.25736 3.95377L1.07538 0.77179L0.0147181 1.83245L4.25736 6.07509L8.5 1.83245Z" fill="#41522E" fillOpacity="0.3"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <ul className='favorites__list'>
        {favorites.length === 0 
                       ? 
          <p  className='favorites__text favorites__text_err'>Добавьте отель в избранное</p>
                       :
          favorites.map((card) => {
            return <Hotel key={card.id} id={card.id} name={card.name} stars={card.stars} price={card.price} searchData={card.searchData}/>
          })
        } 
      </ul>
    </section>
  )
};

export default Favorites;