
import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Eye, Edit, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const SitePreview = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Website Preview</h1>
          <p className="text-gray-600">Preview your AI-generated website</p>
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
                    <span className="ml-2 text-green-600">Generated</span>
                  </div>
                  <div>
                    <span className="font-medium">Created:</span>
                    <span className="ml-2 text-gray-600">Today</span>
                  </div>
                  <div>
                    <span className="font-medium">Type:</span>
                    <span className="ml-2 text-gray-600">Business</span>
                  </div>
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
                      <div className="ml-4 text-sm text-gray-600">yoursite.example.com</div>
                    </div>
                  </div>
                  
                  <div className="p-8 min-h-96">
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
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                      <div className="text-center">
                        <h3 className="text-xl font-semibold mb-2">Service 1</h3>
                        <p className="text-gray-600">Description of your first service</p>
                      </div>
                      <div className="text-center">
                        <h3 className="text-xl font-semibold mb-2">Service 2</h3>
                        <p className="text-gray-600">Description of your second service</p>
                      </div>
                      <div className="text-center">
                        <h3 className="text-xl font-semibold mb-2">Service 3</h3>
                        <p className="text-gray-600">Description of your third service</p>
                      </div>
                    </div>
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
