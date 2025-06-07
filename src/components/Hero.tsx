
import { Bot, MessageSquare, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-violet-50 px-6 py-20 sm:py-32">
      <div className="mx-auto max-w-7xl text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative rounded-full bg-gradient-to-r from-blue-100 to-violet-100 p-4">
            <Bot className="h-12 w-12 text-blue-600" />
            <div className="absolute -right-2 -top-2 rounded-full bg-violet-500 p-1">
              <MessageSquare className="h-4 w-4 text-white" />
            </div>
          </div>
        </div>
        
        <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
          Build Your Website Through
          <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent"> Natural Conversation</span>
        </h1>
        
        <p className="mx-auto mt-6 max-w-2xl text-xl leading-8 text-gray-600">
          Meet Promptsy - the AI-powered platform that creates custom websites in minutes. 
          Just chat with our intelligent Telegram bot or use our web interface. No coding required.
        </p>
        
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-violet-600 px-8 py-4 text-lg font-semibold hover:from-blue-700 hover:to-violet-700"
          >
            <Bot className="mr-2 h-5 w-5" />
            Try the Bot Now
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-blue-300 px-8 py-4 text-lg font-semibold text-blue-700 hover:bg-blue-50"
          >
            <Code className="mr-2 h-5 w-5" />
            View Demo
          </Button>
        </div>
        
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="flex flex-col items-center">
            <div className="mb-4 rounded-full bg-blue-100 p-3">
              <MessageSquare className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Chat to Create</h3>
            <p className="text-sm text-gray-600">Natural conversation builds your site</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="mb-4 rounded-full bg-violet-100 p-3">
              <Bot className="h-8 w-8 text-violet-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">AI-Powered</h3>
            <p className="text-sm text-gray-600">Smart templates and content generation</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="mb-4 rounded-full bg-blue-100 p-3">
              <Code className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Ready in Minutes</h3>
            <p className="text-sm text-gray-600">Professional websites in record time</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
