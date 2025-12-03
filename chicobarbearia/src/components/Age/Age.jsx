import './Age.css'
import logo from '../../assets/logo.png'
import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'
import france from '../../assets/images/france.png'
import germany from '../../assets/images/germany.png'
import italy from '../../assets/images/italy.png'
import portugal from '../../assets/images/portugal.png'
import spain from '../../assets/images/spain.png'
import uk from '../../assets/images/uk.png'
import i18n from '../../i18n'
import { useTranslation } from 'react-i18next'

const languages = [
        {
            lng: 'fr',
            flag: france,
            name: 'FR'
        },
        {
            lng: 'de',
            flag: germany,
            name: 'DE'
        },
        {
            lng: 'it',
            flag: italy,
            name: 'IT'
        },
        {
            lng: 'pt',
            flag: portugal,
            name: 'PT'
        },
        {
            lng: 'es',
            flag: spain,
            name: 'ES'
        },
        {
            lng: 'en',
            flag: uk,
            name: 'EN'
        }
    ]

const Age = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [selected, setSelected] = useState(i18n.language)
    const {t} = useTranslation()

    const navigate = useNavigate()

    const handleYes = () => {
        localStorage.setItem('ageVerified', 'true')
        navigate('/home')
    }

    const handleNo = () => {
        navigate('/denied')
    }

    const current = languages.find(l => l.lng === selected);

    const toChoose = languages.filter(l => l.lng !== selected);

    const clickDropdown = () => setIsOpen(!isOpen)

    const changeLng = (lng) => {
        i18n.changeLanguage(lng)
        setSelected(lng)
    }

  return (
    <section id="age" className='age'>
        <div className='lng-age'>
            <div className='lng-age-dropdown'>
                {current && (
                    <Link className='lng-age-select' onClick={() => clickDropdown()}>
                        <div className='lng-age-name'>
                            <img src={current.flag} alt={current.name} className='lng-age-flag'/>
                            <span>{current.name}</span>
                        </div>
                    </Link>                    
                )}
                <div className='lng-age-list'>
                    {toChoose.map(lang => (
                        <Link className={`lng-age-select ${isOpen ? 'lng-age-open' : ''}`} onClick={() => clickDropdown()}>
                            <div key={lang.lng} onClick={() => changeLng(lang.lng)} className={isOpen ? 'lng-age-name-list' : 'lng-age-close'}>
                                <img src={lang.flag} alt={lang.name} className='lng-age-flag'/>
                                <span>{lang.name}</span>
                            </div>
                        </Link>
                    ))}
                </div>                
            </div>
        </div>
      <div className='age-container'>        
        <div className='logo'>
            <h1 className='welcome'>{t('welcome')}</h1>
            <img src={logo} alt="logo" /> 
        </div>
        <div className='age-verify'>
            <p>{t('age.p1')}</p>
            <p>{t('age.p2')}</p>
        </div>
        <div className='buttons'>
            <button className='yes' onClick={handleYes}>{t('yes')}</button>
            <button className='no' onClick={handleNo}>{t('no')}</button>
        </div>
      </div>
    </section>
  )
}

export default Age
