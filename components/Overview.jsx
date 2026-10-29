'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { overviewImage } from '../lib/images'

const Overview = ({ setIsOpen }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section id="overview" className="w-full py-12 md:py-16 bg-white font-poppins">
      <div className="container mx-auto px-4" style={{ maxWidth: '1240px' }}>
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:mx-[-16px]">
          
          {/* Image Column */}
          <div className="w-full lg:w-1/2 lg:px-[16px] mb-10 lg:mb-0 flex justify-center lg:sticky lg:top-24">
            <div className="relative w-full max-w-[500px] h-[340px] sm:h-[390px] md:h-[430px] lg:h-[440px] rounded-[24px] overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
               <Image 
                 src={overviewImage} 
                 alt="About Rohan Villa Hennur" 
                 fill 
                 className="object-cover" 
                 sizes="(max-width: 1024px) 100vw, 50vw" 
               />
               <div className="absolute" style={{ right: '8px', bottom: '50%', transform: 'translateY(50%) rotate(-90deg)', transformOrigin: 'center right' }}>
                 <span className="text-[#e0e0e0] text-[10px] tracking-widest uppercase" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>Artistic Impression</span>
               </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="w-full lg:w-1/2 lg:px-[16px] lg:pl-12">
            <div>
              <span className="text-[#8B6A34] font-bold text-[13px] sm:text-[14px] tracking-[2.5px] uppercase mb-2 block">
                LUXURY LIVING
              </span>
              <h2 className="text-[#111111] text-[24px] sm:text-[28px] md:text-[32px] font-black leading-[1.15] mb-4 tracking-tight">
                Overview
              </h2>

              <div className="mb-6">
                <div className="text-[#4A5568] text-[15px] leading-[1.75] text-left flex flex-col gap-3">
                  <p className="m-0">
                    <strong className="text-[#111111]">Rohan Villa Hennur Road</strong> is a new luxurious villas project developed by <strong className="text-[#111111]">Rohan Builders</strong>. The project is located in the heart of Hennur Road, North Bangalore.
                  </p>
                  <p className="m-0">
                    <strong className="text-[#111111]">Rohan Villa Hennur Road</strong> offers exclusive 4 BHK luxurious villas, which is design with modern architecture and top-notch amenities that offers modern, peaceful and serene living. Rohan Villa Hennur Road is a newest masterpiece villa project that redefines luxury living.
                  </p>
                  <p className="m-0">
                    The project offers 20+ modern amenities that include a well-equipped clubhouse, gym, yoga spaces, swimming pool, pet park, multipurpose hall, kids play area, jogging track, tennis court, 24/7 security with CCTV surveillance and many more.
                  </p>
                  {isExpanded && (
                    <div className="flex flex-col gap-3">
                      <p className="m-0">
                        <strong className="text-[#111111]">Rohan Villa Hennur Road</strong> is located in Hennur Road, North Bangalore that enjoys excellent connectivity to key areas like Manyata Tech Park, Kempegowda International Airport and Outer Ring Road. The project has easy access to major IT hubs, schools, hospitals, shopping malls and entertainment hubs.
                      </p>
                    </div>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-[#111111] hover:text-[#8B6A34] font-bold text-[14.5px] mt-3 inline-flex items-center gap-1.5 hover:underline cursor-pointer transition-colors duration-200 focus:outline-none"
                >
                  <span>{isExpanded ? 'Read Less' : 'Read More'}</span>
                  <svg 
                    className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Overview
