import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  CheckCircle, 
  Clock, 
  AlertTriangle, 
  Users, 
  FileText, 
  Eye,
  X,
  Check,
  MessageSquare,
  Calendar
} from "lucide-react";

const FacultyPortal = () => {
  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Faculty Portal
          </h1>
          <p className="text-xl text-muted-foreground">
            Welcome, Dr. Smith! Review and approve student achievements.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Reviews</CardTitle>
              <Clock className="h-4 w-4 text-amber-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">Awaiting your approval</p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Approved Today</CardTitle>
              <CheckCircle className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground">Achievements verified</p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">My Students</CardTitle>
              <Users className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">Active mentees</p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Urgent Reviews</CardTitle>
              <AlertTriangle className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-xs text-muted-foreground">Deadline approaching</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Achievement Reviews</CardTitle>
                <CardDescription>
                  Review and approve student achievement submissions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="pending" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="pending">Pending (8)</TabsTrigger>
                    <TabsTrigger value="approved">Approved</TabsTrigger>
                    <TabsTrigger value="urgent">Urgent (2)</TabsTrigger>
                  </TabsList>

                  <TabsContent value="pending" className="space-y-4">
                    <div className="space-y-4">
                      <div className="border border-border rounded-lg p-4">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="font-medium">Research Excellence Award</h4>
                            <p className="text-sm text-muted-foreground">Submitted by Alex Johnson</p>
                            <p className="text-xs text-muted-foreground mt-1">Computer Science Department • Submitted 2 days ago</p>
                          </div>
                          <Badge className="bg-amber-100 text-amber-800 border-amber-200">
                            <Clock className="h-3 w-3 mr-1" />
                            Pending
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">
                          Student claims to have received recognition for outstanding research in artificial intelligence and machine learning applications.
                        </p>
                        <div className="flex items-center justify-between">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-2" />
                            View Details
                          </Button>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm" className="text-red-600 border-red-200 hover:bg-red-50">
                              <X className="h-4 w-4 mr-2" />
                              Reject
                            </Button>
                            <Button size="sm" className="bg-green-600 hover:bg-green-700">
                              <Check className="h-4 w-4 mr-2" />
                              Approve
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div className="border border-border rounded-lg p-4">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="font-medium">Published Research Paper</h4>
                            <p className="text-sm text-muted-foreground">Submitted by Sarah Davis</p>
                            <p className="text-xs text-muted-foreground mt-1">Engineering Department • Submitted 1 day ago</p>
                          </div>
                          <Badge className="bg-amber-100 text-amber-800 border-amber-200">
                            <Clock className="h-3 w-3 mr-1" />
                            Pending
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">
                          Paper published in the International Journal of Renewable Energy on solar panel efficiency optimization techniques.
                        </p>
                        <div className="flex items-center justify-between">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-2" />
                            View Details
                          </Button>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm" className="text-red-600 border-red-200 hover:bg-red-50">
                              <X className="h-4 w-4 mr-2" />
                              Reject
                            </Button>
                            <Button size="sm" className="bg-green-600 hover:bg-green-700">
                              <Check className="h-4 w-4 mr-2" />
                              Approve
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="approved" className="space-y-4">
                    <div className="space-y-4">
                      <div className="border border-green-200 bg-green-50 rounded-lg p-4">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="font-medium">Dean's List Achievement</h4>
                            <p className="text-sm text-muted-foreground">Michael Chen</p>
                            <p className="text-xs text-muted-foreground mt-1">Approved today</p>
                          </div>
                          <Badge className="bg-green-100 text-green-800 border-green-200">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Approved
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Verified academic excellence for Fall 2024 semester with GPA of 3.85.
                        </p>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="urgent" className="space-y-4">
                    <div className="space-y-4">
                      <div className="border border-red-200 bg-red-50 rounded-lg p-4">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="font-medium">Scholarship Application Support</h4>
                            <p className="text-sm text-muted-foreground">Emma Wilson</p>
                            <p className="text-xs text-red-600 mt-1">Deadline: Tomorrow</p>
                          </div>
                          <Badge className="bg-red-100 text-red-800 border-red-200">
                            <AlertTriangle className="h-3 w-3 mr-1" />
                            Urgent
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">
                          Student needs verification for national scholarship application. External deadline is tomorrow.
                        </p>
                        <div className="flex items-center justify-between">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-2" />
                            View Details
                          </Button>
                          <div className="flex space-x-2">
                            <Button size="sm" className="bg-red-600 hover:bg-red-700">
                              <Check className="h-4 w-4 mr-2" />
                              Approve Urgently
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-gradient-primary hover:opacity-90">
                  <FileText className="h-4 w-4 mr-2" />
                  Bulk Review
                </Button>
                <Button variant="outline" className="w-full">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Send Feedback
                </Button>
                <Button variant="outline" className="w-full">
                  <Users className="h-4 w-4 mr-2" />
                  My Students
                </Button>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm">
                  <p className="font-medium">Alex Johnson</p>
                  <p className="text-muted-foreground text-xs">Submitted new achievement • 2h ago</p>
                </div>
                <div className="text-sm">
                  <p className="font-medium">Sarah Davis</p>
                  <p className="text-muted-foreground text-xs">Updated portfolio • 4h ago</p>
                </div>
                <div className="text-sm">
                  <p className="font-medium">Michael Chen</p>
                  <p className="text-muted-foreground text-xs">Achievement approved • 1d ago</p>
                </div>
              </CardContent>
            </Card>

            {/* Calendar */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  Upcoming Deadlines
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-red-50 border border-red-200 rounded-lg">
                  <div>
                    <p className="font-medium text-sm text-red-800">Scholarship Reviews</p>
                    <p className="text-xs text-red-600">Tomorrow</p>
                  </div>
                  <Badge variant="outline" className="text-red-600 border-red-300">
                    2 pending
                  </Badge>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-amber-50 border border-amber-200 rounded-lg">
                  <div>
                    <p className="font-medium text-sm text-amber-800">Semester Reviews</p>
                    <p className="text-xs text-amber-600">Dec 18, 2024</p>
                  </div>
                  <Badge variant="outline" className="text-amber-600 border-amber-300">
                    8 pending
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyPortal;