'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import {
  IconBrandGithub,
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandDiscord,
  IconArrowRight,
  IconLoader2,
  IconCheck,
  IconX,
} from "@tabler/icons-react"
import { useRef, useState, useTransition } from "react"
import { subscribeToNewsletter } from "@/app/actions/newsletter"
import { toast } from "sonner"

const footerLinks = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Templates", "Enterprise"],
  },
  {
    title: "Resources",
    links: ["Documentation", "Guides", "Help Center", "API Reference"],
  },
  {
    title: "Company",
    links: ["About", "Blog", "Careers", "Press Kit"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "Security", "Cookies"],
  },
]

const socialLinks = [
  {
    icon: IconBrandGithub,
    href: "https://github.com/adityapawar327",
    label: "GitHub",
  },
  {
    icon: IconBrandTwitter,
    href: "#",
    label: "Twitter",
  },
  {
    icon: IconBrandLinkedin,
    href: "https://www.linkedin.com/in/adityapawar327/",
    label: "LinkedIn",
  },
  {
    icon: IconBrandDiscord,
    href: "#",
    label: "Discord",
  },
]

export function Footer() {
  const [isPending, startTransition] = useTransition()
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  async function handleSubscribe(formData: FormData) {
    startTransition(async () => {
      const result = await subscribeToNewsletter(formData)
      
      if (result.success) {
        setStatus('success')
        toast.success(result.message)
        formRef.current?.reset()
        
        // Reset status after 2 seconds
        setTimeout(() => {
          setStatus('idle')
        }, 2000)
      } else {
        setStatus('error')
        toast.error(result.message)
        
        // Reset status after 2 seconds
        setTimeout(() => {
          setStatus('idle')
        }, 2000)
      }
    })
  }

  return (
    <footer className="border-t-4 border-black bg-fuchsia-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Newsletter Section */}
          <div className="lg:col-span-2">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-bold mb-4"
            >
              Stay Updated
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-700 mb-4"
            >
              Get the latest updates about new features and announcements.
            </motion.p>
            <motion.form 
              ref={formRef}
              action={handleSubscribe}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex gap-2"
            >
              <Input 
                type="email" 
                name="email"
                placeholder="Enter your email" 
                className="bg-white border-2 border-black focus-visible:ring-0 focus-visible:ring-offset-0"
                required
              />
              <Button 
                type="submit"
                disabled={isPending}
                className={`
                  relative bg-lime-400 text-black font-bold border-2 border-black 
                  hover:bg-yellow-400 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
                  hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
                  disabled:opacity-100
                `}
              >
                <span className={isPending ? 'opacity-0' : 'opacity-100 flex items-center'}>
                  Subscribe
                  <IconArrowRight className="ml-2 h-4 w-4" />
                </span>
                
                {isPending && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <IconLoader2 className="w-5 h-5 animate-spin" />
                  </div>
                )}
                
                {status === 'success' && !isPending && (
                  <div className="absolute inset-0 flex items-center justify-center bg-green-400 border-black">
                    <IconCheck className="w-5 h-5" />
                  </div>
                )}
                
                {status === 'error' && !isPending && (
                  <div className="absolute inset-0 flex items-center justify-center bg-red-400 border-black">
                    <IconX className="w-5 h-5" />
                  </div>
                )}
              </Button>
            </motion.form>
          </div>

          {/* Navigation Links */}
          {footerLinks.map((section, index) => (
            <motion.div 
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 2) }}
            >
              <h3 className="font-bold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-gray-700 hover:text-black transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t-2 border-black">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-6"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="bg-white p-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4"
            >
              <p className="text-sm text-gray-700">
                © 2024 Legit. All rights reserved.
              </p>
              <div className="bg-black px-3 py-1 text-white text-sm font-medium rounded-full">
                v1.0.0
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}


