import './Banner.css'
import naked from '../../assets/images/malebody.mp4'
import { useTranslation } from 'react-i18next'

const Banner = ({ onBook }) => {
  const {t} = useTranslation()

  return (
    <section id='banner' className='banner'>
      <video className='video-bg' src={naked} autoPlay loop muted playsInline />
      <div className='header'>        
        <h1>{t('banner.title')}</h1>
        <p>{t('banner.description')}</p>
        <button className='cta' onClick={onBook}>{t('banner.button')}</button>  
      </div>
    </section>
  )
}

export default Banner
