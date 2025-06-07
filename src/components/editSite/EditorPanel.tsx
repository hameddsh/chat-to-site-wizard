
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import type { SectionContent, SectionWithSubtitle, SectionWithContent } from "@/types/editSite";

interface EditorPanelProps {
  selectedSection: string;
  sectionContent: SectionContent;
  onUpdateContent: (section: string, field: string, value: string) => void;
}

const EditorPanel = ({ selectedSection, sectionContent, onUpdateContent }: EditorPanelProps) => {
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
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="font-semibold mb-4 capitalize">Edit {selectedSection} Section</h3>
      
      <div className="space-y-4">
        <div>
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            value={currentSection.title}
            onChange={(e) => onUpdateContent(selectedSection, "title", e.target.value)}
            className="mt-1"
          />
        </div>
        
        {hasSubtitle(currentSection) && (
          <div>
            <Label htmlFor="subtitle">Subtitle</Label>
            <Input
              id="subtitle"
              value={currentSection.subtitle}
              onChange={(e) => onUpdateContent(selectedSection, "subtitle", e.target.value)}
              className="mt-1"
            />
          </div>
        )}
        
        {hasContent(currentSection) && (
          <div>
            <Label htmlFor="content">Content</Label>
            <Textarea
              id="content"
              value={currentSection.content}
              onChange={(e) => onUpdateContent(selectedSection, "content", e.target.value)}
              className="mt-1"
              rows={4}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default EditorPanel;
