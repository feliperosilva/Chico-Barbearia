import './Services.css'
import { useState } from 'react'

import barba from '../../assets/images/beard.jpg'
import haircut from '../../assets/images/haircut.jpg'
import massrelax from '../../assets/images/mass-relax.jpg'
import pedrasquentes from '../../assets/images/pedras-quentes.jpg'
import waxing from '../../assets/images/waxing.jpg'
import scrub from '../../assets/images/scrub.jpg'
import hotstone from '../../assets/images/hotstone.jpg'

const services = [
  {
    id: 1,
    name: 'Corte de Cabelo',
    image: haircut,
    description: 'Cortes modernos ou clássicos feitos por profissionais experientes. Trabalhamos com técnicas atuais para garantir um resultado alinhado ao seu estilo. Um serviço completo que inclui finalização com produtos de alta qualidade.'
  },
  {
    id: 2,
    name: 'Barba/Barboterapia',
    image: barba,
    description: 'Tratamento completo para a barba com hidratação, modelagem e técnicas tradicionais de barbearia. Inclui toalha quente, óleos especiais e finalização profissional para um visual alinhado e renovado.'
  },
  {
    id: 3,
    name: 'Depilação a Cera/Máquina',
    image: waxing,
    description: 'Serviço de depilação feito com cera ou máquina, conforme preferência do cliente. Remove os pelos de forma eficaz, deixando a pele mais lisa e com sensação de conforto. Ideal para quem busca praticidade e higiene.'
  },
  {
    id: 4,
    name: 'Massagem Relaxante',
    image: massrelax,
    description: 'Massagem suave que alivia tensões e reduz o estresse do dia a dia. Utiliza manobras leves e envolventes para promover relaxamento profundo. Perfeita para recuperar energia e equilíbrio.'
  },
  {
    id: 5,
    name: 'Massagem com Pedras Quentes',
    image: hotstone,
    description: 'Massagem terapêutica que utiliza pedras aquecidas para aliviar dores musculares. O calor penetra profundamente, proporcionando relaxamento intenso. Ideal para quem sofre com tensões acumuladas.'
  },
  {
    id: 6,
    name: 'Massagem com Esfoliação Corporal',
    image: scrub,
    description: 'Combinação de massagem relaxante com esfoliação corporal completa. Remove células mortas, ativa a circulação e deixa a pele mais macia e renovada. Uma experiência revigorante que une bem-estar e cuidado estético.'
  }
];


const Services = () => {
  const [selected, setSelected] = useState(services[0]);

  return (
    <section id='services' className='services-container'>
      <div className='services'>
        <h2>Nossos</h2>
        <h1>Serviços</h1>
        <div className='serv-list'>
          <ul className='serv-items'>
            {services.map(serv => (
              <li key={serv.id} onClick={() => setSelected(serv)} className={selected.id === serv.id ? 'serv-name serv-selected' : 'serv-name'}>
                <strong>{serv.name}</strong>
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
      </div>      
      <div className='pattern'></div>
    </section>
  )
}

export default Services
