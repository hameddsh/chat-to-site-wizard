
import { MessageSquare, Bot, Code, Building } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      icon: <MessageSquare className="h-8 w-8 text-white" />,
      title: "Start the Conversation",
      description: "Open our Telegram bot or web platform and tell us about your business in your own words - Persian or English.",
      color: "bg-blue-600"
    },
    {
      step: "02",
      icon: <Bot className="h-8 w-8 text-white" />,
      title: "AI Analyzes Your Needs",
      description: "Our intelligent system asks follow-up questions and creates a detailed project brief based on your responses.",
      color: "bg-violet-600"
    },
    {
      step: "03",
      icon: <Code className="h-8 w-8 text-white" />,
      title: "Website Generation",
      description: "AI selects the perfect template and generates your custom website with content, design, and functionality.",
      color: "bg-blue-600"
    },
    {
      step: "04",
      icon: <Building className="h-8 w-8 text-white" />,
      title: "Review & Launch",
      description: "Make real-time edits, review through our admin dashboard, and launch your professional website.",
      color: "bg-violet-600"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-50 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            From conversation to website in just four simple steps
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-6xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connection line for desktop */}
                {index < steps.length - 1 && (
                  <div className="absolute left-1/2 top-16 hidden h-0.5 w-full bg-gradient-to-r from-blue-300 to-violet-300 lg:block transform translate-x-8"></div>
                )}
                
                <div className="relative z-10 text-center">
                  <div className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full ${step.color} shadow-lg`}>
                    {step.icon}
                  </div>
                  <div className="mb-2">
                    <span className="text-sm font-semibold text-gray-500">STEP {step.step}</span>
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
