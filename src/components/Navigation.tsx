
import { Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 p-2">
              <Bot className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Promptsy</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              How It Works
            </a>
            <a href="#pricing" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Pricing
            </a>
            <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </a>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-sm font-medium">
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-violet-600 text-sm font-medium hover:from-blue-700 hover:to-violet-700">
              Try Free
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
