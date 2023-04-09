import './Authorization.css';
import Validator from '../../utils/Validator';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { CSSTransition } from 'react-transition-group';
import { useDispatch } from 'react-redux';
import { setLoginTrue } from '../../store/loginReducer';


function Authorization() {
  const validator = Validator();
  const [errorStyleEmail, setErrorStyleEmail] = useState(false);
  const [errorStylePassword, setErrorStylePassword] = useState(false);
  const [isErrPass, setIsErrPass] = useState(false);
  const [isErrLogin, setIsErrLogin] = useState(false);
  const nav = useNavigate();
  const dispatch = useDispatch();
  const nodeRef = useRef(null);

  useEffect(() => {
    setErrorStyleEmail(false);
    setErrorStylePassword(false);
  },[validator.values]);

  useEffect(() => {
    if(validator.errors.password !== ''  && validator.errors.password !== undefined) {
        setIsErrPass(true) 
    } else {
        setIsErrPass(false)
    }
  },[validator.errors.password])

  useEffect(() => {
    if(validator.errors.email !== ''  && validator.errors.email !== undefined) {
        setIsErrLogin(true) 
    } else {
        setIsErrLogin(false)
    }
  },[validator.errors.email])

  function handleSubmitLogin(e) {
    e.preventDefault();
    if(!validator.isValid) {
       if (!validator.isErrorStyle.email && !validator.isErrorStyle.password) {
        setErrorStyleEmail(true);
        setErrorStylePassword(true);
       } else if (!validator.isErrorStyle.password) {
        setErrorStylePassword(true);
        setErrorStyleEmail(false);
       } else {
        setErrorStylePassword(false);
        setErrorStyleEmail(true);
       }
    } else {
        nav('/');
        dispatch(setLoginTrue(true))
        localStorage.setItem('isLogin', JSON.stringify(true)); 
    }
  }
  
  return(
    <section className='auth'>
      <div className='auth__overlay'>
        <div className='auth__window'>
          <h2 className='auth__title'>Simple Hotel Check</h2> 
          <form noValidate onSubmit={handleSubmitLogin} className='auth__form' name="authLogin">
            <p className={`auth__text ${errorStyleEmail ? "error" : ""}`}>Логин</p>
            <input pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$" value={validator.values.email || ''} onChange={validator.handleChange} type="text" id="input-name" name="email" required className={`auth__input auth__input_login ${errorStyleEmail ? "error" : ""}`}></input>
            <div className='auth__span'>
              <CSSTransition nodeRef={nodeRef} in={isErrLogin} classNames='alert' timeout={100} unmountOnExit>
                <span ref={nodeRef} className='auth__error'>{validator.errors.email}</span>
              </CSSTransition>
            </div>
            <p className={`auth__text auth__text_password ${errorStylePassword ? "error" : ""}`}>Пароль</p>
            <input pattern="^([a-zA-Z0-9_\-\.]{8,})$" value={validator.values.password || ''} onChange={validator.handleChange} className={`auth__input auth__input_password ${errorStylePassword ? "error" : ""}`} type="password" id="input-password" name="password" required></input>
            <div className='auth__span'>
              <CSSTransition nodeRef={nodeRef} in={isErrPass} classNames='alert' timeout={100} unmountOnExit>
                <span ref={nodeRef} className='auth__error'>{validator.errors.password}</span>  
              </CSSTransition>
            </div> 
            <button className='auth__button' type='submit'>Войти</button>
          </form>
        </div>
      </div>
    </section>
  )
};

export default Authorization