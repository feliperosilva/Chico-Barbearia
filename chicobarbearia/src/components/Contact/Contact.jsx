import './Contact.css'
import maps from '../../assets/images/chico-barbearia.png'
import pin from '../../assets/images/pin.png'
7
const Contact = () => {
  return (
    <section id='contact' className='contact'>
      <div className='contact-title'>
        <img src={pin} alt="pin" className='pin'/>
        <h1>Onde estamos?</h1>
      </div>      
      <div className='info'>
        <div className='info-details'>
          <h2>Contactos</h2>
          <h3>Morada:</h3>
          <p>Rua Lucinda Simões 12E</p>
          <p>1900-305 Lisboa</p>
          <br />
          <h3>Telemóvel:</h3>
          <p>919919919</p>
          <br />
          <h3>Horário de funcionamento:</h3>
          <p>De Quarta à Segunda das 13h às 20h</p>
        </div>
        <div className='maps'>
          <a 
            href="https://www.google.com/maps/place/Chico+Barbearia+Nudista/@38.7354405,-9.1319537,17z/data=!4m6!3m5!1s0xd1933001d18749b:0xc8d34db62afa2810!8m2!3d38.73552!4d-9.1319752!16s%2Fg%2F11mlgplpjw?entry=ttu&g_ep=EgoyMDI1MTEwMi4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className='maps-link'
          >
            <img src={maps} alt="maps" className='maps-img'/>
          </a>
        </div>
      </div>
      
    </section>
  )
}

export default Contact
