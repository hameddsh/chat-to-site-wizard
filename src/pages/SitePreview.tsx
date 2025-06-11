import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Eye, Edit, MessageSquare, Download, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

const SitePreview = () => {
  const { id } = useParams();
  const isGenerated = id === "generated";

  // Mock data for generated site
  const siteData = {
    name: isGenerated ? "AI Generated Website" : "My Restaurant Website",
    language: isGenerated ? "bilingual" : "english",
    template: isGenerated ? "business" : "restaurant",
    status: isGenerated ? "Generated" : "Published"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Website Preview</h1>
              <p className="text-gray-600">Preview your AI-generated website</p>
            </div>
            {isGenerated && (
              <Badge variant="outline" className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                Bilingual Support
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
                  {isGenerated && (
                    <div>
                      <span className="font-medium">AI Generated:</span>
                      <span className="ml-2 text-blue-600">Yes</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle>Website Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
                  <div className="bg-gray-100 px-4 py-2 border-b">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      <div className="ml-4 text-sm text-gray-600">
                        {isGenerated ? "ai-generated-site.example.com" : "yoursite.example.com"}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8 min-h-96">
                    {isGenerated ? (
                      <div>
                        <div className="text-center mb-8">
                          <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            Welcome to Your AI-Generated Business
                          </h1>
                          <p className="text-xl text-gray-600 mb-6">
                            Professional services powered by artificial intelligence
                          </p>
                          <div className="flex justify-center gap-4">
                            <Button size="lg" className="bg-blue-600">
                              Get Started
                            </Button>
                            <Button size="lg" variant="outline">
                              Learn More
                            </Button>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                          <div className="text-center p-6 bg-blue-50 rounded-lg">
                            <h3 className="text-xl font-semibold mb-2">AI-Powered</h3>
                            <p className="text-gray-600">Built with advanced AI technology</p>
                          </div>
                          <div className="text-center p-6 bg-violet-50 rounded-lg">
                            <h3 className="text-xl font-semibold mb-2">Bilingual</h3>
                            <p className="text-gray-600">Supports English and Persian</p>
                          </div>
                          <div className="text-center p-6 bg-green-50 rounded-lg">
                            <h3 className="text-xl font-semibold mb-2">Professional</h3>
                            <p className="text-gray-600">Enterprise-grade quality</p>
                          </div>
                        </div>

                        <div className="mt-12 text-center">
                          <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            About Our Services
                          </h2>
                          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            We provide cutting-edge solutions tailored to your specific needs, 
                            using the latest AI technology to deliver exceptional results.
                          </p>
                        </div>

                        <div className="mt-12 bg-gradient-to-r from-blue-600 to-violet-600 text-white p-8 rounded-lg text-center">
                          <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
                          <p className="mb-6">Contact us today to learn more about our services</p>
                          <Button size="lg" variant="secondary">
                            Contact Us
                          </Button>
                        </div>
                      </div>
                    ) : (
                      // ... keep existing code (original preview content)
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
