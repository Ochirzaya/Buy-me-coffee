import { Button } from "@/components/ui/button";
import { SignupEmailandPassword } from "../component/SignupEmailandPassword";
import { SignupPage } from "../component/SignupPage";
import { SignupSection } from "../component/SignupSection";

export default function SignupMain() {
  return (
    <div className="w-1/2 h-full flex items-center justify-center flex-col">
      <div className="absolute flex top-8 right-20">
        <Button className="w-[73px] h-10 rounded-md bg-[#F4F4F5] px-4 py-2">
          <p className="text-black">Log in</p>
        </Button>
      </div>
      <SignupSection />
    </div>
  );
}
