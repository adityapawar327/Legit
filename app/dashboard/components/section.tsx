"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { useMediaQuery } from "react-responsive";
import { useToast } from "@/components/ui/use-toast";
import {
  PiArrowRight,
  PiBookOpenTextLight,
  PiFileThin,
  PiSparkleLight,
  PiTargetLight,
} from "react-icons/pi";
import {
  IconBriefcase2,
  IconCake,
  IconClock,
  IconSchool,
  IconUser,
} from "@tabler/icons-react";
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
import {
  getUserByAddress,
  getUserByUsername,
  getUsernameByAddress,
} from "@/utils/queries";
import Link from "next/link";
import { Toaster } from "@/components/ui/toaster";
import { useWallets } from "@privy-io/react-auth";

const tabs = [
  {
    icon: (
      <PiSparkleLight className="text-3xl mr-2 text-purple-600 bg-purple-100 p-1 rounded-md" />
    ),
    name: "AI",
    feature: "Now with Q&A",
    description: "Ask literally anything. identiBot Will answer.",
    more: (
      <div className="text-purple-600 flex items-center">
        Learn more <PiArrowRight className="ml-1 text-sm" />
      </div>
    ),
    image: "/assets/GroovyDoodle.svg",
  },
  {
    icon: (
      <PiBookOpenTextLight className="text-3xl mr-2 text-red-600 bg-red-100 p-1 rounded-md" />
    ),
    name: "Create ID",
    description: "Get your DID on the blockchain.",
    more: (
      <div className="text-red-600 flex items-center">
        Learn more <PiArrowRight className="ml-1 text-sm" />
      </div>
    ),
    image: "/assets/PlantDoodle.svg",
  },
  {
    icon: (
      <PiTargetLight className="text-3xl mr-2 text-blue-600 bg-blue-100 p-1 rounded-md" />
    ),
    name: "Privacy ",
    description: "Control who sees your information",
    more: (
      <div className="text-blue-600 flex items-center">
        Learn more <PiArrowRight className="ml-1 text-sm" />
      </div>
    ),
    image: "/assets/CoffeeDoddle.svg",
  },
  {
    icon: (
      <PiFileThin className="text-3xl mr-2 text-yellow-600 bg-yellow-100 p-1 rounded-md" />
    ),
    name: "Find Jobs",
    description: "Discover developer opportunities.",
    more: (
      <div className="text-yellow-600 flex items-center">
        Learn more <PiArrowRight className="ml-1 text-sm" />
      </div>
    ),
    image: "/assets/RunningDoodle.svg",
  },
];

const Section = () => {
  const [formData, setFormData] = useState<any>({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    home_address: "",
    date_of_birth: "",
    education: "",
    work_history: "",
    phone_number: "",
    job_title: "",
    x: "",
    instagram: "",
    github: "",
    youtube: "",
    linkedin: "",
    info: "",
    imageUrl: "",
    skills: ["UI/UX", "DevOps", "FrontEnd Dev"],
  });

  const { toast } = useToast();
  const [countryCode, setCountryCode] = useState("");
  const { ready, wallets } = useWallets();

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const socialIconVariants = {
    hover: {
      scale: 1.1,
      y: -5,
      transition: { type: "spring", stiffness: 400 },
    },
  };

  const infoBoxVariants = {
    hover: {
      scale: 1.02,
      transition: { type: "spring", stiffness: 300 },
    },
  };

  useEffect(() => {
    const fetchCountryCode = async () => {
      try {
        const response = await axios.get("https://ipapi.co/json/");
        setCountryCode(response.data.country_code);
      } catch (error) {
        console.error("Error fetching country code:", error);
      }
    };

    fetchCountryCode();
  }, []);

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        let userInfo = (await getUserByAddress(wallets[0].address)) as any;
        let username = (await getUsernameByAddress(wallets[0].address)) as any;
        setFormData({
          first_name: userInfo.basicInfo.firstName,
          last_name: userInfo.basicInfo.lastName,
          username: username,
          email: userInfo.basicInfo.email,
          home_address: userInfo.basicInfo.homeAddress,
          date_of_birth: userInfo.basicInfo.dateOfBirth,
          education: userInfo.professionalInfo.education,
          work_history: userInfo.professionalInfo.workHistory,
          phone_number: userInfo.basicInfo.phoneNumber,
          job_title: userInfo.professionalInfo.jobTitle,
          x: userInfo.socialLinks.x,
          instagram: userInfo.socialLinks.instagram,
          github: userInfo.socialLinks.github,
          youtube: userInfo.socialLinks.youtube,
          linkedin: userInfo.socialLinks.linkedin,
          info: userInfo.professionalInfo.info,
          skills: userInfo.professionalInfo.skills,
          imageUrl: userInfo.professionalInfo.imageURL,
        });
      } catch (error) {
        toast({
          title: "Error",
          description: "User Doesn't exist",
        });
        console.error("Error fetching user info:", error);
      }
    };
    getUserInfo();
  }, []);

  const ref = useRef(null);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="md:items-center items-center flex flex-col w-full">
      <div className="flex flex-col items-center">
        <div className="id-card-tag"></div>
        <div className="id-card-tag-strip"></div>
        <div className="id-card-hook"></div>
      </div>
      <Toaster />
      <motion.div
        className="md:items-center items-center justify-center flex flex-col w-11/12 md:w-7/12"
        initial="hidden"
        animate="visible"
        variants={cardVariants}
      >
        <div className="flex flex-row items-start w-full">
          <motion.div
            className="border-4 border-black rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] 
                       mb-4 py-3 overflow-hidden w-full bg-white transition-all 
                       hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]
                       hover:translate-x-[-4px] hover:translate-y-[-4px]"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className="flex flex-col items-center justify-center pt-4 mx-3">
              <motion.div
                className="text-center flex flex-col items-center justify-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  className="w-28 h-28 object-cover object-center p-1 rounded-full 
                           border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                  src={formData.imageUrl || "/images/avatar.jpeg"}
                  alt="Profile avatar"
                />
                <p className="font-bold text-lg text-gray-700 py-2">
                  @{`${formData.username}` || `UserNotFound`}
                </p>
                <p className="text-sm text-gray-700 py-1">
                  {formData.info || "We are all lost stars..."}
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 py-2 w-full">
                <motion.div
                  className="flex flex-row items-center space-x-2 bg-yellow-100 border-2 border-black 
                           px-3 py-2 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                  variants={infoBoxVariants}
                  whileHover="hover"
                >
                  <IconBriefcase width={17} height={17} />
                  <p className="text-sm font-medium">{formData.job_title || "Company"}</p>
                </motion.div>
                <motion.div
                  className="flex flex-row items-center space-x-2 bg-blue-100 border-2 border-black 
                           px-3 py-2 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                  variants={infoBoxVariants}
                  whileHover="hover"
                >
                  <IconMapPin width={17} height={17} />
                  <p className="text-sm font-medium">{countryCode}</p>
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 py-2 w-full">
                <motion.div
                  className="flex flex-row items-center space-x-2 bg-green-100 border-2 border-black 
                           px-3 py-2 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                  variants={infoBoxVariants}
                  whileHover="hover"
                >
                  <IconMail width={17} height={17} />
                  <p className="text-sm font-medium">
                    {formData.email || "unknown@gmail.com"}
                  </p>
                </motion.div>
                <motion.div
                  className="flex flex-row items-center space-x-2 bg-purple-100 border-2 border-black 
                           px-3 py-2 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                  variants={infoBoxVariants}
                  whileHover="hover"
                >
                  <IconPhone width={17} height={17} />
                  <p className="text-sm font-medium">
                    {formData.phone_number || "+91 1234567890"}
                  </p>
                </motion.div>
              </div>

              <div className="flex flex-col w-full mt-2">
                <motion.div
                  className="bg-white border-2 border-black rounded-lg p-3 space-y-2 
                           shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                  variants={infoBoxVariants}
                  whileHover="hover"
                >
                  <div className="flex flex-row items-center space-x-2 rounded-lg">
                    <IconUser width={18} height={18} />
                    <p className="text-sm font-medium">General Information</p>
                  </div>
                  <p className="text-sm font-semibold text-gray-700">About me</p>
                  <p className="text-sm">
                    {formData.info || "I think we have lost sight..."}
                  </p>
                  <div className="grid grid-cols-2 pt-3 gap-2">
                    <div className="py-2">
                      <div className="flex flex-row items-center space-x-1 rounded-lg">
                        <IconSchool width={17} height={17} />
                        <p className="text-sm font-medium">Education</p>
                      </div>
                      <p className="text-xs font-semibold">
                        {formData.education ||
                          "Some Unknown University"}
                      </p>
                    </div>
                    <div className="py-2">
                      <div className="flex flex-row items-center space-x-1 rounded-lg">
                        <IconBriefcase2 width={17} height={17} />
                        <p className="text-sm font-medium">Work History</p>
                      </div>
                      <p className="text-xs font-semibold">
                        {formData.work_history || "Some Unknown Company"}
                      </p>
                    </div>
                    <div className="py-2">
                      <div className="flex flex-row items-center space-x-1 rounded-lg">
                        <IconClock width={17} height={17} />
                        <p className="text-sm font-medium">Join Date</p>
                      </div>
                      <p className="text-xs font-semibold">
                        {formData.dateOfBirth || "2025"}
                      </p>
                    </div>
                    <div className="py-2">
                      <div className="flex flex-row items-center space-x-1 rounded-lg">
                        <IconCake width={17} height={17} />
                        <p className="text-sm font-medium">Birthday</p>
                      </div>
                      <p className="text-xs font-semibold">
                        {formData.date_of_birth || " 23-01-2004"}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="flex flex-col w-full mt-2">
                <div className="pb-2 space-y-2">
                  <p className="text-md font-medium">Skills</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 w-full">
                {formData?.skills?.map((skill: any, index: number) => (
                  <motion.div
                    key={index}
                    className="flex flex-row items-center bg-orange-100 border-2 border-black w-max 
                             space-x-2 px-3 py-2 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                    variants={infoBoxVariants}
                    whileHover="hover"
                  >
                    <p className="text-xs font-medium">{skill}</p>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col w-full mt-2">
                <div className="pb-1 space-y-2">
                  <p className="text-md font-medium">Socials</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-2 pt-1 w-full">
                {formData.x && (
                  <Link href={formData.x}>
                    <motion.div
                      className="flex flex-row items-center justify-center bg-black border-2 border-black
                               px-3 py-2 rounded-lg cursor-pointer shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                      variants={socialIconVariants}
                      whileHover="hover"
                    >
                      <IconBrandX width={24} height={24} color="white" />
                    </motion.div>
                  </Link>
                )}
                {formData.instagram && (
                  <Link href={formData.instagram}>
                    <motion.div
                      className="flex flex-row items-center justify-center bg-[#5b51d8] border-2 border-black
                               px-3 py-2 rounded-lg cursor-pointer shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                      variants={socialIconVariants}
                      whileHover="hover"
                    >
                      <IconBrandInstagram width={24} height={24} color="white" />
                    </motion.div>
                  </Link>
                )}
                {formData.youtube && (
                  <Link href={formData.youtube}>
                    <motion.div
                      className="flex flex-row items-center justify-center bg-[#ff0000] border-2 border-black
                               px-3 py-2 rounded-lg cursor-pointer shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                      variants={socialIconVariants}
                      whileHover="hover"
                    >
                      <IconBrandYoutube width={24} height={24} color="white" />
                    </motion.div>
                  </Link>
                )}
                {formData.github && (
                  <Link href={formData.github}>
                    <motion.div
                      className="flex flex-row items-center justify-center bg-[#69c9d0] border-2 border-black
                               px-3 py-2 rounded-lg cursor-pointer shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                      variants={socialIconVariants}
                      whileHover="hover"
                    >
                      <IconBrandGithub width={24} height={24} color="white" />
                    </motion.div>
                  </Link>
                )}
                {formData.linkedin && (
                  <Link href={formData.linkedin}>
                    <motion.div
                      className="flex flex-row items-center justify-center bg-[#2867b2] border-2 border-black
                               px-3 py-2 rounded-lg cursor-pointer shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                      variants={socialIconVariants}
                      whileHover="hover"
                    >
                      <IconBrandLinkedin width={24} height={24} color="white" />
                    </motion.div>
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Section;
