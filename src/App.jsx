import { useState } from "react";
import { Layout } from "@/components/layout";
import TaskManager from "@/components/TaskManager";
import ApiPage from "@/pages/ApiPage";
import { ThemeProvider } from "@/context/ThemeContext";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function App() {
  const [activeTab, setActiveTab] = useState("tasks"); 

  return (
    <ThemeProvider>
      <Layout>
        {/* Header */}
        <div className="text-center mt-6 mb-4">
          <h1 className="text-3xl font-bold text-primary mb-1">TaskApp</h1>
          <p className="text-muted-foreground text-sm">
            Manage your tasks efficiently with our Task Manager and explore the API.
          </p>
        </div>

        {/* Tabs */}
        <div className="w-full max-w-3xl mx-auto mt-6">
          <div className="flex border-b border-muted-foreground/30">
            {["tasks", "api"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "flex-1 text-center px-4 py-2 font-semibold capitalize transition-all duration-300",
                  activeTab === tab
                    ? "border-b-2 border-primary text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {tab === "tasks" ? " Task Manager" : " API Page"}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="w-full max-w-3xl mx-auto mt-4">
          <Card>
            <CardContent>
              {activeTab === "tasks" && <TaskManager/>}
              {activeTab === "api" && <ApiPage />}
            </CardContent>
          </Card>
        </div>
      </Layout>
    </ThemeProvider>
  );
}
