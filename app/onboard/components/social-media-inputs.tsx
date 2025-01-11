import React from "react";
import { FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface SocialMediaInputsProps {
  formData: any;
  handleChange: (name: string, value: any) => void;
  errors: any;
}

const SocialMediaInputs: React.FC<SocialMediaInputsProps> = ({
  formData,
  handleChange,
  errors,
}) => (
  <div className="space-y-6">
    <FormItem className="w-full">
      <FormLabel className="text-lg font-bold">
        X (Formerly Twitter)
        {errors?.x && <span className="text-red-500 text-base ml-2">{errors.x}</span>}
      </FormLabel>
      <FormControl>
        <Input
          placeholder="https://x.com/"
          onChange={(e) => handleChange("x", e.target.value)}
          value={formData.x}
          className="border-4 border-black bg-blue-300 text-black placeholder-gray-700 text-lg p-3 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-blue-400 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        />
      </FormControl>
    </FormItem>

    <FormItem className="w-full">
      <FormLabel className="text-lg font-bold">
        Instagram
        {errors?.instagram && <span className="text-red-500 text-base ml-2">{errors.instagram}</span>}
      </FormLabel>
      <FormControl>
        <Input
          placeholder="https://www.instagram.com/"
          onChange={(e) => handleChange("instagram", e.target.value)}
          value={formData.instagram}
          className="border-4 border-black bg-pink-300 text-black placeholder-gray-700 text-lg p-3 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-blue-400 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        />
      </FormControl>
    </FormItem>

    <FormItem className="w-full">
      <FormLabel className="text-lg font-bold">
        Github
        {errors?.github && <span className="text-red-500 text-base ml-2">{errors.github}</span>}
      </FormLabel>
      <FormControl>
        <Input
          placeholder="https://github.com/"
          onChange={(e) => handleChange("github", e.target.value)}
          value={formData.github}
          className="border-4 border-black bg-purple-300 text-black placeholder-gray-700 text-lg p-3 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-blue-400 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        />
      </FormControl>
    </FormItem>

    <FormItem className="w-full">
      <FormLabel className="text-lg font-bold">
        YouTube
        {errors?.youtube && <span className="text-red-500 text-base ml-2">{errors.youtube}</span>}
      </FormLabel>
      <FormControl>
        <Input
          placeholder="https://www.youtube.com/user/"
          onChange={(e) => handleChange("youtube", e.target.value)}
          value={formData.youtube}
          className="border-4 border-black bg-red-300 text-black placeholder-gray-700 text-lg p-3 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-blue-400 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        />
      </FormControl>
    </FormItem>

    <FormItem className="w-full">
      <FormLabel className="text-lg font-bold">
        LinkedIn
        {errors?.linkedin && <span className="text-red-500 text-base ml-2">{errors.linkedin}</span>}
      </FormLabel>
      <FormControl>
        <Input
          placeholder="https://www.linkedin.com/in/"
          onChange={(e) => handleChange("linkedin", e.target.value)}
          value={formData.linkedin}
          className="border-4 border-black bg-cyan-300 text-black placeholder-gray-700 text-lg p-3 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-blue-400 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        />
      </FormControl>
    </FormItem>
  </div>
);

export default SocialMediaInputs;

