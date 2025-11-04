import './Professionals.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles (only in this file!)
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import chico from '../../assets/chico.jpeg'
import felipe from '../../assets/felipe.jpeg'

const team = [
    {
        name: 'Chico',
        role: ['Massagem relaxante','Depilação com cera','Depilação com máquina'],
        img: chico
    },
    {
        name: 'Barbeiro 1',
        role: ['Corte','Barba','Tinturas'],
        img: felipe
    },
    {
        name: 'Barbeiro 2',
        role: ['Corte','Barba','Químicas'],
        img: chico
    },
    {
        name: 'Massagista 2',
        role: ['Massagem relaxante','Massagem tântrica','Pedras quentes'],
        img: felipe
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
      <h1>Conheça a nossa equipa</h1>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={3}
        navigation
        pagination={{clickable: true}}
        loop
        className='prof-swiper'
      >
        {team.map((person, index) => (
            <SwiperSlide key={index} className='prof-slide'>
                <img src={person.img} alt={person.name} className='prof-img'/>
                <h2>{person.name}</h2>
                <ul>
                    {person.role.map((act, index) => <li key={index}>{act}</li>)}
                </ul>
            </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Professionals
