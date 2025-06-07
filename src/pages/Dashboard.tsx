
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, Edit, MessageSquare, Plus } from "lucide-react";
import Navigation from "@/components/Navigation";

const Dashboard = () => {
  const websites = [
    {
      id: 1,
      name: "My Restaurant Website",
      status: "Published",
      previewUrl: "#",
      createdAt: "2024-01-15"
    },
    {
      id: 2,
      name: "Photography Portfolio",
      status: "Draft",
      previewUrl: "#",
      createdAt: "2024-01-10"
    },
    {
      id: 3,
      name: "Online Store",
      status: "In Review",
      previewUrl: "#",
      createdAt: "2024-01-08"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Published":
        return "bg-green-100 text-green-800";
      case "Draft":
        return "bg-yellow-100 text-yellow-800";
      case "In Review":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, John!</h1>
          <p className="text-gray-600 mt-2">Manage your AI-generated websites and projects</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Total Websites</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600">3</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Published</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">1</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">In Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-yellow-600">2</div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white rounded-lg shadow-sm border">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">Your Websites</h2>
              <Button className="bg-gradient-to-r from-blue-600 to-violet-600">
                <Plus className="h-4 w-4 mr-2" />
                Create New Website
              </Button>
            </div>
          </div>
          
          <div className="divide-y divide-gray-200">
            {websites.map((website) => (
              <div key={website.id} className="p-6 flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-900">{website.name}</h3>
                  <div className="flex items-center space-x-4 mt-2">
                    <Badge className={getStatusColor(website.status)}>
                      {website.status}
                    </Badge>
                    <span className="text-sm text-gray-500">Created: {website.createdAt}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-2" />
                    Preview
                  </Button>
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4 mr-2" />
                    Edit Site
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Need Help?</h3>
          <p className="text-gray-600 mb-4">
            Our support team is here to help you create the perfect website.
          </p>
          <Button variant="outline">
            <MessageSquare className="h-4 w-4 mr-2" />
            Request Support
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
