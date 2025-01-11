'use client'

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import { useMediaQuery } from "react-responsive"
import { PiArrowRight } from "react-icons/pi"
import {
  IconBriefcase,
  IconIdBadge2,
  IconLockSquareRounded,
  IconShare,
  IconUsers,
  IconRocket,
} from "@tabler/icons-react"
import { GridBackground } from "./grid-background"
import { DynamicText } from "./dynamic-text"
import { ReviewsSection } from "./reviews-section"
import { Footer } from "./footer"

const tabs = [
  {
    icon: <IconIdBadge2 className="w-8 h-8 mr-2 text-black" />,
    name: "Create Profile",
    description: "Generate your unique digital profile.",
    more: (
      <div className="text-black flex items-center font-bold">
        Learn more <PiArrowRight className="ml-1 text-sm" />
      </div>
    ),
    image: "/assets/PlantDoodle.svg",
    color: "bg-red-400",
  },
  {
    icon: <IconShare className="w-8 h-8 mr-2 text-black" />,
    name: "Share Profile",
    description: "Easily share and utilize your profile anywhere.",
    more: (
      <div className="text-black flex items-center font-bold">
        Learn more <PiArrowRight className="ml-1 text-sm" />
      </div>
    ),
    image: "/assets/GroovyDoodle.svg",
    color: "bg-purple-400",
  },
  {
    icon: <IconLockSquareRounded className="w-8 h-8 mr-2 text-black" />,
    name: "Privacy Control",
    description: "Manage who sees your information securely.",
    more: (
      <div className="text-black flex items-center font-bold">
        Learn more <PiArrowRight className="ml-1 text-sm" />
      </div>
    ),
    image: "/assets/CoffeeDoddle.svg",
    color: "bg-blue-400",
  },
  {
    icon: <IconBriefcase className="w-8 h-8 mr-2 text-black" />,
    name: "Job Finder",
    description: "Discover exciting career opportunities.",
    more: (
      <div className="text-black flex items-center font-bold">
        Learn more <PiArrowRight className="ml-1 text-sm" />
      </div>
    ),
    image: "/assets/RunningDoodle.svg",
    color: "bg-yellow-400",
  },
]

const stats = [
  { label: "Active Users", value: "50K+", icon: <IconUsers className="w-6 h-6" /> },
  { label: "Profiles Created", value: "100K+", icon: <IconIdBadge2 className="w-6 h-6" /> },
  { label: "Success Rate", value: "95%", icon: <IconRocket className="w-6 h-6" /> },
]

const HeroSection = () => {
  const ref = useRef(null)
  const [activeTab, setActiveTab] = useState(tabs[0])
  const isSmallScreen = useMediaQuery({ maxWidth: 767 })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  return (
    <div ref={ref} className="relative flex flex-col bg-fuchsia-200 border-4 border-black min-h-screen overflow-hidden">
      <GridBackground />
      
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative pt-20"
        >
          <h1 className="font-bold text-6xl xl:text-8xl text-center mb-4 text-black space-y-4">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="block"
            >
              Redefine Your
            </motion.span>
            <DynamicText />
          </h1>

          <motion.p 
            className="text-2xl pt-8 text-center max-w-2xl mx-auto text-black font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Create, Share, and Manage Your Digital Identity with{" "}
            <motion.span
              className="text-blue-600 font-bold bg-yellow-300 px-4 py-1 border-2 border-black inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Legit
            </motion.span>
          </motion.p>

          <motion.div 
            className="flex gap-4 pt-10 items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="py-4 px-6 bg-lime-400 text-black font-bold border-2 border-black hover:bg-yellow-400 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <div className="flex items-center justify-center text-xl">
                    Create Your Profile
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <PiArrowRight className="ml-2" />
                    </motion.div>
                  </div>
                </Button>
              </motion.div>
            </Link>
          </motion.div>

          <motion.div
            style={{ y }}
            className="pt-16 xl:pt-20 items-center justify-center relative"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
            >
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image
                  src="/assets/blockchain.png"
                  alt="hero image"
                  width={1000}
                  height={1000}
                  className="flex items-center justify-center mx-auto w-96 xl:w-[500px] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex justify-center gap-8 mt-16 flex-wrap"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center gap-3"
              >
                {stat.icon}
                <div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className={`grid ${
              isSmallScreen ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-4"
            } gap-6 w-full max-w-6xl mx-auto mt-16 relative`}
          >
            {tabs.map((tab, index) => (
              <motion.div
                key={tab.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className={`
                  flex flex-col justify-between p-6 rounded-none border-4 border-black ${tab.color}
                  ${
                    activeTab === tab
                      ? "shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                      : "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                  }
                  transition-all duration-200 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
                  transform hover:-translate-y-1
                `}
                onMouseEnter={() => setActiveTab(tab)}
                whileHover={{ scale: 1.02 }}
              >
                <div>
                  <div className="flex items-center mb-3">
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      {tab.icon}
                    </motion.div>
                    <div className="text-xl font-bold">{tab.name}</div>
                  </div>
                  <p className="text-sm font-medium mb-4">{tab.description}</p>
                </div>
                <motion.div
                  className="mt-auto"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {tab.more}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <ReviewsSection />
      </div>
      <Footer />
    </div>
  )
}

export default HeroSection



