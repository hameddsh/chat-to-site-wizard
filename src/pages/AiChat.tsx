
import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Bot, MessageSquare, User, Globe, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

interface Message {
  id: number;
  type: "bot" | "user";
  text: string;
  language: "en" | "fa";
}

interface UserInfo {
  businessType: string;
  targetAudience: string;
  services: string[];
  hasExistingContent: boolean;
  preferredSections: string[];
  language: "en" | "fa";
}

const AiChat = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [currentLanguage, setCurrentLanguage] = useState<"en" | "fa">("en");
  const [chatStage, setChatStage] = useState<"initial" | "collecting" | "generating" | "preview">("initial");
  const [userInfo, setUserInfo] = useState<Partial<UserInfo>>({});
  const [showPromptInput, setShowPromptInput] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const translations = {
    en: {
      title: "AI Website Builder",
      subtitle: "Chat with our AI to describe your website needs",
      initialGreeting: "Hello! I'm your AI assistant. I'll help you create a professional website. What kind of business or project do you want to build a website for?",
      promptOption: "Do you have a detailed description of your website ready, or would you like me to guide you through some questions?",
      businessTypeQ: "What type of business or service do you offer?",
      targetAudienceQ: "Who is your target audience?",
      servicesQ: "What are your main products or services?",
      sectionsQ: "What sections would you like on your website? (e.g., About Us, Services, Contact, Gallery)",
      generating: "Generating your website...",
      previewReady: "Your website preview is ready!",
      viewPreview: "View Preview",
      step1: "Describe your business",
      step2: "AI generates your site", 
      step3: "Review and customize",
      sendPrompt: "Send Custom Prompt",
      guidedQuestions: "Answer Guided Questions",
      languageDetected: "Language detected: English"
    },
    fa: {
      title: "سازنده وبسایت هوشمند",
      subtitle: "با هوش مصنوعی ما چت کنید تا نیازهای وبسایت خود را بشرح دهید",
      initialGreeting: "سلام! من دستیار هوشمند شما هستم. من به شما کمک می‌کنم یک وبسایت حرفه‌ای بسازید. چه نوع کسب و کار یا پروژه‌ای می‌خواهید برایش وبسایت بسازید؟",
      promptOption: "آیا توضیح کاملی از وبسایت خود آماده دارید، یا می‌خواهید من شما را از طریق چند سوال راهنمایی کنم؟",
      businessTypeQ: "چه نوع کسب و کار یا خدماتی ارائه می‌دهید؟",
      targetAudienceQ: "مخاطبان هدف شما چه کسانی هستند؟",
      servicesQ: "محصولات یا خدمات اصلی شما چیست؟",
      sectionsQ: "چه بخش‌هایی را در وبسایت خود می‌خواهید؟ (مثل درباره ما، خدمات، تماس، گالری)",
      generating: "در حال ساخت وبسایت شما...",
      previewReady: "پیش‌نمایش وبسایت شما آماده است!",
      viewPreview: "مشاهده پیش‌نمایش",
      step1: "کسب و کار خود را شرح دهید",
      step2: "هوش مصنوعی سایت شما را می‌سازد",
      step3: "بررسی و سفارشی‌سازی کنید", 
      sendPrompt: "ارسال پرامپت سفارشی",
      guidedQuestions: "پاسخ به سوالات راهنما",
      languageDetected: "زبان تشخیص داده شده: فارسی"
    }
  };

  const detectLanguage = (text: string): "en" | "fa" => {
    const persianRegex = /[\u0600-\u06FF]/;
    return persianRegex.test(text) ? "fa" : "en";
  };

  const addMessage = (text: string, type: "bot" | "user", language: "en" | "fa") => {
    const newMessage: Message = {
      id: Date.now(),
      type,
      text,
      language
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const initializeChat = () => {
    addMessage(translations[currentLanguage].initialGreeting, "bot", currentLanguage);
  };

  useEffect(() => {
    if (messages.length === 0) {
      initializeChat();
    }
  }, [currentLanguage]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    const detectedLang = detectLanguage(inputValue);
    if (detectedLang !== currentLanguage) {
      setCurrentLanguage(detectedLang);
    }

    addMessage(inputValue, "user", detectedLang);
    
    if (chatStage === "initial") {
      setUserInfo({ ...userInfo, businessType: inputValue, language: detectedLang });
      setTimeout(() => {
        addMessage(translations[detectedLang].promptOption, "bot", detectedLang);
        setChatStage("collecting");
      }, 1000);
    } else if (chatStage === "collecting") {
      // Process guided questions
      setTimeout(() => {
        addMessage(translations[detectedLang].targetAudienceQ, "bot", detectedLang);
      }, 1000);
    }

    setInputValue("");
  };

  const handleCustomPrompt = () => {
    setShowPromptInput(true);
  };

  const handleGuidedQuestions = () => {
    addMessage(translations[currentLanguage].businessTypeQ, "bot", currentLanguage);
  };

  const generateWebsite = async () => {
    setIsGenerating(true);
    addMessage(translations[currentLanguage].generating, "bot", currentLanguage);
    
    // Simulate website generation
    setTimeout(() => {
      addMessage(translations[currentLanguage].previewReady, "bot", currentLanguage);
      setIsGenerating(false);
      setChatStage("preview");
    }, 3000);
  };

  const handleViewPreview = () => {
    navigate("/site-preview/generated");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50" dir={currentLanguage === "fa" ? "rtl" : "ltr"}>
      <Navigation />
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 p-3 relative">
              <Bot className="h-8 w-8 text-white" />
              <Globe className="h-4 w-4 text-white absolute -top-1 -right-1 bg-green-500 rounded-full p-0.5" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{translations[currentLanguage].title}</h1>
          <p className="text-gray-600">{translations[currentLanguage].subtitle}</p>
          <Badge variant="outline" className="mt-2">
            {translations[currentLanguage].languageDetected}
          </Badge>
        </div>

        <Card className="h-96 mb-4">
          <CardContent className="p-4 h-full flex flex-col">
            <div className="flex-1 overflow-y-auto space-y-4 mb-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      message.type === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-800'
                    }`}
                  >
                    <div className="flex items-center space-x-2 mb-1">
                      {message.type === 'user' ? (
                        <User className="h-4 w-4" />
                      ) : (
                        <Bot className="h-4 w-4" />
                      )}
                      <span className="text-sm font-medium">
                        {message.type === 'user' ? 'You' : 'AI Assistant'}
                      </span>
                    </div>
                    <p className="text-sm">{message.text}</p>
                  </div>
                </div>
              ))}
              
              {isGenerating && (
                <div className="flex justify-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                </div>
              )}
            </div>
            
            {chatStage === "preview" ? (
              <div className="flex justify-center">
                <Button onClick={handleViewPreview} className="bg-green-600 hover:bg-green-700">
                  <Zap className="h-4 w-4 mr-2" />
                  {translations[currentLanguage].viewPreview}
                </Button>
              </div>
            ) : showPromptInput ? (
              <div className="space-y-2">
                <Textarea
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Enter your detailed website description..."
                  className="min-h-20"
                />
                <div className="flex space-x-2">
                  <Button onClick={generateWebsite} className="flex-1">
                    Generate Website
                  </Button>
                  <Button variant="outline" onClick={() => setShowPromptInput(false)}>
                    Cancel
                  </Button>
                </div>
              </div>
            ) : chatStage === "collecting" ? (
              <div className="space-y-2">
                <div className="flex space-x-2">
                  <Button onClick={handleCustomPrompt} variant="outline" className="flex-1">
                    {translations[currentLanguage].sendPrompt}
                  </Button>
                  <Button onClick={handleGuidedQuestions} className="flex-1">
                    {translations[currentLanguage].guidedQuestions}
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex space-x-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={currentLanguage === "fa" ? "پیام خود را تایپ کنید..." : "Type your message..."}
                  className="flex-1"
                />
                <Button onClick={handleSendMessage}>
                  <MessageSquare className="h-4 w-4" />
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="bg-white p-4 rounded-lg border">
            <h3 className="font-semibold text-gray-900 mb-2">Step 1</h3>
            <p className="text-sm text-gray-600">{translations[currentLanguage].step1}</p>
          </div>
          <div className="bg-white p-4 rounded-lg border">
            <h3 className="font-semibold text-gray-900 mb-2">Step 2</h3>
            <p className="text-sm text-gray-600">{translations[currentLanguage].step2}</p>
          </div>
          <div className="bg-white p-4 rounded-lg border">
            <h3 className="font-semibold text-gray-900 mb-2">Step 3</h3>
            <p className="text-sm text-gray-600">{translations[currentLanguage].step3}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiChat;
