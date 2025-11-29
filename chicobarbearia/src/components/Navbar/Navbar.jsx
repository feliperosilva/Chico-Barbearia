import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
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

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [selected, setSelected] = useState(i18n.language)
    const {t} = useTranslation()

    const [openBurger, setOpenBurger] = useState(false)

    const scrollToSection = (id) => {
        const section = document.getElementById(id)
        if (section) {
            section.scrollIntoView({behavior: 'smooth'})
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.getElementById('navbar')
            let scrollY = window.scrollY
            let maxScroll = 300

            let opacity = Math.min(scrollY / maxScroll, 1)

            navbar.style.background = `rgba(0, 101, 57, ${opacity * 1})`
        }
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }        
    }, [])

    useEffect(() => {
        if (openBurger) {
            const scrollY = window.scrollY;
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollY}px`;
            document.body.style.width = '100%';

            return () => {
            document.body.style.position = '';
            const storedY = document.body.style.top;
            document.body.style.top = '';
            window.scrollTo(0, parseInt(storedY || '0') * -1);
            };
        }
    }, [openBurger]);




    const current = languages.find(l => l.lng === selected);

    const toChoose = languages.filter(l => l.lng !== selected);

    const clickDropdown = () => setIsOpen(!isOpen)

    const changeLng = (lng) => {
        i18n.changeLanguage(lng)
        setSelected(lng)
    }

    console.log(selected);
    

  return (
    <nav className='navbar' id='navbar'>
        <div>
            <ul className={openBurger ? 'links links-mobile' : 'links'}>
                <li>
                    <Link 
                        onClick={() => {
                            setOpenBurger(false);
                            setTimeout(() => scrollToSection('banner'), 10);
                        }} 
                        className='nav-link'
                    >
                        {t('home')}
                    </Link>
                </li>
                <li>
                    <Link 
                        onClick={() => {
                            setOpenBurger(false);
                            setTimeout(() => scrollToSection('about'), 10);
                        }} 
                        className='nav-link'
                    >
                        {t('concept')}
                    </Link>
                </li>
                <li>
                    <Link 
                        onClick={() => {
                            setOpenBurger(false);
                            setTimeout(() => scrollToSection('services'), 10);
                        }} 
                        className='nav-link'
                    >
                        {t('services')}
                    </Link>
                </li>
                <li className='nav-logo'>            
                    <Link 
                        onClick={() => {
                            setOpenBurger(false);
                            setTimeout(() => scrollToSection('banner'), 10);
                        }} 
                        className='logo'
                    >
                        <img src={logo} alt="logo" />
                    </Link>
                </li>
                <li>
                    <Link 
                        onClick={() => {
                            setOpenBurger(false);
                            setTimeout(() => scrollToSection('professionals'), 10);
                        }} 
                        className='nav-link'
                    >
                        {t('professionals')}
                    </Link>
                </li>
                <li>
                    <Link 
                        onClick={() => {
                            setOpenBurger(false);
                            setTimeout(() => scrollToSection('faq'), 10);
                        }} 
                        className='nav-link'
                    >
                        {t('faq')}
                    </Link>
                </li>
                <li>
                    <Link 
                        onClick={() => {
                            setOpenBurger(false);
                            setTimeout(() => scrollToSection('contact'), 10);
                        }} 
                        className='nav-link'
                    >
                        {t('contact')}
                    </Link>
                </li>
            </ul>
        </div>

        <div className='mobile-nav'>
            <Link className='logo-mobile' onClick={() => {scrollToSection('banner'), setOpenBurger(false)}}>
                <img src={logo} alt="logo" />
            </Link>
            <div class="burger" >
                <input type="checkbox" checked={openBurger} onChange={() => setOpenBurger(!openBurger)}/>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
      
        <div className='lng'>
            <div className='lng-dropdown'>
                {current && (
                    <Link className='lng-select' onClick={() => clickDropdown()}>
                        <div className='lng-name'>
                            <img src={current.flag} alt={current.name} className='lng-flag'/>
                            <span>{current.name}</span>
                        </div>
                    </Link>
                    
                )}
                <div className='lng-list'>
                    {toChoose.map(lang => (
                        <Link className={`lng-select ${isOpen ? 'lng-open' : ''}`} onClick={() => clickDropdown()}>
                            <div key={lang.lng} onClick={() => changeLng(lang.lng)} className={isOpen ? 'lng-name-list' : 'lng-close'}>
                                <img src={lang.flag} alt={lang.name} className='lng-flag'/>
                                <span>{lang.name}</span>
                            </div>
                        </Link>
                    ))}
                </div>
                
            </div>
        </div>
    </nav>
  )
}

export default Navbar
