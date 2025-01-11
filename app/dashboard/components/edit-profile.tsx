"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import {
  getUserByAddress,
  getUsernameByAddress,
  editUser,
} from "@/utils/queries";
import { useWallets } from "@privy-io/react-auth";

import FormFields from "@/app/onboard/components/form-fields";
import SocialMediaInputs from "@/app/onboard/components/social-media-inputs";
import UserProfileDisplay from "@/app/onboard/components/user-profile-display";
import CustomImageUploader from "@/components/ui/custom-image-uploader";

import { Toaster } from "@/components/ui/toaster";
import { FormSchema, FormValues } from "@/utils/formSchema";
import { options } from "@/utils/options";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import EditingSuccess from "./editing-success";

const animatedComponents = makeAnimated();

export default function EditProfile() {
  const [countryCode, setCountryCode] = useState<string>("");
  const { wallets } = useWallets();
  const { toast } = useToast();
  const [loading, setLoading] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const [formData, setFormData] = useState<FormValues>({
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

  useEffect(() => {
    const fetchCountryCode = async () => {
      try {
        const response = await axios.get("https://ipapi.co/json/");
        setCountryCode(response.data.country_code);
        handleChange("country_code", response.data.country_code);
      } catch (error) {
        console.error("Error fetching country code:", error);
      }
    };
    fetchCountryCode();
  }, []);

  useEffect(() => {
    const getUserInfo = async () => {
      let userInfo = (await getUserByAddress(wallets[0]?.address)) as any;
      let username = (await getUsernameByAddress(wallets[0]?.address)) as any;
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
      console.log(userInfo);
      console.log(username);
    };
    getUserInfo();
  }, []);

  const [errors, setErrors] = useState<any>({});
  const [selectedOptions, setSelectedOptions] = useState<any[]>([]);

  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: formData,
  });

  const validateUrl = (url: string, pattern: string) => {
    if (!url) return false;
    const regex = new RegExp(pattern);
    return regex.test(url);
  };

  const handleChange = (name: string, value: any) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    let error = "";
    if (name === "email" && value && !/.+@.+\..+/.test(value)) {
      error = "Invalid email address";
    } else if (
      ["x", "instagram", "youtube", "github", "linkedin"].includes(name)
    ) {
      const pattern = {
        x: "^https?:\\/\\/(www\\.)?twitter\\.com\\/[A-Za-z0-9_]{1,15}$",
        instagram: "^https?:\\/\\/(www\\.)?instagram\\.com\\/[A-Za-z0-9_.]+$",
        youtube:
          "^https?:\\/\\/(www\\.)?youtube\\.com\\/(channel\\/|user\\/)?[A-Za-z0-9_-]+$",
        github: "^https?:\\/\\/(www\\.)?github\\.com\\/@[A-Za-z0-9_.]+$",
        linkedin:
          "^https?:\\/\\/(www\\.)?linkedin\\.com\\/in\\/[A-Za-z0-9_-]+$",
      }[name];

      if (pattern) {
        const isValid = validateUrl(value, pattern);
        if (!isValid) {
          error = `Invalid ${name.charAt(0).toUpperCase() + name.slice(1)} URL`;
        }
      }
    }
    setErrors((prevErrors: any) => ({ ...prevErrors, [name]: error }));
  };

  const handleSkillChange = (selected: any) => {
    if (selected.length <= 3) {
      const selectedValues = selected.map((option: any) => option.value);
      setSelectedOptions(selected);
      handleChange("skills", selectedValues);
    }
  };

  const customStyles = {
    control: (provided: any, state: any) => ({
      ...provided,
      borderColor: state.isFocused ? "#000000" : "#d1d5db",
      boxShadow: state.isFocused ? "0 0 0 1px #d1d5db" : "none",
      "&:hover": {
        borderColor: "#d1d5db",
      },
      borderRadius: "0.375rem",
      paddingTop: "0.2rem",
      paddingBottom: "0.2rem",
    }),
    multiValue: (provided: any) => ({
      ...provided,
      backgroundColor: "#e5e7eb",
    }),
    multiValueLabel: (provided: any) => ({
      ...provided,
      color: "#374151",
    }),
    multiValueRemove: (provided: any) => ({
      ...provided,
      color: "#6b7280",
      "&:hover": {
        color: "#4b5563",
      },
    }),
  };

  const handleImagesChange = async (files: File[]) => {
    const file = files[0];
    try {
      const form = new FormData();
      form.append("file", file);
      form.append("pinataMetadata", JSON.stringify({ name: file.name }));
      form.append("pinataOptions", JSON.stringify({ cidVersion: 1 }));

      const options = {
        method: "POST",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI1MTZmMTFhZi0zZTdiLTQxODEtOGExMS1iY2JmZjRhYjUwZmYiLCJlbWFpbCI6ImFkaXR5YXBhd2FyMzI3QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxLCJpZCI6IkZSQTEifSx7ImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxLCJpZCI6Ik5ZQzEifV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiIzNmQ3YzgwMDllYTAwY2I0ZWQ0YiIsInNjb3BlZEtleVNlY3JldCI6IjAyY2Q1YWVkMjNmZjE0MzBhMDIzM2M4MTdkNmY5YTQzYWI3Nzc0NjUzOTM2YTdmNDYxMjBhZDQwMzcxNjBjMmYiLCJleHAiOjE3Njc3Nzc3MTd9.xDQWlJHCxr7Zxf2ZCAgi2J4QrVQPiTQg59o_aSAeKYA",
        },
        body: form,
      };

      const response = await fetch(
        "https://api.pinata.cloud/pinning/pinFileToIPFS",
        options
      );

      const responseData = await response.json();
      if (responseData.error) {
        throw new Error(responseData.error);
      }
      const fileUrl = `https://gateway.pinata.cloud/ipfs/${responseData.IpfsHash}`;
      setFormData((prev) => ({ ...prev, imageUrl: fileUrl }));
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const basicInfo = {
        firstName: formData.first_name,
        lastName: formData.last_name,
        email: formData.email,
        homeAddress: formData.home_address,
        dateOfBirth: formData.date_of_birth,
        phoneNumber: formData.phone_number,
      };

      const professionalInfo = {
        education: formData.education,
        workHistory: formData.work_history,
        jobTitle: formData.job_title,
        info: formData.info,
        skills: formData.skills,
        imageURL: formData.imageUrl,
      };

      const socialLinks = {
        x: formData.x || "",
        instagram: formData.instagram || "",
        github: formData.github || "",
        youtube: formData.youtube || "",
        linkedin: formData.linkedin || "",
      };

      const visibility = {
        education: true,
        workHistory: true,
        phoneNumber: true,
        homeAddress: true,
        dateOfBirth: true,
      };

      if (
        !formData.username ||
        !basicInfo.firstName ||
        !basicInfo.lastName ||
        !basicInfo.email
      ) {
        throw new Error("Required fields are missing.");
      }

      const receipt = await editUser(
        formData.username,
        basicInfo,
        professionalInfo,
        socialLinks,
        visibility
      );
      console.log("User updated:", receipt);
      toast({
        title: "",
        description: "User updated successfully",
      });
      setSubmitted(true);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Something went wrong",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start justify-between space-y-4 md:space-y-0 md:space-x-10 pt-20 pb-20 px-4 md:px-16">
      <div>
        <div className="md:text-4xl text-xl font-medium w-3/3 pb-3">
          Enhance your profile with{" "}
          <span className="text-sky-500">Legit </span>
          for an authentic and trustworthy representation.
        </div>
        <Toaster />
        <UserProfileDisplay formData={formData} countryCode={countryCode} />
      </div>

      <Form {...form}>
        <div className="w-full md:w-2/3">
          {!submitted ? (
            <form onSubmit={onSubmit} className="space-y-4 w-full">
              <FormFields
                formData={formData}
                handleChange={handleChange}
                errors={errors}
              />
              <FormItem className="flex flex-col items-center justify-center mb-6 w-full border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-purple-300 p-4 rounded-lg">
                <FormLabel className="text-lg font-bold text-black mb-2">
                  Select Skills *
                </FormLabel>
                <FormControl>
                  <Select
                    components={animatedComponents}
                    isMulti
                    value={selectedOptions}
                    onChange={handleSkillChange}
                    options={options}
                    className="text-md"
                    styles={{
                      ...customStyles,
                      control: (base) => ({
                        ...base,
                        border: "4px solid black",
                        backgroundColor: "rgb(196, 163, 255)", // Purple background
                        color: "black",
                        fontSize: "1.125rem", // Text size equivalent to text-lg
                        padding: "0.75rem", // Padding equivalent to p-3
                        placeholder: {
                          color: "#4B5563", // Placeholder gray color
                        },
                        boxShadow: "4px 4px 0px 0px rgba(0,0,0,1)", // Shadow effect
                        outline: "none",
                        ":focus": {
                          borderColor: "rgb(96, 165, 250)", // Focus blue border
                          boxShadow: "0 0 0 4px rgb(96, 165, 250)", // Ring effect
                        },
                      }),
                      menu: (base) => ({
                        ...base,
                        border: "4px solid black",
                        backgroundColor: "rgb(196, 163, 255)", // Purple dropdown
                        boxShadow: "4px 4px 0px 0px rgba(0,0,0,1)", // Shadow effect
                      }),
                      option: (base, { isFocused, isSelected }) => ({
                        ...base,
                        backgroundColor: isSelected
                          ? "rgb(96, 165, 250)" // Blue for selected option
                          : isFocused
                            ? "rgb(167, 139, 250)" // Lighter purple for focused option
                            : "rgb(196, 163, 255)", // Default purple background
                        color: "black", // Text color
                        borderBottom: "1px solid black",
                      }),
                      multiValue: (base) => ({
                        ...base,
                        backgroundColor: "rgb(167, 139, 250)", // Light purple
                        border: "1px solid black",
                        color: "black",
                        padding: "2px 4px",
                        boxShadow: "4px 4px 0px 0px rgba(0,0,0,1)",
                      }),
                      multiValueLabel: (base) => ({
                        ...base,
                        color: "black",
                      }),
                      multiValueRemove: (base) => ({
                        ...base,
                        backgroundColor: "black",
                        color: "white",
                        borderRadius: "4px",
                        ":hover": {
                          backgroundColor: "rgb(96, 165, 250)", // Light blue on hover
                          color: "black",
                        },
                      }),
                    }}
                    classNamePrefix="react-select"
                  />
                </FormControl>
              </FormItem>
              <CustomImageUploader onImagesChange={handleImagesChange} />
              <SocialMediaInputs
                formData={formData}
                handleChange={handleChange}
                errors={errors}
              />
              <FormItem className="items-center justify-center w-full">
                <FormLabel className="w-60 text-sm">About you?</FormLabel>
                <FormControl>
                  <textarea
                    style={{ height: "100px" }}
                    onChange={(e) => handleChange("info", e.target.value)}
                    value={formData.info}
                    className="form-textarea border-4 border-black bg-green-300 text-black rounded-md mt-1 block w-full focus:border-blue-400 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                  />
                </FormControl>
              </FormItem>
              <div className="flex items-center gap-4">
                <Button
                  type="submit"
                  className="text-sm font-light"
                  disabled={loading}
                >
                  Submit
                </Button>
              </div>
            </form>
          ) : (
            <div
              className="
                text-xl 
                md:text-2xl 
                flex 
                items-center
                justify-center
                flex-col
                px-8
              "
            >
              <div className="min-h-screen flex items-center justify-center">
                <EditingSuccess />
              </div>

            </div>
          )}
        </div>
      </Form>
    </div>
  );
}