import { AiFillCaretDown } from 'react-icons/ai';
import { useState } from 'react';

const FAQQuestion = ({ question, answer }) => {

  const [isAnswerDisplaying, setAnswerDisplaying] = useState(false);

  return (
    <div className="faq__item">
      <div className='faq__item--question' onClick={() => setAnswerDisplaying(prev => !prev)}>
        <p>
          {question}
        </p>

        <div>
          <AiFillCaretDown />
        </div>
      </div>
      <div className='faq__item--answer' style={{ display: isAnswerDisplaying ? 'block' : 'none' }}>
        {answer}
      </div>
    </div>
  )
}

export default FAQQuestion;