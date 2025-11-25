import './Services.css'
import { useState } from 'react'

import barba from '../../assets/images/beard.jpg'
import haircut from '../../assets/images/haircut.jpg'
import massrelax from '../../assets/images/mass-relax.jpg'
import pedrasquentes from '../../assets/images/pedras-quentes.jpg'

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
    description: 'Modelagem completa da barba com técnicas precisas para realçar o formato do rosto. Utilizamos navalha, toalha quente e produtos premium para um acabamento impecável. Ideal para manter um visual limpo e elegante.'
  },
  {
    id: 3,
    name: 'Depilação a Cera/Máquina',
    image: barba,
    description: 'Modelagem completa da barba com técnicas precisas para realçar o formato do rosto. Utilizamos navalha, toalha quente e produtos premium para um acabamento impecável. Ideal para manter um visual limpo e elegante.'
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
    image: pedrasquentes,
    description: 'Massagem terapêutica que utiliza pedras aquecidas para aliviar dores musculares. O calor penetra profundamente, proporcionando relaxamento intenso. Ideal para quem sofre com tensões acumuladas.'
  },
  {
    id: 6,
    name: 'Massagem com Esfoliação Corporal',
    image: pedrasquentes,
    description: 'Massagem terapêutica que utiliza pedras aquecidas para aliviar dores musculares. O calor penetra profundamente, proporcionando relaxamento intenso. Ideal para quem sofre com tensões acumuladas.'
  },
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
      </div>      
      <div className='pattern'></div>
    </section>
  )
}

export default Services
