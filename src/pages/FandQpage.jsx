import React, { useEffect, useState } from 'react';
import FAQItem from '../components/FAQItem';
import "aos/dist/aos.css";

function FandQPage() {

  
  const [FaQ, setFaQ] = useState([
    { question: "question 1", answer: "Answer 1" },
    { question: "question 2", answer: "Answer 2" },
    { question: "question 3", answer: "Answer 3" },
    { question: "question 4", answer: "Answer 4" },
    { question: "question 4", answer: "Answer 4" },
    { question: "question 4", answer: "Answer 4" },
  ]);

  return (
    <>
    <div className="bg-transparent py-24  shadow-inset-left-right font-space-grotesk"  id='faqs'>
    <h1 className="text-center mx-auto w-fit  text-slate-200 font-extrabold md:text-7xl text-5xl font-space-grotesk border-b-2 pb-4 ">F&Qs</h1>

      <div className="flex flex-col items-center mt-16   justify-center">

        {FaQ.map((FaQ, index) => (
          <FAQItem
            key={index}
            question={FaQ.question}
            answer={FaQ.answer}
          />
        ))}



      </div>
    </div>
    </>
  );
}


export default FandQPage;