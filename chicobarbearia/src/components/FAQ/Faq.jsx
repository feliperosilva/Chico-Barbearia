import './Faq.css'
import characters from '../../assets/images/characters.jpg'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const faq = [
    {
        id: 1,
        question: 'faq_section.question.1',
        answer:'faq_section.answer.1'
    },
    {
        id: 2,
        question: 'faq_section.question.2',
        answer:'faq_section.answer.2'
    },
    {
        id: 3,
        question: 'faq_section.question.3',
        answer:'faq_section.answer.3'
    },
    {
        id: 4,
        question: 'faq_section.question.4',
        answer:'faq_section.answer.4'
    },
    {
        id: 5,
        question: 'faq_section.question.5',
        answer:'faq_section.answer.5'
    },
    {
        id: 6,
        question: 'faq_section.question.6',
        answer:'faq_section.answer.6'
    },
    {
        id: 7,
        question: 'faq_section.question.7',
        answer:'faq_section.answer.7'
    },
    {
        id: 8,
        question: 'faq_section.question.8',
        answer:'faq_section.answer.8'
    },
    {
        id: 9,
        question: 'faq_section.question.9',
        answer:'faq_section.answer.9'
    },
    {
        id: 10,
        question: 'faq_section.question.10',
        answer:'faq_section.answer.10'
    }
]

const Faq = ({ onBook }) => {
    const [open, setOpen] = useState(null)

    const {t} = useTranslation()

  return (
    <section id='faq' className='faq'>
        <h1>
          FAQ
        </h1>
        <div className='questions-cards'>
            <div>
                {faq.map(qtn => 
                    <div className='questions' key={qtn.id}>
                        <div className='question-title' onClick={() => open === qtn.id ? setOpen(null) : setOpen(qtn.id)}>
                            <p className='question'>{t(qtn.question)}</p>
                            <span><strong>{open === qtn.id ? '-' : '+'}</strong></span>
                        </div>
                        <p className={open === qtn.id ? 'answer-open' : 'answer-close'}>{t(qtn.answer)}<span className={qtn.id === 10 ? 'url-show' : 'url-hide'} onClick={onBook}>{t('faq_section.answer.10a')}</span></p>
                    </div>
                )}
            </div>            
            <div className='question-img'>
                <img src={characters} alt="characters" />
            </div>
        </div>      
    </section>
  )
}

export default Faq
