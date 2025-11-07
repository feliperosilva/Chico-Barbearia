import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../../assets/logo.jpeg'

const Navbar = () => {
    const scrollToSection = (id) => {
        const section = document.getElementById(id)
        if (section) {
            section.scrollIntoView({behavior: 'smooth'})
        }
    }
  return (
    <nav className='navbar'>
      <Link onClick={() => scrollToSection('banner')} className='logo'>
        <img src={logo} alt="logo" />
      </Link>
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
            <Link onClick={() => scrollToSection('professionals')}>
                Nossos Profissionais
            </Link>
        </li>
        <li>
            <Link onClick={() => scrollToSection('contact')}>
                Contacto
            </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
