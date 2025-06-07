
import { Laptop, Check, Users, MessageSquare, Shield } from "lucide-react";

const AdminDashboard = () => {
  const features = [
    {
      icon: <Check className="h-5 w-5 text-blue-600" />,
      text: "Viewing and approving generated websites"
    },
    {
      icon: <Users className="h-5 w-5 text-blue-600" />,
      text: "Managing users and projects"
    },
    {
      icon: <MessageSquare className="h-5 w-5 text-blue-600" />,
      text: "Sync with Telegram bot conversations"
    },
    {
      icon: <Shield className="h-5 w-5 text-blue-600" />,
      text: "Role-based access (Admin, Client, Developer)"
    }
  ];

  return (
    <section className="bg-white px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              Powerful Admin Dashboard
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Complete control over your AI website generation platform with our comprehensive admin interface.
            </p>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    {feature.icon}
                  </div>
                  <span className="text-gray-700">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <div className="rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 p-8 shadow-2xl">
                <Laptop className="h-32 w-32 text-gray-600 mx-auto" />
              </div>
              <div className="absolute -bottom-4 -right-4 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 p-3">
                <Shield className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;
