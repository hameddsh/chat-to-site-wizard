import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Eye, Edit, MessageSquare, Download, Globe, Home, User, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";

interface WebsiteRequirements {
  businessTopic: string;
  sections: string;
  targetAudience: string;
  references: string;
  language: string;
}

const SitePreview = () => {
  const { id } = useParams();
  const isGenerated = id === "generated";
  const [requirements, setRequirements] = useState<WebsiteRequirements | null>(null);
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    if (isGenerated) {
      const stored = localStorage.getItem('websiteRequirements');
      if (stored) {
        setRequirements(JSON.parse(stored));
      }
    }
  }, [isGenerated]);

  const siteData = {
    name: isGenerated ? "AI Generated Website" : "My Restaurant Website",
    language: isGenerated ? (requirements?.language?.includes("Persian") || requirements?.language?.includes("فارسی") ? "bilingual" : "english") : "english",
    template: isGenerated ? "ai-generated" : "restaurant",
    status: isGenerated ? "Generated" : "Published"
  };

  const generateSectionContent = (section: string) => {
    const business = requirements?.businessTopic || "business";
    const audience = requirements?.targetAudience || "customers";
    
    switch (section.toLowerCase()) {
      case 'home':
        return {
          title: `Welcome to ${business}`,
          content: `Professional ${business} services tailored for ${audience}. We provide exceptional quality and outstanding customer service.`
        };
      case 'about':
        return {
          title: `About ${business}`,
          content: `We are a dedicated team specializing in ${business}. Our mission is to serve ${audience} with excellence and innovation.`
        };
      case 'services':
        return {
          title: 'Our Services',
          content: `We offer comprehensive ${business} solutions designed specifically for ${audience}.`
        };
      case 'contact':
        return {
          title: 'Contact Us',
          content: `Get in touch with us to learn more about our ${business} services.`
        };
      default:
        return {
          title: section,
          content: `Learn more about our ${section.toLowerCase()} offerings.`
        };
    }
  };

  const getNavigationItems = () => {
    if (!requirements?.sections) {
      return ['Home', 'About', 'Services', 'Contact'];
    }
    
    const sections = requirements.sections.split(',').map(s => s.trim());
    return sections.length > 0 ? sections : ['Home', 'About', 'Services', 'Contact'];
  };

  const renderPreviewContent = () => {
    const navItems = getNavigationItems();
    const currentSection = generateSectionContent(currentPage);
    
    return (
      <div className="bg-white">
        {/* Navigation */}
        <nav className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-gray-900">
              {requirements?.businessTopic || "Your Business"}
            </div>
            <div className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => setCurrentPage(item.toLowerCase())}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    currentPage === item.toLowerCase()
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="md:hidden">
              <Button variant="ghost" size="sm">Menu</Button>
            </div>
          </div>
        </nav>

        {/* Page Content */}
        <div className="px-6 py-12">
          {currentPage === 'home' && (
            <div>
              {/* Hero Section */}
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  {currentSection.title}
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                  {currentSection.content}
                </p>
                <div className="flex justify-center gap-4">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Get Started
                  </Button>
                  <Button variant="outline">
                    Learn More
                  </Button>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Home className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Quality Service</h3>
                  <p className="text-gray-600">Professional service tailored to your needs</p>
                </div>
                <div className="text-center p-6 bg-green-50 rounded-lg">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <User className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                  <p className="text-gray-600">Experienced professionals at your service</p>
                </div>
                <div className="text-center p-6 bg-purple-50 rounded-lg">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                  <p className="text-gray-600">Always here when you need us</p>
                </div>
              </div>
            </div>
          )}

          {currentPage === 'about' && (
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">{currentSection.title}</h1>
              <p className="text-lg text-gray-600 mb-8">{currentSection.content}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                  <p className="text-gray-600 mb-4">
                    We strive to provide exceptional {requirements?.businessTopic} services 
                    that exceed expectations and create lasting value for our clients.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
                  <p className="text-gray-600 mb-4">
                    To be the leading provider of {requirements?.businessTopic} solutions,
                    recognized for innovation, quality, and customer satisfaction.
                  </p>
                </div>
              </div>
            </div>
          )}

          {currentPage === 'services' && (
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">{currentSection.title}</h1>
              <p className="text-lg text-gray-600 mb-8">{currentSection.content}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {['Service 1', 'Service 2', 'Service 3'].map((service, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-3">{service}</h3>
                      <p className="text-gray-600 mb-4">
                        Professional {requirements?.businessTopic} service designed for {requirements?.targetAudience}.
                      </p>
                      <Button variant="outline" className="w-full">Learn More</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {currentPage === 'contact' && (
            <div className="max-w-2xl mx-auto">
              <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">{currentSection.title}</h1>
              <p className="text-lg text-gray-600 mb-8 text-center">{currentSection.content}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <span>info@{requirements?.businessTopic?.replace(/\s+/g, '').toLowerCase()}.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <span>123 Business Street, City, State 12345</span>
                  </div>
                </div>
                
                <form className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                  <textarea 
                    placeholder="Your Message" 
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  ></textarea>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Send Message</Button>
                </form>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-xl font-semibold mb-2">{requirements?.businessTopic || "Your Business"}</h3>
            <p className="text-gray-400 mb-4">Professional services for {requirements?.targetAudience || "our valued clients"}</p>
            <div className="flex justify-center space-x-6">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => setCurrentPage(item.toLowerCase())}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </footer>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Website Preview</h1>
              <p className="text-gray-600">
                {isGenerated ? "Your AI-generated website preview" : "Preview your website"}
              </p>
            </div>
            {isGenerated && (
              <Badge variant="outline" className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                {siteData.language === "bilingual" ? "Bilingual Support" : "Single Language"}
              </Badge>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link to={`/edit-site/${id}`}>
                  <Button className="w-full">
                    <Edit className="h-4 w-4 mr-2" />
                    Edit Site
                  </Button>
                </Link>
                <Button variant="outline" className="w-full">
                  <Eye className="h-4 w-4 mr-2" />
                  Live Preview
                </Button>
                {isGenerated && (
                  <Button variant="outline" className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Export Site
                  </Button>
                )}
                <Link to="/support">
                  <Button variant="outline" className="w-full">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Get Support
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Site Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-medium">Status:</span>
                    <span className={`ml-2 ${siteData.status === 'Generated' ? 'text-blue-600' : 'text-green-600'}`}>
                      {siteData.status}
                    </span>
                  </div>
                  <div>
                    <span className="font-medium">Created:</span>
                    <span className="ml-2 text-gray-600">Today</span>
                  </div>
                  <div>
                    <span className="font-medium">Template:</span>
                    <span className="ml-2 text-gray-600 capitalize">{siteData.template}</span>
                  </div>
                  <div>
                    <span className="font-medium">Language:</span>
                    <span className="ml-2 text-gray-600 capitalize">{siteData.language}</span>
                  </div>
                  {isGenerated && requirements && (
                    <>
                      <div>
                        <span className="font-medium">Business:</span>
                        <span className="ml-2 text-gray-600">{requirements.businessTopic}</span>
                      </div>
                      <div>
                        <span className="font-medium">Target:</span>
                        <span className="ml-2 text-gray-600">{requirements.targetAudience}</span>
                      </div>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle>Interactive Website Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
                  <div className="bg-gray-100 px-4 py-2 border-b">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      <div className="ml-4 text-sm text-gray-600">
                        {isGenerated ? "your-ai-website.com" : "yoursite.example.com"}
                      </div>
                    </div>
                  </div>
                  
                  <div className="min-h-96 max-h-96 overflow-y-auto">
                    {isGenerated ? renderPreviewContent() : (
                      // ... keep existing code (original preview content)
                      <div className="p-8">
                        <div className="text-center mb-8">
                          <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            Welcome to Your Business
                          </h1>
                          <p className="text-xl text-gray-600 mb-6">
                            Professional services tailored to your needs
                          </p>
                          <Button size="lg" className="bg-blue-600">
                            Get Started
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SitePreview;
