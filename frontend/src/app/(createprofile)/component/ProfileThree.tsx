import { Button } from "@/components/ui/button";
import { SelectCountry } from "./SelectCountry";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SelectInput } from "./SelectInput";

export const ProfileThree = () => {
  return (
    <div className="w-screen h-screen items-center flex flex-col">
      <div className="w-screen h-14 flex px-4 py-2 justify-center items-center ">
        <div className=" flex w-full h-10 justify-between items-center px-4 py-2">
          <img src="/Logo.png" alt="logo" height={20} width={147} />
          <Button className="w-[83px] h-10 flex items-center justify-center gap-3 px-4 py-2 rounded-md bg-[#F4F4F5]">
            <p className="text-[#18181B] font-medium text-[14px]">Log out</p>
          </Button>
        </div>
      </div>
      <div className="w-[510px] h-[486px] flex flex-col items-start mt-[252px]">
        <div className="w-full h-[106px] flex flex-col py-6 items-start gap-1.5">
          <p className="text-2xl font-semibold text-[#09090B]">
            How would you like to be paid?{" "}
          </p>
          <p className="text-[14px] font-normal text-[#71717A]">
            Enter location and payment details
          </p>
        </div>
        <div className="w-full h-[380px] flex flex-col items-start gap-6">
          <div className="w-full h-[316px] flex flex-col items-start gap-6">
            <div className="w-full h-[62px] flex flex-col items-start gap-2">
              <SelectCountry />
            </div>
            <div className="w-full h-[86px] flex items-start gap-3">
              <div className="flex flex-col w-[249px] h-[86px]  items-start gap-2">
                <Label htmlFor="name">First name</Label>
                <Input
                  className="w-full h-10 px-3 py-2"
                  type="name"
                  id="name"
                  placeholder="Enter your name here"
                />
              </div>
              <div className="flex flex-col w-[249px] h-[86px]  items-start gap-2">
                <Label htmlFor="name">Last name</Label>
                <Input
                  className="w-full h-10 px-3 py-2"
                  type="name"
                  id="name"
                  placeholder="Enter your name here"
                />
              </div>
            </div>
            <div className=" w-full h-[86px] flex flex-col items-start gap-2">
              <Label htmlFor="card number">Enter card number</Label>
              <Input
                className="w-full h-10 px-3 py-2"
                type="cardnumber"
                id="cardnumber"
                placeholder="XXXX-XXXX-XXXX-XXXX"
              />
            </div>
            <div className="w-full h-[82px] flex items-center gap-4">
              <div className="w-[159px] h-[58px] flex flex-col items-start gap-2">
                <label className="text-[14px] font-medium text-[#09090B]">
                  Expires
                </label>
                <div className="w-full h-9 flex  items-start gap-1">
                  <SelectInput />
                </div>
              </div>
              <div className="w-[159px] h-[58px] flex flex-col items-start gap-2">
                <label className="text-[14px] font-medium text-[#09090B]">
                  Year
                </label>
                <div className="w-full h-9 flex  items-start gap-1">
                  <input className="w-[159px] h-9 rounded-md border"></input>
                </div>
              </div>
              <div className="w-full h-[82px] flex flex-col items-start gap-2">
                <Label>
                  <p className="text-[14px] font-medium">CVC</p>
                </Label>
                <input className="w-full h-9 rounded-md border px-3 py-2 items-center"></input>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
