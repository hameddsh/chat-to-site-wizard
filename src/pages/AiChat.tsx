
import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Bot, MessageSquare, User, Globe, Zap, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

interface Message {
  id: number;
  type: "bot" | "user";
  text: string;
  language: "en" | "fa";
}

interface WebsiteRequirements {
  businessTopic: string;
  sections: string;
  targetAudience: string;
  references: string;
  language: string;
}

const AiChat = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [currentLanguage, setCurrentLanguage] = useState<"en" | "fa">("en");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const [websiteRequirements, setWebsiteRequirements] = useState<Partial<WebsiteRequirements>>({});
  const [showCustomPrompt, setShowCustomPrompt] = useState(false);

  const translations = {
    en: {
      title: "AI Website Builder",
      subtitle: "Chat with our AI to build your perfect website",
      initialGreeting: "Hello! I'm your AI website builder assistant. I'll help you create a professional website by asking you 5 simple questions. Let's start!",
      promptOption: "Would you like to provide a detailed description of your website, or shall I guide you through some questions?",
      questions: [
        "What is your business or website topic? (e.g., restaurant, online store, portfolio, etc.)",
        "What sections should your website have? (e.g., Home, About Us, Services, Contact, Gallery, etc.)",
        "Who is your target audience? (e.g., young professionals, families, local customers, etc.)",
        "Do you have any reference websites or visual preferences? (describe the style you like or provide examples)",
        "Should the website be multilingual or in a single language? (specify which languages)"
      ],
      generating: "Perfect! I'm now generating your website based on your requirements...",
      previewReady: "Your website preview is ready! Click below to view and test it.",
      viewPreview: "View Website Preview",
      customPrompt: "Provide Custom Description",
      guidedQuestions: "Answer Guided Questions",
      languageDetected: "Language detected: English",
      nextQuestion: "Thank you! Next question:",
      generatingPrompt: "Creating your website prompt...",
      approve: "Approve & Publish",
      regenerate: "Regenerate Site"
    },
    fa: {
      title: "سازنده وبسایت هوشمند",
      subtitle: "با هوش مصنوعی ما چت کنید تا وبسایت کاملتان بسازید",
      initialGreeting: "سلام! من دستیار هوشمند ساخت وبسایت شما هستم. با پرسیدن ۵ سوال ساده، یک وبسایت حرفه‌ای برایتان می‌سازم. بیایید شروع کنیم!",
      promptOption: "می‌خواهید توضیح کاملی از وبسایت خود ارائه دهید، یا من شما را از طریق چند سوال راهنمایی کنم؟",
      questions: [
        "موضوع کسب و کار یا وبسایت شما چیست؟ (مثل رستوران، فروشگاه آنلاین، نمونه کارها و...)",
        "وبسایت شما باید چه بخش‌هایی داشته باشد؟ (مثل صفحه اصلی، درباره ما، خدمات، تماس، گالری و...)",
        "مخاطبان هدف شما چه کسانی هستند؟ (مثل حرفه‌ای‌های جوان، خانواده‌ها، مشتریان محلی و...)",
        "آیا وبسایت مرجع یا ترجیحات بصری خاصی دارید؟ (سبکی که دوست دارید را توضیح دهید یا مثال بزنید)",
        "وبسایت باید چندزبانه باشد یا تک‌زبانه؟ (زبان‌های مورد نظر را مشخص کنید)"
      ],
      generating: "عالی! حالا دارم وبسایت شما را بر اساس نیازهایتان می‌سازم...",
      previewReady: "پیش‌نمایش وبسایت شما آماده است! روی دکمه زیر کلیک کنید تا مشاهده و تست کنید.",
      viewPreview: "مشاهده پیش‌نمایش وبسایت",
      customPrompt: "ارائه توضیح سفارشی",
      guidedQuestions: "پاسخ به سوالات راهنما",
      languageDetected: "زبان تشخیص داده شده: فارسی",
      nextQuestion: "متشکرم! سوال بعدی:",
      generatingPrompt: "در حال ایجاد پرامپت وبسایت شما...",
      approve: "تأیید و انتشار",
      regenerate: "ساخت مجدد سایت"
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

  useEffect(() => {
    if (messages.length === 0) {
      addMessage(translations[currentLanguage].initialGreeting, "bot", currentLanguage);
      setTimeout(() => {
        addMessage(translations[currentLanguage].promptOption, "bot", currentLanguage);
      }, 1000);
    }
  }, [currentLanguage]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    const detectedLang = detectLanguage(inputValue);
    if (detectedLang !== currentLanguage) {
      setCurrentLanguage(detectedLang);
    }

    addMessage(inputValue, "user", detectedLang);
    
    // Store the answer based on current question
    const requirements = { ...websiteRequirements };
    switch (currentQuestion) {
      case 0:
        requirements.businessTopic = inputValue;
        break;
      case 1:
        requirements.sections = inputValue;
        break;
      case 2:
        requirements.targetAudience = inputValue;
        break;
      case 3:
        requirements.references = inputValue;
        break;
      case 4:
        requirements.language = inputValue;
        break;
    }
    setWebsiteRequirements(requirements);

    // Move to next question or generate website
    if (currentQuestion < 4) {
      setTimeout(() => {
        addMessage(translations[detectedLang].nextQuestion, "bot", detectedLang);
        setTimeout(() => {
          addMessage(translations[detectedLang].questions[currentQuestion + 1], "bot", detectedLang);
          setCurrentQuestion(currentQuestion + 1);
        }, 800);
      }, 1000);
    } else {
      // All questions answered, generate website
      setTimeout(() => {
        generateWebsite(requirements as WebsiteRequirements, detectedLang);
      }, 1000);
    }

    setInputValue("");
  };

  const startGuidedQuestions = () => {
    setCurrentQuestion(0);
    setTimeout(() => {
      addMessage(translations[currentLanguage].questions[0], "bot", currentLanguage);
    }, 500);
  };

  const handleCustomPrompt = () => {
    setShowCustomPrompt(true);
  };

  const generateWebsite = async (requirements: WebsiteRequirements, language: "en" | "fa") => {
    setIsGenerating(true);
    addMessage(translations[language].generating, "bot", language);
    
    // Simulate website generation
    setTimeout(() => {
      addMessage(translations[language].previewReady, "bot", language);
      setIsGenerating(false);
      
      // Store requirements in localStorage for preview page
      localStorage.setItem('websiteRequirements', JSON.stringify(requirements));
    }, 4000);
  };

  const generateFromCustomPrompt = () => {
    if (!inputValue.trim()) return;
    
    const detectedLang = detectLanguage(inputValue);
    addMessage(inputValue, "user", detectedLang);
    
    const customRequirements: WebsiteRequirements = {
      businessTopic: inputValue,
      sections: "Auto-generated based on prompt",
      targetAudience: "Auto-detected from prompt",
      references: "Based on prompt description",
      language: detectedLang === "fa" ? "Persian" : "English"
    };
    
    setTimeout(() => {
      generateWebsite(customRequirements, detectedLang);
    }, 1000);
    
    setInputValue("");
    setShowCustomPrompt(false);
  };

  const handleViewPreview = () => {
    navigate("/site-preview/generated");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (showCustomPrompt) {
        generateFromCustomPrompt();
      } else {
        handleSendMessage();
      }
    }
  };

  const isConversationComplete = currentQuestion >= 4 && Object.keys(websiteRequirements).length >= 5;

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

        {/* Progress indicator */}
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">Progress</span>
            <span className="text-sm text-gray-500">{Math.min(currentQuestion + 1, 5)}/5</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div 
              className="bg-gradient-to-r from-blue-600 to-violet-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(Math.min(currentQuestion + 1, 5) / 5) * 100}%` }}
            ></div>
          </div>
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
            
            {isConversationComplete || messages.some(m => m.text.includes(translations[currentLanguage].previewReady)) ? (
              <div className="flex justify-center space-x-4">
                <Button onClick={handleViewPreview} className="bg-green-600 hover:bg-green-700">
                  <Zap className="h-4 w-4 mr-2" />
                  {translations[currentLanguage].viewPreview}
                </Button>
              </div>
            ) : showCustomPrompt ? (
              <div className="space-y-2">
                <Textarea
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={currentLanguage === "fa" ? "توضیح کاملی از وبسایت مورد نظرتان بنویسید..." : "Enter your detailed website description..."}
                  className="min-h-20"
                />
                <div className="flex space-x-2">
                  <Button onClick={generateFromCustomPrompt} className="flex-1">
                    {currentLanguage === "fa" ? "ساخت وبسایت" : "Generate Website"}
                  </Button>
                  <Button variant="outline" onClick={() => setShowCustomPrompt(false)}>
                    {currentLanguage === "fa" ? "لغو" : "Cancel"}
                  </Button>
                </div>
              </div>
            ) : currentQuestion === 0 && messages.length <= 2 ? (
              <div className="space-y-2">
                <div className="flex space-x-2">
                  <Button onClick={handleCustomPrompt} variant="outline" className="flex-1">
                    {translations[currentLanguage].customPrompt}
                  </Button>
                  <Button onClick={startGuidedQuestions} className="flex-1">
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
                  placeholder={currentLanguage === "fa" ? "پاسخ خود را تایپ کنید..." : "Type your answer..."}
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
            <div className="flex items-center justify-center mb-2">
              <CheckCircle className={`h-5 w-5 ${currentQuestion >= 0 ? 'text-green-500' : 'text-gray-300'}`} />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">
              {currentLanguage === "fa" ? "شناسایی نیازها" : "Identify Needs"}
            </h3>
            <p className="text-sm text-gray-600">
              {currentLanguage === "fa" ? "پاسخ به ۵ سوال ساده" : "Answer 5 simple questions"}
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border">
            <div className="flex items-center justify-center mb-2">
              <CheckCircle className={`h-5 w-5 ${isGenerating ? 'text-yellow-500' : isConversationComplete ? 'text-green-500' : 'text-gray-300'}`} />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">
              {currentLanguage === "fa" ? "ساخت با هوش مصنوعی" : "AI Generation"}
            </h3>
            <p className="text-sm text-gray-600">
              {currentLanguage === "fa" ? "ساخت خودکار وبسایت" : "Automatic website creation"}
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border">
            <div className="flex items-center justify-center mb-2">
              <CheckCircle className={`h-5 w-5 ${messages.some(m => m.text.includes(translations[currentLanguage].previewReady)) ? 'text-green-500' : 'text-gray-300'}`} />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">
              {currentLanguage === "fa" ? "بررسی و تأیید" : "Review & Approve"}
            </h3>
            <p className="text-sm text-gray-600">
              {currentLanguage === "fa" ? "مشاهده و تست نهایی" : "Preview and final testing"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiChat;
