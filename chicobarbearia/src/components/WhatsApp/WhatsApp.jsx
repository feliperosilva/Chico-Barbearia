import './WhatsApp.css'

import whatsapp from '../../assets/images/whatsapp.png'

const WhatsApp = ({phone, message}) => {
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

    return (
        <div className='whatsapp'>
            <a href={url} target='_blank' rel='noopener noreferrer' className='whatsapp-link'>
                <img src={whatsapp} alt="whatsapp"  className='whatsapp-button'/>
            </a>
        </div>
    )
}

export default WhatsApp
