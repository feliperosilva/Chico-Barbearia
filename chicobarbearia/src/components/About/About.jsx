import './About.css'
import chico from '../../assets/images/chico.jpeg'
import barbearia from '../../assets/images/barbershop.jpg'

const About = () => {
  return (
    <section id='about' className='about'>
      <h1>Conheça a Chico Barbearia Nudista</h1>
      <div className='chico'>
        <div className='about-chico'>
          <div>
            <h2>Quem é o Chico?</h2>
            <p>O Chico é daquelas pessoas que não passam despercebidas — simpático, divertido e sempre com uma boa história para contar. Depois de anos a viver no mundo da tecnologia, decidiu despir-se das rotinas e abrir espaço para algo novo — literalmente.</p>

            <p>Massagista certificado, o Chico é o criador da <strong>PRIMEIRA BARBEARIA NUDISTA DE LISBOA</strong>. Um conceito ousado, descontraído e cheio de charme, onde o bem-estar começa pela liberdade de ser quem se é.</p>

            <p>Aqui, entre risadas, boas conversas e o toque profissional do Chico, o corpo relaxa, a mente desliga e a experiência… é simplesmente única.</p>
          </div>          
        </div>
        <img src={chico} alt="chico" className='chico-img'/>
      </div>
      <div className='concept'>
        <div className='about-concept'>
          <div>
            <h2>O Conceito</h2>
            <p>A Chico Barbearia Nudista nasce de uma ideia ousada e libertadora — inspirada nas experiências que ele viveu noutros países, onde descobriu espaços dedicados ao cuidado masculino sem barreiras, sem máscaras e sem preconceitos.</p>

            <p>Aqui, todos os homens são bem-vindos, exatamente como são. Não há julgamentos, apenas aceitação, respeito e um ambiente seguro onde a naturalidade é celebrada. O corpo é apenas parte da experiência — o foco está no bem-estar, na confiança e na liberdade de ser autêntico.</p>

            <p>Mais do que uma simples barbearia, este é um espaço de descontração e descoberta, onde cada cliente pode relaxar, conversar, rir e, quem sabe, viver novas sensações e fantasias que nunca imaginou explorar.</p>

            <p>No final, trata-se disso mesmo: <strong>sentir-se bem na própria pele</strong>.</p>
          </div>          
        </div>
        <img src={barbearia} alt="barbershop" className='barbershop-img'/>
      </div>
    </section>
  )
}

export default About
