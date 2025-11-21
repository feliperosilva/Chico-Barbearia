import { Link } from 'react-router-dom'
import { useEffect } from 'react'
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

  return (
    <nav className='navbar' id='navbar'>
      <ul className='links'>
        <li>
            <Link onClick={() => scrollToSection('banner')} className='nav-link'>
                Home
            </Link>
        </li>
        <li>
            <Link onClick={() => scrollToSection('about')} className='nav-link'>
                O Conceito
            </Link>
        </li>
        <li>
            <Link onClick={() => scrollToSection('services')} className='nav-link'>
                Serviços
            </Link>
        </li>
        <li>            
            <div className='logo'>
                <img src={logo} alt="logo" />
            </div>
        </li>
        <li>
            <Link onClick={() => scrollToSection('professionals')} className='nav-link'>
                Nossos Profissionais
            </Link>
        </li>
        <li>
            <Link onClick={() => scrollToSection('faq')} className='nav-link'>
                FAQ
            </Link>
        </li>
        <li>
            <Link onClick={() => scrollToSection('contact')} className='nav-link'>
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
