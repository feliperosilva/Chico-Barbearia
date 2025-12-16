import './Space.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import { useTranslation } from 'react-i18next';

import space1 from '../../assets/images/space1.jpg'
import space2 from '../../assets/images/space2.jpg'
import space3 from '../../assets/images/space3.jpg'
import space4 from '../../assets/images/space4.jpg'
import space5 from '../../assets/images/space5.jpg'
import space6 from '../../assets/images/space6.jpg'
import space7 from '../../assets/images/space7.jpg'

const images = [
    space1,
    space2,
    space3,
    space4,
    space5,
    space6,
    space7
]

const Space = () => {
  const {t} = useTranslation()

  return (
    <section className='space'>
      <h2>{t('space.h2')}</h2>
      <h1>{t('space.h1')}</h1>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 20 }, // mobile
          768: { slidesPerView: 2, spaceBetween: 20 }, // tablet
          1024: { slidesPerView: 2, spaceBetween: 20 } // desktop
        }}
        navigation
        pagination={{clickable: true}}
        loop={true}
        autoplay={{
          delay: 2500, // Delay between slides (ms)
          disableOnInteraction: false, // Keeps autoplay even after user interaction
        }}
        className='space-swiper'
      >
        {images.map((image, index) => (
            <SwiperSlide key={index} className='space-slide'>
                <img src={image} alt={image} className='space-img'/>                
            </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Space
