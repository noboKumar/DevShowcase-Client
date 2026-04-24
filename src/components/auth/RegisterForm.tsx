"use client";

import Link from "next/link";
import { Eye, EyeOff, Code2, Upload, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useState, useRef } from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImageFile(file);
    setUploadedUrl(null);
    setUploadError(null);

    const reader = new FileReader();
    reader.onloadend = () => setImagePreview(reader.result as string);
    reader.readAsDataURL(file);
  };

  const handleRemoveImage = () => {
    setImageFile(null);
    setImagePreview(null);
    setUploadedUrl(null);
    setUploadError(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const uploadToImgbb = async (): Promise<string | null> => {
    if (!imageFile) return null;

    setUploading(true);
    setUploadError(null);

    try {
      const formData = new FormData();
      formData.append("image", imageFile);

      const res = await fetch(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API}`,
        { method: "POST", body: formData },
      );

      const data = await res.json();

      if (!data.success) throw new Error("Upload failed");

      const url = data.data.url as string;
      setUploadedUrl(url);
      return url;
    } catch {
      setUploadError("Image upload failed. Please try again.");
      return null;
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async () => {
    let avatarUrl: string | null = null;

    if (imageFile) {
      avatarUrl = await uploadToImgbb();
      if (!avatarUrl) return; // stop if upload failed
    }

    // TODO: pass avatarUrl to your backend registration logic
    console.log("Avatar URL:", avatarUrl);
  };

  return (
    <div className="flex w-full items-center justify-center rounded-2xl bg-white p-8 lg:w-1/2 dark:bg-slate-800">
      <div className="w-full max-w-lg">
        {/* Mobile logo */}
        <div className="mb-8 flex items-center gap-2 lg:hidden">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600">
            <Code2 className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-gray-900">
            DevShowcase
          </span>
        </div>

        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-slate-200">
            Create an account
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Start showcasing your projects today
          </p>
        </div>

        <div className="space-y-4">
          {/* Avatar Upload */}
          <div className="space-y-1.5">
            <Label className="text-sm font-medium text-gray-700 dark:text-slate-200">
              Profile Picture{" "}
              <span className="font-normal text-gray-400">(optional)</span>
            </Label>

            {imagePreview ? (
              <div className="flex items-center gap-3">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-indigo-100">
                  <Image
                    src={imagePreview}
                    alt="Avatar preview"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-gray-700">
                    {imageFile?.name}
                  </p>
                  <p className="text-xs text-gray-400">
                    {imageFile
                      ? (imageFile.size / 1024).toFixed(0) + " KB"
                      : ""}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleRemoveImage}
                  className="shrink-0 rounded-full p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="flex h-10 w-full items-center gap-2 rounded-md border border-dashed border-gray-200 px-3 text-sm text-gray-400 transition-colors hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-500"
              >
                <Upload className="h-4 w-4 shrink-0" />
                <span>Click to upload an image</span>
              </button>
            )}

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />

            {uploadError && (
              <p className="text-xs text-red-500">{uploadError}</p>
            )}
            {uploadedUrl && (
              <p className="text-xs text-green-600">
                ✓ Image uploaded successfully
              </p>
            )}
          </div>

          {/* Username */}
          <div className="space-y-1.5">
            <Label
              htmlFor="username"
              className="text-sm font-medium text-gray-700 dark:text-slate-200"
            >
              Username
            </Label>
            <Input
              id="username"
              type="text"
              placeholder="cooldev42"
              className="h-10 border-gray-200 focus-visible:border-indigo-500 focus-visible:ring-indigo-500"
            />
          </div>

          {/* Email */}
          <div className="space-y-1.5">
            <Label
              htmlFor="email"
              className="text-sm font-medium text-gray-700 dark:text-slate-200"
            >
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="h-10 border-gray-200 focus-visible:border-indigo-500 focus-visible:ring-indigo-500"
            />
          </div>

          {/* Password */}
          <div className="space-y-1.5">
            <Label
              htmlFor="password"
              className="text-sm font-medium text-gray-700 dark:text-slate-200"
            >
              Password
            </Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Create a strong password"
                className="h-10 border-gray-200 pr-10 focus-visible:border-indigo-500 focus-visible:ring-indigo-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400 transition-colors hover:text-gray-600"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>

          {/* Terms */}
          <p className="text-xs leading-relaxed text-gray-400">
            By creating an account, you agree to our{" "}
            <a href="#" className="text-indigo-600 hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-indigo-600 hover:underline">
              Privacy Policy
            </a>
            .
          </p>

          {/* Submit */}
          <Button
            onClick={handleSubmit}
            disabled={uploading}
            className="h-10 w-full bg-indigo-600 font-medium text-white hover:bg-indigo-700 disabled:opacity-70"
          >
            {uploading ? "Uploading image…" : "Create Account"}
          </Button>

          <div className="relative my-4">
            <Separator />
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-xs text-gray-400 dark:bg-slate-800">
              or
            </span>
          </div>

          {/* GitHub OAuth */}
          <Button
            variant="outline"
            className="h-10 w-full border-gray-200 font-medium text-gray-700 hover:bg-gray-50"
          >
            <FaGithub className="mr-2 h-4 w-4" />
            Continue with GitHub
          </Button>
        </div>

        <p className="mt-8 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-indigo-600 hover:text-indigo-700"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
