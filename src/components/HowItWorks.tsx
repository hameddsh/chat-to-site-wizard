
import { MessageSquare, Bot, Check } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      icon: <MessageSquare className="h-8 w-8 text-white" />,
      title: "Chat with the Telegram Bot",
      description: "Start a conversation with our intelligent bot. It will ask you questions about your business and collect all the information needed to create your perfect website.",
      color: "bg-blue-600"
    },
    {
      step: "02",
      icon: <Bot className="h-8 w-8 text-white" />,
      title: "AI Generates Your Website",
      description: "Our AI analyzes your responses and automatically creates a complete, custom website with content, design, and functionality tailored to your business.",
      color: "bg-violet-600"
    },
    {
      step: "03",
      icon: <Check className="h-8 w-8 text-white" />,
      title: "Review and Launch",
      description: "Review your generated website, make any final adjustments using our live editor, and launch your professional site to the world in minutes.",
      color: "bg-blue-600"
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
            From conversation to website in just three simple steps
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-6xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
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
