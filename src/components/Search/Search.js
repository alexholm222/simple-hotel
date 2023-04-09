import './Search.css';
import HandleCity from '../../utils/HandleCity';
import { useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import DatePicker from '../../utils/DataPicker/DatePicker';
import {setDate}  from '../../utils/DateToday';
import { useDispatch } from 'react-redux';
import { setSearch } from '../../store/searchReducer';
import { fetchCards } from '../../store/cardReducer';
import { handleFormatDate, handleCheckOutDate, dateTextFormat, dateTextFormatHead } from '../../utils/DateFormat';

function Search() {
  const [queryCity, setQueryCity] = useState('Москва'); 
  const [isСities, setIsСities] = useState([]);
  const currentDate = setDate();
  const [queryDate, setQueryDate] = useState(currentDate);
  const [queryDay, setQueryDay] = useState('1');
  const [isPopupCity, setIsPopupCity] = useState(false);
  const [openPopup, setOpenPopup] = useState(true);
  const dispatch = useDispatch();
  const nodeRef = useRef(null);
  

  function getHotelCard() {
    const checkIn = handleFormatDate(queryDate);
    const checkOut = handleCheckOutDate(queryDate, queryDay);
    const dateText = dateTextFormat(queryDate);
    const dateTextHead = dateTextFormatHead(queryDate)

    dispatch(setSearch({city: queryCity, checkIn: checkIn, checkOut: checkOut, dateTextForCard: dateText, dateTextForHead: dateTextHead, day: queryDay}));
    dispatch(fetchCards());
  }

  useEffect(() => {
    getHotelCard()
  },[])

  function handleValueCity(e) {
    setQueryCity(e.target.value);
    const cityList = HandleCity(e.target.value)
    setIsСities(cityList);
    setOpenPopup(true)
  }

  function handleValueDay(e) {
    setQueryDay(e.target.value)
  }
  
  function handleCity(e) {
    const city = e.target.textContent
    setQueryCity(city)
    setOpenPopup(false)
  };
  
  useEffect(() => {
    if(queryCity === '' || isСities.length === 0) {
      setIsPopupCity(false)
    } else {
      setIsPopupCity(true)
    }
  },[isСities, queryCity])
  
  function handleSubmit(e) {
    e.preventDefault();
    getHotelCard();
  }  
    
  return (
    <div className='search'>
      <form className='search__form' onSubmit={handleSubmit} noValidate>
        <p className='search__text'>Локация</p> 
        <input value={queryCity || ''} onChange={handleValueCity}  required type="text" className='search__input search__input_city' id='input-city' name='input-city' autoComplete="off"></input>
        <CSSTransition nodeRef={nodeRef} in={openPopup ? isPopupCity ? true : false : false} classNames='alert' timeout={100} unmountOnExit>
        <div ref={nodeRef} className='search__popup'>
          <ul className='search__list search__list_city'>
            {isСities.map(city => {
              return (
                <li style={{display: `${openPopup ? isPopupCity ? 'flex' : 'none' : 'none'}`}} onClick={handleCity} key={isСities.indexOf(city)} className='search__item search__item_city'>{`${city.city}`}</li>
              )
            })}
          </ul>
        </div> 
        </CSSTransition>
        <p className='search__text'>Дата заселения</p> 
        <DatePicker setQueryDate={setQueryDate}/>
        <p className='search__text search__text_day'>Количество дней</p> 
        <input onChange={handleValueDay} value={queryDay || ''} className='search__input search__input_day' required type='number'></input>     
        <button className='search__button' type='submit'>Найти</button>
      </form>
    </div>
  )
}

export default Search;