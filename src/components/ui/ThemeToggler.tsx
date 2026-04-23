"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ThemeToggler() {
  const { theme, setTheme } = useTheme()
  const [isAnimating, setIsAnimating] = React.useState(false)

  const isDark = theme === "dark"

  const handleToggle = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setTheme(isDark ? "light" : "dark")
    setTimeout(() => setIsAnimating(false), 400)
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={handleToggle}
      className="relative overflow-hidden"
      aria-label="Toggle theme"
    >
      <Sun
        className="h-[1.2rem] w-[1.2rem] absolute transition-all duration-300 ease-in-out"
        style={{
          opacity: isDark ? 0 : 1,
          transform: isDark
            ? "rotate(-90deg) scale(0)"
            : "rotate(0deg) scale(1)",
        }}
      />
      <Moon
        className="h-[1.2rem] w-[1.2rem] absolute transition-all duration-300 ease-in-out"
        style={{
          opacity: isDark ? 1 : 0,
          transform: isDark
            ? "rotate(0deg) scale(1)"
            : "rotate(90deg) scale(0)",
        }}
      />
    </Button>
  )
}