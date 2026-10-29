'use client'
import React, { useState } from 'react'

const faqData = [
  {
    question: 'What configurations are available at Rohan Villa Hennur?',
    answer: (
      <>
        Rohan Villa Hennur offers exclusive and spacious <strong className="font-semibold text-[#111111]">4 BHK luxurious villas</strong> designed with modern architecture and top-notch amenities that offer modern, peaceful and serene living.
      </>
    ),
  },
  {
    question: 'What is the starting price of Rohan Villa Hennur?',
    answer: (
      <>
        The starting price is <strong className="font-semibold text-[#111111]">₹ 4.5 Cr* Onwards</strong>. Exclusive pre-launch benefits and special early-bird offers for 4 BHK luxury villas are available upon enquiry for priority registrations.
      </>
    ),
  },
  {
    question: 'Who is the developer of Rohan Villa Hennur?',
    answer:
      'Rohan Villa Hennur Road is developed by Rohan Builders, one of India’s most reputed real estate builders renowned for architectural innovation, superior engineering standards, and quality living spaces.',
  },
  {
    question: 'Where exactly is Rohan Villa located?',
    answer: (
      <>
        The project is ideally situated in the heart of <strong className="font-semibold text-[#111111]">Hennur Road, North Bangalore</strong> (Horamavu Agara Road area), offering seamless connectivity to Manyata Tech Park, Outer Ring Road, and Kempegowda International Airport.
      </>
    ),
  },
  {
    question: 'What amenities are provided at Rohan Villa Hennur?',
    answer:
      'The project offers 20+ modern amenities including a well-equipped clubhouse, gym, yoga spaces, swimming pool, pet park, multipurpose hall, kids play area, jogging track, tennis court, and 24/7 security with CCTV surveillance.',
  },
  {
    question: 'What is the current status and RERA registration of the project?',
    answer:
      'The project is currently in the Pre-Launch phase. The RERA registration is Coming Soon.',
  },
]

const FAQ = () => {
  // First item open by default, set to index 0
  const [openIdx, setOpenIdx] = useState(0)

  const toggleAccordion = (index) => {
    setOpenIdx(prev => (prev === index ? null : index))
  }

  return (
    <section id="faq" className="w-full py-10 md:py-14 bg-white font-poppins overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-[1280px]">
        
        {/* Section Title */}
        <div className="text-center max-w-[800px] mx-auto mb-12 sm:mb-14" data-aos="fade-up">
          <span className="text-[#8B6A34] font-bold text-[13px] sm:text-[14px] tracking-[2.5px] uppercase mb-3 block">
            FAQ
          </span>
          <h2 className="text-[#111111] text-[22px] sm:text-[26px] md:text-[30px] font-extrabold m-0 leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion Container */}
        <div 
          className="max-w-[960px] mx-auto border border-[#dee2e6] rounded-[12px] sm:rounded-[14px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] divide-y divide-[#dee2e6]"
          data-aos="fade-up"
        >
          {faqData.map((item, index) => {
            const isOpen = openIdx === index

            return (
              <div key={index} className="bg-white">
                {/* Accordion Button */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className={`w-full py-4 px-5 sm:py-5 sm:px-7 flex items-center justify-between gap-4 text-left text-[15.5px] sm:text-[17px] transition-all duration-200 ${
                    isOpen
                      ? 'bg-[#F4EFE6] text-[#111111] font-bold shadow-inner'
                      : 'bg-white text-[#212529] font-medium hover:bg-[#fafafa]'
                  }`}
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  
                  {/* Chevron Icon */}
                  <span className={`text-current transition-transform duration-300 transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg 
                      width="18" 
                      height="18" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2.2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </button>

                {/* Accordion Body */}
                {isOpen && (
                  <div className="bg-white px-5 py-5 sm:px-7 sm:py-6 text-[#343a40] text-[15px] sm:text-[15.5px] leading-[1.75] border-t border-[#dee2e6]/80 animate-fadeIn">
                    {item.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default FAQ
