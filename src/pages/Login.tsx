import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { Bot } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/context/auth-context";

// Extracted constants for API endpoint and localStorage key
const LOGIN_API_URL = "http://localhost:3000/auth/login";
const TOKEN_KEY = "token";

// Single Responsibility: Handles form state and submission
const useLoginForm = (
  onSuccess: (fullName: string) => void,
  onError: (message: string) => void
) => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(LOGIN_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const error = await response.json();
        onError(error.message || "Login failed");
        return;
      }

      const { accessToken, fullName } = await response.json();
      localStorage.setItem(TOKEN_KEY, accessToken);
      onSuccess(fullName);
    } catch (err: any) {
      onError(err.message || "Login failed");
    }
  };

  return { formData, handleChange, handleSubmit };
};

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { toast } = useToast();

  // Open/Closed: Toast and navigation logic are injected as callbacks
  const onSuccess = (fullName: string) => {
    login({ name: fullName, email: formData.email });
    navigate("/");
    toast({ title: "Success", description: "Logged in successfully!" });
  };

  const onError = (message: string) => {
    toast({ title: "Error", description: message, variant: "destructive" });
  };

  // Liskov: useLoginForm returns a consistent interface
  const { formData, handleChange, handleSubmit } = useLoginForm(
    onSuccess,
    onError
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-violet-50 flex items-center justify-center px-6">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 p-3">
              <Bot className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Welcome Back</h1>
          <p className="text-gray-600 mt-2">Sign in to your Promptsy account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
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
              placeholder="Enter your password"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700"
          >
            Log In
          </Button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
