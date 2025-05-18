"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/Button"

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <header
      className={`w-full py-4 transition-all duration-300 ${
        isScrolled ? "fixed top-0 z-50 bg-background/95 backdrop-blur-sm shadow-sm" : "absolute"
      }`}
    >
      <div className="container flex items-center justify-center">
        <nav className="flex items-center space-x-8">
          <Link href="#home" className="text-muted-foreground hover:text-foreground transition-colors">
            HOME
          </Link>
          <Link href="#profile" className="text-muted-foreground hover:text-foreground transition-colors">
            PROFILE
          </Link>
          <Link href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
            SKILLS
          </Link>
          <Link href="#education" className="text-muted-foreground hover:text-foreground transition-colors">
            EDUCATION
          </Link>
          <Link href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">
            EXPERIENCE
          </Link>
          <Link href="#portfolio" className="text-muted-foreground hover:text-foreground transition-colors">
            PORTFOLIO
          </Link>
          <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
            CONTACT
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </nav>
      </div>
    </header>
  )
}
