import { Button } from "@/components/ui/button";
import { Camera } from "lucide-react";
import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Profilesix = () => {
  return (
    <div className="w-screen h-screen bg-white items-center  flex flex-col">
      <div className="w-screen h-14 flex px-4 py-2 justify-center items-center ">
        <div className=" flex w-full h-10 justify-between items-center px-4 py-2">
          <img src="/Logo.png" alt="logo" height={20} width={147} />
          <Button className="w-[83px] h-10 flex items-center justify-center gap-3 px-4 py-2 rounded-md bg-[#F4F4F5]">
            <p className="text-[#18181B] font-medium text-[14px]">Log out</p>
          </Button>
        </div>
      </div>
      <div className="w-[510px]  h-[631px] flex flex-col items-start gap-6  mt-[91px]">
        <div className="w-[300px] h-8 flex flex-col items-start ">
          <p className="text-[#09090B] font-semibold text-2xl">
            Complete your profile page
          </p>
        </div>
        <div className="w-[160px] h-[186px] flex flex-col items-start gap-3 ">
          <label className="w-[70px] h-3.5 flex items-start">
            <p className="text-[#09090B] font-medium text-[14px]">Add photo</p>
          </label>
          <div className="w-[160px] h-[160px] flex justify-center items-center rounded-full border border-dashed bg-[#FFF]">
            <Camera width={28} height={28} className="fill-none opacity-10" />
          </div>
        </div>
        <div className="w-full h-[301px] flex flex-col items-start gap-3">
          <div className="w-full h-[62px] flex flex-col items-start gap-2">
            <Label htmlFor="name">Name</Label>
            <Input type="name" id="name" placeholder="Enter your name here" />
          </div>
          <div className="w-full h-[153px] flex flex-col items-start gap-2">
            <Label htmlFor="About">About</Label>
            <Textarea placeholder="Write about yourself here" id="message" />
          </div>
          <div className="w-full h-[62px] flex flex-col items-start gap-2">
            <Label htmlFor="Social media URL">Social media URL</Label>
            <Input type="url" id="url" placeholder="https://" />
          </div>
        </div>
        <div className="w-full h-10 flex justify-end items-start gap-2.5">
          <Button className="w-[246px] h-full px-4 py-2 justify-center items-center gap-2 rounded-md bg-[#18181B] opacity-0.2">
            <p className="text-[#FAFAFA] font-medium text-[14px]">Continue</p>
          </Button>
        </div>
      </div>
    </div>
  );
};
