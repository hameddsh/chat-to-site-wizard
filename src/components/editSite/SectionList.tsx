
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

interface SectionListProps {
  sections: { id: string; name: string }[];
  selectedSection: string;
  onSectionSelect: (sectionId: string) => void;
}

const SectionList = ({ sections, selectedSection, onSectionSelect }: SectionListProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
      <h3 className="font-semibold mb-4">Website Sections</h3>
      <div className="space-y-2">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => onSectionSelect(section.id)}
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
  );
};

export default SectionList;
