
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Save, Eye } from "lucide-react";
import Navigation from "@/components/Navigation";

type SectionWithSubtitle = {
  title: string;
  subtitle: string;
};

type SectionWithContent = {
  title: string;
  content: string;
};

type SectionContent = {
  header: SectionWithSubtitle;
  about: SectionWithContent;
  services: SectionWithContent;
  contact: SectionWithContent;
};

const EditSite = () => {
  const { id } = useParams();
  const [selectedSection, setSelectedSection] = useState("header");
  const [saved, setSaved] = useState(false);

  const sections = [
    { id: "header", name: "Header" },
    { id: "about", name: "About" },
    { id: "services", name: "Services" },
    { id: "contact", name: "Contact" }
  ];

  const [sectionContent, setSectionContent] = useState<SectionContent>({
    header: {
      title: "Welcome to Bella Vista Restaurant",
      subtitle: "Authentic Italian Cuisine in the Heart of the City"
    },
    about: {
      title: "About Our Restaurant",
      content: "Since 1985, Bella Vista has been serving authentic Italian cuisine made with the finest ingredients imported directly from Italy."
    },
    services: {
      title: "Our Services",
      content: "Fine dining, catering, private events, and online reservations."
    },
    contact: {
      title: "Contact Us",
      content: "Visit us at 123 Main Street or call (555) 123-4567"
    }
  });

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const updateSectionContent = (section: string, field: string, value: string) => {
    setSectionContent(prev => ({
      ...prev,
      [section]: {
        ...prev[section as keyof SectionContent],
        [field]: value
      }
    }));
  };

  const getCurrentSection = () => {
    return sectionContent[selectedSection as keyof SectionContent];
  };

  const hasSubtitle = (section: any): section is SectionWithSubtitle => {
    return 'subtitle' in section;
  };

  const hasContent = (section: any): section is SectionWithContent => {
    return 'content' in section;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-6">
          <Link to={`/project/${id}`} className="flex items-center text-blue-600 hover:text-blue-700 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Project Details
          </Link>
          
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-900">Edit Website</h1>
            <div className="flex gap-3">
              <Button variant="outline">
                <Eye className="h-4 w-4 mr-2" />
                Preview
              </Button>
              <Button onClick={handleSave} className="bg-green-600 hover:bg-green-700">
                <Save className="h-4 w-4 mr-2" />
                {saved ? "Saved!" : "Save Changes"}
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Section List */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <h3 className="font-semibold mb-4">Website Sections</h3>
            <div className="space-y-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setSelectedSection(section.id)}
                  className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                    selectedSection === section.id
                      ? "bg-blue-100 text-blue-700 border border-blue-200"
                      : "hover:bg-gray-50"
                  }`}
                >
                  {section.name}
                </button>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t">
              <h4 className="font-medium mb-3">Design Settings</h4>
              <div className="space-y-3">
                <div>
                  <Label className="text-sm">Primary Color</Label>
                  <div className="flex gap-2 mt-1">
                    <div className="w-8 h-8 rounded bg-blue-600 border-2 border-blue-600"></div>
                    <div className="w-8 h-8 rounded bg-green-600 border hover:border-gray-400 cursor-pointer"></div>
                    <div className="w-8 h-8 rounded bg-purple-600 border hover:border-gray-400 cursor-pointer"></div>
                    <div className="w-8 h-8 rounded bg-red-600 border hover:border-gray-400 cursor-pointer"></div>
                  </div>
                </div>
                <div>
                  <Label className="text-sm">Font Style</Label>
                  <select className="w-full mt-1 px-3 py-1 border border-gray-300 rounded-md text-sm">
                    <option>Modern Sans</option>
                    <option>Classic Serif</option>
                    <option>Elegant Script</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Editor Panel */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="font-semibold mb-4 capitalize">Edit {selectedSection} Section</h3>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={getCurrentSection().title}
                  onChange={(e) => updateSectionContent(selectedSection, "title", e.target.value)}
                  className="mt-1"
                />
              </div>
              
              {hasSubtitle(getCurrentSection()) && (
                <div>
                  <Label htmlFor="subtitle">Subtitle</Label>
                  <Input
                    id="subtitle"
                    value={getCurrentSection().subtitle}
                    onChange={(e) => updateSectionContent(selectedSection, "subtitle", e.target.value)}
                    className="mt-1"
                  />
                </div>
              )}
              
              {hasContent(getCurrentSection()) && (
                <div>
                  <Label htmlFor="content">Content</Label>
                  <Textarea
                    id="content"
                    value={getCurrentSection().content}
                    onChange={(e) => updateSectionContent(selectedSection, "content", e.target.value)}
                    className="mt-1"
                    rows={4}
                  />
                </div>
              )}
            </div>
          </div>

          {/* Live Preview */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <h3 className="font-semibold mb-4">Live Preview</h3>
            <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 min-h-[400px]">
              <div className="space-y-6">
                {selectedSection === "header" && (
                  <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">
                      {getCurrentSection().title}
                    </h1>
                    {hasSubtitle(getCurrentSection()) && (
                      <p className="text-gray-600">
                        {getCurrentSection().subtitle}
                      </p>
                    )}
                  </div>
                )}
                
                {selectedSection !== "header" && (
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">
                      {getCurrentSection().title}
                    </h2>
                    {hasContent(getCurrentSection()) && (
                      <p className="text-gray-700">
                        {getCurrentSection().content}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditSite;
