import logo from '../../assets/logo.png'
import './Denied.css'
import { useTranslation } from 'react-i18next'

const Denied = () => {
    const {t} = useTranslation()

  return (
    <section id='denied' className='denied'>
        <div className='denied-container'>
            <div className='logo'>
                <img src={logo} alt="logo" /> 
                <h1 className='access-denied'>{t('denied')}</h1>
            </div>
            <div className='age-denied'>
                <p>{t('noage')}</p>
            </div>
        </div>        
    </section>
  )
}

export default Denied
