
import { Bot } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "Do I need to know coding?",
      answer: "No, everything is automated through AI."
    },
    {
      question: "Can I edit the website later?",
      answer: "Yes, you can use our live editor anytime."
    },
    {
      question: "How long does it take?",
      answer: "Just a few minutes after you finish chatting with the bot."
    }
  ];

  return (
    <section className="bg-white px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about building websites with AI
          </p>
        </div>
        
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {faq.question}
              </h3>
              <p className="text-gray-600">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <div className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 cursor-pointer">
            <Bot className="h-5 w-5" />
            <span className="font-medium">Chat with our AI assistant</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
