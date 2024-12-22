import  { useState } from 'react';
import "./Faq.css"
import { 
    FAQS_APPOINTMENTS_CONSULTATIONS, 
    FAQS_EMERGENCY_FOLLOWUPCARE, 
    FAQS_GENERAL_QUESTIONS, 
    FAQS_INSURANCE_PAYMENTS, 
    FAQS_TITLES, 
    FAQS_TREATMENT_RECOVERY } 
from '@/Components/Shared/Consts';


interface FaqItemProps {
    question: string;
    answer: string;
  }
  
  const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collection-item w-dyn-item">
      <div 
        js-faq-collapse="true" 
        className="faq-question-box" 
        onClick={toggle}
      >
        <div className="faq-questions">{question}</div>
        <div className="faq-plus">
          <div>{isOpen ? '-' : '+'}</div>
        </div>
      </div>
      <div 
        style={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }} 
        className="faq-answer-box"
      >
        <div className="faq-answer">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

const FaqList = () => {
  return (
      <>
      <div className="bg-gray-100">
        <div className="text-center my-8"> 
        <h1 className="text-4xl font-bold text-gray-800 md:text-4xl lg:text-5xl relative inline-block">
          FAQs
          <span className="block h-1 w-16 bg-primary mt-2 mx-auto"></span>
        </h1>
        </div>

     <div>
      <h2 className="text-1.5xl tracking-wider font-bold text-center my-10 md:mt-20">
      {FAQS_TITLES.generalQuestions}
      </h2>
        </div>        
    <div className="w-dyn-list">
      <div role="list" className="collection-list w-dyn-items mx4 sm:mx-[10%]">
        {FAQS_GENERAL_QUESTIONS.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>


    <div>
      <h2 className="text-1.5xl tracking-wider font-bold text-center my-10 md:mt-20">
      {FAQS_TITLES.appointmentsnConsultations}
      </h2>
        </div>        
    <div className="w-dyn-list">
      <div role="list" className="collection-list w-dyn-items mx4 sm:mx-[10%]">
        {FAQS_APPOINTMENTS_CONSULTATIONS.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>

    <div>
      <h2 className="text-1.5xl tracking-wider font-bold text-center my-10 md:mt-20">
      {FAQS_TITLES.treatmentnRecovery}
      </h2>
        </div>        
    <div className="w-dyn-list">
      <div role="list" className="collection-list w-dyn-items mx4 sm:mx-[10%]">
        {FAQS_TREATMENT_RECOVERY.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>

    <div>
      <h2 className="text-1.5xl tracking-wider font-bold text-center my-10 md:mt-20">
      {FAQS_TITLES.insurancenPayments}
      </h2>
        </div>        
    <div className="w-dyn-list">
      <div role="list" className="collection-list w-dyn-items mx4 sm:mx-[10%]">
        {FAQS_INSURANCE_PAYMENTS.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>

    <div>
      <h2 className="text-1.5xl tracking-wider font-bold text-center my-10 md:mt-20">
      {FAQS_TITLES.EmergencynFollowUpCare}
      </h2>
        </div>        
    <div className="w-dyn-list">
      <div role="list" className="collection-list w-dyn-items mx4 sm:mx-[10%]">
        {FAQS_EMERGENCY_FOLLOWUPCARE.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
    </div>
    </>
  );
};

export default FaqList;