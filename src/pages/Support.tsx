
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Clock, MessageSquare, Paperclip } from "lucide-react";
import Navigation from "@/components/Navigation";

const Support = () => {
  const [formData, setFormData] = useState({
    subject: "",
    message: "",
    attachment: null
  });

  const [submitted, setSubmitted] = useState(false);

  const previousRequests = [
    {
      id: "1",
      subject: "Website loading slowly",
      status: "Resolved",
      date: "2024-05-28",
      response: "Issue resolved by optimizing images."
    },
    {
      id: "2",
      subject: "Need to add contact form",
      status: "In Progress",
      date: "2024-06-02",
      response: "Our team is working on this feature."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ subject: "", message: "", attachment: null });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Support Center</h1>
          <p className="text-gray-600">Get help with your website or account</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Support Form */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold mb-4">Submit a Request</h2>
            
            <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-center text-blue-700">
                <Clock className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">Typical response time: 2-4 hours</span>
              </div>
            </div>

            {submitted && (
              <div className="mb-4 p-3 bg-green-50 rounded-lg border border-green-200">
                <p className="text-green-700 text-sm">
                  Your support request has been submitted! We'll get back to you soon.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Brief description of your issue"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please describe your issue in detail..."
                  className="mt-1"
                  rows={5}
                />
              </div>

              <div>
                <Label htmlFor="attachment">Attachment (optional)</Label>
                <div className="mt-1 flex items-center gap-2">
                  <Input
                    id="attachment"
                    name="attachment"
                    type="file"
                    className="hidden"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => document.getElementById('attachment')?.click()}
                  >
                    <Paperclip className="h-4 w-4 mr-2" />
                    Choose File
                  </Button>
                  <span className="text-sm text-gray-500">Max 10MB</span>
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700"
                disabled={submitted}
              >
                Submit Request
              </Button>
            </form>
          </div>

          {/* Previous Requests */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold mb-4">Your Support History</h2>
            
            <div className="space-y-4">
              {previousRequests.map((request) => (
                <div key={request.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-gray-900">{request.subject}</h3>
                    <Badge 
                      className={
                        request.status === "Resolved" 
                          ? "bg-green-100 text-green-800" 
                          : "bg-yellow-100 text-yellow-800"
                      }
                    >
                      {request.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    Submitted on {new Date(request.date).toLocaleDateString()}
                  </p>
                  <div className="flex items-start gap-2">
                    <MessageSquare className="h-4 w-4 text-gray-400 mt-0.5" />
                    <p className="text-sm text-gray-700">{request.response}</p>
                  </div>
                </div>
              ))}
              
              {previousRequests.length === 0 && (
                <div className="text-center py-8">
                  <MessageSquare className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                  <p className="text-gray-500">No previous support requests</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
