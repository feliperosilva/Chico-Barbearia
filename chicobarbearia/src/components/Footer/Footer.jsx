import './Footer.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'

const Footer = () => {
    const scrollToSection = (id) => {
        const section = document.getElementById(id)
        if (section) {
            section.scrollIntoView({behavior: 'smooth'})
        }
    }
  return (
    <section id='footer' className='footer'>
        <div className='footer-info'>
            <div className='footer-logo'>
                <img src={logo} alt="logo" />                
            </div>
            <div className='footer-nav'>
                <ul className='footer-links'>
                    <li>
                        <Link onClick={() => scrollToSection('banner')}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link onClick={() => scrollToSection('about')}>
                            About us
                        </Link>
                    </li>
                    <li>
                        <Link onClick={() => scrollToSection('services')}>
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link onClick={() => scrollToSection('professionals')}>
                            Our Professionals
                        </Link>
                    </li>
                    <li>
                        <Link onClick={() => scrollToSection('contact')}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='social-media'>
                <div className='social-links'>
                    <div className='media-link'>
                        <img src={instagram} alt="instagram" />
                        <a href="">Instagram</a>
                    </div>
                    <div className='media-link'>
                        <img src={facebook} alt="facebook" />
                        <a href="">Facebook</a>
                    </div>
                    <div className='media-link'>
                        <img src={twitter} alt="twitter" />
                        <a href="">X</a>
                    </div>
                </div>                
            </div>
        </div>
        <div className='copyright'>
            <span>&copy; Todos os direitos reservados.</span>
        </div>      
    </section>
  )
}

export default Footer
