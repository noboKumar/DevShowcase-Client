"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { X, Upload, ImageIcon, Globe, Loader2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaGithub } from "react-icons/fa";

const PROJECT_GENRES = [
  "Full Stack",
  "Frontend",
  "Backend",
  "Mobile App",
  "AI / ML",
  "DevOps / Infrastructure",
  "CLI Tool",
  "Browser Extension",
  "API / SDK",
  "Game",
  "Open Source Library",
  "Other",
];

const AddProjectsForm = () => {
  const [techInput, setTechInput] = useState("");
  const [techStack, setTechStack] = useState<string[]>([]);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  //   tech stack
  const handleTechKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "," || e.key === "Enter") {
      e.preventDefault();
      addTech();
    }
  };

  const addTech = () => {
    const tags = techInput
      .split(",")
      .map((t) => t.trim())
      .filter((t) => t && !techStack.includes(t));
    if (tags.length) setTechStack((prev) => [...prev, ...tags]);
    setTechInput("");
  };

  const removeTech = (tag: string) =>
    setTechStack((prev) => prev.filter((t) => t !== tag));

  /*  Thumbnail */
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImageFile(file);
    setUploadError(null);
    const reader = new FileReader();
    reader.onloadend = () => setImagePreview(reader.result as string);
    reader.readAsDataURL(file);
  };

  const handleRemoveImage = () => {
    setImageFile(null);
    setImagePreview(null);
    setUploadError(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const uploadToImgbb = async (): Promise<string | null> => {
    if (!imageFile) return null;
    const body = new FormData();
    body.append("image", imageFile);
    const res = await fetch(
      `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API}`,
      { method: "POST", body },
    );
    const data = await res.json();
    if (!data.success) throw new Error("Upload failed");
    return data.data.url as string;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    let thumbnailUrl: string | null = null;

    if (imageFile) {
      setUploading(true);
      setUploadError(null);
      try {
        thumbnailUrl = await uploadToImgbb();
      } catch {
        setUploadError("Thumbnail upload failed. Please try again.");
        setUploading(false);
        return;
      }
      setUploading(false);
    }

    const data = {
      title: form.get("title"),
      description: form.get("description"),
      genre: form.get("genre"),
      techStack,
      github: form.get("github"),
      liveDemo: form.get("liveDemo"),
      thumbnail: thumbnailUrl,
    };

    // TODO: send `data` to your backend
    console.log("Project Data:", data);
  };

  return (
    <main className="my-5 min-h-screen rounded-2xl bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-200">
      <section className="mx-auto max-w-4xl px-6 py-12">
        {/* Header */}
        <div className="mb-10">
          <h1 className="mb-2 text-4xl font-black tracking-tight text-slate-900 dark:text-slate-200">
            Submit Your Project
          </h1>
          <p className="text-slate-500 dark:text-slate-400">
            Showcase your engineering craft to the global developer community.
          </p>
        </div>

        {/* Card */}
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <form onSubmit={handleSubmit} className="divide-y divide-slate-100">
            {/* Section: Project Identity */}
            <div className="grid gap-8 p-8 md:grid-cols-3 lg:p-10">
              <div>
                <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                  Project Identity
                </h2>
                <p className="mt-1 text-sm text-slate-400">
                  Help others understand what you&apos;ve built.
                </p>
              </div>

              <div className="space-y-5 md:col-span-2">
                <div className="space-y-1.5">
                  <Label
                    htmlFor="title"
                    className="text-sm font-medium text-slate-700 dark:text-slate-200"
                  >
                    Project Title <span className="text-red-400">*</span>
                  </Label>
                  <Input
                    id="title"
                    name="title"
                    required
                    placeholder="e.g. DevShowcase"
                    className="h-11 border-slate-200 bg-slate-50 focus-visible:border-indigo-500 focus-visible:ring-indigo-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label
                    htmlFor="description"
                    className="text-sm font-medium text-slate-700 dark:text-slate-200"
                  >
                    Description <span className="text-red-400">*</span>
                  </Label>
                  <Textarea
                    id="description"
                    name="description"
                    required
                    rows={5}
                    placeholder="What does your project do? What problem does it solve?"
                    className="resize-none border-slate-200 bg-slate-50 focus-visible:border-indigo-500 focus-visible:ring-indigo-500"
                  />
                </div>
              </div>
            </div>

            {/* Section: Technical Stack */}
            <div className="grid gap-8 p-8 md:grid-cols-3 lg:p-10">
              <div>
                <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                  Technical Stack
                </h2>
                <p className="mt-1 text-sm text-slate-400">
                  Category and technologies used.
                </p>
              </div>

              <div className="space-y-5 md:col-span-2">
                <div className="space-y-1.5">
                  <Label className="text-sm font-medium text-slate-700 dark:text-slate-200">
                    Project Genre <span className="text-red-400">*</span>
                  </Label>
                  <Select name="genre" required>
                    <SelectTrigger className="h-11 cursor-pointer border-slate-200 bg-slate-50 focus:ring-indigo-500">
                      <SelectValue placeholder="Select a genre…" />
                    </SelectTrigger>
                    <SelectContent className="p-2">
                      {PROJECT_GENRES.map((genre) => (
                        <SelectItem
                          className="cursor-pointer"
                          key={genre}
                          value={genre}
                        >
                          {genre}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium text-slate-700 dark:text-slate-200">
                    Technologies
                  </Label>
                  <div className="flex gap-2">
                    <Input
                      value={techInput}
                      onChange={(e) => setTechInput(e.target.value)}
                      onKeyDown={handleTechKeyDown}
                      placeholder="React, Node.js, Prisma… (comma or Enter to add)"
                      className="h-11 border-slate-200 bg-slate-50 focus-visible:border-indigo-500 focus-visible:ring-indigo-500"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={addTech}
                      className="h-11 shrink-0 border-slate-200 text-slate-600 hover:bg-slate-100"
                    >
                      Add
                    </Button>
                  </div>

                  {techStack.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-1">
                      {techStack.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="gap-1.5 rounded-full bg-indigo-50 pr-2 pl-3 text-indigo-700 hover:bg-indigo-100"
                        >
                          {tag}
                          <button
                            type="button"
                            onClick={() => removeTech(tag)}
                            className="cursor-pointer rounded-full p-0.5 transition-colors hover:bg-indigo-200"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Section: Thumbnail */}
            <div className="grid gap-8 p-8 md:grid-cols-3 lg:p-10">
              <div>
                <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                  Thumbnail
                </h2>
                <p className="mt-1 text-sm text-slate-400">
                  A cover image that represents your project.
                </p>
              </div>

              <div className="md:col-span-2">
                {imagePreview ? (
                  <div className="space-y-3">
                    <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                      <div className="relative h-52 w-full">
                        <Image
                          src={imagePreview}
                          alt="Thumbnail preview"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <button
                        type="button"
                        onClick={handleRemoveImage}
                        className="absolute top-3 right-3 cursor-pointer rounded-full bg-white/90 p-1.5 shadow-sm transition-colors hover:bg-white"
                      >
                        <X className="h-4 w-4 text-slate-600" />
                      </button>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <ImageIcon className="h-3.5 w-3.5" />
                      <span className="truncate">{imageFile?.name}</span>
                      <span className="shrink-0">
                        (
                        {imageFile
                          ? (imageFile.size / 1024).toFixed(0) + " KB"
                          : ""}
                        )
                      </span>
                    </div>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="flex h-52 w-full cursor-pointer flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-slate-200 bg-slate-50 text-slate-400 transition-colors hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-500 dark:bg-slate-700"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 group-hover:bg-indigo-100">
                      <Upload className="h-5 w-5" />
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-medium">
                        Click to upload thumbnail
                      </p>
                      <p className="text-xs text-slate-400">
                        PNG, JPG, WEBP up to 10MB
                      </p>
                    </div>
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
                  <p className="mt-2 text-xs text-red-500">{uploadError}</p>
                )}
              </div>
            </div>

            {/* Section: Links */}
            <div className="grid gap-8 p-8 md:grid-cols-3 lg:p-10">
              <div>
                <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                  Links
                </h2>
                <p className="mt-1 text-sm text-slate-400">
                  Where can people find your project?
                </p>
              </div>

              <div className="space-y-5 md:col-span-2">
                <div className="space-y-1.5">
                  <Label
                    htmlFor="github"
                    className="text-sm font-medium text-slate-700 dark:text-slate-200"
                  >
                    GitHub Repository
                  </Label>
                  <div className="relative">
                    <FaGithub className="absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <Input
                      id="github"
                      name="github"
                      type="url"
                      placeholder="https://github.com/you/project"
                      className="h-11 border-slate-200 bg-slate-50 pl-10 focus-visible:border-indigo-500 focus-visible:ring-indigo-500"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label
                    htmlFor="liveDemo"
                    className="text-sm font-medium text-slate-700 dark:text-slate-200"
                  >
                    Live Demo
                  </Label>
                  <div className="relative">
                    <Globe className="absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <Input
                      id="liveDemo"
                      name="liveDemo"
                      type="url"
                      placeholder="https://your-project.vercel.app"
                      className="h-11 border-slate-200 bg-slate-50 pl-10 focus-visible:border-indigo-500 focus-visible:ring-indigo-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-3 rounded-b-2xl bg-slate-50 px-8 py-5 lg:px-10 dark:bg-slate-800">
              <Button
                type="submit"
                size={"lg"}
                disabled={uploading}
                className="min-w-36 bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-70"
              >
                {uploading ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Uploading…
                  </span>
                ) : (
                  "Publish Project"
                )}
              </Button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default AddProjectsForm;
