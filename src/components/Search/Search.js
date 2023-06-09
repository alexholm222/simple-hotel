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
  const [disabledBotton, setDisabledButton] = useState(false);
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
  },[]);

  useEffect(() => {
    if(queryCity === '' || isСities.length === 0) {
      setIsPopupCity(false)
    } else {
      setIsPopupCity(true)
    }
  },[isСities, queryCity]);

  useEffect(() => {
    if (queryCity === '' || queryDate === '' || queryDay === '') {
      setDisabledButton(true)
    } else {
      setDisabledButton(false)
    }
  },[queryCity, queryDate, queryDay])

  function handleValueCity(e) {
    setQueryCity(e.target.value);
    const cityList = HandleCity(e.target.value)
    setIsСities(cityList);
    setOpenPopup(true)
  };

  function handleValueDay(e) {
    if (e.target.value > 0) {
      setQueryDay(e.target.value)
    } else {
      setQueryDay('')
    } 
  };

  function noDigits(e) {
    if ("1234567890".indexOf(e.key) !== -1)
      e.preventDefault();
  };
  
  function handleCity(e) {
    const city = e.target.textContent
    setQueryCity(city)
    setOpenPopup(false)
  };
  
  function handleSubmit(e) {
    e.preventDefault();
    if (queryCity !== '' && queryDate !== '' && queryDay !== '') {
      getHotelCard();
    }
  }  
    
  return (
    <div className='search'>
      <form className='search__form' onSubmit={handleSubmit} noValidate>
        <p className='search__text'>Локация</p> 
        <input onKeyDown={noDigits} value={queryCity || ''} onChange={handleValueCity}  required type="text" className='search__input search__input_city' id='input-city' name='input-city' autoComplete="off"></input>
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
        <input pattern="^([a-zA-Z0-9_\-\.]{8,})$" onChange={handleValueDay} value={queryDay || ''} className='search__input search__input_day' required type='number' min="1" step="1"></input>     
        <button disabled={disabledBotton} className={`search__button  ${disabledBotton ? 'search__button_disabled' : ''}`} type='submit'>Найти</button>
      </form>
    </div>
  )
}

export default Search;