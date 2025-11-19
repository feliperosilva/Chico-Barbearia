import './Services.css'
import { useState } from 'react'

import barba from '../../assets/images/barba.jpg'
import barboterapia from '../../assets/images/barboterapia.jpg'
import corte from '../../assets/images/corte.jpg'
import manicure from '../../assets/images/manicure.jpg'
import massrelax from '../../assets/images/mass-relax.jpg'
import masstantra from '../../assets/images/mass-tantra.jpg'
import pedicure from '../../assets/images/pedicure.jpg'
import pedrasquentes from '../../assets/images/pedras-quentes.jpg'
import tintura from '../../assets/images/tintura.jpg'

import Modal from '../Modal/Modal'

const images = [
  {
    id: 1,
    name: 'Barba',
    image: barba
  },
  {
    id: 2,
    name: 'Barboterapia',
    image: barboterapia
  },
  {
    id: 3,
    name: 'Corte',
    image: corte
  },
  {
    id: 4,
    name: 'Manicure',
    image: manicure
  },
  {
    id: 5,
    name: 'Massagem Relaxante',
    image: massrelax
  },
  {
    
    id: 6,
    name: 'Massagem Tântrica',
    image: masstantra
  },
  {
    
    id: 7,
    name: 'Pedicure',
    image: pedicure
  },
  {
    id: 8,
    name: 'Massagem com Pedras Quentes',
    image: pedrasquentes,

  },
  {
    id: 9,
    name: 'Tintura',
    image: tintura

  }
]

const Services = () => {
  const [selected, setSelected] = useState(null);


  return (
    <section id='services' className='services'>
      <h1>Nossos Serviços</h1>
      <div className='img-grid'>
        <div className='all-img'>
          {images.map(image =>
            <div className='all-serv' key={image.id}>
              <img src={image.image} alt={image.image} className='serv-img' onClick={() => setSelected(image)}/>
              <h3 className='serv-title'>{image.name}</h3>   
            </div> 
            )}         
        </div>
        
      </div>
      <Modal 
          isOpen={!!selected}
          onClose={() => setSelected(null)}
          image={selected?.image}
          title={selected?.name}
          description='Descrição'
        />
    </section>
  )
}

export default Services
