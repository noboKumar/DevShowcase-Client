"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ThemeToggler() {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() =>
        setTheme(resolvedTheme === "dark" ? "light" : "dark")
      }
      className="relative rounded-full"
      aria-label="Toggle theme"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] light-icon" />
      <Moon className="h-[1.2rem] w-[1.2rem] dark-icon" />
    </Button>
  )
}