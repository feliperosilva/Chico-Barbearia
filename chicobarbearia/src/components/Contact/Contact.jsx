import './Contact.css'
import maps from '../../assets/images/chico-barbearia.png'
import { useTranslation } from 'react-i18next'

import phone from '../../assets/images/phone.png'
import email from '../../assets/images/email.png'

const Contact = () => {
  const {t} = useTranslation()
  return (
    <section id='contact' className='contact'>
      <div className='contact-title'>
        <h1>{t('contact')}</h1>
      </div>      
      <div className='info'>
        <div className='info-details'>
          <div className='address'>
            <h3>{t('address')}:</h3>
            <p>Rua Lucinda Simões 12E</p>
            <p>1900-305 {t('lisbon')}</p>
            <p>{t('metro')}</p>
          </div>

          <br />

          <div className='contacts'>
            <h3>{t('contact')}:</h3>
            <p>
              <img src={phone} alt="phone" />
              <a href="tel:+351928489012">
                +351 928489012
              </a>
            </p>
            <p>
              <img src={email} alt="email" />
              <a href="mailto:info@chicobarbearianudista.pt">
                info@chicobarbearianudista.pt
              </a></p>
          </div>
          
          <br />

          <div className='hours'>
            <h3>{t('hours')}:</h3>
            <p>{t('working_hours')}</p>
          </div>          
        </div>
        <div className='maps'>
          <a 
            href="https://www.google.com/maps/place/Chico+Barbearia+Nudista/@38.7354405,-9.1319537,17z/data=!4m6!3m5!1s0xd1933001d18749b:0xc8d34db62afa2810!8m2!3d38.73552!4d-9.1319752!16s%2Fg%2F11mlgplpjw?entry=ttu&g_ep=EgoyMDI1MTEwMi4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className='maps-link'
          >
            <img src={maps} alt="maps" className='maps-img'/>
          </a>
        </div>
      </div>
      
    </section>
  )
}

export default Contact
