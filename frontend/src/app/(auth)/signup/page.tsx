import { SignupEmailandPassword } from "../component/SignupEmailandPassword";
import { SignupPage } from "../component/SignupPage";
import { SignupSection } from "../component/SignupSection";

export default function SignupMain() {
  return (
    <div className="w-1/2 h-full flex items-center justify-center">
      <SignupSection />
      <SignupEmailandPassword />
    </div>
  );
}
