import { Button } from "@/components/ui/button";
import { LoginSection } from "../component/LoginSection";

export default function LoginPage() {
  return (
    <div className="w-1/2 h-full flex items-center justify-center">
      <div className="absolute flex top-8 right-20">
        <Button className="w-[73px] h-10 rounded-md bg-[#F4F4F5] px-4 py-2">
          <p className="text-black">Sign up</p>
        </Button>
      </div>
      <LoginSection />
    </div>
  );
}
