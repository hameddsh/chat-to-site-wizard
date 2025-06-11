
import { Bot, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Ready to Build Your Website with AI?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-xl leading-8 text-blue-100">
          Join thousands of businesses who've transformed their online presence through simple conversation. 
          Start building your professional website today.
        </p>
        
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link to="/ai-chat">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 px-8 py-4 text-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              <Bot className="mr-2 h-5 w-5" />
              Start Building Your Website with AI
            </Button>
          </Link>
          <Link to="/ai-chat">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Chat with Our Bot
            </Button>
          </Link>
        </div>
        
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <div className="flex items-center space-x-2 text-blue-100">
            <div className="h-2 w-2 rounded-full bg-green-400"></div>
            <span className="text-sm">No credit card required</span>
          </div>
          <div className="flex items-center space-x-2 text-blue-100">
            <div className="h-2 w-2 rounded-full bg-green-400"></div>
            <span className="text-sm">Website ready in minutes</span>
          </div>
          <div className="flex items-center space-x-2 text-blue-100">
            <div className="h-2 w-2 rounded-full bg-green-400"></div>
            <span className="text-sm">Professional results guaranteed</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
