"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaqArrow } from "./Icons";

const faqData = [
  {
    question: "What is PDS Digital Solutions?",
    answer:
      "PDS Digital Solutions is a leading provider of innovative digital services, including web development, UI/UX design, digital marketing, and custom software solutions to help businesses scale efficiently.",
  },
  {
    question: "What services does PDS Digital Solutions offer?",
    answer:
      "PDS Digital Solutions is a leading provider of innovative digital services, including web development, UI/UX design, digital marketing, and custom software solutions to help businesses scale efficiently.",
  },
  {
    question: "How does PDS Digital Solutions ensure project success?",
    answer:
      "PDS Digital Solutions is a leading provider of innovative digital services, including web development, UI/UX design, digital marketing, and custom software solutions to help businesses scale efficiently.",
  },
  {
    question: "Can PDS Digital Solutions work with businesses of all sizes?",
    answer:
      "PDS Digital Solutions is a leading provider of innovative digital services, including web development, UI/UX design, digital marketing, and custom software solutions to help businesses scale efficiently.",
  },
  {
    question: "How can I get started with PDS Digital Solutions?",
    answer:
      "PDS Digital Solutions is a leading provider of innovative digital services, including web development, UI/UX design, digital marketing, and custom software solutions to help businesses scale efficiently.",
  },
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="py-4 bg-dark2 mt-4 px-4 rounded-md">
      <button
        className="flex justify-between items-center w-full text-left font-medium text-white focus:outline-none"
        onClick={onClick}
      >
        <span className="sm:text-[19px] text-[17px] font-semibold leading-[120%] ff_poppin">
          {question}
        </span>
        <span
          className={`inline-block transition-transform duration-300 ${
            isOpen ? "" : "transform rotate-180"
          }`}
        >
          <FaqArrow />
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-4 pb-2 text-grey sm:text-lg text-sm font-normal ff_hevatica">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl lg:pe-4">
      <div className=" text-white rounded-lg shadow-md ">
        {faqData.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onClick={() => toggleFAQ(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Faqs;
