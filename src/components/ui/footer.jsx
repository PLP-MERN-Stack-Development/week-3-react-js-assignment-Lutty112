import * as React from "react";
import { cn } from "@/lib/utils";

export function Footer({ className, ...props }) {
  return (
    <footer
      data-slot="footer"
      className={cn(
        "bg-muted text-muted-foreground text-center py-4 text-xs border-t",
        className
      )}
      {...props}
    >
      © {new Date().getFullYear()} Task Manager. All rights reserved.
    </footer>
  );
}
