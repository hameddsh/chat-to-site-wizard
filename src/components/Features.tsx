
import { Bot, MessageSquare, Code, Building } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: <Bot className="h-8 w-8 text-blue-600" />,
      title: "Dual-Language Telegram Bot",
      description: "Chat in Persian or English with our intelligent bot that understands your business needs and creates detailed project briefs.",
      color: "bg-blue-50 border-blue-200"
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-violet-600" />,
      title: "AI Website Generation",
      description: "Our advanced AI analyzes your responses and automatically generates a custom website tailored to your business requirements.",
      color: "bg-violet-50 border-violet-200"
    },
    {
      icon: <Building className="h-8 w-8 text-blue-600" />,
      title: "Smart Template Selection",
      description: "AI selects the perfect template based on your business type, industry, and specific needs for optimal results.",
      color: "bg-blue-50 border-blue-200"
    },
    {
      icon: <Code className="h-8 w-8 text-violet-600" />,
      title: "Real-Time Editing",
      description: "Make changes to your website instantly through our intuitive web platform with live preview capabilities.",
      color: "bg-violet-50 border-violet-200"
    }
  ];

  const additionalFeatures = [
    "Admin dashboard for project review and approval",
    "Developer API for direct prompt submission",
    "Scalable backend architecture (Node.js/Django)",
    "Complete ecosystem for AI-powered website management",
    "Multi-language support (Persian & English)",
    "Professional templates for all business types"
  ];

  return (
    <section className="bg-white px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything You Need to Build Professional Websites
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            From initial conversation to live website - our AI handles it all
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2">
          {features.map((feature, index) => (
            <Card key={index} className={`${feature.color} transition-all duration-300 hover:shadow-lg`}>
              <CardHeader>
                <div className="mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-700">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <h3 className="text-center text-2xl font-bold text-gray-900 mb-8">
            Complete Platform Features
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <div className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-600 to-violet-600"></div>
                </div>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
