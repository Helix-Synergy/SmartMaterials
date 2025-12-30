import React, { useState } from "react";

const faqLinks = {
  tracks:"/smartmaterials-conference-tracks/" ,
  abstractSubmission: "/abstract-submission",
  schedule:"/smartmaterials-event-schedule",
  email: "mailto:hello@helixconferences.com",

};

export const faqData = [
  {
    question: "What is SMARTMATERIALS-2026?",
    answer:
      "SMARTMATERIALS-2026, officially titled the “Smart Materials, Nanotech & Advanced Manufacturing Congress”, is a leading international conference organized by Helix Conferences. It brings together researchers, innovators, industry leaders, and startups to explore breakthroughs in smart materials, nanotechnology, and advanced manufacturing techniques.",
  },
  {
    question: "When and where will SMARTMATERIALS-2026 take place?",
    answer:
      "SMARTMATERIALS-2026 will be held on September 24–25, 2026, in Osaka, Japan.",
  },
  {
    question: "What are the key highlights of SMARTMATERIALS-2026?",
    answer:
      "Keynote sessions by global experts, technical workshops, panel discussions, live technology demonstrations, startup showcases, and high-impact networking opportunities.",
  },
  {
    question: "What topics and tracks are covered at SMARTMATERIALS-2026?",
    answer: (
      <>
        Explore the complete list of conference tracks here:{" "}
        <a
          href={faqLinks.tracks}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          SMARTMATERIALS-2026 Tracks
        </a>
        .
      </>
    ),
  },
  {
    question: "How can I present my research or explore sponsorship opportunities?",
    answer: (
      <>
        To present your research, demonstrate technology, or discuss sponsorship
        opportunities, please contact us at{" "}
        <a href={faqLinks.email} className="text-blue-600 underline">
          hello@helixconferences.com
        </a>
        .
      </>
    ),
  },
  {
    question: "How can I submit an abstract or proposal?",
    answer: (
      <>
        Abstract and presentation submissions can be made{" "}
        <a
          href={faqLinks.abstractSubmission}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          here
        </a>
        .
      </>
    ),
  },
  {
    question: "Who should attend SMARTMATERIALS-2026?",
    answer:
      "Researchers, materials scientists, nanotechnology experts, engineers, innovators, industrial designers, startup founders, and academicians.",
  },
  {
    question: "How many participants are expected?",
    answer:
      "SMARTMATERIALS-2026 is expected to host 200+ international participants, including speakers, delegates, exhibitors, and sponsors.",
  },
  {
    question: "Is there a registration fee?",
    answer:
      "Yes, registration fees apply for attendees, speakers, and exhibitors. Pricing details are available under the “Buy A Ticket” section.",
  },
  {
    question: "How can I get assistance with travel or accommodation?",
    answer: (
      <>
        For travel and accommodation support, please contact{" "}
        <a href={faqLinks.email} className="text-blue-600 underline">
          hello@helixconferences.com
        </a>
        .
      </>
    ),
  },
];





const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <div key={index} className="border-b border-gray-300 mb-4">
          <button
            className="w-full text-left py-4 px-2 font-medium text-lg flex justify-between items-center"
            onClick={() => toggle(index)}
          >
            {item.question}
            <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
          </button>
          {openIndex === index && (
            <div className="px-4 pb-4 text-gray-700">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
