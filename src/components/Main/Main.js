import './Main.css';
import Header from '../Header/Header';
import Search from '../Search/Search';
import Hotels from '../Hotels/Hotels';
import Favorites from '../Favorites/Favorites';

function Main() {
  return(
    <section className='main'>
      <Header/>
      <div className='main__container'>
        <Search/>
        <Hotels/>
        <Favorites/>
      </div>
    </section>
  )
};

export default Main;