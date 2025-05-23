import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export default function Resume() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="container mx-auto py-8 px-4 md:px-6 lg:py-12 flex-grow">
        {/* Header Section */}
        <div className="grid gap-6 md:grid-cols-[1fr_250px] md:gap-12 lg:grid-cols-[1fr_300px]">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              John Doe
            </h1>
            <h2 className="text-xl font-medium text-muted-foreground">
              Senior Software Engineer
            </h2>
            <p className="max-w-[600px] text-muted-foreground">
              Passionate software engineer with 5+ years of experience building
              scalable web applications. Specialized in React, Node.js, and
              cloud infrastructure. Committed to creating elegant solutions to
              complex problems.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="outline" size="sm" className="gap-1.5">
                <Mail className="h-4 w-4" />
                john.doe@example.com
              </Button>
              <Button variant="outline" size="sm" className="gap-1.5">
                <Phone className="h-4 w-4" />
                (123) 456-7890
              </Button>
              <Button variant="outline" size="sm" className="gap-1.5">
                <MapPin className="h-4 w-4" />
                San Francisco, CA
              </Button>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <Avatar className="h-40 w-40 md:h-[250px] md:w-[250px]">
              <AvatarImage
                src="/placeholder.svg?height=250&width=250"
                alt="John Doe"
              />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </div>

        <Separator className="my-8 md:my-12" />

        {/* Work Experience Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight">Work Experience</h2>

          <div className="space-y-8">
            {/* Experience 1 */}
            <div className="grid gap-4 md:grid-cols-[1fr_3fr]">
              <div>
                <h3 className="font-semibold">2021 - Present</h3>
                <p className="text-sm text-muted-foreground">
                  San Francisco, CA
                </p>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">
                    Senior Software Engineer
                  </h3>
                  <h4 className="text-base font-medium text-muted-foreground">
                    TechCorp Inc.
                  </h4>
                </div>
                <p className="text-muted-foreground">
                  Led the development of a microservices architecture that
                  improved system reliability by 40%. Mentored junior developers
                  and implemented CI/CD pipelines that reduced deployment time
                  by 60%.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">AWS</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Docker</Badge>
                </div>
              </div>
            </div>

            {/* Experience 2 */}
            <div className="grid gap-4 md:grid-cols-[1fr_3fr]">
              <div>
                <h3 className="font-semibold">2018 - 2021</h3>
                <p className="text-sm text-muted-foreground">New York, NY</p>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">Frontend Developer</h3>
                  <h4 className="text-base font-medium text-muted-foreground">
                    InnovateSoft
                  </h4>
                </div>
                <p className="text-muted-foreground">
                  Developed responsive web applications using React and Redux.
                  Collaborated with UX designers to implement pixel-perfect
                  interfaces. Reduced load times by 35% through code
                  optimization.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Redux</Badge>
                  <Badge variant="secondary">JavaScript</Badge>
                  <Badge variant="secondary">SCSS</Badge>
                  <Badge variant="secondary">Webpack</Badge>
                </div>
              </div>
            </div>

            {/* Experience 3 */}
            <div className="grid gap-4 md:grid-cols-[1fr_3fr]">
              <div>
                <h3 className="font-semibold">2016 - 2018</h3>
                <p className="text-sm text-muted-foreground">Boston, MA</p>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">
                    Junior Web Developer
                  </h3>
                  <h4 className="text-base font-medium text-muted-foreground">
                    WebSolutions Co.
                  </h4>
                </div>
                <p className="text-muted-foreground">
                  Built and maintained client websites using HTML, CSS, and
                  JavaScript. Implemented responsive designs and ensured
                  cross-browser compatibility. Assisted in migrating legacy
                  systems to modern frameworks.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">HTML</Badge>
                  <Badge variant="secondary">CSS</Badge>
                  <Badge variant="secondary">JavaScript</Badge>
                  <Badge variant="secondary">jQuery</Badge>
                  <Badge variant="secondary">PHP</Badge>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Separator className="my-8 md:my-12" />

        {/* Side Projects Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight">Side Projects</h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Project 1 */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Weather Dashboard</CardTitle>
                <CardDescription>
                  A real-time weather tracking application
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Built a weather dashboard using React and OpenWeather API.
                  Features include location search, 5-day forecast, and weather
                  alerts.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">API Integration</Badge>
                  <Badge variant="outline">Tailwind CSS</Badge>
                </div>
                <Button variant="outline" size="sm" className="gap-1.5" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    View Project <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Project 2 */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Task Manager</CardTitle>
                <CardDescription>
                  A productivity application for task management
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Developed a full-stack task management application with user
                  authentication, task categories, and deadline notifications.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Node.js</Badge>
                  <Badge variant="outline">Express</Badge>
                  <Badge variant="outline">MongoDB</Badge>
                </div>
                <Button variant="outline" size="sm" className="gap-1.5" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    View Project <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Project 3 */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Recipe Finder</CardTitle>
                <CardDescription>
                  A culinary discovery application
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Created a recipe finder app that allows users to search for
                  recipes based on ingredients they have. Includes filtering by
                  dietary restrictions.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Vue.js</Badge>
                  <Badge variant="outline">Firebase</Badge>
                  <Badge variant="outline">REST API</Badge>
                </div>
                <Button variant="outline" size="sm" className="gap-1.5" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    View Project <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-8 md:my-12" />

        {/* Skills Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight">
            Skills & Expertise
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            <div className="space-y-2">
              <h3 className="font-semibold">Frontend</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>React / Next.js</li>
                <li>TypeScript / JavaScript</li>
                <li>HTML / CSS / Tailwind</li>
                <li>Redux / Context API</li>
                <li>Responsive Design</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold">Backend</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>Node.js / Express</li>
                <li>Python / Django</li>
                <li>RESTful APIs</li>
                <li>GraphQL</li>
                <li>Microservices</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold">Database</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>MongoDB</li>
                <li>PostgreSQL</li>
                <li>MySQL</li>
                <li>Redis</li>
                <li>Firebase</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold">DevOps & Tools</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>Git / GitHub</li>
                <li>Docker / Kubernetes</li>
                <li>AWS / GCP</li>
                <li>CI/CD Pipelines</li>
                <li>Agile / Scrum</li>
              </ul>
            </div>
          </div>
        </section>

        <Separator className="my-8 md:my-12" />

        {/* Education Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight">Education</h2>

          <div className="grid gap-4 md:grid-cols-[1fr_3fr]">
            <div>
              <h3 className="font-semibold">2012 - 2016</h3>
            </div>
            <div>
              <h3 className="text-lg font-semibold">
                Bachelor of Science in Computer Science
              </h3>
              <p className="text-muted-foreground">
                Massachusetts Institute of Technology
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
