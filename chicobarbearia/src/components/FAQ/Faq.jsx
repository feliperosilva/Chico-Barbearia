import './Faq.css'
import naturist from '../../assets/images/naturist.jpg'
import { useState } from 'react'

const faq = [
    {
        id: 1,
        question: 'É obrigatório ficar nu?',
        answer:'Não, não és obrigado a ficar nu! Aqui na Chico Barbearia Nudista, podes sentir-te à vontade para vir como quiseres: vestido, em roupa interior ou completamente nu. O importante é que te sintas confortável!'
    },
    {
        id: 2,
        question: 'Os profissionais da Chico Barbearia Nudista estão sempre nu?',
        answer:'Todos os profissionais da Chico Barbearia Nudista fazem os seus atendimentos sempre nus. Porém, em momentos de pausa ou de ausência de clientes, os profissionais são livres para ficarem nus ou a usarem roupa interior.'
    },
    {
        id: 3,
        question: 'Preciso de agendamento para frequentar a Chico Barbearia Nudista?',
        answer:'Sim! A admissão de clientes à barbearia é sempre feita mediante agendamento prévio de serviços oferecidos, seja na área de barbearia, estética ou bem-estar.'
    },
    {
        id: 4,
        question: 'Há interação entre clientes e profissionais?',
        answer:'Para que o ambiente mantenha-se agradável a todos e para preservar o profissionalismo de nossos colaboradores, a interação com os funcionários da Chico Barbearia Nudista poderá não acontecer, para que isto não interfira no serviço a ser prestado, seja o teu próprio ou de outros clientes. A lembrar que o respeito mútuo vem sempre em primeiro lugar.'
    },
    {
        id: 5,
        question: 'Há interação entre clientes?',
        answer:'Na Chico Barbearia Nudista, o ambiente foi pensado para que todos se sintam a vontade. A interação entre clientes pode acontecer, mas sempre mantendo-se o respeito mútuo e também o respeito aos serviços que estiverem a ser prestados dentro da barbearia.'
    },
    {
        id: 6,
        question: 'Há espaço privativo para interação entre clientes?',
        answer:'Não, não há qualquer espaço privativo. O ambiente da Chico Barbearia Nudista foi pensado para que os clientes possam aproveitar um momento de descontração e de descobertas. Por isto, queremos trazer o ambiente do convívio para o nosso espaço.'
    },
    {
        id: 7,
        question: 'É permitido fumar ou fazer uso de outras substâncias dentro da barbearia?',
        answer:'Fumar ou consumir qualquer tipo de substância ilícita é expressamente proibido dentro da Chico Barbearia Nudista. Caso o cliente seja apanhado a fazer tal uso, será convidado a se retirar da barbearia e sua entrada estará vetada.'
    },
]

const Faq = () => {
    const [open, setOpen] = useState(null)

  return (
    <section id='faq' className='faq'>
        <h1>
          Perguntas Frequentes
        </h1>
        <div className='questions-cards'>
            <div>
                {faq.map(qtn => 
                    <div className='questions' key={qtn.id}>
                        <div className='question-title' onClick={() => open === qtn.id ? setOpen(null) : setOpen(qtn.id)}>
                            <p className='question'>{qtn.question}</p>
                            <span><strong>{open === qtn.id ? '-' : '+'}</strong></span>
                        </div>
                        <p className={open === qtn.id ? 'answer-open' : 'answer-close'}>{qtn.answer}</p>
                    </div>
                )}
            </div>            
            <div className='question-img'>
                <img src={naturist} alt="" />
            </div>
        </div>      
    </section>
  )
}

export default Faq
