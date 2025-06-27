import * as React from "react";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { cn } from "@/lib/utils";

export function Layout({ children, className, ...props }) {
  return (
    <div
      data-slot="layout"
      className={cn("flex flex-col min-h-screen bg-background text-foreground", className)}
      {...props}
    >
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-6">{children}</main>
      <Footer />
    </div>
  );
}
