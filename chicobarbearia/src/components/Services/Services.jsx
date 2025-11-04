import './Services.css'

import barba from '../../assets/images/barba.jpg'
import barboterapia from '../../assets/images/barboterapia.jpg'
import corte from '../../assets/images/corte.jpg'
import manicure from '../../assets/images/manicure.jpg'
import massrelax from '../../assets/images/mass-relax.jpg'
import masstantra from '../../assets/images/mass-tantra.jpg'
import pedicure from '../../assets/images/pedicure.jpg'
import pedrasquentes from '../../assets/images/pedras-quentes.jpg'
import tintura from '../../assets/images/tintura.jpg'

const images = [
  {
    name: 'Barba',
    image: barba
  },
  {
    name: 'Barboterapia',
    image: barboterapia
  },
  {
    name: 'Corte',
    image: corte
  },
  {
    name: 'Manicure',
    image: manicure
  },
  {
    name: 'Massagem Relaxante',
    image: massrelax
  },
  {
    name: 'Massagem Tântrica',
    image: masstantra
  },
  {
    name: 'Pedicure',
    image: pedicure
  },
  {
    name: 'Massagem com Pedras Quentes',
    image: pedrasquentes,

  },
  {
    name: 'Tintura',
    image: tintura

  }
]

const Services = () => {
  return (
    <section id='services' className='services'>
      <h1>Nossos Serviços</h1>
      <div className='img-grid'>
        <div className='all-img'>
          {images.map(image =>
            <div className='all-serv'>
              <img src={image.image} alt={image.image} className='serv-img'/>
              <h3 className='serv-title'>{image.name}</h3>   
            </div> 
            )}         
        </div>
      </div>
      
    </section>
  )
}

export default Services
