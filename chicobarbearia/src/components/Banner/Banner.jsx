import './Banner.css'
import naked from '../../assets/images/malebody.mp4'
import { useTranslation } from 'react-i18next'

const Banner = () => {
  const {t} = useTranslation()

  return (
    <section id='banner' className='banner'>
      <video className='video-bg' src={naked} autoPlay loop muted playsInline />
      <div className='header'>        
        <h1>{t('banner.title')}</h1>
        <p>{t('banner.description')}</p>
        <a href="https://buk.pt/chico-barbearia-nudista" target='_blank' rel=' noopener noreferer'><button className='cta'>{t('banner.button')}</button></a>
      </div>
    </section>
  )
}

export default Banner
