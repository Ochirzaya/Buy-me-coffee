import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

export const SignupEmailandPassword = () => {
  return (
    <div className="w-[407px] h-[330px] flex flex-col items-start rounded-lg">
      <div className="flex w-full h-[106px] py-6 px-6 flex-col items-start gap-1.5 ">
        <p className="text-2xl font-semibold text-[#09090B]">
          Welcome, baconpancakes1
        </p>
        <p className="text-[14px] font-normal text-[#71717A]">
          Connect email and set a password
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
  );
};
