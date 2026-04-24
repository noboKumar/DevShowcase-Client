import Image from "next/image";
import loginSvg from "@/assets/Mobile login-pana.svg";
import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      {/* left panel svg */}
      <Image loading="eager" src={loginSvg} alt="login svg"></Image>
      {/* Right Panel — Form */}
      <LoginForm />
    </div>
  );
}
