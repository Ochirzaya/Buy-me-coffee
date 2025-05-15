import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const LoginSection = () => {
  return (
    <div>
      <div className="w-[407px] h-[304px] flex flex-col items-start">
        <div className="w-full h-20 flex flex-col items-start gap-1.5 p-6">
          <p className="text-[#09090B] font-semibold text-2xl">Welcome back</p>
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
  );
};
