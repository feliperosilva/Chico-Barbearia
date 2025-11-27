import './Footer.css'
import emblem from '../../assets/emblem.png'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'
import mascot from '../../assets/images/mascot.png'

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
                <img src={emblem} alt="emblem" />                
            </div>
            <div className='social-media'>
                <div className='social-links'>
                    <h2 className='follow'><strong>Segue-nos</strong></h2>
                    <div className='media-link'>
                        <img src={instagram} alt="instagram" />
                        <a href="https://www.instagram.com/chicobarbearianudista/" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </div>
                    <div className='media-link'>
                        <img src={facebook} alt="facebook" />
                        <a href="">Facebook</a>
                    </div>
                    <div className='media-link'>
                        <img src={twitter} alt="twitter" />
                        <a href="https://x.com/ChicoBarbearia" target='_blank' rel='noopener noreferrer'>X</a>
                    </div>
                </div>                
            </div>
            <div className='footer-mascot'>
                <img src={mascot} alt="mascot" />
            </div>
        </div>
        <div className='copyright'>
            <span>&copy; Todos os direitos reservados.</span>
        </div>      
    </section>
  )
}

export default Footer
