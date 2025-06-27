import * as React from "react";
import { useTheme } from "@/context/ThemeContext";
import { Button } from "@/components/ui/button";

export function Navbar({ className, ...props }) {
  const { toggleTheme } = useTheme();
  

  return (
    <nav
      data-slot="navbar"
      className="p-4 flex justify-between bg-gray-200 dark:bg-gray-800">
      <div className="text-xl font-bold tracking-tight">TaskApp</div>
      <Button onClick={toggleTheme}>Toggle Theme</Button>
    </nav>
  );
}



