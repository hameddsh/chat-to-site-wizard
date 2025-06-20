import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AdminPanel from "./pages/AdminPanel";
import ProjectDetails from "./pages/ProjectDetails";
import EditSite from "./pages/EditSite";
import Support from "./pages/Support";
import UserSettings from "./pages/UserSettings";
import AiChat from "./pages/AiChat";
import SitePreview from "./pages/SitePreview";
import NotFound from "./pages/NotFound";
import { AuthProvider } from "./context/auth-context";

const queryClient = new QueryClient();

const App = () => (
  <BrowserRouter>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />

          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/ai-chat" element={<AiChat />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
            <Route path="/edit-site/:id" element={<EditSite />} />
            <Route path="/site-preview/:id" element={<SitePreview />} />
            <Route path="/support" element={<Support />} />
            <Route path="/settings" element={<UserSettings />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TooltipProvider>
      </QueryClientProvider>
    </AuthProvider>
  </BrowserRouter>
);

export default App;
