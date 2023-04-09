import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Slider.css';
import { useSelector } from 'react-redux';

export default function Slider() {
  const images = useSelector(state => state.sliderReduser.images);
  return (
    <Swiper
      spaceBetween={12}
      slidesPerView={'auto'}
      mousewheel={true}
    >
      {images.map((image) => {
        return <SwiperSlide key={images.lastIndexOf(image)}><img src={image} className='slide__img' alt='лес'/></SwiperSlide>
      })}
    </Swiper>
  );
};