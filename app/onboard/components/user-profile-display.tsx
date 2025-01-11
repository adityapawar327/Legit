"use client"

import React from "react";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandX,
  IconBrandYoutube,
  IconBriefcase,
  IconMail,
  IconMapPin,
  IconPhone,
} from "@tabler/icons-react";
import Link from "next/link";

interface UserProfileDisplayProps {
  formData: any;
  countryCode: string;
}

const UserProfileDisplay: React.FC<UserProfileDisplayProps> = ({
  formData,
  countryCode,
}) => (
  <div className="flex items-center justify-center min-h-screen p-4">
    <style jsx global>{`
      .scrollbar-hide::-webkit-scrollbar {
        display: none;
      }
      .scrollbar-hide {
        -ms-overflow-style: none; 
        scrollbar-width: none;  
      }
    `}</style>
    
    <div className="relative w-[380px] h-[780px] bg-[#1C1C1E] rounded-[55px] p-4 flex items-center justify-center shadow-2xl border-[3px] border-[#1C1C1E]">
      {/* Dynamic Island */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[120px] h-[35px] bg-[#1C1C1E] rounded-b-3xl z-20 transition-all duration-300 hover:w-[150px]">
        <div className="absolute top-[10px] left-[22px] w-[12px] h-[12px] rounded-full bg-[#1C1C1E]" /> {/* Camera */}
      </div>
      
      {/* Main Content Container */}
      <div className="relative w-full h-full rounded-[45px] bg-yellow-300 overflow-hidden">
        {/* Inner Content with Padding */}
        <div className="h-full overflow-y-auto scrollbar-hide">
          <div className="px-6 py-12 flex flex-col items-center justify-start space-y-6">
            {/* Profile Image and Username */}
            <div className="text-center">
              <div className="relative">
                <img
                  className="w-28 h-28 object-cover object-center rounded-full border-4 border-black mx-auto"
                  src={formData.imageUrl || "/images/avatar.jpeg"}
                  alt="User avatar"
                />
              </div>
              <p className="font-bold text-2xl text-black mt-4">
                @{`${formData.username}` || `legit`}
              </p>
              <p className="text-lg text-black font-medium mt-2 px-4">
                {formData.info || "Your seamless gateway to creating and managing secure DIDs"}
              </p>
            </div>

            {/* Job and Location */}
            <div className="grid grid-cols-2 gap-4 w-full">
              <div className="group flex items-center justify-center space-x-2 bg-lime-400 px-4 py-3 rounded-2xl border-2 border-black transition-transform duration-200 hover:scale-105">
                <IconBriefcase width={20} height={20} />
                <p className="text-base font-bold">{formData.job_title || "Company"}</p>
              </div>
              <div className="group flex items-center justify-center space-x-2 bg-cyan-400 px-4 py-3 rounded-2xl border-2 border-black transition-transform duration-200 hover:scale-105">
                <IconMapPin width={20} height={20} />
                <p className="text-base font-bold">{countryCode}</p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="w-full space-y-4">
              <div className="group flex items-center justify-center space-x-2 bg-fuchsia-400 px-4 py-3 rounded-2xl border-2 border-black transition-transform duration-200 hover:scale-105">
                <IconMail width={20} height={20} />
                <p className="text-base font-bold">{formData.email || "identiFi@gmail.com"}</p>
              </div>
              <div className="group flex items-center justify-center space-x-2 bg-orange-400 px-4 py-3 rounded-2xl border-2 border-black transition-transform duration-200 hover:scale-105">
                <IconPhone width={20} height={20} />
                <p className="text-base font-bold">{formData.phone_number || "+00 123 456 789"}</p>
              </div>
            </div>

            {/* Skills */}
            <div className="w-full text-center">
              <h3 className="text-xl font-bold text-black mb-4">Skills</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {formData.skills.map((skill: string, index: number) => (
                  <div
                    key={index}
                    className="group bg-purple-400 px-4 py-2 rounded-xl border-2 border-black transition-transform duration-200 hover:scale-105"
                  >
                    <p className="text-sm font-bold">{skill}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Socials */}
            <div className="w-full text-center pb-6">
              <h3 className="text-xl font-bold text-black mb-4">Socials</h3>
              <div className="flex justify-center space-x-4 px-4">
                {formData.x && (
                  <Link href={formData.x}>
                    <div className="flex items-center justify-center w-14 h-14 bg-blue-400 rounded-2xl border-2 border-black hover:scale-110 transition-all duration-200">
                      <IconBrandX width={24} height={24} color="black" />
                    </div>
                  </Link>
                )}
                {formData.instagram && (
                  <Link href={formData.instagram}>
                    <div className="flex items-center justify-center w-14 h-14 bg-pink-400 rounded-2xl border-2 border-black hover:scale-110 transition-all duration-200">
                      <IconBrandInstagram width={24} height={24} color="black" />
                    </div>
                  </Link>
                )}
                {formData.youtube && (
                  <Link href={formData.youtube}>
                    <div className="flex items-center justify-center w-14 h-14 bg-red-400 rounded-2xl border-2 border-black hover:scale-110 transition-all duration-200">
                      <IconBrandYoutube width={24} height={24} color="black" />
                    </div>
                  </Link>
                )}
                {formData.github && (
                  <Link href={formData.github}>
                    <div className="flex items-center justify-center w-14 h-14 bg-green-400 rounded-2xl border-2 border-black hover:scale-110 transition-all duration-200">
                      <IconBrandGithub width={24} height={24} color="black" />
                    </div>
                  </Link>
                )}
                {formData.linkedin && (
                  <Link href={formData.linkedin}>
                    <div className="flex items-center justify-center w-14 h-14 bg-cyan-400 rounded-2xl border-2 border-black hover:scale-110 transition-all duration-200">
                      <IconBrandLinkedin width={24} height={24} color="black" />
                    </div>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Home Indicator */}
      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-zinc-600/50 rounded-full" />
    </div>
  </div>
);

export default UserProfileDisplay;



