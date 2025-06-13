
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { Bot } from "lucide-react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const [toast, setToast] = useState<{
        show: boolean;
        message: string;
        type: "success" | "error" | "info";
    }>({ show: false, message: "", type: "info" });

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    try{
    const response = await fetch("http://localhost:3000/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (!response.ok) {
      // Handle error (e.g., show message)
      const error = await response.json();
      alert(error.message || "Signup failed");
      setToast({
                show: true,
                message: 'errorMessage',
                type: "error"
            })
      return;
    }
    // Handle success (e.g., redirect or show success message)
    setToast({
                show: true,
                message: "Account created successfully!",
                type: "success"
            })
    // Optionally redirect to login page
    // navigate("/login");
  } catch (err) {
    alert("Network error. Please try again.");

    setToast({
                show: true,
                message: 'errorMessage',
                type: "error"
            })
  }
    console.log("Sign up form submitted:", formData);
    // Add sign up logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-violet-50 flex items-center justify-center px-6">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 p-3">
              <Bot className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Create Your Account</h1>
          <p className="text-gray-600 mt-2">Start building websites with AI in minutes</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              name="fullName"
              type="text"
              required
              value={formData.fullName}
              onChange={handleChange}
              className="mt-1"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-1"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="mt-1"
              placeholder="Create a password"
            />
          </div>

          <div>
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
              className="mt-1"
              placeholder="Confirm your password"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700"
          >
            Create Account
          </Button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:text-blue-700 font-medium">
            Sign in
          </Link>
        </p>
      </div>
      {toast.show && (
                <div className={`fixed bottom-4 right-4 ${
                    toast.type === 'success' ? 'bg-green-500' : 
                    toast.type === 'error' ? 'bg-red-500' : 'bg-blue-500'
                } text-white px-6 py-3 rounded-lg shadow-lg`}>
                    {toast.message}
                    <button 
                        onClick={() => setToast({...toast, show: false})}
                        className="ml-4"
                    >
                        ×
                    </button>
                </div>
            )}
    </div>
  );
};

export default SignUp;
