import './Services.css'
import { useState } from 'react'

import beard from '../../assets/images/beard.jpg'
import haircut from '../../assets/images/haircut.jpg'
import massrelax from '../../assets/images/mass-relax.jpg'
import waxing from '../../assets/images/waxing.jpg'
import scrub from '../../assets/images/scrub.jpg'
import hotstone from '../../assets/images/hotstone.jpg'

import { useTranslation } from 'react-i18next'

const services = [
  {
    id: 1,
    image: haircut,
    key: 'our_services.1'
  },
  {
    id: 2,
    image: beard,
    key: 'our_services.2'
  },
  {
    id: 3,
    image: waxing,
    key: 'our_services.3'
  },
  {
    id: 4,
    image: massrelax,
    key: 'our_services.4'
  },
  {
    id: 5,
    image: hotstone,
    key: 'our_services.5'
  },
  {
    id: 6,
    image: scrub,
    key: 'our_services.6'
  }
];


const Services = () => {
  const [selected, setSelected] = useState(services[0]);

  const {t} = useTranslation()

  return (
    <section id='services' className='services-container'>
      <div className='services'>
        <h2>{t('our_services.h2')}</h2>
        <h1>{t('our_services.h1')}</h1>
        <div className='serv-list'>
          <ul className='serv-items'>
            {services.map(serv => (
              <li key={serv.id} onClick={() => setSelected(serv)} className={selected.id === serv.id ? 'serv-name serv-selected' : 'serv-name'}>
                <strong>{t(`${serv.key}.name`)}</strong>
              </li>
            ))}
            <a href="https://buk.pt/chico-barbearia-nudista" target='_blank' rel=' noopener noreferer'><button className='cta-service'>{t('our_services.button')}</button></a>
          </ul>


          <div className='serv-mobile'>
            <select
              className='serv-options'
              value={selected.id} // controlled select
              onChange={(e) => {
                const chosenId = parseInt(e.target.value); // get the selected value
                const chosenService = services.find(serv => serv.id === chosenId);
                setSelected(chosenService);
              }}
            >
              {services.map(serv => (
                <option key={serv.id} value={serv.id}>
                  {t(`${serv.key}.name`)}
                </option>
              ))}
            </select>
          </div>

          {selected && 
            <div className='serv-description'>
              <img src={selected.image} alt={t(`${selected.key}.name`)}/>
              <p>{t(`${selected.key}.description`)}</p>
            </div>            
          }
          <a href="https://buk.pt/chico-barbearia-nudista" target='_blank' rel=' noopener noreferer'><button className='cta-service-mobile'>{t('our_services.button')}</button></a>                        
        </div>
                
      </div>      
      <div className='pattern'></div>
    </section>
  )
}

export default Services
