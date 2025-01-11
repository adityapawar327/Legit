import React from "react";
import { FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface FormFieldsProps {
  formData: any;
  handleChange: (name: string, value: any) => void;
  errors: any;
}

const FormFields: React.FC<FormFieldsProps> = ({ formData, handleChange }) => (
  <div className="space-y-6">
    <div className="md:flex items-center gap-6">
      <FormItem className="w-full">
        <FormLabel className="text-lg font-bold">First Name</FormLabel>
        <FormControl>
          <Input
            placeholder="Aditya"
            onChange={(e) => handleChange("first_name", e.target.value)}
            value={formData.first_name}
            className="border-4 border-black bg-yellow-300 text-black placeholder-gray-700 text-lg p-3 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-blue-400 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          />
        </FormControl>
      </FormItem>

      <FormItem className="w-full">
        <FormLabel className="text-lg font-bold">Last Name</FormLabel>
        <FormControl>
          <Input
            placeholder="Pawar"
            onChange={(e) => handleChange("last_name", e.target.value)}
            value={formData.last_name}
            className="border-4 border-black bg-lime-300 text-black placeholder-gray-700 text-lg p-3 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-blue-400 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          />
        </FormControl>
      </FormItem>
    </div>

    <FormItem className="w-full">
      <FormLabel className="text-lg font-bold">Username</FormLabel>
      <FormControl>
        <Input
          placeholder="adityapawar327"
          onChange={(e) => handleChange("username", e.target.value)}
          value={formData.username}
          className="border-4 border-black bg-cyan-300 text-black placeholder-gray-700 text-lg p-3 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-blue-400 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        />
      </FormControl>
    </FormItem>

    <div className="md:flex items-center gap-6">
      <FormItem className="w-full">
        <FormLabel className="text-lg font-bold">Home Address</FormLabel>
        <FormControl>
          <Input
            placeholder="Mumbai, Maharashtra"
            onChange={(e) => handleChange("home_address", e.target.value)}
            value={formData.home_address}
            className="border-4 border-black bg-fuchsia-300 text-black placeholder-gray-700 text-lg p-3 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-blue-400 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          />
        </FormControl>
      </FormItem>

      <FormItem className="w-full">
        <FormLabel className="text-lg font-bold">Date of Birth</FormLabel>
        <FormControl>
          <Input
            type="date"
            onChange={(e) => handleChange("date_of_birth", e.target.value)}
            value={formData.date_of_birth}
            className="border-4 border-black bg-orange-300 text-black placeholder-gray-700 text-lg p-3 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-blue-400 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          />
        </FormControl>
      </FormItem>
    </div>

    <div className="md:flex items-center gap-6">
      <FormItem className="w-full">
        <FormLabel className="text-lg font-bold">Education</FormLabel>
        <FormControl>
          <Input
            placeholder="SRMIST"
            onChange={(e) => handleChange("education", e.target.value)}
            value={formData.education}
            className="border-4 border-black bg-green-300 text-black placeholder-gray-700 text-lg p-3 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-blue-400 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          />
        </FormControl>
      </FormItem>

      <FormItem className="w-full">
        <FormLabel className="text-lg font-bold">Work History</FormLabel>
        <FormControl>
          <Input
            type="text"
            placeholder="Apple, Google, Amazon"
            onChange={(e) => handleChange("work_history", e.target.value)}
            value={formData.work_history}
            className="border-4 border-black bg-purple-300 text-black placeholder-gray-700 text-lg p-3 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-blue-400 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          />
        </FormControl>
      </FormItem>
    </div>

    <FormItem className="w-full">
      <FormLabel className="text-lg font-bold">Email</FormLabel>
      <FormControl>
        <Input
          placeholder="adityapawar327@gmail.com"
          onChange={(e) => handleChange("email", e.target.value)}
          value={formData.email}
          className="border-4 border-black bg-red-300 text-black placeholder-gray-700 text-lg p-3 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-blue-400 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        />
      </FormControl>
    </FormItem>

    <FormItem className="w-full">
      <FormLabel className="text-lg font-bold">Phone Number</FormLabel>
      <FormControl>
        <Input
          placeholder="+91 7738561876"
          onChange={(e) => handleChange("phone_number", e.target.value)}
          value={formData.phone_number}
          className="border-4 border-black bg-blue-300 text-black placeholder-gray-700 text-lg p-3 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-blue-400 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        />
      </FormControl>
    </FormItem>

    <FormItem className="w-full">
      <FormLabel className="text-lg font-bold">Job Title</FormLabel>
      <FormControl>
        <Input
          placeholder="Software Engineer"
          onChange={(e) => handleChange("job_title", e.target.value)}
          value={formData.job_title}
          className="border-4 border-black bg-pink-300 text-black placeholder-gray-700 text-lg p-3 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-blue-400 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        />
      </FormControl>
    </FormItem>
  </div>
);

export default FormFields;

