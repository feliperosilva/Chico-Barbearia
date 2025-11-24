import './Services.css'
import { useState, useEffect } from 'react'

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

const services = [
  {
    id: 1,
    name: 'Barba',
    image: barba,
    description: 'Modelagem completa da barba com técnicas precisas para realçar o formato do rosto. Utilizamos navalha, toalha quente e produtos premium para um acabamento impecável. Ideal para manter um visual limpo e elegante.'
  },
  {
    id: 2,
    name: 'Barboterapia',
    image: barboterapia,
    description: 'Tratamento relaxante que combina vapor, óleos essenciais e toalhas quentes para hidratar e suavizar a pele. Reduz irritações pós-barba e proporciona uma experiência de bem-estar única. Perfeito para quem busca cuidado e relaxamento.'
  },
  {
    id: 3,
    name: 'Corte',
    image: corte,
    description: 'Cortes modernos ou clássicos feitos por profissionais experientes. Trabalhamos com técnicas atuais para garantir um resultado alinhado ao seu estilo. Um serviço completo que inclui finalização com produtos de alta qualidade.'
  },
  {
    id: 4,
    name: 'Manicure',
    image: manicure,
    description: 'Higienização, corte e polimento das unhas, com foco na saúde e estética das mãos. Ideal para homens que valorizam cuidado e boa apresentação. Proporciona mãos mais limpas, hidratadas e bem cuidadas.'
  },
  {
    id: 5,
    name: 'Massagem Relaxante',
    image: massrelax,
    description: 'Massagem suave que alivia tensões e reduz o estresse do dia a dia. Utiliza manobras leves e envolventes para promover relaxamento profundo. Perfeita para recuperar energia e equilíbrio.'
  },
  {
    id: 6,
    name: 'Massagem Tântrica',
    image: masstantra,
    description: 'Terapia corporal focada na respiração, sensações e conexão com o corpo. Promove desbloqueios emocionais e aumento da energia vital. Uma experiência profunda que une relaxamento e autoconhecimento.'
  },
  /*{
    id: 7,
    name: 'Pedicure',
    image: pedicure,
    description: 'Cuidado completo dos pés, incluindo corte, higienização e eliminação de calosidades. Melhora a saúde dos pés e proporciona sensação de leveza. Indicado para quem busca conforto e bem-estar.'
  },
  {
    id: 8,
    name: 'Massagem com Pedras Quentes',
    image: pedrasquentes,
    description: 'Massagem terapêutica que utiliza pedras aquecidas para aliviar dores musculares. O calor penetra profundamente, proporcionando relaxamento intenso. Ideal para quem sofre com tensões acumuladas.'
  },
  {
    id: 9,
    name: 'Tintura',
    image: tintura,
    description: 'Coloração profissional para cabelos ou barba com tons naturais e duradouros. Ajuda a renovar o visual ou cobrir fios brancos com naturalidade. Utilizamos produtos de alta qualidade para proteger os fios.'
  }*/
];


const Services = () => {
  const [selected, setSelected] = useState(services[0]);

  return (
    <section id='services' className='services'>
      <h2>Nossos</h2>
      <h1>Serviços</h1>
      <div className='serv-list'>
        <ul className='serv-items'>
          {services.map(serv => (
            <li key={serv.id} onClick={() => setSelected(serv)} className={selected.id === serv.id ? 'serv-name serv-selected' : 'serv-name'}>
              {serv.name}
            </li>
          ))}
        </ul> 
        {selected && 
          <div className={'serv-description'}>
            <img src={selected.image} alt={selected.name}/>
            <p>{selected.description}</p>
          </div>            
        }              
      </div>
    </section>
  )
}

export default Services
