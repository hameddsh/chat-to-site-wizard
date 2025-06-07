
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { User, Mail, Lock, Globe, Trash2, Save } from "lucide-react";
import Navigation from "@/components/Navigation";

const UserSettings = () => {
  const [formData, setFormData] = useState({
    fullName: "John Smith",
    email: "john.smith@example.com",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    language: "english"
  });

  const [saved, setSaved] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Account Settings</h1>
          <p className="text-gray-600">Manage your profile and preferences</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Settings Navigation */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <nav className="space-y-2">
              <a href="#profile" className="flex items-center px-3 py-2 rounded-md bg-blue-50 text-blue-700 border border-blue-200">
                <User className="h-4 w-4 mr-3" />
                Profile
              </a>
              <a href="#security" className="flex items-center px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50">
                <Lock className="h-4 w-4 mr-3" />
                Security
              </a>
              <a href="#preferences" className="flex items-center px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50">
                <Globe className="h-4 w-4 mr-3" />
                Preferences
              </a>
            </nav>
          </div>

          {/* Settings Content */}
          <div className="lg:col-span-2 space-y-6">
            {saved && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-700 text-sm">Settings saved successfully!</p>
              </div>
            )}

            {/* Profile Section */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center mb-4">
                <User className="h-5 w-5 mr-2 text-gray-600" />
                <h2 className="text-xl font-semibold">Profile Information</h2>
              </div>

              <form onSubmit={handleSave} className="space-y-4">
                <div>
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1"
                  />
                </div>

                <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                  <Save className="h-4 w-4 mr-2" />
                  Save Profile
                </Button>
              </form>
            </div>

            {/* Security Section */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center mb-4">
                <Lock className="h-5 w-5 mr-2 text-gray-600" />
                <h2 className="text-xl font-semibold">Change Password</h2>
              </div>

              <form className="space-y-4">
                <div>
                  <Label htmlFor="currentPassword">Current Password</Label>
                  <Input
                    id="currentPassword"
                    name="currentPassword"
                    type="password"
                    value={formData.currentPassword}
                    onChange={handleChange}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="newPassword">New Password</Label>
                  <Input
                    id="newPassword"
                    name="newPassword"
                    type="password"
                    value={formData.newPassword}
                    onChange={handleChange}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="confirmPassword">Confirm New Password</Label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="mt-1"
                  />
                </div>

                <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                  Update Password
                </Button>
              </form>
            </div>

            {/* Preferences Section */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center mb-4">
                <Globe className="h-5 w-5 mr-2 text-gray-600" />
                <h2 className="text-xl font-semibold">Preferences</h2>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="language">Preferred Language</Label>
                  <select
                    id="language"
                    name="language"
                    value={formData.language}
                    onChange={handleChange}
                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="english">English</option>
                    <option value="persian">Persian (فارسی)</option>
                  </select>
                </div>

                <Button className="bg-blue-600 hover:bg-blue-700">
                  Save Preferences
                </Button>
              </div>
            </div>

            {/* Danger Zone */}
            <div className="bg-white rounded-lg shadow-sm border border-red-200 p-6">
              <h2 className="text-xl font-semibold text-red-700 mb-4">Danger Zone</h2>
              
              {!showDeleteConfirm ? (
                <div>
                  <p className="text-gray-700 mb-4">
                    Once you delete your account, there is no going back. This will permanently 
                    delete your account and all your websites.
                  </p>
                  <Button 
                    variant="destructive" 
                    onClick={() => setShowDeleteConfirm(true)}
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete Account
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  <p className="text-red-700 font-medium">
                    Are you absolutely sure? This action cannot be undone.
                  </p>
                  <div className="flex gap-3">
                    <Button 
                      variant="destructive"
                      onClick={() => {
                        // Mock delete action
                        alert("Account deletion would happen here");
                        setShowDeleteConfirm(false);
                      }}
                    >
                      Yes, Delete My Account
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => setShowDeleteConfirm(false)}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSettings;
