
import { Bot, MessageSquare, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-violet-50 px-6 py-24 sm:py-32">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      
      <div className="relative mx-auto max-w-4xl text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative rounded-full bg-gradient-to-r from-blue-100 to-violet-100 p-4">
            <Bot className="h-12 w-12 text-blue-600" />
            <div className="absolute -right-1 -top-1 rounded-full bg-violet-500 p-1">
              <Zap className="h-4 w-4 text-white" />
            </div>
          </div>
        </div>
        
        <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
          Build Professional Websites with{" "}
          <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
            AI Magic
          </span>
        </h1>
        
        <p className="mx-auto max-w-2xl text-xl leading-8 text-gray-600 mb-10">
          Chat with our intelligent bot, describe your vision, and watch as we create a stunning, 
          professional website tailored specifically for your business. No coding required.
        </p>
        
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link to="/ai-chat">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-violet-600 px-8 py-4 text-lg font-semibold hover:from-blue-700 hover:to-violet-700 transition-all duration-300 transform hover:scale-105"
            >
              <Bot className="mr-2 h-5 w-5" />
              Start Building with AI
            </Button>
          </Link>
          <Link to="/dashboard">
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-4 text-lg font-semibold border-2 hover:bg-gray-50 transition-all duration-300"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              View Dashboard
            </Button>
          </Link>
        </div>
        
        <div className="mt-12 flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
          <div className="flex items-center space-x-2 text-gray-600">
            <div className="h-2 w-2 rounded-full bg-green-500"></div>
            <span className="text-sm">No technical skills needed</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <div className="h-2 w-2 rounded-full bg-green-500"></div>
            <span className="text-sm">Professional results in minutes</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <div className="h-2 w-2 rounded-full bg-green-500"></div>
            <span className="text-sm">Fully customizable</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
