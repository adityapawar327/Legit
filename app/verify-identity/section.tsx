"use client";

import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import { FormControl, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { IconZoomCheck, IconShieldCheck, IconUserCheck, IconLock } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

const Section = () => {
  const ref = useRef(null);
  const router = useRouter();

  const [searchVal, setSearchVal] = useState("");

  const onSubmitSearch = () => {
    if (searchVal.length <= 0) {
      alert(`Search value can't be empty`);
    } else {
      router.push(`/profile/${searchVal}`);
    }
  };

  return (
    <div className="min-h-screen bg-yellow-300 p-8 border-b-8 border-black">
      <div className="max-w-6xl mx-auto">
        <h1 className="font-bold text-5xl md:text-7xl text-center mb-12 text-black">
          Verify Identity
        </h1>

        <div className="w-full max-w-2xl mx-auto mb-10">
          <FormItem className="w-full">
            <FormControl>
              <Input
                className="w-full border-4 border-black p-4 text-xl bg-white placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-blue-400 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                placeholder="Enter the ID eg: adityapawar721"
                onChange={(e) => setSearchVal(e.target.value)}
                value={searchVal}
              />
            </FormControl>
          </FormItem>
        </div>

        <div className="flex justify-center mb-16">
          <Button
            className="bg-lime-400 text-black font-bold text-xl py-3 px-6 border-4 border-black hover:bg-blue-400 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            onClick={onSubmitSearch}
          >
            <div className="flex items-center justify-center">
              <div className="mr-2">Verify</div>
              <IconZoomCheck size={24} />
            </div>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <IconShieldCheck size={48} className="mb-4 text-blue-500" />
            <h2 className="text-2xl font-bold mb-2">Secure Verification</h2>
            <p className="text-lg">Our robust system ensures the authenticity of every digital identity, providing you with peace of mind.</p>
          </div>
          <div className="bg-white p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <IconUserCheck size={48} className="mb-4 text-green-500" />
            <h2 className="text-2xl font-bold mb-2">User-Friendly</h2>
            <p className="text-lg">Simple and intuitive interface makes it easy for anyone to verify identities quickly and efficiently.</p>
          </div>
          <div className="bg-white p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <IconLock size={48} className="mb-4 text-red-500" />
            <h2 className="text-2xl font-bold mb-2">Privacy First</h2>
            <p className="text-lg">We prioritize your privacy, ensuring that all verifications are conducted with the utmost respect for personal data.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;


