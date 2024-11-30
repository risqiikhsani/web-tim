"use client"
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Switch } from "./ui/switch";
import { Card,CardContent } from "./ui/card";

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    // Render nothing on the server and until the theme is mounted
    return null;
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (

        <div className="flex items-center space-x-4 justify-center">
          <Sun className="w-5 h-5 text-yellow-500" />
          <Switch
            checked={theme === "dark"}
            onCheckedChange={toggleTheme}
            className="data-[state=checked]:bg-zinc-800 data-[state=unchecked]:bg-zinc-200"
          />
          <Moon className="w-5 h-5 text-indigo-600" />
        </div>
      
  );
}