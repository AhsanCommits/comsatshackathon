import '../../../styles/Home/faq.scss';
import FAQQuestion from './FAQQuestion';

const FAQ = () => {
  return (
    <section id="faq" className="faq">
      <h1 className="faq__heading">FAQs</h1>
      <div className="faq__container">
        <div className='faq__items'>
          <FAQQuestion
            question="Is DevHack free?"
            answer="Yes. Participation in DevHack is completley free!"
          />
          <FAQQuestion
            question="Will DevHack be in person?"
            answer="Yes, DevHack will be in person. Stay tuned for more information!"
          />
          <FAQQuestion
            question="How big can my team be?"
            answer="You can have a maximum of 4 people on your team."
          />
          <FAQQuestion
            question="Do you allow walk-ins and last minute registration?"
            answer="We accept walk-ins based on availability after hacker check-in. More details will be announced closer to the event!"
          />
          <FAQQuestion
            question="What if I don't know how to code?"
            answer="No problem! You can learn alongside others with resources such as tech talks, a Slack workplace to ask questions, and engineers from sponsoring companies
            to help you build something you can be proud of."
          />
          <FAQQuestion
            question="What are the requirements to attend?"
            answer="DevHack is open to all undergraduate college students who are of age 18 or older."
          />
          <FAQQuestion
            question='What are the requirements to attend?'
            answer="DevHack is open to all undergraduate college students who are of age 18 or older."
          />
        </div>
      </div>
    </section>

  )
}

export default FAQ;