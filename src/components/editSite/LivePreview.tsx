
import type { SectionContent, SectionWithSubtitle, SectionWithContent } from "@/types/editSite";

interface LivePreviewProps {
  selectedSection: string;
  sectionContent: SectionContent;
}

const LivePreview = ({ selectedSection, sectionContent }: LivePreviewProps) => {
  const getCurrentSection = () => {
    return sectionContent[selectedSection as keyof SectionContent];
  };

  const hasSubtitle = (section: any): section is SectionWithSubtitle => {
    return 'subtitle' in section;
  };

  const hasContent = (section: any): section is SectionWithContent => {
    return 'content' in section;
  };

  const currentSection = getCurrentSection();

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
      <h3 className="font-semibold mb-4">Live Preview</h3>
      <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 min-h-[400px]">
        <div className="space-y-6">
          {selectedSection === "header" && (
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                {currentSection.title}
              </h1>
              {hasSubtitle(currentSection) && (
                <p className="text-gray-600">
                  {currentSection.subtitle}
                </p>
              )}
            </div>
          )}
          
          {selectedSection !== "header" && (
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                {currentSection.title}
              </h2>
              {hasContent(currentSection) && (
                <p className="text-gray-700">
                  {currentSection.content}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LivePreview;
