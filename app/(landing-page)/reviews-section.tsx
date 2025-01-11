'use client'

import { motion } from "framer-motion"
import { Star } from 'lucide-react'
import Image from "next/image"
import { useState } from "react"

const reviews = [
  {
    name: "Sarah Johnson",
    role: "Software Engineer",
    image: "/assets/s1.png",
    review: "Legit helped me showcase my portfolio and land my dream job! The digital profile is exactly what I needed.",
    rating: 5,
    company: "Google"
  },
  {
    name: "Michael Chen",
    role: "UX Designer",
    image: "/assets/av1.png",
    review: "The platform's privacy controls are top-notch. I can easily manage who sees what on my profile.",
    rating: 5,
    company: "Apple"
  },
  {
    name: "Emily Rodriguez",
    role: "Content Creator",
    image: "/assets/s2.png",
    review: "Simple to use yet powerful. I love how I can customize my profile to match my personal brand.",
    rating: 4,
    company: "Netflix"
  },
  {
    name: "David Kim",
    role: "Product Manager",
    image: "/assets/av2.png",
    review: "Game-changer for professional networking. The interface is intuitive and the features are exactly what I needed.",
    rating: 5,
    company: "Microsoft"
  },
  {
    name: "Lisa Thompson",
    role: "Marketing Director",
    image: "/assets/s3.png",
    review: "Finally, a platform that understands personal branding! The customization options are fantastic.",
    rating: 5,
    company: "Adobe"
  },
  {
    name: "James Wilson",
    role: "Frontend Developer",
    image: "/assets/av4.png",
    review: "The developer-focused features are amazing. Love how I can showcase my GitHub projects directly.",
    rating: 4,
    company: "Meta"
  },
  {
    name: "Anna Martinez",
    role: "Freelance Designer",
    image: "/assets/s4.png",
    review: "Perfect for freelancers! Makes managing my professional presence so much easier.",
    rating: 5,
    company: "Freelance"
  },
  {
    name: "Tom Anderson",
    role: "Tech Lead",
    image: "/assets/av5.png",
    review: "The integration features are brilliant. Connects seamlessly with all my professional tools.",
    rating: 5,
    company: "Amazon"
  },
  {
    name: "Sophie Lee",
    role: "Data Scientist",
    image: "/assets/s5.png",
    review: "Great for showcasing technical projects. The analytics features are particularly useful.",
    rating: 4,
    company: "Tesla"
  },
  {
    name: "Ryan Parker",
    role: "Startup Founder",
    image: "/assets/av7.png",
    review: "Essential tool for anyone building their professional brand. Worth every penny!",
    rating: 5,
    company: "TechStart"
  }
]

export const ReviewsSection = () => {
  const [isPaused, setIsPaused] = useState(false)

  return (
    <div className="w-full py-16">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold text-center mb-12"
      >
        Trusted by Professionals
      </motion.h2>
      
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-fuchsia-200 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-fuchsia-200 to-transparent z-10" />
        
        {/* Scrolling Container */}
        <div 
          className="overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
          }}
        >
          <div 
            className={`flex gap-6 py-8 animate-scroll hover:[animation-play-state:paused] ${
              isPaused ? '[animation-play-state:paused]' : ''
            }`}
          >
            {/* First set of reviews */}
            {reviews.map((review) => (
              <div
                key={`first-${review.name}`}
                className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all w-[400px] flex flex-col shrink-0 hover:scale-[1.02]"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={review.image}
                    alt={review.name}
                    width={60}
                    height={60}
                    className="rounded-full border-2 border-black"
                  />
                  <div>
                    <h3 className="font-bold text-lg">{review.name}</h3>
                    <p className="text-sm font-medium">{review.role}</p>
                    <p className="text-sm text-gray-600">{review.company}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 flex-grow">{review.review}</p>
              </div>
            ))}
            
            {/* Duplicate set of reviews for seamless loop */}
            {reviews.map((review) => (
              <div
                key={`second-${review.name}`}
                className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all w-[400px] flex flex-col shrink-0 hover:scale-[1.02]"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={review.image}
                    alt={review.name}
                    width={60}
                    height={60}
                    className="rounded-full border-2 border-black"
                  />
                  <div>
                    <h3 className="font-bold text-lg">{review.name}</h3>
                    <p className="text-sm font-medium">{review.role}</p>
                    <p className="text-sm text-gray-600">{review.company}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 flex-grow">{review.review}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

