
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Edit, Download, ExternalLink } from "lucide-react";
import Navigation from "@/components/Navigation";

const ProjectDetails = () => {
  const { id } = useParams();
  
  // Mock project data - in real app this would come from API
  const project = {
    id: id || "1",
    title: "Modern Restaurant Website",
    purpose: "Create a professional website for 'Bella Vista Restaurant' to showcase our Italian cuisine, allow online reservations, and display our menu with pricing.",
    features: [
      "Homepage with hero section and restaurant photos",
      "Interactive menu with categories and pricing",
      "Online reservation system",
      "About us page with chef background",
      "Contact page with location map",
      "Mobile-responsive design",
      "Social media integration"
    ],
    status: "Approved" as "Pending" | "Approved" | "Rejected",
    createdAt: "2024-06-01",
    previewUrl: "https://bella-vista-demo.lovable.app"
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Approved": return "bg-green-500";
      case "Rejected": return "bg-red-500";
      default: return "bg-yellow-500";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="mb-6">
          <Link to="/dashboard" className="flex items-center text-blue-600 hover:text-blue-700 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Link>
          
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-900">{project.title}</h1>
            <Badge className={`${getStatusColor(project.status)} text-white`}>
              {project.status}
            </Badge>
          </div>
          <p className="text-gray-600 mt-2">Created on {new Date(project.createdAt).toLocaleDateString()}</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Project Brief</h2>
          
          <div className="mb-6">
            <h3 className="font-medium text-gray-900 mb-2">Purpose</h3>
            <p className="text-gray-700 leading-relaxed">{project.purpose}</p>
          </div>

          <div className="mb-6">
            <h3 className="font-medium text-gray-900 mb-3">Requested Features</h3>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {project.status === "Approved" && (
            <div className="border-t pt-4">
              <h3 className="font-medium text-gray-900 mb-3">Preview</h3>
              <div className="flex items-center space-x-3">
                <ExternalLink className="h-4 w-4 text-gray-400" />
                <a 
                  href={project.previewUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  {project.previewUrl}
                </a>
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link to={`/edit-site/${project.id}`} className="flex-1">
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              <Edit className="h-4 w-4 mr-2" />
              Edit This Site
            </Button>
          </Link>
          
          <Button variant="outline" className="flex-1">
            <Download className="h-4 w-4 mr-2" />
            Download Brief PDF
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
