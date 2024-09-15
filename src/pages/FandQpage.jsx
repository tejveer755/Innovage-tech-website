import React, { useState } from 'react';
import FAQItem from '../components/FAQItem';

function FandQPage() {
  const [answersVisible, setAnswersVisible] = useState({});

  const handleToggleAnswer = (questionId) => {
    setAnswersVisible((prevAnswersVisible) => ({
      ...prevAnswersVisible,
      [questionId]: !prevAnswersVisible[questionId],
    }));
  };

  return (
    <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-24 h-fit shadow-inset-left-right font-space-grotesk" id='faqs'>
      <h1 className="text-center mx-auto w-fit  text-slate-200 font-extrabold text-7xl  border-b-2 pb-4 ">
        F&Qs
      </h1>
      <div className="flex flex-col items-center mt-24 justify-center">
        <FAQItem
          questionId="1"
          question="Lorem ipsum dolor sit, amet consectetur adipisicing nem, placeat pariatur?"
          answer="Answer to question 1 ipsum dolor sit, amet consectetur adipisicing elit. Quidem ab in quas autem assumenda at est eos blanditiis "
          answersVisible={answersVisible}
          handleToggleAnswer={handleToggleAnswer}
        />
       
        <FAQItem
          questionId="2"
          question="Lorem ipsum dolor sit, amet consectetur adipisicing nem, placeat pariatur?"
          answer="Answer to question 1 ipsum dolor sit, amet consectetur adipisicing elit. Quidem ab in quas autem assumenda at est eos blanditiis "
          answersVisible={answersVisible}
          handleToggleAnswer={handleToggleAnswer}
        />
       
        <FAQItem
          questionId="3"
          question="Lorem ipsum dolor sit, amet consectetur adipisicing nem, placeat pariatur?"
          answer="Answer to question 1 ipsum dolor sit, amet consectetur adipisicing elit. Quidem ab in quas autem assumenda at est eos blanditiis "
          answersVisible={answersVisible}
          handleToggleAnswer={handleToggleAnswer}
        />
       
        <FAQItem
          questionId="4"
          question="Lorem ipsum dolor sit, amet consectetur adipisicing nem, placeat pariatur?"
          answer="Answer to question 1 ipsum dolor sit, amet consectetur adipisicing elit. Quidem ab in quas autem assumenda at est eos blanditiis "
          answersVisible={answersVisible}
          handleToggleAnswer={handleToggleAnswer}
        />
       
        {/* Add more FAQ items here */}
       
      </div>
    </div>
  );
}


export default FandQPage;