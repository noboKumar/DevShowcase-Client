import React, { useState } from "react";
import { Input } from "./input";
import { Eye, EyeOff } from "lucide-react";

const PasswordInput = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Input
        id="password"
        type={showPassword ? "text" : "password"}
        placeholder="Enter your password"
        className="h-10 border-gray-200 pr-10 focus-visible:border-indigo-500 focus-visible:ring-indigo-500"
      />
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-gray-400 transition-colors hover:text-gray-600"
      >
        {showPassword ? (
          <EyeOff className="h-4 w-4" />
        ) : (
          <Eye className="h-4 w-4" />
        )}
      </button>
    </>
  );
};

export default PasswordInput;
