
import { Bot, Laptop } from "lucide-react";

const LiveEditor = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-50 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative rounded-full bg-gradient-to-r from-violet-100 to-blue-100 p-4">
            <Laptop className="h-12 w-12 text-violet-600" />
            <div className="absolute -right-1 -top-1 rounded-full bg-blue-500 p-1">
              <Bot className="h-4 w-4 text-white" />
            </div>
          </div>
        </div>
        
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
          Live Website Editor
        </h2>
        
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Edit your AI-generated websites in real time with our visual WYSIWYG interface. 
          No coding needed - just point, click, and customize. What You See Is What You Get, 
          with the power of AI backing every change.
        </p>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 mt-12">
          <div className="text-center">
            <div className="mb-4 rounded-full bg-violet-100 p-3 mx-auto w-fit">
              <Check className="h-6 w-6 text-violet-600" />
            </div>
            <h3 className="font-semibold text-gray-900">Visual Editing</h3>
            <p className="text-sm text-gray-600">Point and click to modify any element</p>
          </div>
          <div className="text-center">
            <div className="mb-4 rounded-full bg-blue-100 p-3 mx-auto w-fit">
              <Check className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900">Real-time Preview</h3>
            <p className="text-sm text-gray-600">See changes instantly as you make them</p>
          </div>
          <div className="text-center">
            <div className="mb-4 rounded-full bg-violet-100 p-3 mx-auto w-fit">
              <Check className="h-6 w-6 text-violet-600" />
            </div>
            <h3 className="font-semibold text-gray-900">No Coding Required</h3>
            <p className="text-sm text-gray-600">Professional results without technical skills</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveEditor;
