import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../../assets/logo.png'
import france from '../../assets/images/france.png'
import germany from '../../assets/images/germany.png'
import italy from '../../assets/images/italy.png'
import portugal from '../../assets/images/portugal.png'
import spain from '../../assets/images/spain.png'
import uk from '../../assets/images/uk.png'

const Navbar = () => {
    const scrollToSection = (id) => {
        const section = document.getElementById(id)
        if (section) {
            section.scrollIntoView({behavior: 'smooth'})
        }
    }
  return (
    <nav className='navbar'>
      <ul className='links'>
        <li>
            <Link onClick={() => scrollToSection('banner')}>
                Home
            </Link>
        </li>
        <li>
            <Link onClick={() => scrollToSection('about')}>
                O Conceito
            </Link>
        </li>
        <li>
            <Link onClick={() => scrollToSection('services')}>
                Serviços
            </Link>
        </li>
        <li>            
            <Link onClick={() => scrollToSection('banner')} className='logo'>
                <img src={logo} alt="logo" />
            </Link>
        </li>
        <li>
            <Link onClick={() => scrollToSection('professionals')}>
                Nossos Profissionais
            </Link>
        </li>
        <li>
            <Link onClick={() => scrollToSection('faq')}>
                FAQ
            </Link>
        </li>
        <li>
            <Link onClick={() => scrollToSection('contact')}>
                Contacto
            </Link>
        </li>
      </ul>
      <select name="" id="">
        <option value="">PT</option>
        <option value="">EN</option>
        <option value="">ES</option>
        <option value="">FR</option>
        <option value="">IT</option>
        <option value="">DE</option>
      </select>
    </nav>
  )
}

export default Navbar
