
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle, XCircle, Users, MessageSquare, Eye, Settings } from "lucide-react";
import Navigation from "@/components/Navigation";

const AdminPanel = () => {
  const pendingWebsites = [
    {
      id: 1,
      userName: "John Doe",
      websiteName: "Coffee Shop Website",
      submittedAt: "2024-01-15 10:30",
      status: "Pending Review"
    },
    {
      id: 2,
      userName: "Jane Smith",
      websiteName: "Fitness Studio",
      submittedAt: "2024-01-15 09:15",
      status: "Pending Review"
    },
    {
      id: 3,
      userName: "Mike Johnson",
      websiteName: "Tech Startup",
      submittedAt: "2024-01-14 16:45",
      status: "Pending Review"
    }
  ];

  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      joinDate: "2024-01-10",
      websites: 2,
      status: "Active"
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      joinDate: "2024-01-08",
      websites: 1,
      status: "Active"
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike@example.com",
      joinDate: "2024-01-05",
      websites: 3,
      status: "Active"
    }
  ];

  const telegramLogs = [
    {
      id: 1,
      userName: "John Doe",
      message: "Started website creation process",
      timestamp: "2024-01-15 10:25"
    },
    {
      id: 2,
      userName: "Jane Smith",
      message: "Completed business info questionnaire",
      timestamp: "2024-01-15 09:10"
    },
    {
      id: 3,
      userName: "Mike Johnson",
      message: "Selected tech startup template",
      timestamp: "2024-01-14 16:40"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Panel</h1>
          <p className="text-gray-600 mt-2">Manage users, websites, and platform activity</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <Users className="h-5 w-5 mr-2" />
                Total Users
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600">127</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Pending Reviews</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-yellow-600">3</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Approved Today</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">8</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Bot Conversations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-violet-600">45</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Pending Website Reviews</h2>
            </div>
            <div className="p-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>User</TableHead>
                    <TableHead>Website</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pendingWebsites.map((website) => (
                    <TableRow key={website.id}>
                      <TableCell>{website.userName}</TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium">{website.websiteName}</div>
                          <div className="text-sm text-gray-500">{website.submittedAt}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button size="sm" className="bg-green-600 hover:bg-green-700">
                            <CheckCircle className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="destructive">
                            <XCircle className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                <MessageSquare className="h-5 w-5 mr-2" />
                Telegram Bot Activity
              </h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {telegramLogs.map((log) => (
                  <div key={log.id} className="border-l-4 border-blue-500 pl-4">
                    <div className="font-medium text-gray-900">{log.userName}</div>
                    <div className="text-gray-600">{log.message}</div>
                    <div className="text-sm text-gray-500">{log.timestamp}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-sm border">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">User Management</h2>
          </div>
          <div className="p-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Join Date</TableHead>
                  <TableHead>Websites</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.joinDate}</TableCell>
                    <TableCell>{user.websites}</TableCell>
                    <TableCell>
                      <Badge className="bg-green-100 text-green-800">{user.status}</Badge>
                    </TableCell>
                    <TableCell>
                      <Button size="sm" variant="outline">
                        <Settings className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
