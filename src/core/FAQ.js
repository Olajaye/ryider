import React, { useState } from 'react';

const FaqComponent = () => {
  const [activeIndex, setActiveIndex] = useState(null); // Keeps track of which question is expanded

  const faqData = [
    {
      question: "Is Ryider free to join?",
      answer: "Yes signing up on Ryider is free"
    },
    {
      question: "How do i get paid?",
      answer: "Once your order is shipped, you'll receive a tracking link in your email."
    },
    {
      question: "Are there linits on the tasks i can do?",
      answer: "Yes, we ship to many countries around the world. Please check the shipping options at checkout."
    },
    // {
    //   question: "Can I modify my order after placing it?",
    //   answer: "Unfortunately, once an order is placed, it cannot be modified. Please double-check before confirming."
    // },
    // {
    //   question: "How can I contact customer support?",
    //   answer: "You can reach our customer support team via email at support@ourstore.com or by calling 1-800-123-456."
    // }
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle the visibility of the clicked question's answer
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-semibold text-center mb-6">Frequently Asked Questions</h2>
      <p className='text-xl font-semibold text-center mb-6'>Everything you need to know about the product and billing.</p>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="rounded-lg shadow-md p-4">
            <div 
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleAnswer(index)}
            >
              <h3 className="text-xl font-medium">{faq.question}</h3>
              <span className={`text-xl font-bold text-blue-500 transform transition-transform duration-300 ${activeIndex === index ? 'rotate-45' : ''}`}>
                {activeIndex === index ? '-' : '+'}
              </span>
            </div>
            {activeIndex === index && (
              <div className="mt-3 text-gray-700">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqComponent;
