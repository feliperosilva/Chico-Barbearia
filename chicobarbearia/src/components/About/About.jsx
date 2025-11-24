import './About.css'
import nakedman from '../../assets/images/naked-man.png'

const About = () => {
  return (
    <section id='about' className='about'>
      <div className='concept'>
        <div className='about-concept'>
          <div>
            <h2>Um Conceito</h2>
            <h1>Ousado</h1>
            <div>
              <p>A Chico Barbearia Nudista nasce de uma ideia ousada e libertadora — inspirada nas experiências vividas pelo Chico noutros países, onde descobriu espaços dedicados ao cuidado masculino sem barreiras, sem máscaras e sem preconceitos.</p>

              <p>Aqui, todos os homens são bem-vindos, exatamente como são. Não há julgamentos, apenas aceitação, respeito e um ambiente seguro onde a naturalidade é celebrada. O corpo é apenas parte da experiência — o foco está no bem-estar, na confiança e na liberdade de ser autêntico.</p>

              <p>Mais do que uma simples barbearia, este é um espaço de descontração e descoberta, onde cada cliente pode relaxar, conversar, rir e, quem sabe, viver novas sensações e fantasias que nunca imaginou explorar.</p>

              <p>No final, trata-se disso mesmo: <strong>sentir-se bem na própria pele</strong>.</p>
              </div>
            
          </div>          
        </div>
        <img src={nakedman} alt="nakedman" className='nakedman'/>
      </div>
    </section>
  )
}

export default About
