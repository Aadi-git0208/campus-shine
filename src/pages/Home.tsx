import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Trophy, 
  Users, 
  CheckCircle, 
  Calendar, 
  BookOpen, 
  Award,
  ArrowRight,
  Bell
} from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Centralize Your Academic
            <span className="block text-accent">Achievements</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            A comprehensive platform where students showcase their accomplishments 
            and mentors verify academic excellence with seamless collaboration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/student-portal">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Student Portal
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/faculty-portal">
              <Button size="lg" variant="outline" className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Faculty Portal
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose AcademicHub?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Streamline academic achievement management with our comprehensive platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-card hover:shadow-elegant transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <Trophy className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle>Achievement Tracking</CardTitle>
                <CardDescription>
                  Comprehensive portfolio management for all academic accomplishments
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Students can upload, organize, and showcase their academic achievements, 
                  projects, and extracurricular activities in one centralized location.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-elegant transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle>Faculty Verification</CardTitle>
                <CardDescription>
                  Secure approval system for authentic achievement validation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Faculty members can review, verify, and approve student submissions 
                  ensuring the authenticity and credibility of all achievements.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-elegant transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle>Collaborative Platform</CardTitle>
                <CardDescription>
                  Seamless communication between students and mentors
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Enhanced interaction tools that foster meaningful connections 
                  between students and faculty for continuous academic growth.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming Activities */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Upcoming Student Activities
            </h2>
            <p className="text-xl text-muted-foreground">
              Stay updated with the latest academic events and opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="shadow-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    <Calendar className="h-3 w-3 mr-1" />
                    Nov 25
                  </Badge>
                  <BookOpen className="h-5 w-5 text-muted-foreground" />
                </div>
                <CardTitle className="text-lg">Research Symposium</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Annual undergraduate research presentation showcase featuring innovative projects across all disciplines.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="bg-primary text-primary-foreground">
                    <Calendar className="h-3 w-3 mr-1" />
                    Dec 10
                  </Badge>
                  <Award className="h-5 w-5 text-muted-foreground" />
                </div>
                <CardTitle className="text-lg">Excellence Awards</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Recognition ceremony for outstanding academic achievements and extracurricular contributions.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    <Calendar className="h-3 w-3 mr-1" />
                    Dec 15
                  </Badge>
                  <Users className="h-5 w-5 text-muted-foreground" />
                </div>
                <CardTitle className="text-lg">Mentorship Fair</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Connect with faculty mentors and explore research opportunities for the upcoming semester.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Announcements */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Latest Announcements
            </h2>
          </div>

          <div className="space-y-6">
            <Card className="shadow-card border-l-4 border-l-accent">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-2">
                    <Bell className="h-5 w-5 text-accent" />
                    <CardTitle className="text-lg">Platform Enhancement Update</CardTitle>
                  </div>
                  <Badge variant="outline">New</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  We've upgraded our achievement verification system to provide faster approval times 
                  and enhanced security features for all submissions.
                </p>
                <p className="text-sm text-muted-foreground">Posted on November 20, 2024</p>
              </CardContent>
            </Card>

            <Card className="shadow-card border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-2">
                    <Bell className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">Winter Break Submission Deadline</CardTitle>
                  </div>
                  <Badge variant="outline">Important</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  All achievement submissions for Fall 2024 semester must be completed by December 18th 
                  to ensure processing before winter break.
                </p>
                <p className="text-sm text-muted-foreground">Posted on November 18, 2024</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Showcase Your Achievements?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of students and faculty using AcademicHub to streamline academic excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/student-portal">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Get Started as Student
              </Button>
            </Link>
            <Link to="/faculty-portal">
              <Button size="lg" variant="outline" className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Join as Faculty
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;