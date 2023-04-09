import './Header.css'
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setLoginFalse } from '../../store/loginReducer';
import { sortFavorites } from '../../store/favoritesReducer';


function Header() {
  const nav = useNavigate();
  const dispatch = useDispatch();
  
  function logOut() {
    nav('/sign-in');
    dispatch(setLoginFalse(false));
    localStorage.clear();
    dispatch(sortFavorites([]))
  }

  return(
    <div className='header'>
      <h1 className='header__title'>Simple Hotel Check</h1>
      <button onClick={logOut} type='button' className='header__button'>
        <p className='header__text_button'>Выйти</p>
        <div className='header__icon_button'>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 20H4C3.46957 20 2.96086 19.7893 2.58579 19.4142C2.21071 19.0391 2 18.5304 2 18V4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2H8" stroke="#41522E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15 16L20 11L15 6" stroke="#41522E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M20 11H8" stroke="#41522E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </button>
  </div>
  )
};

export default Header;