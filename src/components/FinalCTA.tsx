
import { Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
          Start Your Website in Minutes
        </h2>
        
        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
          Talk to the bot. Get your custom website. Launch fast.
        </p>
        
        <Button 
          size="lg" 
          className="bg-white text-blue-600 px-12 py-6 text-xl font-semibold hover:bg-gray-50 transition-colors"
        >
          <Bot className="mr-3 h-6 w-6" />
          Try the AI Bot Now
        </Button>
        
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <div className="flex items-center space-x-2 text-blue-100">
            <div className="h-2 w-2 rounded-full bg-green-400"></div>
            <span className="text-sm">Free to start</span>
          </div>
          <div className="flex items-center space-x-2 text-blue-100">
            <div className="h-2 w-2 rounded-full bg-green-400"></div>
            <span className="text-sm">No technical skills needed</span>
          </div>
          <div className="flex items-center space-x-2 text-blue-100">
            <div className="h-2 w-2 rounded-full bg-green-400"></div>
            <span className="text-sm">Website ready in minutes</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
