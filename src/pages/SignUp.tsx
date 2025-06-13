import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { Bot } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/context/auth-context";

const SIGNUP_API_URL = "http://localhost:3000/auth/register";
const TOKEN_KEY = "token";

// Handles form state and submission
const useSignUpForm = (
  onSuccess: (fullName: string, email: string, accessToken: string) => void,
  onError: (message: string) => void
) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      onError("Passwords do not match");
      return;
    }
    try {
      const response = await fetch(SIGNUP_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        const error = await response.json();
        onError(error.message || "Sign up failed");
        return;
      }
      const { accessToken, fullName } = await response.json();
      onSuccess(fullName, formData.email, accessToken);
    } catch (err: any) {
      onError(err.message || "Network error. Please try again.");
    }
  };

  return { formData, handleChange, handleSubmit };
};

const SignUp = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const onSuccess = (fullName: string, email: string, accessToken: string) => {
    localStorage.setItem(TOKEN_KEY, accessToken);
    login({ name: fullName, email });
    navigate("/");
    toast({ title: "Success", description: "Account created successfully!" });
  };

  const onError = (message: string) => {
    toast({ title: "Error", description: message, variant: "destructive" });
  };

  const { formData, handleChange, handleSubmit } = useSignUpForm(
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
          <h1 className="text-2xl font-bold text-gray-900">
            Create Your Account
          </h1>
          <p className="text-gray-600 mt-2">
            Start building websites with AI in minutes
          </p>
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
          <Link
            to="/login"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
