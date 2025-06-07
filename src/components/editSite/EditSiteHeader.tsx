
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Save, Eye } from "lucide-react";

interface EditSiteHeaderProps {
  projectId: string | undefined;
  saved: boolean;
  onSave: () => void;
}

const EditSiteHeader = ({ projectId, saved, onSave }: EditSiteHeaderProps) => {
  return (
    <div className="mb-6">
      <Link to={`/project/${projectId}`} className="flex items-center text-blue-600 hover:text-blue-700 mb-4">
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
          <Button onClick={onSave} className="bg-green-600 hover:bg-green-700">
            <Save className="h-4 w-4 mr-2" />
            {saved ? "Saved!" : "Save Changes"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditSiteHeader;
