import './Professionals.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles (only in this file!)
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import chico from '../../assets/images/chico.jpeg'
import felipe from '../../assets/images/felipe.jpeg'
import rafa from '../../assets/images/rafa.png'

import { useTranslation } from 'react-i18next'

import characters from '../../assets/images/characters.jpg'

const team = [
    {
        name: 'Chico',
        role: ['prof.role.1','prof.role.2','prof.role.3'],
        img: chico
    },
    {
        name: 'Rafa',
        role: ['prof.role.4','prof.role.5','prof.role.6'],
        img: rafa
    },
    {
        name: 'Felipe',
        role: ['prof.role.7','prof.role.8','prof.role.9'],
        img: felipe
    },
]

const Professionals = () => {
  const {t} = useTranslation()

  return (
    <section id='professionals' className='professionals'>
      <h2>{t('prof.h2')}</h2>
      <h1>{t('prof.h1')}</h1>
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
        className='prof-swiper'
      >
        {team.map((person, index) => (
            <SwiperSlide key={index} className='prof-slide'>
                <img src={person.img} alt={person.name} className='prof-img'/>
                <h2 className='prof-name'>{person.name}</h2>
                {person.role.map((act, index) => <span key={t(`${index}`)} className='prof-role'>{t(`${act}`)}</span>)}                
            </SwiperSlide>
        ))}
      </Swiper>
      <div className='character-img'>
          <img src={characters} alt="characters" />
      </div>
    </section>
  )
}

export default Professionals
