import './Banner.css'
import naked from '../../assets/images/naked.mp4'

const Banner = () => {
  return (
    <section id='banner' className='banner'>
      <video className='video-bg' src={naked} autoPlay loop muted playsInline />
      <div className='header'>        
        <h1>A Primeira Barbearia Nudista de Portugal</h1>
        <p>Preparem-se para uma experiência única, intensa e absolutamente sem limites. Aqui, o estilo encontra a liberdade. Esqueça a roupa, esqueça o convencional – é só você, a navalha e o prazer de se sentir completamente livre</p>
        <button>Marque seu horário</button>
      </div>
    </section>
  )
}

export default Banner
