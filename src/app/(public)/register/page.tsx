import registerSvg from "@/assets/Mobile login-cuate.svg";
import RegisterForm from "@/components/auth/RegisterForm";
import Image from "next/image";

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      {/* Left Panel */}
      <Image priority src={registerSvg} alt="register svg"></Image>

      {/* Right Panel — Form */}
      <RegisterForm />
    </div>
  );
}
