import './Hotels.css';
import Slider from '../Slider/Slider';
import { useSelector } from 'react-redux';
import { hotelText } from '../../utils/DateFormat';
import HoteList from '../HotelList/HotelList';
import Preloader from '../Preloader/Preloader'

function Hotels() {
  const searchData = useSelector(state => state.searchReduser.searchData);
  const favorites = useSelector(state => state.favoritesReduser.favorites);
  const preload = useSelector(state => state.preloaderReducer.preload);
  
  return(
    <section className='hotels'>
      <div className='hotels__headline'>
        <div className='hotels__city'>
          <p className='hotels__text hotels__text_head'>Отели</p>
          <div className='hotels__icon hotels__icon_arrow'></div>
          <p className='hotels__text hotels__text_head'>{searchData.city}</p>
        </div>
        <p className='hotels__text hotels__text_date'>{searchData.dateTextForHead}</p>
      </div>
      <div className='hotels__slider'>
        <Slider/>
      </div>
      <p className='hotels__text hotels__text_favorites'>Добавлено в Избранное:&nbsp;  <span>{favorites.length}</span>{` ${hotelText(favorites.length)}`}</p>
      {preload ? <Preloader/> : <HoteList/>} 
    </section>
  )
};

export default Hotels;