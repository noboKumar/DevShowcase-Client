"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Pen, Upload, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { axiosInstance } from "@/lib/axios";
import { Project } from "@/types";

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

const UpdateBtn = ({ projects }: { projects: Project }) => {
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState(projects.category);
  const [techStack, setTechStack] = useState<string[]>(
    projects.techStack ?? [],
  );
  const [techInput, setTechInput] = useState("");
  const [thumbnail, setThumbnail] = useState(projects.thumbnail);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [saving, setSaving] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // ── Tech stack ─────────────────────────────────────────────────────────────
  const addTech = () => {
    const tags = techInput
      .split(",")
      .map((t) => t.trim())
      .filter((t) => t && !techStack.includes(t));
    if (tags.length) setTechStack((prev) => [...prev, ...tags]);
    setTechInput("");
  };

  // ── Image pick → show preview immediately ──────────────────────────────────
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImageFile(file);
    setThumbnail(URL.createObjectURL(file)); // instant local preview
  };

  // ── Submit ─────────────────────────────────────────────────────────────────
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSaving(true);

    const form = new FormData(e.currentTarget);
    let thumbnailUrl = thumbnail;

    // Upload new image to imgbb if user picked one
    if (imageFile) {
      const body = new FormData();
      body.append("image", imageFile);
      const res = await fetch(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API}`,
        { method: "POST", body },
      );
      const data = await res.json();
      thumbnailUrl = data.data.url;
    }

    await axiosInstance.patch(`/projects/update-project/${projects.id}`, {
      title: form.get("title"),
      description: form.get("description"),
      category,
      techStack,
      githubRepo: form.get("githubRepo"),
      liveLink: form.get("liveLink"),
      thumbnail: thumbnailUrl,
    });

    setSaving(false);
    setOpen(false);
  };

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8"
        onClick={() => setOpen(true)}
      >
        <Pen className="h-4 w-4 text-blue-500" />
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">
              Edit Project
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4 py-1">
            {/* Thumbnail */}
            <div className="space-y-1.5">
              <Label className="text-sm font-medium text-slate-700">
                Thumbnail
              </Label>
              <div
                className="group relative h-44 w-full cursor-pointer overflow-hidden rounded-xl border border-slate-200 bg-slate-100"
                onClick={() => fileInputRef.current?.click()}
              >
                <Image
                  src={thumbnail}
                  alt="thumbnail"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 bg-black/0 transition-colors group-hover:bg-black/40">
                  <Upload className="h-5 w-5 text-white opacity-0 transition-opacity group-hover:opacity-100" />
                  <span className="text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
                    Click to replace
                  </span>
                </div>
              </div>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </div>

            {/* Title */}
            <div className="space-y-1.5">
              <Label
                htmlFor="title"
                className="text-sm font-medium text-slate-700"
              >
                Title
              </Label>
              <Input
                id="title"
                name="title"
                defaultValue={projects.title}
                required
                className="border-slate-200 focus-visible:border-indigo-500 focus-visible:ring-indigo-500"
              />
            </div>

            {/* Description */}
            <div className="space-y-1.5">
              <Label
                htmlFor="description"
                className="text-sm font-medium text-slate-700"
              >
                Description
              </Label>
              <Textarea
                id="description"
                name="description"
                defaultValue={projects.description}
                rows={3}
                required
                className="resize-none border-slate-200 focus-visible:border-indigo-500 focus-visible:ring-indigo-500"
              />
            </div>

            {/* Category */}
            <div className="space-y-1.5">
              <Label className="text-sm font-medium text-slate-700">
                Category
              </Label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="border-slate-200 focus:ring-indigo-500">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {PROJECT_GENRES.map((g) => (
                    <SelectItem key={g} value={g}>
                      {g}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Tech Stack */}
            <div className="space-y-2">
              <Label className="text-sm font-medium text-slate-700">
                Tech Stack
              </Label>
              <div className="flex gap-2">
                <Input
                  value={techInput}
                  onChange={(e) => setTechInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "," || e.key === "Enter") {
                      e.preventDefault();
                      addTech();
                    }
                  }}
                  placeholder="React, Node.js… (comma or Enter)"
                  className="border-slate-200 focus-visible:border-indigo-500 focus-visible:ring-indigo-500"
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={addTech}
                  className="shrink-0"
                >
                  Add
                </Button>
              </div>
              {techStack.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {techStack.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="gap-1.5 rounded-full bg-indigo-50 pr-2 pl-3 text-indigo-700"
                    >
                      {tag}
                      <button
                        type="button"
                        onClick={() =>
                          setTechStack((prev) => prev.filter((t) => t !== tag))
                        }
                        className="rounded-full p-0.5 hover:bg-indigo-200"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              )}
            </div>

            {/* GitHub */}
            <div className="space-y-1.5">
              <Label
                htmlFor="githubRepo"
                className="text-sm font-medium text-slate-700"
              >
                GitHub Repo
              </Label>
              <Input
                id="githubRepo"
                name="githubRepo"
                type="url"
                defaultValue={projects.githubRepo}
                className="border-slate-200 focus-visible:border-indigo-500 focus-visible:ring-indigo-500"
              />
            </div>

            {/* Live Link */}
            <div className="space-y-1.5">
              <Label
                htmlFor="liveLink"
                className="text-sm font-medium text-slate-700"
              >
                Live Demo
              </Label>
              <Input
                id="liveLink"
                name="liveLink"
                type="url"
                defaultValue={projects.liveLink}
                className="border-slate-200 focus-visible:border-indigo-500 focus-visible:ring-indigo-500"
              />
            </div>

            <DialogFooter className="pt-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setOpen(false)}
                disabled={saving}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={saving}
                className="min-w-28 bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-70"
              >
                {saving ? "Saving…" : "Save Changes"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default UpdateBtn;
