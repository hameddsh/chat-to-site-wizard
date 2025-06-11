
export interface UserRequirements {
  businessType: string;
  targetAudience: string;
  services: string[];
  preferredSections: string[];
  language: "en" | "fa";
  customPrompt?: string;
}

export const detectLanguage = (text: string): "en" | "fa" => {
  const persianRegex = /[\u0600-\u06FF]/;
  return persianRegex.test(text) ? "fa" : "en";
};

export const generateWebsitePrompt = (requirements: UserRequirements): string => {
  const { businessType, targetAudience, services, preferredSections, language } = requirements;
  
  if (language === "fa") {
    return `یک وبسایت مدرن برای ${businessType} با مخاطبان هدف ${targetAudience}. 
بخش‌های اصلی: ${preferredSections.join("، ")}. 
خدمات/محصولات: ${services.join("، ")}. 
زبان: فارسی. 
طراحی حرفه‌ای و مدرن با رنگ‌بندی مناسب و تجربه کاربری بهینه.`;
  }
  
  return `A modern ${businessType} website targeting ${targetAudience}. 
Main sections: ${preferredSections.join(", ")}. 
Services/Products: ${services.join(", ")}. 
Language: English. 
Professional and modern design with appropriate color scheme and optimal user experience.`;
};

export const getQuestionsForLanguage = (language: "en" | "fa") => {
  const questions = {
    en: {
      businessType: "What type of business or service do you offer?",
      targetAudience: "Who is your target audience?",
      services: "What are your main products or services?",
      sections: "What sections would you like on your website?",
      additionalInfo: "Any additional requirements or preferences?"
    },
    fa: {
      businessType: "چه نوع کسب و کار یا خدماتی ارائه می‌دهید؟",
      targetAudience: "مخاطبان هدف شما چه کسانی هستند؟",
      services: "محصولات یا خدمات اصلی شما چیست؟",
      sections: "چه بخش‌هایی را در وبسایت خود می‌خواهید؟",
      additionalInfo: "آیا نیاز یا ترجیح خاصی دارید؟"
    }
  };
  
  return questions[language];
};

export const generateWebsiteStructure = (requirements: UserRequirements) => {
  // This would integrate with actual website generation logic
  return {
    template: determineTemplate(requirements.businessType),
    sections: requirements.preferredSections,
    content: generateContent(requirements),
    styling: generateStyling(requirements.language)
  };
};

const determineTemplate = (businessType: string): string => {
  const lowerType = businessType.toLowerCase();
  
  if (lowerType.includes("restaurant") || lowerType.includes("رستوران")) return "restaurant";
  if (lowerType.includes("store") || lowerType.includes("فروشگاه")) return "ecommerce";
  if (lowerType.includes("portfolio") || lowerType.includes("نمونه کار")) return "portfolio";
  if (lowerType.includes("service") || lowerType.includes("خدمات")) return "service";
  
  return "business";
};

const generateContent = (requirements: UserRequirements) => {
  return {
    heroTitle: requirements.language === "fa" ? 
      `خوش آمدید به ${requirements.businessType}` : 
      `Welcome to ${requirements.businessType}`,
    heroSubtitle: requirements.language === "fa" ?
      `بهترین خدمات برای ${requirements.targetAudience}` :
      `Quality services for ${requirements.targetAudience}`,
    services: requirements.services,
    contactInfo: requirements.language === "fa" ? 
      "با ما در تماس باشید" : 
      "Get in touch with us"
  };
};

const generateStyling = (language: "en" | "fa") => {
  return {
    direction: language === "fa" ? "rtl" : "ltr",
    fontFamily: language === "fa" ? "Vazir, sans-serif" : "Inter, sans-serif",
    primaryColor: "#3B82F6",
    secondaryColor: "#8B5CF6"
  };
};
