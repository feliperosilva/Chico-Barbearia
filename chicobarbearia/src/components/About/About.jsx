import './About.css'
import concept from '../../assets/images/concept.jpg'
import conceptmobile from '../../assets/images/concept-mobile.png'
import { useTranslation } from 'react-i18next'

const About = () => {
  const {t} = useTranslation()

  return (
    <section id='about' className='about'>
      <div className='concept'>
        <div className='about-concept'>
          <div>
            <h2>{t('about.title.h2')}</h2>
            <h1>{t('about.title.h1')}</h1>
            <div>
              <p>{t('about.p.1')}</p>

              <p>{t('about.p.2')}</p>

              <p>{t('about.p.3')}</p>

              <p>{t('about.p.4')} <strong>{t('about.p.5')}</strong></p>
              </div>
            
          </div>          
        </div>
        <img src={concept} alt="concept" className='concept-img'/>
      </div>
      <div className='concept-img-mobile'/>
    </section>
  )
}

export default About
