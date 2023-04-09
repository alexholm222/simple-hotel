import './HotelList.css';
import Hotel from '../Hotel/Hotel';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function HoteList() {
  const hotelCards = useSelector(state => state.cardReduser.cards);
  const searchData = useSelector(state => state.searchReduser.searchData);
  const [isNoFind, setIsNoFind] = useState(false);
  
  useEffect(() => {
    hotelCards.length === 0 ? setIsNoFind(false) : setIsNoFind(true)
  },[hotelCards.length]);

  return(
    <ul className='hotels__list'>
      <p style={{display: `${isNoFind ? 'none' : 'flex'}`}} className='hotels__text_err'>Ни чего не найденно</p>
      {hotelCards.map((card) => {
        return <Hotel key={card.hotelId} id={card.hotelId} name={card.hotelName} stars={card.stars} price={card.priceAvg} searchData={searchData}/>
      })}
    </ul>
  )
};

export default HoteList;