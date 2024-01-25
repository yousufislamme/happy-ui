"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"

const Header = () => {
  const { setTheme } = useTheme()

  return (
     <div className="container bg-white/20 border-b-[0.5px] dark:border-white py-2 backdrop-blur-lg flex items-center justify-between">
        <div className="flex justify-around gap-5">
        <Link href='/'>
           <h1>Happy UI</h1>
        </Link>
           <div className="space-x-5">
              <Link href="/documents">Documents</Link>
              <Link href="/components">Components</Link>
           </div>
        </div>
        <div className="flex items-center gap-5">
           <a href="/">GtiHub</a>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme("light")}>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}>
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
        </div>
    </div>
  )
}

export default Header;