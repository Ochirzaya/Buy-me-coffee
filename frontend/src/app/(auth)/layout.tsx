import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Authlayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white w-screen h-screen justify-center items-center flex ">
      <div className="w-1/2 h-full bg-[#FBBF24] flex items-center justify-center">
        <div className="flex absolute items-center   top-8 left-20">
          <Image src="/Logo.png" alt="logo" height={20} width={147} />
        </div>
        <div className="flex flex-col items-center gap-10">
          <Image src="/icon.png" alt="icon" height={240} width={240} />
          <div className="flex flex-col items-start gap-3">
            <p className="w-full text-[#09090B] font-bold text-2xl items-center flex justify-center">
              Fund your creative work
            </p>
            <p className=" flex text-[#09090B] font-normal text-[16px] ">
              Accept support. Start a membership. Setup a shop. It’s easier than
              you think.
            </p>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-full bg-[#FFF] items-center justify-center flex">
        {children}
        <Button className="w-20 h-10 rounded-md bg-[#F4F4F5] right-20 flex absolute top-8">
          <p className="text-black">Sign up</p>
        </Button>
        <div className="w-[407px] h-[304px] flex flex-col items-start">
          <div className="w-full h-20 flex flex-col items-start gap-1.5 p-6">
            <p className="text-[#09090B] font-semibold text-2xl">
              Welcome back
            </p>
          </div>
          <div className="w-full h-[160px] px-6 pb-6 flex-col items-start gap-3 flex">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email" className="text-[14px] font-medium">
                Email
              </Label>
              <Input
                type="email"
                id="email"
                placeholder="Enter email here"
                className="text-[14px] font-normal text-[#71717A]"
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5 ">
              <Label htmlFor="Password" className="text-[14px] font-medium">
                Password
              </Label>
              <Input
                type="password"
                id="password"
                placeholder="Enter password here"
                className="text-[14px] font-normal text-[#71717A]"
              />
            </div>
          </div>
          <div className="w-full h-[64px] px-6 pb-6 ">
            <Button className="w-[359px] h-10 flex px-4 py-2 justify-center items-center gap-2 rounded-md bg-[#18181B] opacity-0.2">
              <p>Continue</p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
