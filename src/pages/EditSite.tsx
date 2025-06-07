
import { useState } from "react";
import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import EditSiteHeader from "@/components/editSite/EditSiteHeader";
import SectionList from "@/components/editSite/SectionList";
import EditorPanel from "@/components/editSite/EditorPanel";
import LivePreview from "@/components/editSite/LivePreview";
import type { SectionContent } from "@/types/editSite";

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

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-7xl mx-auto px-6 py-8">
        <EditSiteHeader 
          projectId={id} 
          saved={saved} 
          onSave={handleSave} 
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <SectionList
            sections={sections}
            selectedSection={selectedSection}
            onSectionSelect={setSelectedSection}
          />

          <EditorPanel
            selectedSection={selectedSection}
            sectionContent={sectionContent}
            onUpdateContent={updateSectionContent}
          />

          <LivePreview
            selectedSection={selectedSection}
            sectionContent={sectionContent}
          />
        </div>
      </div>
    </div>
  );
};

export default EditSite;
