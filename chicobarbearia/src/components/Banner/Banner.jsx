import './Banner.css'
import naked from '../../assets/images/malebody.mp4'

const Banner = () => {
  return (
    <section id='banner' className='banner'>
      <video className='video-bg' src={naked} autoPlay loop muted playsInline />
      <div className='header'>        
        <h1>A Primeira Barbearia Nudista da Europa</h1>
        <p>Preparem-se para uma experiência única, intensa e absolutamente sem limites. Aqui, o estilo encontra a liberdade. Esqueça a roupa, esqueça o convencional – é só você, a navalha e o prazer de se sentir completamente livre</p>
        <a href="https://buk.pt/chico-barbearia-nudista" target='_blank' rel=' noopener noreferer'><button className='cta'>Marque seu horário</button></a>
      </div>
    </section>
  )
}

export default Banner
