import { Contact } from "@/components/Contact";
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
import { ExternalLink } from "lucide-react";

export default function Resume() {
  return (
    <main className="container mx-auto py-8 px-4 md:px-6 lg:py-12 flex-grow">
      {/* Header Section */}
      <div className="grid gap-6 md:grid-cols-[1fr_250px] md:gap-12 lg:grid-cols-[1fr_300px]">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            맹주영
          </h1>
          <h2 className="text-xl font-medium text-muted-foreground">
            Software Engineer
          </h2>
          <p className="max-w-[600px] text-muted-foreground">
            React/TypeScript를 사용한 웹 프론트엔드 개발을 주로 하지만, 필요하면
            뭐든 합니다.
            <br />
          </p>
          <Contact />
        </div>
        <div className="flex justify-center md:justify-end">
          <Avatar className="h-40 w-40 md:h-[250px] md:w-[250px]">
            <AvatarImage src="/profile.jpg" alt="profile image" />
            <AvatarFallback>Juyeong Maing</AvatarFallback>
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
              <h3 className="font-semibold">2022년 6월 - 현재</h3>
              <p className="text-sm text-muted-foreground">
                클레브레인주식회사
              </p>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold">피아노키위즈</h3>
                <h4 className="text-base font-medium text-muted-foreground">
                  피아노 학습 및 악보 거래 플랫폼
                </h4>
              </div>
              <ul className="text-muted-foreground list-disc list-inside">
                <li>
                  악보 라이브러리 개발 (피아노키위즈 웹사이트 내 악보 상세
                  페이지 - 악보 미리보기)
                  <ul>
                    <li>
                      레거시 구조를 파악 후 신규 기능 확장을 위한 구조 개편 주도
                    </li>
                    <li>
                      구조 개선 후 재생 시작 전 타이머, 박자에 맞는 애니메이션
                      등의 기능 추가
                    </li>
                    <li>
                      초기 구조 개편 및 기능 개발 전담 (총 작업 인원: 2명)
                    </li>
                  </ul>
                </li>
                <li>
                  <ul>
                    웹 프론트엔드 개발
                    <li>
                      Next.js, TypeScript, GraphQL 기반 초기 프로젝트 셋업 및
                      런칭 전반 주도
                    </li>
                    <li>
                      안정화 이후 유지보수 체계 마련하여 다른 개발자에게
                      성공적으로 인계
                    </li>
                    <li>
                      현재도 기술적 난도가 높은 문제 해결에는 계속 관여 중 (총
                      작업 인원 2~3명)
                    </li>
                  </ul>
                </li>
                <li>
                  <ul>
                    웹 백엔드 개발
                    <li>
                      C# 기반 백엔드에서 구인 문제로 인해 TypeScript 기반으로
                      전환
                    </li>
                    <li>
                      Apollo Server, type-graphql, Express 기반 프레임워크 설계
                      및 구축
                    </li>
                    <li>
                      전환 이후 주요 백엔드 기능의 개발 및 유지보수 전반 담당
                      (전환 후 인원: 2명)
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">GraphQL</Badge>
                <Badge variant="secondary">Apollo Server</Badge>
                <Badge variant="secondary">Express</Badge>
                <Badge variant="secondary">type-graphql</Badge>
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
                interfaces. Reduced load times by 35% through code optimization.
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
                <h3 className="text-lg font-semibold">Junior Web Developer</h3>
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
  );
}
