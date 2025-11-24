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
import barber2 from '../../assets/images/barber2.jpg'
import mass2 from '../../assets/images/mass2.jpg'

const team = [
    {
        name: 'Chico',
        role: ['Massagem relaxante','Depilação com cera','Depilação com máquina'],
        img: chico
    },
    {
        name: 'Rafa',
        role: ['Corte','Barba','Barboterapia'],
        img: rafa
    },
    {
        name: 'Felipe',
        role: ['Plataformas Digitais','Host','Medias Sociais'],
        img: felipe
    },
]

const Professionals = () => {
  return (
    <section id='professionals' className='professionals'>
      <h2>Os</h2>
      <h1>Profissionais</h1>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={2}
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
                {person.role.map((act, index) => <span key={index} className='prof-role'>{act}</span>)}                
            </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Professionals
